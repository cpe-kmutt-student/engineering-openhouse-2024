import { Typography } from 'antd'
import styles from './index.module.scss'

const Sponsors: React.FC = (): JSX.Element => {
  const { Title, Text } = Typography

  return (
    <div className={styles.sponsors}>
      <Title level={2}>Sponsors</Title>
      <Text>Me and the boys</Text>
      <img src="https://i.kym-cdn.com/photos/images/newsfeed/002/266/457/538.png" alt="cunny" loading="lazy" />
    </div>
  )
}

export default Sponsors
