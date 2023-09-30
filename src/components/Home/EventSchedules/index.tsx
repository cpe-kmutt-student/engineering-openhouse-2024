import { Button, Space, Typography } from 'antd'
import { IEventSchedule, eventSchedules } from 'src/contents/eventSchedules'
import styles from './index.module.scss'
import { useState } from 'react'
import { convertDateLocaleToThai } from 'src/utils/date'

const EVENT_TO_SHOW = 6

const EventSchedules: React.FC = (): JSX.Element => {
  const [eventsToShow, setEventsToShow] = useState<number>(EVENT_TO_SHOW)

  const { Title } = Typography

  const renderEvent = eventSchedules.slice(0, eventsToShow).map((schedule: IEventSchedule, i: number) => {
    return (
      <div className={styles.event} key={i}>
        <Space direction="vertical" className={styles.schedule}>
          <Title level={4}>{convertDateLocaleToThai(schedule.date)}</Title>
          <Title level={5}>{schedule.time}</Title>
        </Space>
        <Space direction="vertical" className={styles.content}>
          <Title level={5}>{schedule.title}</Title>
        </Space>
      </div>
    )
  })

  return (
    <div className={styles.events}>
      {renderEvent}
      {eventsToShow === EVENT_TO_SHOW ||
        (eventSchedules.length !== EVENT_TO_SHOW && (
          <div className={styles.button}>
            <Button type="default" onClick={() => setEventsToShow(eventSchedules.length)}>
              ดูทั้งหมด
            </Button>
          </div>
        ))}
    </div>
  )
}

export default EventSchedules
