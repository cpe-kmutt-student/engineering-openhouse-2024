import { Space, Typography } from 'antd'
import styles from './index.module.scss'
import { IEventRound, IEventSchedule } from 'src/contents/event/events'

interface Props {
  rounds: IEventRound[]
  description: string
}

const EventSchedule: React.FC<Props> = ({ rounds, description }: Props): JSX.Element => {
  const { Title, Text } = Typography

  const renderTableRow = (schedules: IEventSchedule[]) => {
    return schedules.map((schedule: IEventSchedule, i: number) => {
      return (
        <tr key={i}>
          <td>{schedule.time}</td>
          <td>{schedule.amount}</td>
        </tr>
      )
    })
  }

  const renderEventRounds = rounds.map((round: IEventRound, i: number) => {
    return (
      <div key={i}>
        <Title level={4} style={{ textAlign: 'center' }}>
          {round.title}
        </Title>
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
      {renderEventRounds}
      <Space direction="vertical" align="center" style={{ width: '100%', marginBlock: '20px' }}>
        <Text italic strong style={{ color: '#f3b34e' }}>
          {description}
        </Text>
      </Space>
    </div>
  )
}

export default EventSchedule
