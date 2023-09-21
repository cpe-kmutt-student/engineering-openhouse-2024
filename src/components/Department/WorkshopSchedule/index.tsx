import { Space, Typography } from 'antd'
import { IWorkshopSchedule } from '../../../contents/department/departmentInfo'
import { convertDateLocale } from '../../../utils/date'
import styles from './index.module.scss'

interface Props {
  schedule: IWorkshopSchedule[]
}

const WorkshopSchedule: React.FC<Props> = ({ schedule }: Props): JSX.Element => {
  const { Title, Text } = Typography

  const renderTableRow = schedule.map((schedule: IWorkshopSchedule, i: number) => {
    return (
      <tr key={i}>
        <td>{convertDateLocale(schedule.date)}</td>
        <td>{schedule.time}</td>
        <td>{schedule.amount}</td>
      </tr>
    )
  })

  return (
    <div>
      <Title level={3} style={{ textAlign: 'center' }}>
        เวิร์คช็อป
      </Title>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>วันที่</th>
            <th>เวลา</th>
            <th>จำนวนรับ</th>
          </tr>
        </thead>
        <tbody>{renderTableRow}</tbody>
      </table>
      <Space direction="vertical" align="center" style={{ width: '100%', marginBlock: '20px' }}>
        <Text italic strong style={{ color: '#f3b34e' }}>
          *ลงทะเบียนหน้างานเท่านั้น*
        </Text>
      </Space>
    </div>
  )
}

export default WorkshopSchedule
