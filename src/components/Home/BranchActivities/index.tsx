import { Typography } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { branchActivities } from '../../../contents/branchActivities'
import { useEffect } from 'react'
import { cacheImages } from '../../../utils/cacheImage'

const BranchActivities: React.FC = (): JSX.Element => {
  const { Text } = Typography

  useEffect(() => {
    branchActivities.map(({ image }) => cacheImages(image))
  }, [])

  const renderActivities = branchActivities.map((activity, i: number) => {
    return (
      <Link to={activity.link} key={i}>
        <div className={styles.card}>
          <img src={activity.image} alt="image" />
          <Text className={styles.text}>{activity.name}</Text>
        </div>
      </Link>
    )
  })

  return <div className={styles.branchActivities}>{renderActivities}</div>
}

export default BranchActivities
