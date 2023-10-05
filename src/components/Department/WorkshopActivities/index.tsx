import { Space, Typography } from 'antd'
import { IActivity, ISubActivity } from 'src/contents/department/departmentInfo'

interface Props {
  activities: IActivity[]
}

const WorkshopActivities: React.FC<Props> = ({ activities }: Props): JSX.Element => {
  const { Title, Paragraph } = Typography

  const renderWorkshopSubDetails = (subDetails: ISubActivity[]) => {
    return subDetails.map((subDetail: ISubActivity, i: number) => {
      return (
        <Space direction="vertical" key={i}>
          <Title level={4} style={{ color: '#F3B34E' }}>
            {subDetail.name}
          </Title>
          <Paragraph style={{ color: '#FFFFFF', textJustify: 'auto', textAlign: 'justify' }}>
            {subDetail.description}
          </Paragraph>
        </Space>
      )
    })
  }

  const renderWorkshopDetails = activities.map((activity: IActivity, i: number) => {
    return (
      <div key={i}>
        <Title level={4}>
          {`${(i += 1)}. กิจกรรม : `}
          <span style={{ color: '#F3B34E' }}>{activity.title}</span>
        </Title>
        <Paragraph style={{ color: '#FFFFFF', textIndent: '3em', textJustify: 'auto', textAlign: 'justify' }}>
          {activity.description}
        </Paragraph>
        {activity.subDescription && renderWorkshopSubDetails(activity.subDescription)}
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
