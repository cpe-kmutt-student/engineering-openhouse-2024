import { Navigate, useParams } from 'react-router-dom'
import { Image, Space, Typography } from 'antd'
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
        {eventInfo.description2 && (
          <div className={styles.description}>
            <Title level={3} style={{ textAlign: 'center' }}>
              {eventInfo.description2.title}
            </Title>
            <Paragraph style={{ color: '#FFFFFF', textIndent: '3em', textJustify: 'auto', textAlign: 'justify' }}>
              {eventInfo.description2.desc}
            </Paragraph>
          </div>
        )}
        {eventInfo.description2Image && (
          <div style={{ textAlign: 'center' }}>
            <Image
              src={eventInfo.description2Image}
              className={styles.descriptionSubImage}
              loading="lazy"
              style={{ borderRadius: '10px' }}
            />
          </div>
        )}
        {eventInfo.description3 && (
          <div className={styles.description}>
            <Title level={3} style={{ textAlign: 'center', marginTop: '30px' }}>
              {eventInfo.description3.title}
            </Title>
            <Paragraph style={{ color: '#FFFFFF', textIndent: '3em', textJustify: 'auto', textAlign: 'justify' }}>
              {eventInfo.description3.desc}
            </Paragraph>
          </div>
        )}
        {eventInfo.description3Image && (
          <div style={{ textAlign: 'center' }}>
            <Image
              src={eventInfo.description3Image}
              className={styles.descriptionSubImage}
              loading="lazy"
              style={{ borderRadius: '10px' }}
            />
          </div>
        )}
        {eventInfo.description4 && (
          <div className={styles.description}>
            <Title level={3} style={{ textAlign: 'center', marginTop: '30px' }}>
              {eventInfo.description4.title}
            </Title>
            <Paragraph style={{ color: '#FFFFFF', textIndent: '3em', textJustify: 'auto', textAlign: 'justify' }}>
              {eventInfo.description4.desc}
            </Paragraph>
          </div>
        )}
        {eventInfo.description4Image && (
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Image
              src={eventInfo.description4Image}
              className={styles.descriptionSubImage}
              loading="lazy"
              style={{ borderRadius: '10px' }}
            />
          </div>
        )}
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
