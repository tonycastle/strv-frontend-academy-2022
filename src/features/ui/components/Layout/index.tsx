import type { FC, ReactNode } from 'react'

import { Header } from '../Header'

type props = { children?: NonNullable<ReactNode> }

export const Layout: FC<props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)
