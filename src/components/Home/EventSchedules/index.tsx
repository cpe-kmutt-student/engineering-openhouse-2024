import { Button } from 'antd'
import { IEventSchedule, eventSchedules } from 'src/contents/eventSchedules'
import styles from './index.module.scss'
import { useState } from 'react'
import EventSchedulesModal from './Modal'

const EVENT_TO_SHOW = 6

const EventSchedules: React.FC = (): JSX.Element => {
  const [eventsToShow, setEventsToShow] = useState<number>(EVENT_TO_SHOW)

  const renderEvent = eventSchedules.slice(0, eventsToShow).map((schedule: IEventSchedule, i: number) => {
    return <EventSchedulesModal schedule={schedule} key={i} />
  })

  return (
    <>
      <div className={styles.events}>{renderEvent}</div>
      {eventSchedules.length !== EVENT_TO_SHOW && (
        <div className={styles.button}>
          <Button type="default" onClick={() => setEventsToShow(eventSchedules.length)}>
            ดูทั้งหมด
          </Button>
        </div>
      )}
    </>
  )
}

export default EventSchedules
