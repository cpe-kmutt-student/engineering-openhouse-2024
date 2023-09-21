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
    title: '000-0000000',
    link: 'tel:+660987654321',
    icon: <PhoneOutlined />,
  },
  {
    title: 'Lorem@gmail.com',
    link: 'mailto:lorem@gmail.com',
    icon: <MailOutlined />,
  },
]
