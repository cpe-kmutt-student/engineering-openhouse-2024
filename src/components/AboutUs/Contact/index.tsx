import { Typography } from 'antd'
import { IContact, contacts } from 'src/contents/about/contact'
import styles from './index.module.scss'

const AboutContact: React.FC = (): JSX.Element => {
  const { Text, Link } = Typography

  const renderContactInfo = contacts.map((contact: IContact, i: number) => {
    return (
      <Link href={contact.link} key={i} target="_blank">
        <div className={styles.contactSocial}>
          <div className={styles.icon}>{contact.icon}</div>
          <Text className={styles.text}>{contact.title}</Text>
        </div>
      </Link>
    )
  })

  return <div className={styles.contact}>{renderContactInfo}</div>
}

export default AboutContact
