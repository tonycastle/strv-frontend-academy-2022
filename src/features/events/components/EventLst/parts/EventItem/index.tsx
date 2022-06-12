import type { FC } from 'react'

import { Article, Count, Description, Name, Title, EditButton } from './styled'

type props = {
  isRow: boolean
}

export const EventItem: FC<props> = ({ isRow }) => (
  <Article isRow={isRow}>
    <time>00:00 May 29</time>
    <Title>Event Title</Title>
    <Name>Event Owner</Name>
    <Description>Event Description</Description>
    <Count>
      9 <span>of</span>20
    </Count>
    <EditButton>Edit</EditButton>
  </Article>
)
