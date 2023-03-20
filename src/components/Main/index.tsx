import { useEffect, useState } from 'react'
import { PostCard } from '../PostCard'
import { Repository } from '../Repository'
import { Card, MainStyles, MultipleCard } from './styles'

interface IRepositories {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks: number
  language: string
}

export function Main() {
  const [reposistories, setRepositories] = useState<IRepositories[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/RickyHideyukiTakakura/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

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
        {reposistories.map(repository => (
          <Repository
            key={repository.id}
            name={repository.name}
            description={repository.description}
            html_url={repository.html_url}
            stars={repository.stargazers_count}
            forks={repository.forks}
            language={repository.language}
          />
        ))}
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
