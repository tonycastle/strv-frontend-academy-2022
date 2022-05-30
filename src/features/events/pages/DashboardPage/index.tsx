import type { NextPage } from 'next'

import { Layout } from '~/features/ui/components/Layout'

import { EventList } from '../../components/EventLst'
import { CreateEventButton } from '../../components/EventLst/parts/CreateEventButton'

export const DashboardPage: NextPage = () => (
  <Layout>
    <h1>This is the Dashboard Page</h1>
    <section>
      <h2>Event LIst</h2>
      <EventList />
    </section>
    <CreateEventButton />
  </Layout>
)
