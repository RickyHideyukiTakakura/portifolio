import * as S from './styles'

interface ICardListItem {
  company: string
  project: string
  date: string
}

export function CardListItem(props: ICardListItem) {
  return (
    <S.CardListItem>
      <a href="#">
        <p>{props.company}</p>
        <p>{props.project}</p>
        <p>{props.date}</p>
      </a>
    </S.CardListItem>
  )
}
