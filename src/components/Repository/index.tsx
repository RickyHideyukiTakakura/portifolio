import folderIcon from '../../assets/folder.svg'
import starIcon from '../../assets/star.svg'
import branchIcon from '../../assets/git-branch.svg'
import ellipseIcon from '../../assets/ellipse.svg'
import { RepositoryStyles } from './styles'

interface IRepository {
  name: string
  description: string
  html_url: string
  stars: number
  forks: number
  language: string
}

export function Repository(props: IRepository) {
  return (
    <RepositoryStyles target="_blank" href={props.html_url}>
      <div>
        <img src={folderIcon} alt="" />
        <span>{props.name}</span>
      </div>
      <p>{props.description}</p>
      <div>
        <div>
          <img src={starIcon} alt="" />
          <span>{props.stars}</span>
          <img src={branchIcon} alt="" />
          <span>{props.forks}</span>
        </div>
        <div>
          <img src={ellipseIcon} alt="" />
          <span>{props.language}</span>
        </div>
      </div>
    </RepositoryStyles>
  )
}
