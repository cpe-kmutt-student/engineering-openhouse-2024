import { IStamp } from 'src/components/Profile/EStamp'
import { IStampImage, StampEnum, stampImages } from 'src/contents/stamps'

interface IFilteredStampImage {
  style: React.CSSProperties
  stampImage: string
}

export const filterStampVariant = (stamp: IStamp, event: StampEnum): IFilteredStampImage => {
  if (event === StampEnum.workshop || event === StampEnum.carnival) {
    const filterImage = stampImages.filter(
      (image: IStampImage) => image.event === StampEnum[event] && image.department === stamp.department,
    )[0]

    return {
      style: stamp.status ? { opacity: 1 } : { opacity: 0.1 },
      stampImage: filterImage.image,
    }
  } else {
    const filterImage = stampImages.filter((image: IStampImage) => image.event === StampEnum[event])[0]

    return {
      style: stamp.status ? { opacity: 1 } : { opacity: 0.1 },
      stampImage: filterImage.image,
    }
  }
}
