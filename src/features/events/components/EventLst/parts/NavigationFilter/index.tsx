import type { FC } from 'react'

import { List, ListItem, MobileToggleLabel } from './styled'

enum filterTypes {
  ALL = 'ALL',
  PAST = 'PAST',
  FUTURE = 'FUTURE',
}

type props = {
  onChange: (filter: filterTypes) => void
}

export const NavigationFilter: FC<props> = ({ onChange }) => (
  <>
    <List>
      <ListItem isActive>
        <button type="button" onClick={() => onChange(filterTypes.ALL)}>
          All Events
        </button>
      </ListItem>
      <ListItem>
        <button type="button" onClick={() => onChange(filterTypes.PAST)}>
          Past Events
        </button>
      </ListItem>
      <ListItem>
        <button type="button" onClick={() => onChange(filterTypes.FUTURE)}>
          Future Events
        </button>
      </ListItem>
    </List>

    <MobileToggleLabel>
      <span>Show</span>
      <select>
        <option value={filterTypes.ALL}>All Events</option>
        <option value={filterTypes.FUTURE}>Future Events</option>
        <option value={filterTypes.PAST}>Past Events</option>
      </select>
    </MobileToggleLabel>
  </>
)
