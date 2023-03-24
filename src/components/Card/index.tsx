import { ReactNode } from 'react'
import * as S from './styles'

interface ICard {
  children: ReactNode
}

function Card(props: ICard) {
  return <S.Card>{props.children}</S.Card>
}

export const CardHeader = S.CardHeader
export const CardBody = S.CardBody
export default Card
