import { Space, Typography } from 'antd'
import { IContact, IContactSocial } from 'src/contents/department/departmentInfo'

interface Props {
  contact: IContact
}

const Contact: React.FC<Props> = ({ contact }: Props): JSX.Element => {
  const { Title, Text, Link } = Typography

  const renderSocialContact = contact.social.map((social: IContactSocial, i: number) => (
    <Link key={i} href={social.link} style={{ color: '#FFFFFF' }}>
      {social.name}
    </Link>
  ))

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%', marginTop: '20px' }} align="center">
        <Title level={3}>Contact</Title>
        {contact.name && (
          <Text strong style={{ color: '#FFFFFF' }}>
            {contact.name}
          </Text>
        )}
        {contact.tel && (
          <Text strong style={{ color: '#FFFFFF' }}>
            โทร {contact.tel}
          </Text>
        )}
        <Space direction="horizontal">{renderSocialContact}</Space>
      </Space>
    </div>
  )
}

export default Contact
