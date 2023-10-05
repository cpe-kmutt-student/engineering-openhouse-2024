import { Typography } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { EVENT_PATH } from 'src/configs/routes'
import { IEventInfo, eventActivities } from 'src/contents/event/events'

const EventActivities: React.FC = (): JSX.Element => {
  const { Text } = Typography

  const renderEvents = eventActivities.map((event: IEventInfo, i: number) => {
    return event.linkable && event.link ? (
      <Link to={EVENT_PATH.replace(':event', event.link)} key={i}>
        <div className={styles.eventActivity}>
          <img src={event.thumbnail} alt="image" loading="lazy" />
          <div className={styles.title}>
            <Text className={styles.text} style={{ textAlign: 'center' }}>
              {event.title}
            </Text>
          </div>
        </div>
      </Link>
    ) : (
      <div className={styles.eventActivity} key={i}>
        <img src={event.thumbnail} alt="image" loading="lazy" />
        <div className={styles.title}>
          <Text className={styles.text} style={{ textAlign: 'center' }}>
            {event.title}
          </Text>
        </div>
      </div>
    )
  })

  return <div className={styles.eventActivities}>{renderEvents}</div>
}

export default EventActivities
