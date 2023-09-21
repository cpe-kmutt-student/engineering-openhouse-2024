export interface ITravel {
  title: string
  image: string
  ways: ITravelWay[]
}

export interface ITravelWay {
  name: string
  description?: string
  buses?: string[]
}

export const travels: ITravel[] = [
  {
    title: 'รถโดยสารประจำทางที่ผ่านมหาวิทยาลัยฯ (ถนนประชาอุทิศ)',
    image: 'https://pbs.twimg.com/media/FxIxs9zaYAIULa3.jpg:large',
    ways: [
      {
        name: 'รถขนส่งสาธารณ ขึ้นจากหน้า ท่าอากาศยานดอนเมือง',
        buses: [
          'สายรถ 75 เส้นทางเดินรถ วัดพุทธบูชา – หัวลำโพง',
          'สายรถ 21 เส้นทางเดินรถ วัดคู่สร้าง – จุฬาลงกรณ์มหาวิทยาลัย',
        ],
      },
      {
        name: 'รถยนต์ จาก ท่าอากาศยานดอนเมือง',
        description: 'ผ่านถนนหมายเลข 31 และทางคู่ขนานถนนวิภาวดีรังสิตถึงมหาวิทยาลัยเกษตรศาสตร์',
      },
    ],
  },
]
