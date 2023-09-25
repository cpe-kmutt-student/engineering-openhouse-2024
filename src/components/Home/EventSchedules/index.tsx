import { Button, Space, Typography } from 'antd'
import { IEvent, events } from 'src/contents/events'
import styles from './index.module.scss'
import { useState } from 'react'
import { convertDateLocaleToThai } from 'src/utils/date'

const EVENT_TO_SHOW = 6

const EventSchedules: React.FC = (): JSX.Element => {
  const [eventsToShow, setEventsToShow] = useState<number>(EVENT_TO_SHOW)

  const { Title } = Typography

  const renderEvent = events.slice(0, eventsToShow).map((event: IEvent, i: number) => {
    return (
      <div className={styles.event} key={i}>
        <Space direction="vertical" className={styles.schedule}>
          <Title level={3}>{convertDateLocaleToThai(event.date)}</Title>
          <Title level={4}>{event.time}</Title>
        </Space>
        <Space direction="vertical" className={styles.content}>
          <Title level={4}>{event.title}</Title>
        </Space>
      </div>
    )
  })

  return (
    <div className={styles.events}>
      {renderEvent}
      {eventsToShow === EVENT_TO_SHOW ||
        (events.length !== EVENT_TO_SHOW && (
          <div className={styles.button}>
            <Button type="default" onClick={() => setEventsToShow(events.length)}>
              ดูทั้งหมด
            </Button>
          </div>
        ))}
    </div>
  )
}

export default EventSchedules
