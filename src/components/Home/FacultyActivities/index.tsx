import { Typography } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { ENGINEER_STARTER_TOUR_PATH } from 'src/configs/routes'

const FacultyActivities: React.FC = (): JSX.Element => {
  const { Text } = Typography

  const IMAGE_MOCKUP =
    'https://campus.campus-star.com/app/uploads/2020/10/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%9E%E0%B8%AB%E0%B8%B8%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3-LX-1_resize.jpg'

  return (
    <div className={styles.activities}>
      <Link to={ENGINEER_STARTER_TOUR_PATH}>
        <div className={styles.activity}>
          <img src={IMAGE_MOCKUP} alt="image" loading="lazy" />
          <Text className={styles.text} style={{ textAlign: 'center' }}>
            พี่พาน้องทัวร์
          </Text>
        </div>
      </Link>
      <Link to={ENGINEER_STARTER_TOUR_PATH}>
        <div className={styles.activity}>
          <img src={IMAGE_MOCKUP} alt="image" loading="lazy" />
          <Text className={styles.text} style={{ textAlign: 'center' }}>
            Inno-X
          </Text>
        </div>
      </Link>
      <Link to={ENGINEER_STARTER_TOUR_PATH}>
        <div className={styles.activity}>
          <img src={IMAGE_MOCKUP} alt="image" loading="lazy" />
          <Text className={styles.text} style={{ textAlign: 'center' }}>
            Carnival Market
          </Text>
        </div>
      </Link>
      <Link to={ENGINEER_STARTER_TOUR_PATH}>
        <div className={styles.activity}>
          <img src={IMAGE_MOCKUP} alt="image" loading="lazy" />
          <Text className={styles.text} style={{ textAlign: 'center' }}>
            Talk Show
          </Text>
        </div>
      </Link>
    </div>
  )
}

export default FacultyActivities
