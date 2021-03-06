import type { FC } from 'react'

import { ListItem } from './styled'

import { ViewType } from '../../types'

type props = {
  activeView: ViewType
  onChange: (viewTyoe: ViewType) => void
}

export const NavigationView: FC<props> = ({ activeView, onChange }) => (
  <ul>
    <ListItem isActive={activeView === ViewType.GRID}>
      <button
        type="button"
        aria-label="Show as grid"
        onClick={() => onChange(ViewType.GRID)}
      >
        #
      </button>
    </ListItem>
    <ListItem isActive={activeView === ViewType.LIST}>
      <button
        type="button"
        aria-label="Show as list"
        onClick={() => onChange(ViewType.LIST)}
      >
        =
      </button>
    </ListItem>
  </ul>
)
