import styled from 'styled-components'
import { css } from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { typography } from '~/features/ui/theme/typography'

import { ViewType } from './types'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  ${mq.medium} {
    padding: 0;
  }
`
export const List = styled.ul<{ view: ViewType }>`
  ${typography.paragraph.small}
  list-style: none;
  display: grid;
  gap: 1.5rem;
  padding: 3rem 0 8rem;
  color: ${colors.text.dimmed};

  ${(props) =>
    props.view === ViewType.GRID &&
    css`
      grid-template-columns: repeat(auto-fit, mimax(30rem, 1fr));

      article {
        display: grid;
        grid-template-columns: 3fr auto;
        align-items: center;
        > *:not(:nth-last-child(3) ~ *) {
          grid-column: 1 / 3;
        }
      }
    `}
`
