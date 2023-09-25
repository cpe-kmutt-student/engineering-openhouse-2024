const TIMEZONE = 'Asia/Bangkok'

export const convertShortDateLocaleToThai = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('th-TH', { timeZone: TIMEZONE })
}

export const convertDateLocaleToThai = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('th-TH', { timeZone: TIMEZONE, month: 'short', day: 'numeric' })
}
