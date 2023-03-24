import { PostCard } from '../PostCard'
import { MainStyles } from './styles'
import Card, { CardBody } from '../Card'

import * as S from './styles'
import ProjectList from '../ProjectsList'

import useRepositories from '../../hooks/useRepositories'

export function Main() {
  const { repositories } = useRepositories()

  return (
    <MainStyles>
      <ProjectList repositories={repositories} />

      <Card>
        <S.CardHeader>Recents Posts</S.CardHeader>
      </Card>

      <Card>
        <CardBody>
          <PostCard />
        </CardBody>
      </Card>
    </MainStyles>
  )
}
