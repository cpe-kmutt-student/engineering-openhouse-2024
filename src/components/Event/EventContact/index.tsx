import { Space, Typography } from 'antd'
import { IEventInfo } from 'src/contents/event/events'

interface Props {
  contact: IEventInfo['contact']
}

const Contact: React.FC<Props> = ({ contact }: Props): JSX.Element => {
  const { Title, Text } = Typography

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%', marginTop: '20px' }} align="center">
        <Title level={3}>ช่องทางการติดต่อ</Title>
        <Text strong style={{ color: '#FFFFFF' }}>
          {contact?.name}
        </Text>
        <Text strong style={{ color: '#FFFFFF' }}>
          โทร {contact?.tel}
        </Text>
      </Space>
    </div>
  )
}

export default Contact
