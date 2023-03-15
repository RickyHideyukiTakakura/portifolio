import { Content, PostStyles } from './styles'

export function PostCard() {
  return (
    <PostStyles>
      <img src="https://github.com/rickyhideyukitakakura.png" alt="" />
      <Content>
        <div>
          <strong>Meu portifólio</strong>
          <p>15 de Março de 2023</p>
        </div>
        <div>
          <span>Criação do meu portifólio</span>
          <ul>
            <li>#reactjs</li>
            <li>#typescript</li>
            <li>#styled componets</li>
          </ul>
        </div>
      </Content>
    </PostStyles>
  )
}
