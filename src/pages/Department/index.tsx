import styles from './index.module.scss'
import { Navigate, useParams } from 'react-router-dom'
import { IDepartmentInfo, IWorkshop, departmentInfo } from '../../contents/departmentInfo'
import { BASE_PATH } from '../../configs/routes'
import { Button, Space, Typography } from 'antd'
import ImageHeader from '../../components/ImageHeader'

const Department: React.FC = (): JSX.Element => {
  const { departmentInitial } = useParams()

  const department = departmentInfo.filter((info: IDepartmentInfo) => info.name.initial === departmentInitial)[0]

  const { Paragraph, Title } = Typography

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
        <div className={styles.workshopSchedule}></div>
        <div className={styles.location}>
          <Title level={3}>Location</Title>
          <Title level={4}>{department.location}</Title>
          <Space direction="vertical" align="center" style={{ width: '100%' }}>
            <Button type="primary">ดูแผนที่ภายในงาน</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default Department
