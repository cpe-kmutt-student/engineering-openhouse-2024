export interface IEventSchedule {
  title: string
  date: Date | string
  time: string
  location?: string
  description?: string
}

export const eventSchedules: IEventSchedule[] = [
  {
    title: 'พิธีเปิดกิจกรรม Engineering Open house Canival at Bangmod',
    description:
      'ร่วมเป็นส่วนหนึ่งของพิธีเปิดกิจกรรม Engineering Open house Canival at Bangmod พร้อมแนวคิดดี ๆ จากประธานในพิธี ที่จะมาบอกเล่าถึงความเป็นมาของโครงการ และความเป็นวิศวะบางมด',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/14/2023',
    time: '09:00-9:30',
  },
  {
    title: 'กิจกรรมการแข่งขันนวัตกรรมฯ รอบชิงชนะเลิศ รอบเช้า',
    description:
      'มาฟังการนำเสนอโปรเจคต์ด้านนวัตกรรมและสิ่งประดิษฐ์จากน้อง ๆ ม.ปลาย พร้อมสาธิตผลงานให้ทุก ๆ คนได้ชมกันภายในงาน',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/14/2023',
    time: '09:30-12:00',
  },
  {
    title: 'Carnival market',
    description:
      'อิ่มอร่อยไปกับซุ้มอาหารและเครื่องดื่ม พร้อมทั้งซุ้มเกมที่รอให้น้อง ๆ ได้ไปร่วมสนุก และพลาดไม่ได้กับเสื้อสุด Limited เฉพาะที่งาน Engineering Open house Canival at Bangmod',
    location: 'บริเวณระหว่างอาคารเรียนรวม 5 และ ตึกวิศวกรรมเคมี',
    date: '10/14/2023',
    time: '09:00-17:00',
  },
  {
    title: 'กิจกรรมการแข่งขันนวัตกรรมฯ รอบชิงชนะเลิศ รอบบ่าย',
    description:
      'เชิญชมการนำเสนอโปรเจคต์ด้านนวัตกรรมและสิ่งประดิษฐ์ พร้อมสาธิตการใช้นวัตกรรมใหม่ ๆ ที่น่าสนใจมากมายจากความคิดสร้างสรรค์และความสามารถของน้อง ๆ ม.ปลาย',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/14/2023',
    time: '13:00-15:30',
  },
  {
    title: 'Folk song (1)',
    description: 'เพลิดเพลินไปกับดนตรีโฟล์คซองจากพี่ ๆ คณะวิศวกรรมศาสตร์ วง “Guams” และ วง “วงไหนสักวง”',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/15/2023',
    time: '10:00-11:30',
  },
  {
    title: 'Carnival market',
    description:
      'อิ่มอร่อยไปกับซุ้มอาหารและเครื่องดื่ม พร้อมทั้งซุ้มเกมที่รอให้น้อง ๆ ได้ไปร่วมสนุก และพลาดไม่ได้กับเสื้อสุด Limited เฉพาะที่งาน Engineering Open house Canival at Bangmod',
    location: 'บริเวณระหว่างอาคารเรียนรวม 5 และ ตึกวิศวกรรมเคมี',
    date: '10/15/2023',
    time: '9:00-17:00',
  },
  {
    title: 'Talk show',
    description:
      '"Spill The Tea พี่มีเรื่องจะเล่า" กิจกรรมดี ๆ จากพี่ ๆ ตัวแทน แต่ละชั้นปีของคณะวิศวกรรมศาสตร์ ที่จะมาแชร์ประสบการณ์ในรั้วมหาลัย ถึงการปรับตัวเข้ากับการเรียนการสอนระดับมหาวิทยาลัย และการทำกิจกรรมต่าง ๆ พร้อมแนวทางเตรียมตัวสำหรับการสอบเข้าของพี่ ๆ  นอกจากนี้น้อง ๆ จะยังได้รู้ว่าอะไรที่ทำให้พี่ ๆ ตัดสินใจเลือกเข้าศึกษาที่บางมด มาค้นหาคำตอบไปพร้อมกัน ',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/15/2023',
    time: '11.30-12.30',
  },
  {
    title: 'Folk song (2)',
    description:
      'เพลิดเพลินไปกับดนตรีโฟล์คซองจากพี่ ๆ คณะวิศวกรรมศาสตร์ วง “ธรรมรักษา” และการแสดงจากพี่ ๆ ชมรม KMUTT DANCE CLUB',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/15/2023',
    time: '12.30-13.00',
  },
  {
    title: 'กิจกรรม Engineering Quest รอบชิงชนะเลิศ',
    description:
      'มาร่วมลุ้นหาผู้ชนะไปด้วยกันแบบ Realtime กับการแข่งขัน Engineering Quest รอบชิงชนะเลิศ ซึ่งมีรูปแบบการแข่งขันแบบ walk rally ที่นอกจากจะต้องใช้ความรู้ทางด้านวิศวกรรมในการตอบปัญหาแล้ว ยังต้องอาศัยไหวพริบอีกด้วย',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/15/2023',
    time: '13.30-17.00',
  },
  {
    title: 'Talk show',
    description:
      'มาฟัง talk show จากพี่ ๆ KMUTT Admission ที่จะมาบอกเล่าถึงการสอบเข้าในระบบ TCAS เพื่อมาเป็นส่วนหนึ่งของรั้วบางมด',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/16/2023',
    time: '10.30-11.00',
  },
  {
    title: 'Folk song (3)',
    description: 'เพลิดเพลินไปกับดนตรีโฟล์คซองจากพี่ ๆ คณะวิศวกรรมศาสตร์ วง “Alcoholic” และ วง “Weight Potato”',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/16/2023',
    time: '11.30-13.00',
  },
  {
    title: 'Talk show',
    description:
      'กิจกรรม Talk Show  "Talk to me" มาค้นหาคำตอบไปพร้อมกันว่าทำไมต้องเลือกคณะวิศวกรรมศาสตร์ มจธ. ไปกับกิจกรรมที่จะช่วยให้น้อง ๆ ได้เห็นถึงความสำคัญของการศึกษาต่อในระดับอุดมศึกษา ต่อการทำงานในโลกปัจจุบัน และ มจธ. จะช่วยสนับสนุนน้อง ๆ ได้อย่างไร หากเลือกเข้าศึกษาที่นี่ แล้วมาค้นหาตัวเองว่าน้อง ๆ เหมาะกับการเรียนวิศวะ บางมด หรือไม่',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/16/2023',
    time: '13.00-14.00',
  },
  {
    title: 'พิธีปิดงาน Open house',
    description:
      'ทิ้งทวนไปกับพิธีปิดโครงการ แล้วมาเป็นสักขีพยานการเป็นส่วนหนึ่งของ Engineering Open house Canival at Bangmod',
    location: 'บริเวณ ใต้อาคารเรียนรวม 4 (เวทีกลาง)',
    date: '10/16/2023',
    time: '14.30-15.00',
  },
  {
    title: 'Carnival market',
    description:
      'อิ่มอร่อยไปกับซุ้มอาหารและเครื่องดื่ม พร้อมทั้งซุ้มเกมที่รอให้น้อง ๆ ได้ไปร่วมสนุก และพลาดไม่ได้กับเสื้อสุด Limited เฉพาะที่งาน Engineering Open house Canival at Bangmod',
    location: 'บริเวณระหว่างตึก CB 5 และ ตึกวิศวกรรมเคมี',
    date: '10/16/2023',
    time: '09.00-17.00',
  },
  {
    title: 'คอนเสิร์ต',
    description:
      'ร่วมสนุกไปกับคอนเสิร์ตของ Methane และ Serious Bacon ศิลปินสุดพิเศษจากค่าย Muzik ส่งท้ายความสนุกก่อนน้อง ๆ จะลาจากกิจกรรม Engineering Open house Canival at Bangmod',
    location: 'บริเวณ ตึกพระจอมเกล้าราชานุสรณ์ 190 ปี (โรงยิม)',
    date: '10/16/2023',
    time: '16.00-18.30',
  },
]
