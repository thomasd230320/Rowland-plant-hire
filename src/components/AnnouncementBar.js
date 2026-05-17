function Item() {
  return (
    <span className="announcement-bar__item">
      Serving Witney, West Oxfordshire &amp; The Cotswolds &nbsp;—&nbsp; Call&nbsp;
      <a href="tel:+441865922611" className="announcement-bar__link">01865 922611</a>
    </span>
  )
}

function Sep() {
  return <span className="announcement-bar__sep" aria-hidden="true">◆</span>
}

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar" aria-label="Site announcement">
      <div className="announcement-bar__track">
        <Item /><Sep />
        <Item /><Sep />
        <Item /><Sep />
        <Item /><Sep />
      </div>
    </div>
  )
}
