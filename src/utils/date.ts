export const convertDateLocale = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('th-TH', { timeZone: 'UTC' })
}
