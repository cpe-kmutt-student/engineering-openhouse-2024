const TIMEZONE = 'Asia/Bangkok'

export const OPEN_HOUSE_START_DATE = new Date('10/14/2023').getTime()

export const OPEN_HOUSE_END_DATE = new Date('10/16/2023').getTime()

export const isTodayOpenHouse = (): boolean => {
  const today = new Date(Date.now()).getTime()
  return OPEN_HOUSE_START_DATE <= today && today <= OPEN_HOUSE_END_DATE
}

export const convertLongDateLocaleToThai = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('th-TH', {
    timeZone: TIMEZONE,
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export const convertShortDateLocaleToThai = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('th-TH', {
    timeZone: TIMEZONE,
    month: '2-digit',
    day: 'numeric',
    year: '2-digit',
  })
}

export const convertDateLocaleToThai = (date: Date | string): string => {
  return new Date(date).toLocaleDateString('th-TH', { timeZone: TIMEZONE, month: 'short', day: 'numeric' })
}
