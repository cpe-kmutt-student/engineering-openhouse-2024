import { IEventSchedule, eventSchedules } from 'src/contents/eventSchedules'
import styles from './index.module.scss'
import EventSchedulesModal from './Modal'
import { useMemo } from 'react'

const EVENT_TO_SHOW = 6

interface Props {
  showAll: boolean
}

const EventSchedules: React.FC<Props> = ({ showAll }: Props): JSX.Element => {
  const renderEvent = useMemo(() => {
    return eventSchedules
      .slice(0, showAll ? eventSchedules.length : EVENT_TO_SHOW)
      .map((schedule: IEventSchedule, i: number) => {
        return <EventSchedulesModal schedule={schedule} key={i} />
      })
  }, [showAll])

  return <div className={styles.events}>{renderEvent}</div>
}

export default EventSchedules
