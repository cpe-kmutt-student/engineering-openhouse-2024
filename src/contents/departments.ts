import { DepartmentEnum } from './department/enum'
import Thumbnail from './images/DepartmentThumbnail.png'

export interface IDepartment {
  name: string
  link: string
  image: string
}

export const departments: IDepartment[] = [
  {
    name: 'โยธา',
    link: DepartmentEnum.CE,
    image: Thumbnail,
  },
  {
    name: 'เครื่องกล',
    link: DepartmentEnum.ME,
    image: Thumbnail,
  },
  {
    name: 'อุตสาหการ',
    link: DepartmentEnum.PE,
    image: Thumbnail,
  },
  {
    name: 'ไฟฟ้า',
    link: DepartmentEnum.EE,
    image: Thumbnail,
  },
  {
    name: 'อิเล็กทรอนิกส์และโทรคมนาคม',
    link: DepartmentEnum.ENE,
    image: Thumbnail,
  },
  {
    name: 'เครื่องมือและวัสดุ',
    link: DepartmentEnum.TME,
    image: Thumbnail,
  },
  {
    name: 'สิ่งแวดล้อม',
    link: DepartmentEnum.ENV,
    image: Thumbnail,
  },
  {
    name: 'คอมพิวเตอร์',
    link: DepartmentEnum.CPE,
    image: Thumbnail,
  },
  {
    name: 'เครื่องมือและระบบควบคุม',
    link: DepartmentEnum.INC,
    image: Thumbnail,
  },
  {
    name: 'เคมี',
    link: DepartmentEnum.CHE,
    image: Thumbnail,
  },
  {
    name: 'พื้นที่การศึกษาราชบุรี',
    link: DepartmentEnum.RC,
    image: Thumbnail,
  },
]
