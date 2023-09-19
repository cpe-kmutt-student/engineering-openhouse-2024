import { Space, Typography } from 'antd'
import { IContact, IContactSocial } from '../../../contents/departmentInfo'

interface Props {
  contact: IContact
}

const Contact: React.FC<Props> = ({ contact }: Props): JSX.Element => {
  const { Title, Text, Link } = Typography

  const renderSocialContact = contact.social.map((social: IContactSocial, i: number) => (
    <Link key={i} href={social.link}>
      {social.name}
    </Link>
  ))

  return (
    <div>
      <Space direction="vertical">
        <Title level={3}>Contact</Title>
        <Text strong>{contact.name}</Text>
        <Text strong>{contact.tel}</Text>
        <Space direction="horizontal">{renderSocialContact}</Space>
      </Space>
    </div>
  )
}

export default Contact
