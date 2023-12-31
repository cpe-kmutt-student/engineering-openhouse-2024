import { Space, Typography } from 'antd'
import styles from './index.module.scss'
import { IActivityRound, IActivitySchedule } from 'src/contents/event/events'

interface Props {
  rounds: IActivityRound[]
  description?: string
}

const EventSchedule: React.FC<Props> = ({ rounds, description }: Props): JSX.Element => {
  const { Title, Text } = Typography

  const renderTableRow = (schedules: IActivitySchedule[]) => {
    return schedules.map((schedule: IActivitySchedule, i: number) => {
      return (
        <tr key={i}>
          <td>{schedule.time}</td>
          <td>{schedule.amount}</td>
        </tr>
      )
    })
  }

  const renderEventRounds = rounds.map((round: IActivityRound, i: number) => {
    return (
      <div key={i}>
        <Title level={4} style={{ textAlign: 'center' }}>
          {round.title}
        </Title>
        <div className={styles.titleList}>
          {round.list &&
            round.list.map((text: string, i: number) => (
              <Text key={i} style={{ color: '#f3b34e', fontSize: '16px' }}>
                {text}
              </Text>
            ))}
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>เวลา</th>
              <th>จำนวนรับ</th>
            </tr>
          </thead>
          <tbody>{renderTableRow(round.schedules)}</tbody>
        </table>
      </div>
    )
  })

  return (
    <div>
      <Title level={3} style={{ textAlign: 'center' }}>
        ตารางกิจกรรม
      </Title>
      <Title level={4} style={{ textAlign: 'center' }}>
        วันที่ 14-16 ตุลาคม 2566
      </Title>
      {renderEventRounds}
      <Space direction="vertical" align="center" style={{ width: '100%', marginBlock: '20px' }}>
        {description && (
          <Text italic strong style={{ color: '#f3b34e', fontSize: '18px' }}>
            {description}
          </Text>
        )}
      </Space>
    </div>
  )
}

export default EventSchedule
