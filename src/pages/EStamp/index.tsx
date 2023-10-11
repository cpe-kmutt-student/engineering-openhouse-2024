import styles from './index.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { LoadingPage } from '../Loading'
import EStampComponent, { IStampEvent } from 'src/components/Profile/EStamp'
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

  const { Title, Text } = Typography

  const getEStamp = useCallback(async (): Promise<void> => {
    const res = await axiosInstance.get('/api/users/stamp')

    if (res.status === 200) {
      setStamps(res.data.data)
    }
  }, [])

  useEffect(() => {
    getEStamp().then(() => setLoading(false))
  }, [getEStamp])

  if (loading) return <LoadingPage />

  // if (!isTodayOpenHouse()) return <Navigate to={BASE_PATH} replace />

  // TODO : Reward conditions logics

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
            เก็บ E-Stamp เวทีกลาง
          </Text>
          <Text strong className={styles.text}>
            {1}/{1}
          </Text>
          <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
        </div>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            สะสมซุ้มกิจกรรมครบ 5 ดวง
          </Text>
          <Text strong className={styles.text}>
            {1}/{5}
          </Text>
          <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
        </div>
        <Divider style={{ color: '#FFFFFF', fontSize: '18px', border: '#FFFFFF' }}>หรือ</Divider>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            เก็บ E-Stamp เวทีกลาง
          </Text>
          <Text strong className={styles.text}>
            {1}/{1}
          </Text>
          <CheckSquareOutlined style={{ color: '#ffb031', fontSize: '25px' }} />
        </div>
        <div className={styles.condition}>
          <Text strong className={styles.text}>
            สะสม E-Stamp Workshop ครบ 2 ดวง
          </Text>
          <Text strong className={styles.text}>
            {1}/{2}
          </Text>
          <BorderOutlined style={{ color: '#FFFFFF', fontSize: '25px' }} />
        </div>
        <div className={styles.description}>
          <Text italic>*สามารถรับของที่ระลึกได้ที่จุดลงทะเบียน ใต้อาคารเรียนรวม 4*</Text>
        </div>
      </div>
    </div>
  )
}

export default EStamp
