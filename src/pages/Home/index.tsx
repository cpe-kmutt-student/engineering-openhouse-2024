import { Typography } from 'antd'
import { imageSlide } from '../../contents/imageSlide'
import styles from './index.module.scss'
import ImageSlide from '../../components/Home/ImageSlide'
import BranchActivities from '../../components/Home/Departments'
import Activities from '../../components/Home/Activities'
import Sponsors from '../../components/Home/Sponsors'

const Home: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className={styles.homePage}>
      <ImageSlide images={imageSlide} />
      <Title level={2}>กิจกรรมส่วนภาควิชา</Title>
      <BranchActivities />
      <Title level={2}>กิจกรรมส่วนกลาง</Title>
      <Activities />
      <Sponsors />
    </div>
  )
}

export default Home
