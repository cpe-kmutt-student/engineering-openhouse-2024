import { Divider, Modal, Space, Typography } from 'antd'
import styles from './index.module.scss'
import { convertDateLocaleToThai, convertLongDateLocaleToThai } from 'src/utils/date'
import { IEventSchedule } from 'src/contents/eventSchedules'
import { useState } from 'react'
interface Props {
  schedule: IEventSchedule
}

const EventSchedulesModal: React.FC<Props> = ({ schedule }: Props): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { Paragraph, Title, Text } = Typography

  return (
    <>
      <div className={styles.event}>
        <Space direction="vertical" className={styles.schedule}>
          <Title level={4}>{convertDateLocaleToThai(schedule.date)}</Title>
          <Title level={5}>{schedule.time}</Title>
        </Space>
        <Divider type="vertical" className={styles.divider} style={{ backgroundColor: 'rgba(138, 61, 54, 0.5)' }} />
        <Space direction="vertical" className={styles.content}>
          <div className={styles.text}>
            <Text style={{ color: '#FFFFFF' }}>{schedule.title}</Text>
          </div>
          {schedule.description && (
            <Text className={styles.popUpText} onClick={() => setIsModalOpen(true)}>
              อ่านเพิ่มเติม
            </Text>
          )}
        </Space>
      </div>
      <Modal
        title={schedule.title}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        centered
        closeIcon={false}
        okText="ปิด"
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <Paragraph>{schedule.description}</Paragraph>
        <Space direction="vertical">
          <Text strong>วันที่: {convertLongDateLocaleToThai(schedule.date)}</Text>
          <Text strong>เวลา: {schedule.time}</Text>
          <Text strong>สถานที่: {schedule.location}</Text>
        </Space>
      </Modal>
    </>
  )
}

export default EventSchedulesModal
