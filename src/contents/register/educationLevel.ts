export interface IEducationLevel {
  value: string
  label: string
}

export const educationLevel: IEducationLevel[] = [
  {
    value: 'elementary',
    label: 'ประถมศึกษา (ป.1-2-3)',
  },
  {
    value: 'middleSchool',
    label: 'มัธยมศึกษาตอนต้น (ม.1-2-3)',
  },
  {
    value: 'highSchool',
    label: 'มัธยมศึกษาตอนปลาย (ม.4-5-6)',
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
