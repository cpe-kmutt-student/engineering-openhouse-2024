export interface ITravel {
  title: string
  image: string
  ways: ITravelWay[]
}

export interface ITravelWay {
  name?: string
  description?: string
  buses?: string[]
}

export const travels: ITravel[] = [
  {
    title: 'เครื่องบิน',
    image:
      'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/380598495_267305286203128_6845974883789849467_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHfy_WurDALNnYluCof22StLxqoSxpGe-AvGqhLGkZ74BRCsq1F8KPPYMT-_-rWJIUgBowTRuqJT3RX5mfQAjTI&_nc_ohc=oLmW9nUpfaEAX-vSquv&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfCd59caMNS0PSVKi-CQUCDBJxQzyz-N6Vcb7bsVkjMq-g&oe=651A92E4',
    ways: [
      {
        name: 'สนามบินสุวรรณภูมิ',
        description:
          'นั่ง Airport Link ลง "สถานีพญาไท" ขึ้น BTS มาลง "สถานีวงเวียนใหญ่" ต่อรถโดยสารประจำทางสาย 120 หรือ 57 ลง "ดาวคะนอง" และต่อรถโดยสารประจำทางสาย 75 หรือ 21 ลงหน้ามหาลัย',
      },
      {
        name: 'สนามบินดอนเมือง',
        description: 'ขึ้นรถตู้ลง "อนุเสาวรีย์ชัย" ต่อรถโดยสารประจำทาง 140 ลง "กม.9" และต่อรถสองแถวลงหน้ามหาลัย',
      },
    ],
  },
  {
    title: 'รถโดยสารประจำทางที่ผ่านมหาวิทยาลัยฯ (ถนนประชาอุทิศ)',
    image:
      'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/382117597_267305326203124_391906161280263162_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeE7GyB3uBGQxpCMzAcY1G5ZqfYJ2u_ulQCp9gna7-6VAKp9gPpMJYW1fASgaMzDF8wSxb_UDKiNjh0eeAKHXWy6&_nc_ohc=4B-KzlqE9IMAX84Bl3-&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfB9yTh831G1vkM73itXqzfE0X4d286yMHRCugDBUMRTpA&oe=651B1F15',
    ways: [
      {
        name: 'รถโดยสารที่ผ่านมหาวิทยาลัย',
        buses: [
          'สายรถ 75 เส้นทางเดินรถ วัดพุทธบูชา – หัวลำโพง',
          'สายรถ 21 เส้นทางเดินรถ วัดคู่สร้าง – จุฬาลงกรณ์มหาวิทยาลัย',
        ],
      },
      {
        name: 'รถโดยสารอื่นๆ (ต่อสาย)',
        buses: [
          'สายรถ 142 การเคหะ ชุมชนธนบุรี - อู่ฟาร์มจระเข้ (สมุทรปราการ)',
          'สายรถ 141 แสมดำ - จุฬาลงกรณ์มหาวิทยาลัย',
          'สายรถ 140 อนุเสาวรีย์ชัยฯ - แสมดำ',
          'สายรถ 138 พระประแดง - หมอชิตใหม่',
          'สายรถ 82 พระประแดง - สนามหลวง',
          'สายรถ 20 สุขสวัสดิ์ - ท่าดินแดง',
          'สายรถ 6 พระประแดง - เทเวศร์',
        ],
      },
    ],
  },
  {
    title: 'รถโดยสารขนาดเล็ก (กระป้อ)',
    image:
      'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/380999686_267306599536330_7876820484243731244_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeHHNVV-WSucZscNBtK0wP0VBImFd-cpEPIEiYV35ykQ8hSxJsdg4vuGKbj1dnleCl_N0W1ECZoWPLTBGjCMaJaL&_nc_ohc=KJR_hUi0QGkAX94Gv7o&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfACmrxlYSCE4I2Mfnq2wDeddGrAqOPXtpe8BGYWBTiVEw&oe=651A0577',
    ways: [
      {
        buses: [
          'สายรถ 99 บางปะกอก - ทุ่งครุ',
          'สายรถ 90 ตลาดบางปะกอก - วัดทุ่งครุ',
          'สายรถ 88 บิ๊กซี (ราชบูรณะ)  - ทุ่งครุ',
          'สายรถ 77 บิ๊กซี (ราชบูรณะ) - วัดพุทธบูชา',
        ],
      },
    ],
  },
]
