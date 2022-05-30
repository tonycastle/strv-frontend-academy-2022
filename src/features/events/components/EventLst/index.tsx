import type { FC } from 'react'

import { EventItem } from './parts/EventItem'
import { NavigationFilter } from './parts/NavigationFilter'

import { NavigationView } from '../NavigationView'

export const EventList: FC = () => (
  <>
    <nav>
      <NavigationFilter onChange={(filter) => alert(filter)} />
      <NavigationView onChange={(filter) => alert(filter)} />
    </nav>
    <ul>
      <EventItem />
      <EventItem />
    </ul>
  </>
)
