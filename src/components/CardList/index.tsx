import { CardListItem } from '../Experience';

interface ICardListItem {
  company: string;
  project: string;
  date: string;
}

interface ICardList {
  items: ICardListItem[];
}

function CardList(props: ICardList) {
  return (
    <ul>
      {props.items.map((item) => (
        <CardListItem key={item.project} {...item} />
      ))}
    </ul>
  );
}

export default CardList;
