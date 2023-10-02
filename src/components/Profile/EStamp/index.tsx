import { Image, Typography } from 'antd'
import styles from './index.module.scss'
import { stampImages, IStampImage } from 'src/contents/stamps'
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

  const checkStamp = (stamp: IStampImage, event: string, stampAPI: IStamp[]): boolean => {
    if (stampAPI.length === 0) return false

    return stampAPI.filter(
      (item: IStamp) => item.department_name === stamp.department && item.event_detail.includes(event),
    )[0]
      ? true
      : false
  }

  const renderStamp = (event: string) => {
    return stampImages.map((stamp: IStampImage, i: number) => {
      return (
        <Image
          className={styles.image}
          preview={false}
          key={i}
          src={checkStamp(stamp, event, stampsMockup) ? stamp.stampEnable : stamp.stampDisable}
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
      <Title level={3}>ซุ้มกิจกรรม</Title>
      <div className={styles.stamps}>{renderStamp('Openhouse')}</div>
    </div>
  )
}

export default EStampComponent
