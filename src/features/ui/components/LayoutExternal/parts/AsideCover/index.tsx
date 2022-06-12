import type { FC } from 'react'

import { Aside, FigCaption, Figure, Hr, Quote } from './styled'

export const AsideCover: FC = () => (
  <Aside>
    <Figure>
      <Quote>“Great, kid. Don’t get cocky.”</Quote>
      <Hr />
      <FigCaption>Han Solo</FigCaption>
    </Figure>
  </Aside>
)
