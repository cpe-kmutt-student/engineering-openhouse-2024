export interface IEventActivity {
  title: string
  link: string
  description: string
  thumbnail: string
  image: string
  lowerDescription?: string
  rounds?: IActivityRound[]
}

export interface IActivityRound {
  title: string
  schedules: IActivitySchedule[]
}

export interface IActivitySchedule {
  time: string
  amount: number
}

export const eventActivities: IEventActivity[] = [
  {
    title: 'กิจกรรมพาน้องทัวร์',
    link: 'starter-tour',
    description:
      'สำหรับผู้เข้าร่วมงานที่ต้องการให้รุ่นพี่พาเดินชมนิทรรศการของภาควิชาต่าง ๆ โดยกำหนดรอบชม วันละ 4 รอบ ได้แก่ ช่วงเวลา เวลา 09.30-11.00 น. / เวลา 11.20-12.50 น. / เวลา 13.30-15.00 น. และเวลา 15.20-16.50 น. ',
    thumbnail:
      'https://campus.campus-star.com/app/uploads/2020/10/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%9E%E0%B8%AB%E0%B8%B8%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3-LX-1_resize.jpg',
    image: 'https://c4.wallpaperflare.com/wallpaper/389/457/251/blue-archive-anime-girls-hd-wallpaper-preview.jpg',
    lowerDescription: 'ผู้ที่เข้าร่วมจะได้รับของที่ระลึกพิเศษ',
    rounds: [
      {
        title: 'ภาควิชา CPE PE ME TME',
        schedules: [
          {
            time: '08.55 - 10.40',
            amount: 25,
          },
          {
            time: '10.55 - 12.40',
            amount: 25,
          },
          {
            time: '12.55 - 14.40',
            amount: 25,
          },
          {
            time: '14.55 - 16.40',
            amount: 25,
          },
        ],
      },
      {
        title: 'ภาควิชา CHE CVE ENV',
        schedules: [
          {
            time: '09.00 - 10.20',
            amount: 25,
          },
          {
            time: '11.00 - 12.20',
            amount: 25,
          },
          {
            time: '13.00 - 14.20',
            amount: 25,
          },
          {
            time: '15.00 - 16.20',
            amount: 25,
          },
        ],
      },
      {
        title: 'ภาควิชา EE INC ENE',
        schedules: [
          {
            time: '09.05 - 10.25',
            amount: 25,
          },
          {
            time: '11.05 - 12.25',
            amount: 25,
          },
          {
            time: '13.05 - 14.25',
            amount: 25,
          },
          {
            time: '15.05 - 16.25',
            amount: 25,
          },
        ],
      },
    ],
  },
]
