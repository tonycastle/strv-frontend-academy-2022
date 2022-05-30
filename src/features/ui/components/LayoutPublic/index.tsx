import type { FC, ReactNode } from 'react'

import { Header } from '~/features/ui/components/Header'

type props = {
  children?: ReactNode
}

export const LayoutPublic: FC<props> = ({ children }) => (
  <>
    <Header />
    <aside />
    <main>{children}</main>
  </>
)
