import folderIcon from '../../assets/folder.svg'
import starIcon from '../../assets/star.svg'
import branchIcon from '../../assets/git-branch.svg'
import ellipseIcon from '../../assets/ellipse.svg'
import { RepositoryStyles } from './styles'

interface IRepository {
  name: string
  description: string
  star: number
  branch: number
  language: string
}

export function Repository(props: IRepository) {
  return (
    <RepositoryStyles>
      <div>
        <img src={folderIcon} alt="" />
        <span>{props.name}</span>
      </div>
      <p>{props.description}</p>
      <div>
        <div>
          <img src={starIcon} alt="" />
          <span>{props.star}</span>
          <img src={branchIcon} alt="" />
          <span>{props.branch}</span>
        </div>
        <div>
          <img src={ellipseIcon} alt="" />
          <span>{props.language}</span>
        </div>
      </div>
    </RepositoryStyles>
  )
}
