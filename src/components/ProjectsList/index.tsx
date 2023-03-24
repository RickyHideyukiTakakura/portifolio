import Card from '../Card'
import { Repository } from '../Repository'
import * as S from './styles'
import IRepository from '../../interfaces/Repository'

interface IProjectList {
  repositories: IRepository[]
}

function ProjectList(props: IProjectList) {
  return (
    <>
      <Card>
        <S.CardHeader>
          <span>My Projects</span>
          <S.SeeMoreLink
            target="_blank"
            href="https://github.com/rickyhideyukitakakura"
          >
            Veja todos
          </S.SeeMoreLink>
        </S.CardHeader>
      </Card>

      <S.RepositoryList>
        {props.repositories.map(repository => (
          <Repository key={repository.id} {...repository} />
        ))}
      </S.RepositoryList>
    </>
  )
}

export default ProjectList
