import type { NextPage } from 'next'
import Link from 'next/link'
import type { FormEvent } from 'react'

import { Routes } from '~/features/core/constants/routes'
import { Input } from '~/features/ui/components/Input'
import { Layout } from '~/features/ui/components/Layout'

export const CreateEventPage: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //do something
  }

  return (
    <Layout>
      <Link href={Routes.DASHBOARD}>X Close</Link>
      <form onSubmit={(event) => onSubmit(event)}>
        <h1>Create New Event</h1>
        <p>Enter details below</p>
        <Input type="text" name="title" label="Title" />
        <Input type="text" name="description" label="Description" />
        <Input type="date" name="Date" label="Date" />
        <Input type="time" name="time" label="Time" />
        <Input type="number" name="cqpacity" label="Capacity" />
        <button type="submit">Create New Event</button>
      </form>
    </Layout>
  )
}
