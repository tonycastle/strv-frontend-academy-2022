import type { FC, ReactNode } from 'react'

import { Header } from '~/features/ui/components/Header'

import { AsideCover } from './parts/AsideCover'

type props = {
  children?: ReactNode
}

export const LayoutPublic: FC<props> = ({ children }) => (
  <>
    <Header />
    <AsideCover />
    <main>{children}</main>
  </>
)
