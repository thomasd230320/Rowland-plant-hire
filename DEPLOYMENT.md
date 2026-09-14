# Deploying rowlandplant.co.uk

Everything here runs on free plans. The only unavoidable cost is the domain
renewal (roughly £12/year).

| Piece | Service | Plan | Cost |
| --- | --- | --- | --- |
| Website hosting | Netlify | Free | £0 |
| Editing panel | Keystatic | Open source | £0 |
| Customer accounts / quotes | Supabase | Free | £0 |
| Domain | existing registrar | — | ~£12/yr |

## Why Netlify and not Vercel

Vercel is the obvious host for a Next.js site, but its free Hobby plan
forbids commercial use, and a hire company's lead-generating website is
squarely commercial. Netlify's free plan permits commercial use.

Every public page is prerendered at build time and served as a static file
from Netlify's CDN, so normal visitor traffic costs nothing. The only things
that run server-side are `/keystatic` and `/api/keystatic`, and only while
someone is actually editing.

## First deploy

1. Sign in to <https://netlify.com> with the GitHub account that owns this
   repository.
2. **Add new site → Import an existing project**, pick this repository.
3. Netlify reads `netlify.toml`, so the build command and publish directory
   are already correct. Just click deploy.
4. The site goes live on a temporary address like
   `random-name-123.netlify.app`. Check it over before touching the domain.

## Environment variables

**Site settings → Environment variables.** The site builds without these, but
customer accounts and the editing panel stay switched off until they are set.

| Variable | Where it comes from |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | same page |
| `KEYSTATIC_GITHUB_CLIENT_ID` | the GitHub App, created below |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | same |
| `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | same |
| `KEYSTATIC_SECRET` | `openssl rand -hex 32` |

## Turning on the editing panel

1. Deploy first — the setup flow needs a live URL.
2. Visit `https://<your-site>/keystatic` and follow the prompts. Keystatic
   walks you through creating a GitHub App and shows you the three values to
   copy.
3. Put those three values plus `KEYSTATIC_SECRET` into Netlify's environment
   variables, then **Deploys → Trigger deploy → Clear cache and deploy site**.
   Environment variables are only read at build time, so a plain redeploy is
   not enough.
4. Add Rowland as a collaborator on the GitHub repository. He needs a free
   GitHub account; that account is how he signs in to the panel.

Once that is done, Rowland edits at `/keystatic`, his changes are committed to
this repository, and Netlify rebuilds automatically — live in about a minute.

## Pointing the domain at the new site

The existing site is live on `www.rowlandplant.co.uk`, so treat this as a
cutover, not a fresh launch.

1. **Check what is currently there first.** Save a list of every page on the
   old site. Anything that exists today and has no equivalent here needs a
   redirect adding to `netlify.toml`, or its Google ranking is lost.
2. In Netlify: **Domain management → Add a domain** → `rowlandplant.co.uk`.
3. Follow Netlify's DNS instructions at the current registrar.
4. Set a primary domain. The code uses the non-www form
   (`https://rowlandplant.co.uk`) in its canonical tags, sitemap and business
   schema, so make **`rowlandplant.co.uk` primary** and let Netlify redirect
   `www` to it. Mixing the two splits your Google ranking across both.
5. HTTPS is automatic and free.
6. After cutover, submit `https://rowlandplant.co.uk/sitemap.xml` in Google
   Search Console.

### Known gap

The old site has `/tool-hire/rugdoctor`; this one does not. `netlify.toml`
currently sends that URL to the tool hire index so it does not 404, but it
should become a real page — it needs the Rug Doctor hire rates, which are not
in this repository yet.

## How content reaches the site

```
Rowland edits at /keystatic
  -> saved as YAML in /content
  -> committed to GitHub
  -> Netlify rebuilds
  -> scripts/build-content.mjs compiles /content into src/data/toolHireData.js
  -> Next.js prerenders every page
```

`src/data/toolHireData.js` is generated — never edit it by hand. It exists as
a plain JavaScript file because the search overlay is a browser component and
cannot read files off the disk.

## Working on it locally

```bash
npm install
npm run dev     # regenerates content, then starts on http://localhost:3000
```

With no `KEYSTATIC_GITHUB_CLIENT_ID` set, `/keystatic` edits the files in
`/content` directly on your machine, so you can try changes without touching
the live site.
