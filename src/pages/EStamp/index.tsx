import styles from './index.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { LoadingPage } from '../Loading'
import EStampComponent, { IStamp } from 'src/components/Profile/EStamp'
import { Alert, Typography } from 'antd'
import { axiosInstance } from 'src/utils/axios'

const EStamp: React.FC = (): JSX.Element => {
  const [stamps, setStamps] = useState<IStamp[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const { Title } = Typography

  const getEStamp = useCallback(async (): Promise<void> => {
    const res = await axiosInstance.get('/api/users/stamp')

    if (res.status === 200) {
      setStamps(res.data)
    }
  }, [])

  useEffect(() => {
    getEStamp().then(() => setLoading(false))
  }, [getEStamp])

  if (loading) return <LoadingPage />

  return (
    <div className={styles.eStampPage}>
      <Title level={3}>E-Stamp</Title>
      <EStampComponent stamps={stamps} />
      <Alert
        message="เงื่อนไขการรับ E-stamp"
        description="การได้รับ E-stamp นั้น จะต้องทำการแสกน QR-code ของกิจกรรม
      นั้นหลังสิ้นสุดกิจกรรมและต้องทำแบบสอบถามให้เสร็จสิ้นจึงจะได้รับ E-stamp ตามประเภทต่าง ๆ"
        type="info"
        className={styles.alert}
        showIcon
        closable
      />
    </div>
  )
}

export default EStamp
