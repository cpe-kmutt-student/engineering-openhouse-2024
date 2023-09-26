import { Typography } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { EVENT_PATH } from 'src/configs/routes'
import { IEventActivity, eventActivities } from 'src/contents/event/events'

const EventActivities: React.FC = (): JSX.Element => {
  const { Text } = Typography

  const renderEvents = eventActivities.map((event: IEventActivity, i: number) => {
    return (
      <Link to={EVENT_PATH.replace(':event', event.link)} key={i} replace>
        <div className={styles.eventActivity}>
          <img src={event.thumbnail} alt="image" loading="lazy" />
          <Text className={styles.text} style={{ textAlign: 'center' }}>
            {event.title}
          </Text>
        </div>
      </Link>
    )
  })

  return <div className={styles.eventActivities}>{renderEvents}</div>
}

export default EventActivities
