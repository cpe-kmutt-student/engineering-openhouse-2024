import CPE from '../images/CPE.png'
import { DepartmentEnum } from './enum'

export interface IDepartmentInfo {
  name: {
    en: string
    th: string
    initial: DepartmentEnum
  }
  image: string
  description: string
  location: string
  gmap: string
  activities: IActivity[]
  workshopSchedule: IWorkshopSchedule[]
  contact: IContact
}

export interface IContact {
  name: string
  tel: string
  social: IContactSocial[]
}

export interface IContactSocial {
  name: string
  link: string
}

export interface IActivity {
  title: string
  description: string
}

export interface IWorkshopSchedule {
  date: Date
  time: string
  amount: number
}

export const departmentInfo: IDepartmentInfo[] = [
  {
    name: {
      en: 'Computer Engineering',
      th: 'ภาควิชาวิศวกรรมคอมพิวเตอร์',
      initial: DepartmentEnum.CPE,
    },
    image: CPE,
    description:
      'Lorem ipsum dolor sit amet consectetur. Pretium senectus viverra amet non eu diam etiam vel nisl. Sed imperdiet purus commodo morbi. Sit odio integer faucibus metus id nibh amet. Porttitor et ipsum amet tristique turpis nam egestas erat vel. Sem iaculis mattis ullamcorper diam egestas iaculis metus lacus aliquam. Sit purus netus iaculis viverra venenatis est eu sed. Magna sed id aenean vel adipiscing eleifend amet at amet. Elementum sed vitae molestie ',
    location: 'ชั้น 10 อาคารวิศววัฒนะ (ตึกแดง)',
    gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31016.214239316923!2d100.4958685!3d13.6561349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2sKing%20Mongkut%E2%80%99s%20University%20of%20Technology%20Thonburi%20(KMUTT)!5e0!3m2!1sen!2sth!4v1695146744456!5m2!1sen!2sth',
    contact: {
      name: 'คุณอรุณา กรณีณา (พี่สาทิต)',
      tel: '01 1234 56789',
      social: [
        {
          name: 'Facebook',
          link: 'https://facebook.com/AtsuiMatsuri',
        },
        {
          name: 'Instagram',
          link: 'https://kronos.moe',
        },
        {
          name: 'Website',
          link: 'https://mirailisc.xyz',
        },
      ],
    },
    activities: [
      {
        title: 'ซุ้มนิทรรศการ',
        description:
          'กิจกรรมที่ผู้เข้าร่วมจะได้รู้จักแต่ละภาควิชาผ่านนิทรรศการ ซึ่งจะมีพี่แต่ละภาคคอยให้ความรู้หรือตอบคำถามต่างๆกับผู้เข้าร่วม โดยตั้งที่บริเวณห้องประจำของแต่ละภาควิชา',
      },
      {
        title: 'Workshop',
        description:
          'กิจกรรมที่ให้ผู้เข้าร่วมลงมือปฏิบัติในห้องปฏิบัติการของแต่ละภาควิชา โดยมีทั้งหมด 4 รอบ รอบละ 1 ชั่วโมง 30 นาที โดยผู้เข้าร่วมจะได้รับ E-stamp และใบประกาศนียบัตรจากภาควิชา ซึ่งการลงทะเบียนจะเป็นแบบ walk-in เท่านั้น',
      },
    ],
    workshopSchedule: [
      {
        date: new Date(),
        time: '12:30 - 14:30',
        amount: 30,
      },
      {
        date: new Date(),
        time: '12:30 - 14:30',
        amount: 30,
      },
    ],
  },
]
