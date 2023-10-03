const TIMEZONE = 'Asia/Bangkok'

export const convertLongDateLocaleToThai = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('th-TH', {
    timeZone: TIMEZONE,
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const convertDateLocaleToThai = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('th-TH', { timeZone: TIMEZONE, month: 'short', day: 'numeric' })
}
