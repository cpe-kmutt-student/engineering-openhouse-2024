export interface IEventSchedule {
  title: string
  date: Date | string
  time: string
  description?: string
}

export const eventSchedules: IEventSchedule[] = [
  {
    title: 'พิธีเปิดกิจกรรม Engineering Open house Canival at Bangmod',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: '10/14/2023',
    time: '08:30-9:00',
  },
  {
    title: 'กิจกรรมการแข่งขันนวัตกรรมฯ รอบชิงชนะเลิศ รอบเช้า',
    date: '10/14/2023',
    time: '12:00-16:00',
  },
  {
    title: 'ซุ้มขายของ',
    date: '10/14/2023',
    time: '09:00-17:00',
  },
  {
    title: 'กิจกรรมการแข่งขันนวัตกรรมฯ รอบชิงชนะเลิศ รอบบ่าย',
    date: '10/14/2023',
    time: '13:00-15:30',
  },
  {
    title: 'Folk song(1)',
    date: '10/15/2023',
    time: '10:00-11:30',
  },
  {
    title: 'ซุ้มขายของ',
    date: '10/15/2023',
    time: '9:00-17:00',
  },
  {
    title: 'Talk show',
    date: '10/15/2023',
    time: '11.30-12.30',
  },
  {
    title: 'Folk song(2)',
    date: '10/15/2023',
    time: '12.30-13.00',
  },
  {
    title: 'กิจกรรม Engineering Quest รอบชิงชนะเลิศ',
    date: '10/15/2023',
    time: '13.30-17.00',
  },
  {
    title: 'Talk show',
    date: '10/16/2023',
    time: '10.30-11.00',
  },
  {
    title: 'Folk song(3)',
    date: '10/16/2023',
    time: '11.30-13.00',
  },
  {
    title: 'Talk show',
    date: '10/16/2023',
    time: '13.00-14.00',
  },
  {
    title: 'พิธีปิดงาน Open house',
    date: '10/16/2023',
    time: '14.00-14.30',
  },
  {
    title: 'ซุ้มขายของ',
    date: '10/16/2023',
    time: '09.00-17.00',
  },
  {
    title: 'คอนเสิร์ต',
    date: '10/16/2023',
    time: '16.00-18.30',
  },
]
