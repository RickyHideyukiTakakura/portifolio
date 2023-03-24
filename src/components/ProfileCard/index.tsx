import Card, { CardBody } from '../Card'
import * as S from './styles'

interface IProfileCard {
  image: string
  name: string
  description: string
}

function ProfileCard(props: IProfileCard) {
  return (
    <Card>
      <CardBody>
        <S.Profile>
          <img src={props.image} alt="" />
          <h4>{props.name}</h4>
          <p>{props.description}</p>
        </S.Profile>
      </CardBody>
    </Card>
  )
}

export default ProfileCard
