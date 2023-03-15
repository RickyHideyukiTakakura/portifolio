import { PostCard } from '../PostCard'
import { Repository } from '../Repository'
import { Card, MainStyles, MultipleCard } from './styles'

export function Main() {
  return (
    <MainStyles>
      <Card>
        <div className="my-projects">
          <strong>My Projects</strong>
          <a target="_blank" href="https://github.com/rickyhideyukitakakura">
            Veja todos
          </a>
        </div>
      </Card>
      <MultipleCard>
        <Card>
          <Repository
            name="NLW OriginSix"
            description="Projeto desenvolvido na semana nlw da rocketseat"
            star={100}
            branch={100}
            language="Javascript"
          />
        </Card>
        <Card>
          <Repository
            name="ui-twitter"
            description="Projeto desenvolvido na masterclass reactjs da rocketseat"
            star={100}
            branch={100}
            language="Typescript"
          />
        </Card>
        <Card>
          <Repository
            name="Ecommerce (Client)"
            description="Projeto desenvolvido na disciplina de Desenvolvimento Web (Cliente) na UTFPR"
            star={100}
            branch={100}
            language="Javascript"
          />
        </Card>
        <Card>
          <Repository
            name="Rocketflix"
            description="Projeto desenvolvido no desafio discover rocketseat"
            star={100}
            branch={100}
            language="Javascript"
          />
        </Card>
      </MultipleCard>
      <Card>
        <strong>Recents Posts</strong>
      </Card>
      <Card>
        <PostCard />
      </Card>
    </MainStyles>
  )
}
