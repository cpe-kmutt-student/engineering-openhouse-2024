import { Collapse, CollapseProps, Image, Typography } from 'antd'
import styles from './index.module.scss'
import { stampImages, IStampImage, StampEnum } from 'src/contents/stamps'
import React, { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { filterStampVariant } from 'src/utils/stamp'
import badge1 from '@/contents/images/badge/badge1.png'
import badge2 from '@/contents/images/badge/badge2.png'

interface Props {
  stamps: Omit<IStampEvent, 'reward'>
  rewards: IStampEvent['reward']
}

export interface IStampEvent {
  carnival: IStamp[]
  central: IStamp[]
  tour: IStamp[]
  workshop: IStamp[]
  reward: {
    reward_1: boolean
    reward_2: boolean
  }
}

export interface IStamp {
  department: string
  status: boolean
}
const EStampComponent: React.FC<Props> = ({ stamps, rewards }: Props): JSX.Element => {
  const { Title, Text } = Typography

  const renderStamp = (event: StampEnum) => {
    return stamps[event].map((stamp: IStamp, i: number) => {
      const { style: stampStyle, stampImage } = filterStampVariant(stamp, event)
      return <Image className={styles.image} style={stampStyle} preview={false} key={i} src={stampImage} alt="stamp" />
    })
  }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'นิทรรศการ',
      style: {
        border: 0,
        fontWeight: 'bold',
        fontSize: '16px',
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.carnival)}</div>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Workshop',
      style: {
        border: 0,
        fontWeight: 'bold',
        fontSize: '16px',
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.workshop)}</div>
        </div>
      ),
    },
    {
      key: '3',
      label: 'พี่พาน้องทัวร์',
      style: {
        border: 0,
        fontWeight: 'bold',
        fontSize: '16px',
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.tour)}</div>
        </div>
      ),
    },
    {
      key: '4',
      label: 'ส่วนกลาง',
      style: {
        border: 0,
        fontWeight: 'bold',
        fontSize: '16px',
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.central)}</div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    stampImages.map((stamp: IStampImage) => cacheImage(stamp.image))
  }, [])

  return (
    <div className={styles.eStamp}>
      <Collapse bordered={false} items={items} defaultActiveKey={['1']} style={{ marginBottom: '20px' }} />
      <Title level={3}>ของที่ระลึก</Title>
      <div className={styles.badgeGroup}>
        <div className={`${styles.badge} ${rewards.reward_1 ? styles.receive : ''}`}>
          <Image src={badge1} alt="เข็มกลัด" height={125} preview={false} className={styles.image}></Image>
          <div className={styles.textGroup}>
            <Text strong className={styles.name}>
              เข็มกลัด
            </Text>
            <Text className={styles.status}>{rewards.reward_1 ? '(ได้รับแล้ว)' : '(ยังไม่ได้รับ)'}</Text>
          </div>
        </div>
        <div className={`${styles.badge} ${rewards.reward_2 ? styles.receive : ''}`}>
          <Image src={badge2} alt="เข็มกลัด" height={125} preview={false} className={styles.image}></Image>
          <div className={styles.textGroup}>
            <Text strong className={styles.name}>
              พวงกุญแจ
            </Text>
            <Text className={styles.status}>{rewards.reward_2 ? '(ได้รับแล้ว)' : '(ยังไม่ได้รับ)'}</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EStampComponent
