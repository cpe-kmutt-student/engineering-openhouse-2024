import { IStamp } from 'src/components/Profile/EStamp'
import { IStampImage } from 'src/contents/stamps'

export const checkStampWithDepartment = (stampImage: IStampImage, event: string, stampAPI: IStamp[]): string => {
  if (stampAPI.length === 0) return stampImage.stampDisable

  return stampAPI.filter(
    (item: IStamp) => item.department_name === stampImage.department && item.event_detail.includes(event),
  )[0]
    ? stampImage.stampEnable
    : stampImage.stampDisable
}

export const checkStampWithoutDepartment = (stampImage: IStampImage, event: string, stampAPI: IStamp[]): string => {
  if (stampAPI.length === 0) return stampImage.stampDisable

  return stampAPI.filter((item: IStamp) => item.event_detail.includes(event))[0]
    ? stampImage.stampEnable
    : stampImage.stampDisable
}
