export interface IEducationLevel {
  value: string
  label: string
}

export const educationLevel: IEducationLevel[] = [
  {
    value: 'middleSchool',
    label: 'มัธยมศึกษาตอนต้น (ม.1-3)',
  },
  {
    value: 'highSchool',
    label: 'มัธยมศึกษาตอนปลาย (ม.4-6)',
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
