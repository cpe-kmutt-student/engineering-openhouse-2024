import { Button, Space, Typography } from 'antd'
import { IDepartmentInfo } from '../../../contents/departmentInfo'

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
        <Button type="primary">ดูแผนที่ภายในงาน</Button>
      </Space>
    </div>
  )
}

export default WorkshopLocation
