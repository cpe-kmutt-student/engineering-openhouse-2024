import { Typography } from 'antd'
import styles from './index.module.scss'
import { imageSlide } from 'src/contents/imageSlide'
import ImageSlide from 'src/components/Home/ImageSlide'
import DepartmentsWorkshop from 'src/components/Home/Departments'
import FacultyActivities from 'src/components/Home/FacultyActivities'
import Sponsors from 'src/components/Sponsors'

const Home: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <>
      <div className={styles.homePage}>
        <ImageSlide images={imageSlide} />
        <div className={styles.content}>
          <div className={styles.activitySchedules}>
            <Title level={2} style={{ textAlign: 'center' }}>
              กิจกรรม
            </Title>
          </div>
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
            <FacultyActivities />
          </div>
          <Sponsors />
        </div>
      </div>
    </>
  )
}

export default Home
