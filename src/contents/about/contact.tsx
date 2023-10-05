import { FacebookOutlined, InstagramOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { ReactNode } from 'react'

export interface IContact {
  title: string
  link: string
  icon: ReactNode
}

export const contacts: IContact[] = [
  {
    title: 'สโมสรนักศึกษาคณะวิศวกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี',
    link: 'https://www.facebook.com/SAMOVIDVA',
    icon: <FacebookOutlined />,
  },
  {
    title: '@samovidva_bangmod',
    link: 'https://www.instagram.com/samovidva_bangmod/',
    icon: <InstagramOutlined />,
  },
  {
    title: '0 2470 9017',
    link: 'tel:+66024709017',
    icon: <PhoneOutlined />,
  },
  {
    title: 'stdunion.eng@kmutt.ac.th',
    link: 'mailto:stdunion.eng@kmutt.ac.th',
    icon: <MailOutlined />,
  },
]
