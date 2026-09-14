import { makeRouteHandler } from '@keystatic/next/route-handler'
import config from '../../../../../keystatic.config'

// Handles the GitHub sign-in handshake and saves Rowland's edits back to the repo.
export const { POST, GET } = makeRouteHandler({ config })

// Editing is always live — never served from a cache.
export const dynamic = 'force-dynamic'
