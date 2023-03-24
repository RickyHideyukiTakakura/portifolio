import { Info } from '../Info'
import Card, { CardBody } from '../Card'
import { ListInfoStyle } from './styles'
import { contacts } from './data'

function ContactInfoCard() {
  return (
    <Card>
      <CardBody>
        <ListInfoStyle>
          {contacts.map(contact => (
            <Info key={contact.link} {...contact} />
          ))}
        </ListInfoStyle>
      </CardBody>
    </Card>
  )
}

export default ContactInfoCard
