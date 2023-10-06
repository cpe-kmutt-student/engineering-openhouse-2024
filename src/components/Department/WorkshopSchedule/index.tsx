import { Collapse, CollapseProps, Space, Typography } from 'antd'
import { IWorkshopSchedule } from 'src/contents/department/types'
import { convertLongDateLocaleToThai } from 'src/utils/date'
import styles from './index.module.scss'
import React from 'react'

interface Props {
  schedule: IWorkshopSchedule[]
}

const WorkshopSchedule: React.FC<Props> = ({ schedule }: Props): JSX.Element => {
  const { Title, Text } = Typography

  const renderTableRow = (date: string) => {
    return schedule
      .filter(({ date: workshopDate }: IWorkshopSchedule) => workshopDate === date)
      .map((schedule: IWorkshopSchedule, i: number) => {
        return (
          <tr key={i}>
            <td>{schedule.time}</td>
            <td>{schedule.amount}</td>
          </tr>
        )
      })
  }

  const renderTable = (date: string): JSX.Element => {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>เวลา</th>
            <th>จำนวนรับ</th>
          </tr>
        </thead>
        <tbody>{renderTableRow(date)}</tbody>
      </table>
    )
  }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: convertLongDateLocaleToThai('10/14/2023'),
      children: renderTable('10/14/2023'),
      style: {
        border: 0,
      },
    },
    {
      key: '2',
      label: convertLongDateLocaleToThai('10/15/2023'),
      children: renderTable('10/15/2023'),
      style: {
        border: 0,
      },
    },
    {
      key: '3',
      label: convertLongDateLocaleToThai('10/16/2023'),
      children: renderTable('10/16/2023'),
      style: {
        border: 0,
      },
    },
  ]

  return (
    <div>
      <Title level={3} style={{ textAlign: 'center' }}>
        ตารางเวิร์คช็อป
      </Title>
      <Collapse size="large" bordered={false} items={items} defaultActiveKey={['1']} />
      <Space direction="vertical" align="center" style={{ width: '100%', marginBlock: '20px' }}>
        <Text italic strong style={{ color: '#f3b34e', fontSize: '18px' }}>
          *ลงทะเบียนหน้างานเท่านั้น*
        </Text>
      </Space>
    </div>
  )
}

export default WorkshopSchedule
