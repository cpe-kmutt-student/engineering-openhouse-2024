import { Button, Divider, Space, Typography } from 'antd'
import { IEventSchedule, eventSchedules } from 'src/contents/eventSchedules'
import styles from './index.module.scss'
import { useState } from 'react'
import { convertDateLocaleToThai } from 'src/utils/date'

const EVENT_TO_SHOW = 6

const EventSchedules: React.FC = (): JSX.Element => {
  const [eventsToShow, setEventsToShow] = useState<number>(EVENT_TO_SHOW)

  const { Title, Text } = Typography

  const renderEvent = eventSchedules.slice(0, eventsToShow).map((schedule: IEventSchedule, i: number) => {
    return (
      <div className={styles.event} key={i}>
        <Space direction="vertical" className={styles.schedule}>
          <Title level={4}>{convertDateLocaleToThai(schedule.date)}</Title>
          <Title level={5}>{schedule.time}</Title>
        </Space>
        <Divider type="vertical" className={styles.divider} style={{ backgroundColor: 'rgba(138, 61, 54, 0.5)' }} />
        <Space direction="vertical" className={styles.content}>
          <div className={styles.text}>
            <Text style={{ color: '#FFFFFF' }}>{schedule.title}</Text>
          </div>
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
