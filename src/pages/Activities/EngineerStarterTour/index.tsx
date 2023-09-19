import ImageHeader from '../../../components/ImageHeader'
import styles from '../inedx.module.scss'

const EngineerStarterTour: React.FC = (): JSX.Element => {
  return (
    <div className={styles.activityPage}>
      <ImageHeader
        title="กิจกรรมพี่พาน้องทัวร์"
        subTitle="Engineering Starter Tour"
        image="https://i0.wp.com/gamertagzero.com/wp-content/uploads/2021/11/chrome_6MJ2jWz3rx.jpg?fit=800%2C519&ssl=1"
      />
    </div>
  )
}

export default EngineerStarterTour
