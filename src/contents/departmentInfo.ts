import CPE from './images/CPE.png'

export interface IDepartmentInfo {
  name: {
    en: string
    th: string
    initial: string
  }
  image: string
  description: string
  location: string
  workshop: IWorkshop[]
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

export interface IWorkshop {
  title: string
  description: string
}

export interface IWorkshopSchedule {
  round: number
  date: Date
  time: string
  amount: number
}

export const departmentInfo: IDepartmentInfo[] = [
  {
    name: {
      en: 'Computer Engineering',
      th: 'ภาควิชาวิศวกรรมคอมพิวเตอร์',
      initial: 'CPE',
    },
    image: CPE,
    description:
      'Lorem ipsum dolor sit amet consectetur. Pretium senectus viverra amet non eu diam etiam vel nisl. Sed imperdiet purus commodo morbi. Sit odio integer faucibus metus id nibh amet. Porttitor et ipsum amet tristique turpis nam egestas erat vel. Sem iaculis mattis ullamcorper diam egestas iaculis metus lacus aliquam. Sit purus netus iaculis viverra venenatis est eu sed. Magna sed id aenean vel adipiscing eleifend amet at amet. Elementum sed vitae molestie ',
    location: 'ชั้น 10 อาคารวิศววัฒนะ (ตึกแดง)',
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
    workshop: [
      {
        title: 'WORKSHOP #1 name',
        description:
          'Lorem ipsum dolor sit amet consectetur. Blandit convallis netus sed mus sed tincidunt. Hac suscipit feugiat consectetur habitasse pulvinar quisque. Tellus purus facilisi lacus ac interdum. Quam id sodales fringilla tempor vivamus etiam ultrices.',
      },
      {
        title: 'WORKSHOP #2 name',
        description:
          'Lorem ipsum dolor sit amet consectetur. Blandit convallis netus sed mus sed tincidunt. Hac suscipit feugiat consectetur habitasse pulvinar quisque. Tellus purus facilisi lacus ac interdum. Quam id sodales fringilla tempor vivamus etiam ultrices.',
      },
    ],
    workshopSchedule: [
      {
        round: 1,
        date: new Date(),
        time: '12:30 - 14:30',
        amount: 30,
      },
      {
        round: 2,
        date: new Date(),
        time: '12:30 - 14:30',
        amount: 30,
      },
      {
        round: 3,
        date: new Date(),
        time: '12:30 - 14:30',
        amount: 30,
      },
      {
        round: 4,
        date: new Date(),
        time: '12:30 - 14:30',
        amount: 30,
      },
      {
        round: 5,
        date: new Date(),
        time: '12:30 - 14:30',
        amount: 30,
      },
    ],
  },
]
