import { Typography } from 'antd'
import { IDepartmentInfo, IActivity } from '../../../contents/department/departmentInfo'

interface Props {
  department: IDepartmentInfo
}

const ActivityDetail: React.FC<Props> = ({ department }: Props): JSX.Element => {
  const { Title, Paragraph } = Typography

  const renderWorkshopDetails = department.activities.map((activity: IActivity, i: number) => {
    return (
      <div key={i}>
        <Title level={4}>
          {`${(i += 1)}. กิจกรรม : `}
          <span style={{ color: '#F3B34E' }}>{activity.title}</span>
        </Title>
        <Paragraph style={{ color: '#FFFFFF' }}>{activity.description}</Paragraph>
      </div>
    )
  })
  return (
    <div>
      <Title level={3} style={{ textAlign: 'center' }}>
        กิจกรรม
      </Title>
      {renderWorkshopDetails}
    </div>
  )
}

export default ActivityDetail