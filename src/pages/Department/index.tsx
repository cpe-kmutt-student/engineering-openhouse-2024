import styles from './index.module.scss'
import { Navigate, useParams } from 'react-router-dom'
import { IDepartmentInfo, departmentInfo } from 'src/contents/department/departmentInfo'
import { BASE_PATH } from 'src/configs/routes'
import ImageHeader from 'src/components/ImageHeader'
import WorkshopActivities from 'src/components/Department/WorkshopActivities'
import WorkshopSchedule from 'src/components/Department/WorkshopSchedule'
import DepartmentLocation from 'src/components/Department/DepartmentLocation'
import Contact from 'src/components/Department/Contact'
import { useMemo } from 'react'
import SubWorkshopSchedule from 'src/components/Department/SubWorkshopSchedule'
import RCDetail from 'src/components/Department/RCDetail'

const Department: React.FC = (): JSX.Element => {
  const { departmentInitial } = useParams()

  const department = useMemo(
    () => departmentInfo.filter((info: IDepartmentInfo) => info.name.initial === departmentInitial)[0],
    [departmentInitial],
  )

  if (!departmentInitial || !department) return <Navigate to={BASE_PATH} />

  return (
    <div className={styles.departmentPage}>
      <ImageHeader title={department.name.th} subTitle={department.name.en} image={department.image} />
      <div className={styles.content}>
        {department.activities && <WorkshopActivities activities={department.activities} />}
        {department.workshopSchedule && <WorkshopSchedule schedule={department.workshopSchedule} />}
        {department.subWorkshopSchedule && <SubWorkshopSchedule subWorkshop={department.subWorkshopSchedule} />}
        {department.rc && <RCDetail rc={department.rc} />}
        <DepartmentLocation location={department.location} />
        <Contact contact={department.contact} />
      </div>
    </div>
  )
}

export default Department
