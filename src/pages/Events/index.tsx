import EventSchedules from 'src/components/Home/EventSchedules'
import styles from './index.module.scss'
import { Typography } from 'antd'
import Sponsors from 'src/components/Sponsors'

const Events: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className={styles.events}>
      <Title level={2} style={{ textAlign: 'center' }}>
        กิจกรรมทั้งหมด
      </Title>
      <EventSchedules showAll />
      <Sponsors />
    </div>
  )
}

export default Events
