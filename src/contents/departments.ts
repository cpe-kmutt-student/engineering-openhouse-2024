import { DepartmentEnum } from './department/enum'

export interface IDepartment {
  name: string
  link: string
  image: string
}

export const departments: IDepartment[] = [
  {
    name: 'โยธา',
    link: DepartmentEnum.CE,
    image: 'https://media.tenor.com/MgNiRu0jum0AAAAC/blue-archive-koharu.gif',
  },
  {
    name: 'เครื่องกล',
    link: DepartmentEnum.ME,
    image:
      'https://preview.redd.it/running-away-from-hanako-sensei-and-koharu-by-v0-88le7ci071eb1.jpg?width=500&format=pjpg&auto=webp&s=1eb79d2f9263b58e0ba6e5ef7667a1a94cb4cbaa',
  },
  {
    name: 'อุตสาหการ',
    link: DepartmentEnum.PE,
    image: 'https://media.tenor.com/MgNiRu0jum0AAAAC/blue-archive-koharu.gif',
  },
  {
    name: 'ไฟฟ้า',
    link: DepartmentEnum.EE,
    image:
      'https://preview.redd.it/running-away-from-hanako-sensei-and-koharu-by-v0-88le7ci071eb1.jpg?width=500&format=pjpg&auto=webp&s=1eb79d2f9263b58e0ba6e5ef7667a1a94cb4cbaa',
  },
  {
    name: 'อิเล็กทรอนิกส์และโทรคมนาคม',
    link: DepartmentEnum.ENE,
    image: 'https://media.tenor.com/MgNiRu0jum0AAAAC/blue-archive-koharu.gif',
  },
  {
    name: 'เครื่องมือและวัสดุ',
    link: DepartmentEnum.TME,
    image:
      'https://preview.redd.it/running-away-from-hanako-sensei-and-koharu-by-v0-88le7ci071eb1.jpg?width=500&format=pjpg&auto=webp&s=1eb79d2f9263b58e0ba6e5ef7667a1a94cb4cbaa',
  },
  {
    name: 'สิ่งแวดล้อม',
    link: DepartmentEnum.ENV,
    image: 'https://media.tenor.com/MgNiRu0jum0AAAAC/blue-archive-koharu.gif',
  },
  {
    name: 'คอมพิวเตอร์',
    link: DepartmentEnum.CPE,
    image: 'https://media.tenor.com/MgNiRu0jum0AAAAC/blue-archive-koharu.gif',
  },
  {
    name: 'เครื่องมือและระบบควบคุม',
    link: DepartmentEnum.INC,
    image:
      'https://preview.redd.it/running-away-from-hanako-sensei-and-koharu-by-v0-88le7ci071eb1.jpg?width=500&format=pjpg&auto=webp&s=1eb79d2f9263b58e0ba6e5ef7667a1a94cb4cbaa',
  },
  {
    name: 'เคมี',
    link: DepartmentEnum.CHE,
    image: 'https://media.tenor.com/MgNiRu0jum0AAAAC/blue-archive-koharu.gif',
  },
  {
    name: 'พื้นที่การศึกษาราชบุรี',
    link: DepartmentEnum.RC,
    image: 'https://pbs.twimg.com/media/F0NaLpqaIAAhv7n.jpg:large',
  },
]
