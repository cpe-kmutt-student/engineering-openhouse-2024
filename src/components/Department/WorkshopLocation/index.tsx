import { Button, Space, Typography } from 'antd'
import { IDepartmentInfo } from '../../../contents/departmentInfo'
import styles from './index.module.scss'
interface Props {
  department: IDepartmentInfo
}

const WorkshopLocation: React.FC<Props> = ({ department }: Props): JSX.Element => {
  const { Title } = Typography

  return (
    <div>
      <Title level={3}>Location</Title>
      <Title level={4}>{department.location}</Title>
      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <div className={styles.map}>
          <iframe
            src={department.gmap}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <Button type="primary">ดูแผนที่ภายในงาน</Button>
      </Space>
    </div>
  )
}

export default WorkshopLocation
