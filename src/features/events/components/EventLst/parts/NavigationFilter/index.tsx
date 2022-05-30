import type { FC } from 'react'

type filterTypes = 'ALL' | 'PAST' | 'FUTURE'

type props = {
  onChange: (filter: filterTypes) => void
}

export const NavigationFilter: FC<props> = ({ onChange }) => (
  <ul>
    <li>
      <button type="button" onClick={() => onChange('ALL')}>
        All Events
      </button>
    </li>
    <li>
      <button type="button" onClick={() => onChange('PAST')}>
        Past Events
      </button>
    </li>
    <li>
      <button type="button" onClick={() => onChange('FUTURE')}>
        Future Events
      </button>
    </li>
  </ul>
)
