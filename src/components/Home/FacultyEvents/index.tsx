import { Typography } from 'antd'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { IEvent, events } from 'src/contents/event/events'
import { EVENT_PATH } from 'src/configs/routes'

const FacultyEvents: React.FC = (): JSX.Element => {
  const { Text } = Typography

  const renderEvents = events.map((event: IEvent, i: number) => {
    return (
      <Link to={EVENT_PATH.replace(':event', event.link)} key={i}>
        <div className={styles.facultyEvent}>
          <img src={event.thumbnail} alt="image" loading="lazy" />
          <Text className={styles.text} style={{ textAlign: 'center' }}>
            {event.title}
          </Text>
        </div>
      </Link>
    )
  })

  return <div className={styles.facultyEvents}>{renderEvents}</div>
}

export default FacultyEvents
