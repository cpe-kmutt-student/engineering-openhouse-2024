import { Typography } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { cacheImage } from '../../../utils/cacheImage'
import { departments } from '../../../contents/departments'
import { WORKSHOP_DEPARTMENT_PATH } from '../../../configs/routes'

const DepartmentsWorkshop: React.FC = (): JSX.Element => {
  const { Text } = Typography

  useEffect(() => {
    departments.map(({ image }) => cacheImage(image))
  }, [])

  const renderActivities = departments.map((department, i: number) => {
    return (
      <Link to={WORKSHOP_DEPARTMENT_PATH.replace(':departmentInitial', department.link)} key={i}>
        <div className={styles.card}>
          <img src={department.image} alt="image" loading="lazy" />
          <Text className={styles.text}>{department.name}</Text>
        </div>
      </Link>
    )
  })

  return <div className={styles.branchActivities}>{renderActivities}</div>
}

export default DepartmentsWorkshop
