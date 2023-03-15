import { Experience } from '../Experience'
import { ListInfo } from '../ListInfo'
import { Tech } from '../Tech'
import { Card, Container, ExperienceListStyle, Profile } from './styles'

export function Aside() {
  return (
    <Container>
      <Card>
        <Profile>
          <img src="https://github.com/rickyhideyukitakakura.png" alt="" />
          <h4>Ricky</h4>
          <p>Frontend Developer</p>
        </Profile>
      </Card>
      <Card>
        <ListInfo />
      </Card>
      <Card>
        <strong>Tecnologias</strong>
        <Tech />
      </Card>
      <Card>
        <strong>Experiências</strong>
        <ExperienceListStyle>
          <Experience
            company="UTFPR"
            project="Blockchain Simulator"
            date="2021"
          />
          <Experience
            company="UTFPR"
            project="Ecommerce (Client)"
            date="2021"
          />
          <Experience
            company="Rocketseat"
            project="NLW OriginSix"
            date="2020"
          />
        </ExperienceListStyle>
      </Card>
      <Card>
        <strong>Educação</strong>
        <ExperienceListStyle>
          <Experience
            company="UTFPR"
            project="Bacharelado em Ciência da Computação"
            date="2018 - 2024"
          />
          <Experience
            company="UFRN"
            project="Bacharelado em Ciência e Tecnologia"
            date="2018"
          />
          <Experience
            company="OneBit Code"
            project="Curso FullStack"
            date="2020"
          />
        </ExperienceListStyle>
      </Card>
    </Container>
  )
}
