import { Typography } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { ENGINEER_STARTER_TOUR_PATH } from '../../../configs/routes'

const Activities: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className={styles.activities}>
      <Link to={ENGINEER_STARTER_TOUR_PATH}>
        <div className={styles.activity}>
          <Title level={4}>พี่พาน้องทัวร์</Title>
        </div>
      </Link>
      <Link to={ENGINEER_STARTER_TOUR_PATH}>
        <div className={styles.activity}>
          <Title level={4}>Inno-X</Title>
        </div>
      </Link>
      <Link to={ENGINEER_STARTER_TOUR_PATH}>
        <div className={styles.activity}>
          <Title level={4}>Carnival Market</Title>
        </div>
      </Link>
      <Link to={ENGINEER_STARTER_TOUR_PATH}>
        <div className={styles.activity}>
          <Title level={4}>Talk Show</Title>
        </div>
      </Link>
    </div>
  )
}

export default Activities
