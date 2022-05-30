import type { FC } from 'react'

type viewFilter = 'GRID' | 'LIST'

type props = {
  onChange: (filter: viewFilter) => void
}

export const NavigationView: FC<props> = ({ onChange }) => (
  <ul>
    <li>
      <button
        type="button"
        aria-label="Show as grid"
        onClick={() => onChange('GRID')}
      >
        #
      </button>
    </li>
    <li>
      <button
        type="button"
        aria-label="Show as list"
        onClick={() => onChange('LIST')}
      >
        =
      </button>
    </li>
  </ul>
)
