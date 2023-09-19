import { Space, Typography } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { ENGINEER_STARTER_TOUR_PATH } from '../../../configs/routes'

const Activities: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className={styles.activities}>
      <Space direction="vertical">
        <Link to={ENGINEER_STARTER_TOUR_PATH}>
          <Title level={4}>พี่พาน้องทัวร์</Title>
        </Link>
        <Title level={4}>Inno-X</Title>
        <Title level={4}>Carnival Market</Title>
        <Title level={4}>Talk Show</Title>
      </Space>
    </div>
  )
}

export default Activities
