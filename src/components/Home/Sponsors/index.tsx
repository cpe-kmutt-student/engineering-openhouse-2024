import { Typography } from 'antd'
import styles from './index.module.scss'

const Sponsors: React.FC = (): JSX.Element => {
  const { Title, Text } = Typography

  return (
    <div className={styles.sponsors}>
      <Title level={2}>Sponsors</Title>
      <Text>Me and the boys</Text>
      <img src="https://i.ytimg.com/vi/mIag4j4Jt-0/hqdefault.jpg" alt="cunny" />
    </div>
  )
}

export default Sponsors
