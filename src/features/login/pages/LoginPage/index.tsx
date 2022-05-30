import type { NextPage } from 'next'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutPublic } from '~/features/ui/components/LayoutPublic'

export const LoginPage: NextPage = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <LayoutPublic>
      <h1>Sign in to Eventio</h1>
      <p>Enter your details below:</p>
      <form onSubmit={onSubmit}>
        <Input type="email" name="email" label="email" />
        <Input type="password" name="password" label="password" />
        <button type="submit">Log in</button>
      </form>
    </LayoutPublic>
  )
}
