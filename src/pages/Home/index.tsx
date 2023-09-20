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
          <Title level={2}>กิจกรรมส่วนภาควิชา</Title>
          <div className={styles.departmentsWorkshop}>
            <DepartmentsWorkshop />
          </div>
          <Title level={2}>กิจกรรมส่วนกลาง</Title>
          <Activities />
          <Sponsors />
        </div>
      </div>
    </>
  )
}

export default Home
