import { Button, Space, Typography } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { ABOUT_PATH } from 'src/configs/routes'
import { IEventInfo } from 'src/contents/event/events'
interface Props {
  location: IEventInfo['location']
}

const EventLocation: React.FC<Props> = ({ location }: Props): JSX.Element => {
  const { Title, Text } = Typography

  return (
    <div>
      <Title level={3} style={{ textAlign: 'center' }}>
        สถานที่
      </Title>
      <div className={styles.description}>
        <Text style={{ color: '#FFFFFF', fontSize: '18px' }}>{location.text}</Text>
      </div>
      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <div className={styles.map}>
          <iframe
            src={location.map}
            style={{ border: 0 }}
            allowFullScreen={false}
            className={styles.googleMap}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <Link to={ABOUT_PATH}>
          <Button type="default" style={{ border: 'none' }}>
            ดูแผนที่ภายในงาน
          </Button>
        </Link>
      </Space>
    </div>
  )
}

export default EventLocation
