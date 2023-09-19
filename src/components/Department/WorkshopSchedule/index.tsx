import { Space, Table, Typography } from 'antd'
import { IWorkshopSchedule } from '../../../contents/departmentInfo'
import { ColumnsType } from 'antd/es/table'
import { convertDateLocale } from '../../../utils/date'

interface Props {
  schedule: IWorkshopSchedule[]
}

const columns: ColumnsType<IWorkshopSchedule> = [
  {
    title: 'รอบ',
    dataIndex: 'round',
    key: 'round',
    responsive: ['sm'],
  },
  {
    title: 'วันที่',
    dataIndex: 'date',
    key: 'date',
    render: (date) => <div>{convertDateLocale(date)}</div>,
  },
  {
    title: 'เวลา',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'จำนวนรับ',
    dataIndex: 'amount',
    key: 'amount',
  },
]

const WorkshopSchedule: React.FC<Props> = ({ schedule }: Props): JSX.Element => {
  const { Title, Text } = Typography

  return (
    <div>
      <Title level={3}>Workshop schedule / ROUND</Title>
      <Table size="middle" columns={columns} pagination={false} dataSource={schedule} />
      <Space direction="vertical" align="center" style={{ width: '100%', marginBlock: '20px' }}>
        <Text italic strong>
          *ลงทะเบียนหน้างานเท่านั้น*
        </Text>
      </Space>
    </div>
  )
}

export default WorkshopSchedule
