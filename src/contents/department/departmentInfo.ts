import CPE from '../images/CPE.png'
import { DepartmentEnum } from './enum'

export interface IDepartmentInfo {
  name: {
    en: string
    th: string
    initial: DepartmentEnum
  }
  image: string
  location: {
    exhibition?: string
    workshop?: string
    map?: string
  }
  activities?: IActivity[]
  workshopSchedule?: IWorkshopSchedule[]
  subWorkshopSchedule?: ISubWorkshop[]
  contact: IContact
}

export interface IContact {
  name?: string
  tel?: string
  social: IContactSocial[]
}

export interface IContactSocial {
  name: string
  link: string
}

export interface IActivity {
  title: string
  description: string
  subDescription?: ISubActivity[]
}

export interface ISubActivity {
  name: string
  description: string
}

export interface IWorkshopSchedule {
  date: Date | string
  time: string
  amount: number
}

export interface ISubWorkshop {
  title: string
  schedules: IWorkshopSchedule[]
}

export const departmentInfo: IDepartmentInfo[] = [
  {
    name: {
      en: 'Civil Engineering',
      th: 'ภาควิชาวิศวกรรมโยธา',
      initial: DepartmentEnum.CE,
    },
    image: CPE,
    location: {
      exhibition: 'นิทรรศการวิศวกรรมโยธา: ชั้น 1  อาคารเรียนรวม 5 (S11)',
      workshop: 'จุดนัดลงทะเบียน workshop: ชั้น 1 อาคารเรียนรวม 5 (S11)',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/kmutt.ce',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/cekmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมโยธา ตั้งอยู่ที่ อาคารเรียนรวม 5 (S11) ชั้น 1 บริเวณฝั่งด้านหน้าตึกภาควิชาวิศวกรรมเคมี จะมีการแนะนำรายละเอียดต่าง ๆ เกี่ยวกับวิศวกรรมโยธาเพื่อให้น้อง ๆ ได้เรียนรู้เกี่ยวกับสาขาวิชาต่าง ๆ ในภาควิชาวิศวกรรมโยธาจากคำแนะนำของพี่ ๆ เพื่อให้น้อง ๆ ได้รับความรู้และเป็นแนวทางประกอบการตัดสินใจในการศึกษาต่อในระดับอุดมศึกษา นอกจากนี้น้อง ๆ ยังได้รับการแนะนำเรื่องการสอบเข้าและการเตรียม Portfolio ของภาควิชาวิศวกรรมโยธาจากรุ่นพี่  และ  Workshop เพื่อให้น้อง ๆ ได้เข้าใจเกี่ยวกับวิศวกรรมโยธามากยิ่งขึ้น พร้อมทั้งของที่ระลึกมากมาย และ Folksong จากรุ่นพี่ตลอดกิจกรรมในงาน',
      },
      {
        title: 'Workshop',
        description:
          'กิจกรรมที่ให้ผู้เข้าร่วมลงมือปฏิบัติในห้องปฏิบัติการของแต่ละภาควิชา โดยมีทั้งหมด 4 รอบ รอบละ 1 ชั่วโมง 30 นาที โดยผู้เข้าร่วมจะได้รับ E-stamp และใบประกาศนียบัตรจากภาควิชา ซึ่งการลงทะเบียนจะเป็นแบบ walk-in เท่านั้น',
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '09.30 – 11.00',
        amount: 30,
      },
      {
        date: '10/14/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '09.30 – 11.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
    ],
  },
  {
    name: {
      en: 'Mechanical Engineering',
      th: 'ภาควิชาวิศวกรรมเครื่องกล',
      initial: DepartmentEnum.ME,
    },
    image: CPE,
    location: {
      exhibition:
        'นิทรรศการวิศวกรรมเครื่องกล: ลานหน้าอาคารภาควิชาวิศวกรรมเครื่องกล และชั้น 1 ภายในอาคารภาควิชาวิศวกรรมเครื่องกล',
      workshop: 'จุดนัดลงทะเบียน workshop:  ลานหน้าอาคารภาควิชาวิศวกรรมเครื่องกล',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/kmutt.me',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/kmutt_me',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมเครื่องกล จะพาน้อง ๆ ไปพบกับผลงานที่น่าตื่นตาตื่นใจ จากรุ่นพี่วิศวกรรมเครื่องกล ไม่ว่าจะเป็น รถ Formula จากชมรม Formula, ต้นรถประหยัดพลังงาน จากชมรม EDR, Cubesat thrust, Drone และอื่น ๆ ที่น้องคาดไม่ถึงว่าวิศวกรรมเครื่องกลก็ทำได้ !  พร้อมทั้งความรู้ความเข้าใจในวิชาชีพที่กว้างขวางบนโลกความเป็นจริง นอกจากนี้ยังมีการนำเสนอข้อมูลของภาควิชาและข้อมูลหลักสูตรที่จะสร้างความประทับใจอย่างแน่นอน แล้วมาพบกันที่ลานหน้าภาควิชาวิศวกรรมเครื่องกล',
      },
      {
        title: 'Workshop',
        description:
          'Workshop จากภาควิชาวิศวกรรมเครื่องกล ที่จะพาน้อง ๆ ไปพบกับแลปในภาควิชาต่าง ๆ ที่อัดแน่นไปด้วยไปด้วยความเป็นเครื่องกล ทั้งนี้น้อง ๆ จะได้ลองฝึกเขียนแบบบนกระดาษจริง ๆ และทดลองเขียนแบบด้วยโปรแกรม Solidworks',
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '11.20 – 12.50',
        amount: 30,
      },
      {
        date: '10/14/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/14/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '11.20 – 12.50',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '11.20 – 12.50',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
    ],
  },
  {
    name: {
      en: 'Production Engineering',
      th: 'ภาควิชาวิศวกรรมอุตสาหการ',
      initial: DepartmentEnum.PE,
    },
    image: CPE,
    location: {
      exhibition: 'นิทรรศการภาควิชาวิศวกรรมอุตสาหการ: ชั้น 1 อาคารวิศววัฒนะ (S4) ฝั่งโรงหล่อ',
      workshop: 'จุดนัดลงทะเบียน workshop:  ชั้น 1 อาคารวิศววัฒนะ (S4) ฝั่งโรงหล่อ',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/PEMCEKMUTT',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/pe_mce.kmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมอุตสาหการ จะพาน้อง ๆ ไปพบกับผลงานของรุ่นพี่จากทั้ง 2 สาขาวิชา คือ วิศวกรรมอุตสาหการ และ วิศวกรรมแมคคาทรอนิกส์ พร้อมทั้งแนะนำหลักสูตรการเรียนการสอนและความแตกต่างจากทั้ง 2 สาขาวิชานี้ นอกจากนั้นพี่ ๆ จะพาน้อง ๆ มามารู้จักการใช้อุปกรณ์และการต่อวงจรอิเล็กทรอนิกส์พื้นฐาน และกิจกรรมต่าง ๆ ที่อยู่ในนิทรรศการของภาควิชาอุตสาหการฯ ไมว่าจะเป็นเกมเพื่อชิงของรางวัลพิเศษจากภาควิชาฯ แล้วพบกัน ณ นิทรรศการภาควิชาวิศวกรรมอุตสาหการ ที่ ชั้น 1 อาคารวิศววัฒนะ (S4) ฝั่งโรงหล่อ',
      },
      {
        title: 'Workshop',
        description:
          'Workshop จากภาควิชาวิศวกรรมอุตสาหการ ที่จะพาน้อง ๆ ไปเรียนรู้สถานที่เรียนจริง ๆ ของพี่ ๆ วิศวกรรมอุตสาหการและวิศวกรรมแมคคาทรอนิกส์ และตะลุยกับช๊อปในภาควิชาฯ ทั้ง 4 ช๊อป คือ',
        subDescription: [
          {
            name: 'ช๊อปหล่อ',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตงานหล่อ และการนําตัวอย่างชิ้นงานหล่อมาจัดแสดง เพื่อให้น้อง ๆ เห็นถึงความสําคัญและความจําเป็นของงานหล่อในการผลิตชิ้นส่วนของงานอุตสาหกรรม',
          },
          {
            name: 'ช๊อป Machine',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตการใช้เครื่องจักรจากเจ้าหน้าที่ เช่น เครื่องกลึง เครื่องกัด เพื่อให้ได้เห็นภาพความสําคัญของการขัดแต่งรูปและผิวของชิ้นงาน หรือการใช้เครื่องจักรทําการสร้างชิ้นงาน เช่น C-Clamp ค้อน ต่าง ๆ',
          },
          {
            name: 'ช๊อปการเชื่อม',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตและมีโอกาสได้ลองปฏิบัติงานเชื่อมจริง ๆ ไม่ว่าจะเป็น SMAW และ GMAW เพื่อให้เข้าใจและเห็นถึงความสําคัญของการเชื่อมในงานประกอบชิ้นส่วน อุตสาหกรรมจริง',
          },
          {
            name: 'ช๊อปแมคคาทรอนิกส์',
            description:
              'น้อง ๆ จะได้รับชมการสาธิต หลักการทำงานของระบบ pnuematic และ ระบบอัตโนมัติ ด้วย PLC เพื่อให้เห็นภาพความสำคัญของระบบต่างๆที่นำมาประยุกต์ใช้ในการเป็นวิศวกรรมแมคคาทรอนิกส์ และได้มีโอกาสลองลงมือปฏิบัติทดสอบทั้ง 2 ระบบด้วย',
          },
        ],
      },
    ],
    workshopSchedule: [
      {
        date: '10/14/2023',
        time: '09.30 – 11.00',
        amount: 30,
      },
      {
        date: '10/14/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '09.30 – 11.00',
        amount: 30,
      },
      {
        date: '10/15/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '13.30 – 15.00',
        amount: 30,
      },
      {
        date: '10/16/2023',
        time: '15.20 – 16.50',
        amount: 30,
      },
    ],
  },
  {
    name: {
      en: 'Electrical Engineering',
      th: 'ภาควิชาวิศวกรรมไฟฟ้า',
      initial: DepartmentEnum.EE,
    },
    image: CPE,
    location: {
      exhibition: 'นิทรรศการภาควิชาวิศวกรรมไฟฟ้า:  ชั้น 4 อาคารเรียนรวม 4 (S12) ',
      workshop: 'จุดนัดลงทะเบียน workshop:  ชั้น 4 อาคารเรียนรวม 4 (S12)',
    },
    contact: {
      social: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/ee.kmutt',
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com/electrical_engineering_kmutt',
        },
      ],
    },
    activities: [
      {
        title: 'นิทรรศการ',
        description:
          'นิทรรศการของภาควิชาวิศวกรรมไฟฟ้า จัดขึ้นที่ภาควิชาวิศวกรรมไฟฟ้า ชั้น 4 อาคารเรียนรวม 4 (S12) โดยน้อง ๆ จะได้เรียนรู้กับการเรียนในภาควิชาวิศวกรรมไฟฟ้า และหลักสูตร ทั้ง 2 หลักสูตร คือ วิศวกรรมไฟฟ้า และวิศวกรรมไฟฟ้า (ระบบไฟฟ้า อิเล็กทรอนิกส์กำลัง และพลังงาน) แนวทางการศึกษาต่อในวิศวกรรมไฟฟ้า พร้อมรับชมผลงานจากพี่ ๆ ภาควิชาวิศวกรรมไฟฟ้า',
      },
      {
        title: 'Workshop',
        description:
          'Workshop จากภาควิชาวิศวกรรมไฟฟ้า ที่จะพาน้อง ๆ ไปสนุกกับกิจกรรมในรูปแบบ Activity based learning จากพี่ ๆ วิศวกรรมไฟฟ้า โดยแบ่งให้น้อง ๆ ได้เลือกทั้งหมด 4 แลป คือ',
        subDescription: [
          {
            name: 'Measurement Lab',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตการใช้งานของเครื่องมือวัดทางไฟฟ้าที่สำคัญต่าง ๆ เช่น Multimeter, Oscilloscope และมีโอกาสให้น้อง ๆ ได้ทดลองใช้เครื่องมือจริงด้วย',
          },
          {
            name: 'Motor Control',
            description:
              'น้อง ๆ จะได้รู้จักเกี่ยวกับวงจร Motor Control ที่เป็นส่วนประกอบสำคัญในหลายอุปกรณ์ที่อยู่รอบตัวเราในชีวิตประจำวันทั้งหลัการและอุปกรณ์จริง พร้อมทั้งชมการสาธิตและลองลงมือปฏิบัติต่อวงจร Motor Control อีกด้วย',
          },
          {
            name: 'High Voltage Lab',
            description:
              'น้อง ๆ จะได้รับชมการสาธิตการทำการทดลองในงานไฟฟ้าแรงดันสุูง หรือ High Voltage ซึ่งยากจะได้รับชมในชีวิตประจำวัน น้องจะได้เห็นภาพในโลกของไฟฟ้าที่เหนือไปอีกขั้นกับ 5 การทดลอง ได้แก่ 1.แรงดันกระจายหรือ Voltage Distribution, 2.ความถี่ธรรมชาติหรือ Resonance, 3.Surface discharge, 4.การทดลองพิสูจน์ กฎของฟาราเดย์, 5.จําลองการเกิดกระแสฟ้าผ่า',
          },
        ],
      },
    ],
    subWorkshopSchedule: [
      {
        title: 'Measurement Lab',
        schedules: [
          {
            date: '10/14/2023',
            time: '09.30 – 11.00',
            amount: 20,
          },
          {
            date: '10/14/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/14/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
          {
            date: '10/14/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '09.30 – 11.00',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
          {
            date: '10/15/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '09.30 – 11.00',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
        ],
      },
      {
        title: 'Motor Control',
        schedules: [
          {
            date: '10/14/2023',
            time: '09.30 – 11.00',
            amount: 18,
          },
          {
            date: '10/14/2023',
            time: '11.20 – 12.50',
            amount: 18,
          },
          {
            date: '10/14/2023',
            time: '13.30 – 15.00',
            amount: 18,
          },
          {
            date: '10/14/2023',
            time: '15.20 – 16.50',
            amount: 18,
          },
          {
            date: '10/15/2023',
            time: '09.30 – 11.00',
            amount: 18,
          },
          {
            date: '10/15/2023',
            time: '11.20 – 12.50',
            amount: 18,
          },
          {
            date: '10/15/2023',
            time: '13.30 – 15.00',
            amount: 18,
          },
          {
            date: '10/15/2023',
            time: '15.20 – 16.50',
            amount: 18,
          },
          {
            date: '10/16/2023',
            time: '09.30 – 11.00',
            amount: 18,
          },
          {
            date: '10/16/2023',
            time: '11.20 – 12.50',
            amount: 18,
          },
          {
            date: '10/16/2023',
            time: '13.30 – 15.00',
            amount: 18,
          },
          {
            date: '10/16/2023',
            time: '15.20 – 16.50',
            amount: 18,
          },
        ],
      },
      {
        title: 'High Voltage lab',
        schedules: [
          {
            date: '10/15/2023',
            time: '13.30 – 15.00',
            amount: 30,
          },
          {
            date: '10/15/2023',
            time: '15.20 – 16.50',
            amount: 30,
          },
          {
            date: '10/16/2023',
            time: '13.30 – 15.00',
            amount: 30,
          },
          {
            date: '10/16/2023',
            time: '15.20 – 16.50',
            amount: 30,
          },
        ],
      },
      {
        title: 'Illumination Laboratory (E-LU)',
        schedules: [
          {
            date: '10/16/2023',
            time: '09.30 – 11.00',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '11.20 – 12.50',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '13.30 – 15.00',
            amount: 20,
          },
          {
            date: '10/16/2023',
            time: '15.20 – 16.50',
            amount: 20,
          },
        ],
      },
    ],
  },
]
