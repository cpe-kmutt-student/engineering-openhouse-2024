import { Typography } from 'antd'
import Hello from '../../components/Hello'
import ImageSlide from '../../components/ImageSlide'
import { imageSlide } from '../../contents/imageSlide'
import styles from './index.module.scss'

const Landing: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className={styles.landingPage}>
      <Title>KMUTT Engineering Carnival 2024</Title>
      <Hello />
      <ImageSlide images={imageSlide} />
    </div>
  )
}

export default Landing
