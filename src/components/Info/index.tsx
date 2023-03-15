import { InfoStyle } from './styles'

interface IInfo {
  icon: string
  title: string
  link: string
}

export function Info(props: IInfo) {
  return (
    <InfoStyle>
      <a target="_blank" href={props.link}>
        <img src={props.icon} alt="" />
        {props.title}
      </a>
    </InfoStyle>
  )
}
