import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { LogoIcon } from './parts/LogoIcon'

type Props = {
  className?: string
}

export const Logo: FC<Props> = ({ className = '' }) => (
  <Link href={Routes.DASHBOARD}>
    <a className={className} aria-label="Go to dashboard">
      <LogoIcon />
    </a>
  </Link>
)
