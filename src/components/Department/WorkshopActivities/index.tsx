import { Typography } from 'antd'
import { IActivity } from 'src/contents/department/departmentInfo'

interface Props {
  activities: IActivity[]
}

const WorkshopActivities: React.FC<Props> = ({ activities }: Props): JSX.Element => {
  const { Title, Paragraph } = Typography

  const renderWorkshopDetails = activities.map((activity: IActivity, i: number) => {
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

export default WorkshopActivities
