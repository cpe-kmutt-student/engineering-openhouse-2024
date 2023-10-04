import { Collapse, CollapseProps, Image, Typography } from 'antd'
import styles from './index.module.scss'
import { stampImages, IStampImage, StampEnum } from 'src/contents/stamps'
import { DepartmentEnum } from 'src/contents/department/enum'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { checkStampWithDepartment, checkStampWithoutDepartment } from 'src/utils/stamp'

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
  console.log(stamps)

  const renderStamp = (event: StampEnum) => {
    return stampImages
      .filter((stamp: IStampImage) => stamp.detail === StampEnum[event])
      .map((stamp: IStampImage, i: number) => {
        return (
          <Image
            className={styles.image}
            preview={false}
            key={i}
            src={
              stamp.department
                ? checkStampWithDepartment(stamp, event, stampsMockup)
                : checkStampWithoutDepartment(stamp, event, stampsMockup)
            }
            alt="stamp"
          />
        )
      })
  }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'นิทรรศการ',
      style: {
        border: 0,
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.Openhouse)}</div>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Workshop',
      style: {
        border: 0,
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.Workshop)}</div>
        </div>
      ),
    },
    {
      key: '3',
      label: 'พี่พาน้องทัวร์',
      style: {
        border: 0,
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.Tour)}</div>
        </div>
      ),
    },
    {
      key: '4',
      label: 'ส่วนกลาง',
      style: {
        border: 0,
      },
      children: (
        <div className={styles.stamps}>
          <div className={styles.stampImages}>{renderStamp(StampEnum.Center)}</div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    stampImages.map((stamp: IStampImage) => {
      cacheImage(stamp.stampDisable)
      cacheImage(stamp.stampEnable)
    })
  }, [])

  return (
    <div className={styles.eStamp}>
      <Collapse bordered={false} items={items} defaultActiveKey={['1']} style={{ marginBottom: '20px' }} />
      {/* <div className={styles.stamps}>
        <Title level={3}>นิทรรศการ</Title>
        <div className={styles.stampImages}>{renderStamp(StampEnum.Openhouse)}</div>
      </div>
      <div className={styles.stamps}>
        <Title level={3}>Workshop</Title>
        <div className={styles.stampImages}>{renderStamp(StampEnum.Workshop)}</div>
      </div>
      <div className={styles.stamps}>
        <Title level={3}>พี่พาน้องทัวร์</Title>
        <div className={styles.stampImages}>{renderStamp(StampEnum.Tour)}</div>
      </div>
      <div className={styles.stamps}>
        <Title level={3}>ส่วนกลาง</Title>
        <div className={styles.stampImages}>{renderStamp(StampEnum.Center)}</div>
      </div> */}
    </div>
  )
}

export default EStampComponent
