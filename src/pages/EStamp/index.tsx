import styles from './index.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { LoadingPage } from '../Loading'
import EStampComponent, { IStamp, IStampEvent } from 'src/components/Profile/EStamp'
import { Alert, Divider, Typography } from 'antd'
import { axiosInstance } from 'src/utils/axios'
import ProfileNav from 'src/components/Profile/ProfileNav'
import { BorderOutlined, CheckSquareOutlined } from '@ant-design/icons'

const EStamp: React.FC = (): JSX.Element => {
  const [stamps, setStamps] = useState<IStampEvent>({
    carnival: [],
    central: [],
    tour: [],
    workshop: [],
    reward: {
      reward_1: false,
      reward_2: false,
    },
  })
  const [loading, setLoading] = useState<boolean>(true)
  const [Reward, setReward] = useState<{
    carnival: number
    central: number
    tour: number
    workshop: number
  }>({
    carnival: 0,
    central: 0,
    tour: 0,
    workshop: 0,
  })

  const { Title, Text } = Typography

  const filterStampRewardLength = (event: IStamp[]) => {
    return event.filter((element: IStamp) => element.status === true).length
  }

  const getEStamp = useCallback(async (): Promise<void> => {
    const res = await axiosInstance.get('/api/users/stamp')

    if (res.status === 200) {
      setStamps(res.data.data)
      setReward({
        carnival: filterStampRewardLength(res.data.data.carnival),
        central: filterStampRewardLength(res.data.data.central),
        tour: filterStampRewardLength(res.data.data.tour),
        workshop: filterStampRewardLength(res.data.data.workshop),
      })
    }
  }, [])

  useEffect(() => {
    getEStamp().then(() => setLoading(false))
  }, [getEStamp])

  if (loading) return <LoadingPage />

  // if (!isTodayOpenHouse()) return <Navigate to={BASE_PATH} replace />

  return (
    <div className={styles.eStampPage}>
      <ProfileNav />
      <Title level={3}>E-Stamp</Title>
      <Alert
        message="เงื่อนไขการรับ E-stamp"
        description="การได้รับ E-stamp นั้น จะต้องทำการแสกน QR-code ของกิจกรรม
      นั้นหลังสิ้นสุดกิจกรรมและต้องทำแบบสอบถามให้เสร็จสิ้นจึงจะได้รับ E-stamp ตามประเภทต่าง ๆ"
        type="info"
        className={styles.alert}
        showIcon
        closable
      />
      <EStampComponent stamps={stamps} rewards={stamps.reward} />
      <div className={styles.rewardCondition}>
        <Title level={3}>เงื่อนไขการรับของที่ระลึก</Title>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            ลงทะเบียนส่วนกลาง
          </Text>
          <Text strong className={styles.text}>
            {Reward.central >= 1 ? 1 : Reward.central}/{1}
          </Text>
          {Reward.central >= 1 ? (
            <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
          ) : (
            <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
          )}
        </div>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            พาน้องทัวร์ 1 รอบ
          </Text>
          <Text strong className={styles.text}>
            {Reward.tour >= 1 ? 1 : Reward.tour}/{1}
          </Text>
          {Reward.tour >= 1 ? (
            <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
          ) : (
            <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
          )}
        </div>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            กิจกรรม Workshop 1 รอบ
          </Text>
          <Text strong className={styles.text}>
            {Reward.workshop >= 1 ? 1 : Reward.workshop}/{1}
          </Text>
          {Reward.workshop >= 1 ? (
            <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
          ) : (
            <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
          )}
        </div>
        <Divider style={{ color: '#FFFFFF', fontSize: '18px', border: '#FFFFFF' }}>และ</Divider>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            ลงทะเบียนส่วนกลาง
          </Text>
          <Text strong className={styles.text}>
            {Reward.central >= 1 ? 1 : Reward.central}/{1}
          </Text>
          {Reward.central >= 1 ? (
            <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
          ) : (
            <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
          )}
        </div>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            กิจกรรมส่วนภาค 3 ภาค
          </Text>
          <Text strong className={styles.text}>
            {Reward.carnival >= 3 ? 3 : Reward.carnival}/{3}
          </Text>
          {Reward.carnival >= 3 ? (
            <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
          ) : (
            <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
          )}
        </div>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            กิจกรรม Workshop 1 รอบ
          </Text>
          <Text strong className={styles.text}>
            {Reward.workshop >= 1 ? 1 : Reward.workshop}/{1}
          </Text>
          {Reward.workshop >= 1 ? (
            <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
          ) : (
            <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
          )}
        </div>
        <Divider style={{ color: '#FFFFFF', fontSize: '18px', border: '#FFFFFF' }}>หรือ</Divider>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            ลงทะเบียนส่วนกลาง
          </Text>
          <Text strong className={styles.text}>
            {Reward.central >= 1 ? 1 : Reward.central}/{1}
          </Text>
          {Reward.central >= 1 ? (
            <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
          ) : (
            <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
          )}
        </div>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            กิจกรรม Workshop 2 รอบ
          </Text>
          <Text strong className={styles.text}>
            {Reward.workshop >= 2 ? 2 : Reward.workshop}/{2}
          </Text>
          {Reward.workshop >= 2 ? (
            <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
          ) : (
            <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
          )}
        </div>

        <div className={styles.description}>
          <Text italic>*สามารถรับของที่ระลึกได้ที่จุดลงทะเบียน ใต้อาคารเรียนรวม 4 และ อาคารวิศววัฒนะ (ตึกแดง)*</Text>
        </div>
      </div>
    </div>
  )
}

export default EStamp
