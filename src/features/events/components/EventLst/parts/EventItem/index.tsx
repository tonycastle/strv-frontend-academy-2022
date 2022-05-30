import type { FC } from 'react'

export const EventItem: FC = () => (
  <li>
    <time>00:00 May 29</time>
    <h2>Event Title</h2>
    <p>Event Ownerer</p>
    <p>Event Description</p>
    <button type="button">Edit</button>
  </li>
)
