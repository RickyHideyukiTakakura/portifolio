import Card, { CardHeader, CardBody } from '../Card'
import CardList from '../CardList'
import ContactInfoCard from '../ContactInfoCard'
import ProfileCard from '../ProfileCard'
import { Tech } from '../Tech'
import { educations, experiences } from './data'
import * as S from './styles'

export function Aside() {
  return (
    <S.Container>
      <ProfileCard
        image="https://github.com/rickyhideyukitakakura.png"
        name="Rikao"
        description="FrontEnd em Desenvolvimento"
      />

      <ContactInfoCard />

      <Card>
        <CardHeader>Tecnologias</CardHeader>
        <CardBody>
          <Tech />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Experiências</CardHeader>
        <CardBody>
          <CardList items={experiences} />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Educação</CardHeader>
        <CardBody>
          <CardList items={educations} />
        </CardBody>
      </Card>
    </S.Container>
  )
}
