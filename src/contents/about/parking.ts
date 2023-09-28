export interface IParkingInfo {
  name: string
  description: string
  image?: string
}

export const parkingInfo: IParkingInfo[] = [
  {
    name: 'รถบัส / รถตู้',
    description: 'จอดภายในศูนย์เฉลิมพระเกียรติ (บางมด)',
    image:
      'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/381677615_267934086140248_8085323165264371632_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFE1zi9P-x4jViEYW1GfkuKBWsqB2u6jQoFayoHa7qNCieClfudQXD14dcshlXy7nv2n4RXQGqjQgUG06TkYVP3&_nc_ohc=VNiqWPs8jNEAX-eZ9XP&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfAAbiMf3dk6IJSQKsAXG4IA3poZJthePrPFQANTRwnsHg&oe=651B672D',
  },
  {
    name: 'รถยนต์ / จักรยานยนต์',
    description: 'จอดภายในมหาลัย และ อาคาร S2 (โปรดหลีกเลี่ยง)',
    image:
      'https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/380777881_267934259473564_5226838107848235515_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeG4qx-On8VdYlSd5Yav-gmHQgYiXmk7mKhCBiJeaTuYqGIn6w4bFcC8sjbflBC3NXlpa-wvmIWyMPDc7gYIC659&_nc_ohc=HZIUxvMN-AEAX-TzZSx&_nc_ht=scontent.fbkk28-1.fna&oh=00_AfCFOzHFWqYvNKflRgiwBPeIgfkCCj917E1KFTyzrfgBGQ&oe=651A3B6B',
  },
]
