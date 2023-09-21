import { Typography } from 'antd'
import { imageSlide } from '../../contents/imageSlide'
import styles from './index.module.scss'
import ImageSlide from '../../components/Home/ImageSlide'
import DepartmentsWorkshop from '../../components/Home/Departments'
import Activities from '../../components/Home/Activities'
import Sponsors from '../../components/Sponsors'

const Home: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <>
      <div className={styles.homePage}>
        <ImageSlide images={imageSlide} />
        <div className={styles.content}>
          <div className={styles.departmentActivities}>
            <Title level={2} style={{ textAlign: 'center' }}>
              กิจกรรมส่วนภาควิชา
            </Title>
            <DepartmentsWorkshop />
          </div>
          <div className={styles.collegeActivities}>
            <Title level={2} style={{ textAlign: 'center' }}>
              กิจกรรมส่วนกลาง
            </Title>
            <Activities />
          </div>
          <Sponsors />
        </div>
      </div>
    </>
  )
}

export default Home
