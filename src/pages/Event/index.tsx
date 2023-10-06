import { Navigate, useParams } from 'react-router-dom'
import { Space, Typography } from 'antd'
import { BASE_PATH } from 'src/configs/routes'
import ImageHeader from 'src/components/ImageHeader'
import { IEventInfo, eventActivities } from 'src/contents/event/events'
import styles from './index.module.scss'
import EventSchedule from 'src/components/Event/EventSchedule'
import EventLocation from 'src/components/Event/EventLocation'
import Contact from 'src/components/Event/EventContact'
import { useMemo } from 'react'

const Event: React.FC = (): JSX.Element => {
  const { event } = useParams()

  const { Paragraph, Title, Link } = Typography

  const eventInfo = useMemo(() => eventActivities.filter((info: IEventInfo) => info.link === event)[0], [event])

  if (!event || !eventInfo) return <Navigate to={BASE_PATH} />

  return (
    <div className={styles.eventPage}>
      {eventInfo.image && <ImageHeader title={eventInfo.title} image={eventInfo.image} />}
      <div className={styles.content}>
        <div className={styles.description}>
          <Title level={3} style={{ textAlign: 'center' }}>
            รายละเอียด
          </Title>
          <Paragraph style={{ color: '#FFFFFF', textIndent: '3em', textJustify: 'auto', textAlign: 'justify' }}>
            {eventInfo.description}
          </Paragraph>
        </div>
        {eventInfo.rounds && <EventSchedule rounds={eventInfo.rounds} description={eventInfo.lowerDescription} />}
        {eventInfo.location && <EventLocation location={eventInfo.location} />}
        {eventInfo.contact && <Contact contact={eventInfo.contact} />}
        {eventInfo.social && (
          <div>
            <Space direction="vertical" style={{ width: '100%', marginTop: '20px' }} align="center">
              <Title level={3}>ช่องทางการติดต่อ</Title>
              <Link href={eventInfo.social?.link} style={{ color: '#FFFFFF' }}>
                {eventInfo.social?.title}
              </Link>
            </Space>
          </div>
        )}
      </div>
    </div>
  )
}

export default Event
