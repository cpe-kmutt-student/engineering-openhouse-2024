export interface IEducationLevel {
  value: string
  label: string
}

export const educationLevel: IEducationLevel[] = [
  {
    value: 'elementary1',
    label: 'ประถมศึกษาตอนต้น (ป.1-2-3)',
  },
  {
    value: 'elementary2',
    label: 'ประถมศึกษาตอนปลาย (ป.4-5-6)',
  },
  {
    value: 'middleSchool',
    label: 'มัธยมศึกษาตอนต้น (ม.1-2-3)',
  },
  {
    value: 'highSchool4',
    label: 'มัธยมศึกษาปีที่ 4 (ม.4)',
  },
  {
    value: 'highSchool5',
    label: 'มัธยมศึกษาปีที่ 5 (ม.5)',
  },
  {
    value: 'highSchool6',
    label: 'มัธยมศึกษาปีที่ 6 (ม.6)',
  },
  {
    value: 'vocational',
    label: 'ประกาศนียบัตรวิชาชีพ (ปวช.)',
  },
  {
    value: 'highVocational',
    label: 'ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)',
  },
  {
    value: 'college',
    label: 'มหาวิทยาลัย',
  },
]
