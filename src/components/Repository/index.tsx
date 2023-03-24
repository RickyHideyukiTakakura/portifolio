import folderIcon from '../../assets/folder.svg'
import starIcon from '../../assets/star.svg'
import branchIcon from '../../assets/git-branch.svg'
import ellipseIcon from '../../assets/ellipse.svg'
import Card, { CardBody } from '../Card'
import * as S from './styles'
import IRepository from '../../interfaces/Repository'

export function Repository(props: IRepository) {
  return (
    <Card>
      <CardBody>
        <S.Repository target="_blank" href={props.html_url}>
          <div>
            <img src={folderIcon} alt="" />
            <span>{props.name}</span>
          </div>
          <p>{props.description}</p>
          <div>
            <div>
              <img src={starIcon} alt="" />
              <span>{props.stargazers_count}</span>
              <img src={branchIcon} alt="" />
              <span>{props.forks}</span>
            </div>
            <div>
              <img src={ellipseIcon} alt="" />
              <span>{props.language}</span>
            </div>
          </div>
        </S.Repository>
      </CardBody>
    </Card>
  )
}
