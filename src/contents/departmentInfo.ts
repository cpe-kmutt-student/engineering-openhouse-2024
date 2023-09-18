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
}

export interface IWorkshop {
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
      initial: 'CPE',
    },
    image: CPE,
    description:
      'Lorem ipsum dolor sit amet consectetur. Pretium senectus viverra amet non eu diam etiam vel nisl. Sed imperdiet purus commodo morbi. Sit odio integer faucibus metus id nibh amet. Porttitor et ipsum amet tristique turpis nam egestas erat vel. Sem iaculis mattis ullamcorper diam egestas iaculis metus lacus aliquam. Sit purus netus iaculis viverra venenatis est eu sed. Magna sed id aenean vel adipiscing eleifend amet at amet. Elementum sed vitae molestie ',
    location: 'ชั้น 10 อาคารวิศววัฒนะ (ตึกแดง)',
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
        date: new Date(),
        time: '12:30 - 14:30',
        amount: 30,
      },
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
