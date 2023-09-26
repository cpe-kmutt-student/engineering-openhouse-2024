import styles from './index.module.scss'
import { Navigate, useParams } from 'react-router-dom'
import { Typography } from 'antd'
import { IDepartmentInfo, IWorkshopSchedule, departmentInfo } from 'src/contents/department/departmentInfo'
import { BASE_PATH } from 'src/configs/routes'
import ImageHeader from 'src/components/ImageHeader'
import WorkshopDetail from 'src/components/Department/WorkshopDetail'
import WorkshopSchedule from 'src/components/Department/WorkshopSchedule'
import DepartmentLocation from 'src/components/Department/DepartmentLocation'
import Contact from 'src/components/Department/Contact'

const Department: React.FC = (): JSX.Element => {
  const { departmentInitial } = useParams()

  const { Paragraph, Title } = Typography

  const department = departmentInfo.filter((info: IDepartmentInfo) => info.name.initial === departmentInitial)[0]

  if (!departmentInitial || !department) return <Navigate to={BASE_PATH} />

  const sortRoundSchedule = department.workshopSchedule.map((schedule: IWorkshopSchedule, i: number) => {
    return {
      key: i,
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
        <DepartmentLocation department={department} />
        <Contact contact={department.contact} />
      </div>
    </div>
  )
}

export default Department
