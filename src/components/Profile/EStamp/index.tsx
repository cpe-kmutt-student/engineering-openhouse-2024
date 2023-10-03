import { Image, Typography } from 'antd'
import styles from './index.module.scss'
import { stampImages, IStampImage, StampEnum } from 'src/contents/stamps'
import { DepartmentEnum } from 'src/contents/department/enum'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'

interface Props {
  stamps: IStamp[]
}

export interface IStamp {
  event_detail: string
  department_name: string
}

const stampsMockup: IStamp[] = [
  {
    event_detail: 'CPE Openhouse',
    department_name: DepartmentEnum['CPE'],
  },
]

const EStampComponent: React.FC<Props> = ({ stamps }: Props): JSX.Element => {
  const { Title } = Typography

  console.log(stamps)

  const checkStamp = (stampImage: IStampImage, event: string, stampAPI: IStamp[]): string => {
    if (stampAPI.length === 0) return stampImage.stampDisable

    return stampAPI.filter(
      (item: IStamp) => item.department_name === stampImage.department && item.event_detail.includes(event),
    )[0]
      ? stampImage.stampEnable
      : stampImage.stampDisable
  }

  const renderStamp = (event: StampEnum) => {
    return stampImages
      .filter((stamp: IStampImage) => stamp.detail === StampEnum[event])
      .map((stamp: IStampImage, i: number) => {
        return (
          <Image
            className={styles.image}
            preview={false}
            key={i}
            src={checkStamp(stamp, event, stampsMockup)}
            alt="stamp"
          />
        )
      })
  }

  useEffect(() => {
    stampImages.map((stamp: IStampImage) => {
      cacheImage(stamp.stampDisable)
      cacheImage(stamp.stampEnable)
    })
  }, [])

  return (
    <div className={styles.eStamp}>
      <div className={styles.stamps}>
        <Title level={3}>ซุ้มกิจกรรม</Title>
        <div className={styles.stampImages}>{renderStamp(StampEnum.Openhouse)}</div>
      </div>
      <div className={styles.stamps}>
        <Title level={3}>Workshop</Title>
        <div className={styles.stampImages}>{renderStamp(StampEnum.Workshop)}</div>
      </div>
    </div>
  )
}

export default EStampComponent
