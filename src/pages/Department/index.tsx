import styles from './index.module.scss'
import { Navigate, useParams } from 'react-router-dom'
import { BASE_PATH } from '../../configs/routes'
import ImageHeader from '../../components/ImageHeader'
import WorkshopSchedule from '../../components/Department/WorkshopSchedule'
import WorkshopLocation from '../../components/Department/WorkshopLocation'
import Contact from '../../components/Department/Contact'
import { Typography } from 'antd'
import WorkshopDetail from '../../components/Department/WorkshopDetail'
import { IDepartmentInfo, IWorkshopSchedule, departmentInfo } from '../../contents/department/departmentInfo'

const Department: React.FC = (): JSX.Element => {
  const { departmentInitial } = useParams()

  const { Paragraph, Title } = Typography

  const department = departmentInfo.filter((info: IDepartmentInfo) => info.name.initial === departmentInitial)[0]

  if (!departmentInitial || !department) return <Navigate to={BASE_PATH} />

  const sortRoundSchedule = department.workshopSchedule
    .sort((a: IWorkshopSchedule, b: IWorkshopSchedule) => a.round - b.round)
    .map((schedule: IWorkshopSchedule) => {
      return {
        key: schedule.round,
        ...schedule,
      }
    })

  return (
    <div className={styles.departmentPage}>
      <ImageHeader title={department.name.th} subTitle={department.name.en} image={department.image} />
      <div className={styles.content}>
        <div className={styles.description}>
          <Title level={3} style={{ textAlign: 'center' }}>
            รายละเอียด
          </Title>
          <Paragraph style={{ color: '#FFFFFF' }}>{department.description}</Paragraph>
        </div>
        <WorkshopDetail department={department} />
        <WorkshopSchedule schedule={sortRoundSchedule} />
        <WorkshopLocation department={department} />
        <Contact contact={department.contact} />
      </div>
    </div>
  )
}

export default Department
