import styles from './index.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { LoadingPage } from '../Loading'
import EStampComponent, { IStamp } from 'src/components/Profile/EStamp'
import { Typography } from 'antd'
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
    setLoading(false)
  }, [getEStamp])

  if (loading) return <LoadingPage />

  return (
    <div className={styles.eStampPage}>
      <Title level={3}>E-Stamp</Title>
      <EStampComponent stamps={stamps} />
    </div>
  )
}

export default EStamp
