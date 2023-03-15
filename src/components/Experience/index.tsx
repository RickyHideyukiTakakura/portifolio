import { ExperienceStyle } from './styles'

interface IExperience {
  company: string
  project: string
  date: string
}

export function Experience(props: IExperience) {
  return (
    <ExperienceStyle>
      <a href="#">
        <p>{props.company}</p>
        <p>{props.project}</p>
        <p>{props.date}</p>
      </a>
    </ExperienceStyle>
  )
}
