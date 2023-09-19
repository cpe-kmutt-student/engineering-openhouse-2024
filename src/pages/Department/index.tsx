import styles from './index.module.scss'
import { Navigate, useParams } from 'react-router-dom'
import { IDepartmentInfo, IWorkshop, IWorkshopSchedule, departmentInfo } from '../../contents/departmentInfo'
import { BASE_PATH } from '../../configs/routes'
import ImageHeader from '../../components/ImageHeader'
import WorkshopSchedule from '../../components/Department/WorkshopSchedule'
import WorkshopLocation from '../../components/Department/WorkshopLocation'
import Contact from '../../components/Department/Contact'
import { Typography } from 'antd'

const Department: React.FC = (): JSX.Element => {
  const { departmentInitial } = useParams()

  const { Paragraph, Title } = Typography

  const department = departmentInfo.filter((info: IDepartmentInfo) => info.name.initial === departmentInitial)[0]
  const sortRoundSchedule = department.workshopSchedule
    .sort((a: IWorkshopSchedule, b: IWorkshopSchedule) => a.round - b.round)
    .map((schedule: IWorkshopSchedule) => {
      return {
        key: schedule.round,
        ...schedule,
      }
    })

  if (!departmentInitial || !department) return <Navigate to={BASE_PATH} />

  const renderWorkshopDetails = department.workshop.map((workshop: IWorkshop, i: number) => {
    return (
      <div className={styles.workshop} key={i}>
        <Title level={4}>{`${(i += 1)}. ${workshop.title}`}</Title>
        <Paragraph>{workshop.description}</Paragraph>
      </div>
    )
  })

  return (
    <div className={styles.departmentPage}>
      <ImageHeader title={department.name.th} subTitle={department.name.en} image={department.image} />
      <div className={styles.content}>
        <div className={styles.description}>
          <Title level={3}>Description</Title>
          <Paragraph>{department.description}</Paragraph>
        </div>
        <div className={styles.workshopDetails}>
          <Title level={3}>Workshop Detail</Title>
          {renderWorkshopDetails}
        </div>
        <WorkshopSchedule schedule={sortRoundSchedule} />
        <WorkshopLocation department={department} />
        <Contact contact={department.contact} />
      </div>
    </div>
  )
}

export default Department
