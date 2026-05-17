export default function AvailabilityBadge({ availability }) {
  if (!availability) return null
  const { status, units, dueBack } = availability

  if (status === 'available') {
    return (
      <span className="avail-badge avail-badge--available">
        <span className="avail-badge__dot" />
        {units > 1 ? `${units} Available` : 'Available'}
      </span>
    )
  }
  if (status === 'limited') {
    return (
      <span className="avail-badge avail-badge--limited">
        <span className="avail-badge__dot" />
        {units === 1 ? '1 Left' : `${units} Left`}
      </span>
    )
  }
  if (status === 'out') {
    return (
      <span className="avail-badge avail-badge--out">
        <span className="avail-badge__dot" />
        {dueBack || 'Out on Hire'}
      </span>
    )
  }
  return null
}
