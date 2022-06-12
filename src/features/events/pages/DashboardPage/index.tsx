import type { NextPage } from 'next'

import { Container } from '~/features/ui/components/Container'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { H1, H2 } from './styled'

import { EventList } from '../../components/EventLst'
import { CreateEventButton } from '../../components/EventLst/parts/CreateEventButton'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <Container>
      <H1>Dashboard</H1>
      <section>
        <H2>Event List</H2>
        <EventList />
        <CreateEventButton />
      </section>
    </Container>
  </LayoutInternal>
)
