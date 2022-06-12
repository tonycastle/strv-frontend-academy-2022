import type { FC, ReactNode } from 'react'

import { Header } from '~/features/ui/components/Header'

import { AsideCover } from './parts/AsideCover'
import { Layout, Main } from './styled'

type props = {
  children?: ReactNode
}

export const LayoutExternal: FC<props> = ({ children }) => (
  <Layout>
    <Header isExternal />
    <AsideCover />
    <Main>{children}</Main>
  </Layout>
)
