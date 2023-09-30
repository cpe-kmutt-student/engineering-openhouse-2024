export interface IEventInfo {
  title: string
  link: string
  description: string
  thumbnail: string
  image: string
  lowerDescription?: string
  rounds?: IActivityRound[]
  location: {
    text: string
    map: string
  }
  contact: {
    name: string
    tel: string
  }
}

export interface IActivityRound {
  title: string
  schedules: IActivitySchedule[]
}

export interface IActivitySchedule {
  time: string
  amount: number
}

export const eventActivities: IEventInfo[] = [
  {
    title: 'กิจกรรมพาน้องทัวร์',
    link: 'starter-tour',
    description:
      'สำหรับน้อง ๆ คนไหนที่มางานเทศกาล Enginerring Open House ที่ มจธ. แล้ว น้อง ๆ รู้สึกว่าไม่รู้จะเดินชมภาควิชาไหนกันก่อนแน่  วันนี้พี่ ๆ ขอแนะนำกิจกรรมที่จะอาสาพาน้องชมรมภาควิชาต่าง ๆ ที่น่าสนใจ พร้อมชมบรรยกาศสิ่งแวดล้อม สิ่งอำนวยความสะดวกของคณะและของแต่ละภาควิชา พร้อมใกล้ชิดกับพี่ของภาควิชาต่าง ๆ ด้วย ! สำหรับน้อง ๆ ที่ลงทะเบียนและเข้าร่วมกิจกรรมพี่พาน้องทัวร์ มีโอกาสได้รับของที่ระลึกเฉพาะผู้เข้าร่วมกิจกรรมพี่พาน้องทัวร์เท่านั้นด้วยน้า',
    thumbnail:
      'https://campus.campus-star.com/app/uploads/2020/10/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%9E%E0%B8%AB%E0%B8%B8%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3-LX-1_resize.jpg',
    image: 'https://c4.wallpaperflare.com/wallpaper/389/457/251/blue-archive-anime-girls-hd-wallpaper-preview.jpg',
    lowerDescription: '*เปิดลงทะเบียนล่วงหน้าเท่านั้น*',
    contact: {
      name: 'นางสาว จามิญชญา บัวชูสิริรังสี (พี่เค้ก)',
      tel: '0626536161',
    },
    location: {
      text: 'เจอกันที่โถงใต้อาคารวิศววัฒนะ (S4) น้อง ๆ ที่จะเข้าในแต่ละรอบ โปรดมาก่อน 15-20 นาที',
      map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3877.127566137747!2d100.4928696!3d13.6500032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a252227bbaa7%3A0x3070526fef2a5038!2z4Lit4Liy4LiE4Liy4Lij4Lin4Li04Lio4Lin4Lin4Lix4LiS4LiZ4LiwIEtod2FlbmcgQmFuZyBNb3QsIEtoZXQgVGh1bmcgS2hydSwgS3J1bmcgVGhlcCBNYWhhIE5ha2hvbiAxMDE0MA!5e0!3m2!1sen!2sth!4v1696080363244!5m2!1sen!2sth',
    },
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
