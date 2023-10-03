import Parking1 from '../images/about/Parking_1.jpg'
import Parking2 from '../images/about/Parking_2.jpg'

export interface IParkingInfo {
  name: string
  description: string
  image?: string
}

export const parkingInfo: IParkingInfo[] = [
  {
    name: 'รถบัส / รถตู้',
    description: 'จอดภายในศูนย์เฉลิมพระเกียรติ (บางมด)',
    image: Parking1,
  },
  {
    name: 'รถยนต์ / จักรยานยนต์',
    description: 'จอดภายในมหาลัย และ อาคาร S2 (โปรดหลีกเลี่ยง)',
    image: Parking2,
  },
]
