import { Collapse, CollapseProps, Space, Typography } from 'antd'
import { ISubWorkshop, IWorkshopSchedule } from 'src/contents/department/types'
import { convertLongDateLocaleToThai } from 'src/utils/date'
import styles from './index.module.scss'
import React from 'react'

interface Props {
  subWorkshop: ISubWorkshop[]
}

const SubWorkshopSchedule: React.FC<Props> = ({ subWorkshop }: Props): JSX.Element => {
  const { Title, Text } = Typography

  const renderTableRow = (date: string, schedules: IWorkshopSchedule[]) => {
    return schedules
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

  const renderTable = (date: string, schedules: IWorkshopSchedule[]): JSX.Element => {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th>เวลา</th>
            <th>จำนวนรับ</th>
          </tr>
        </thead>
        <tbody>{renderTableRow(date, schedules)}</tbody>
      </table>
    )
  }

  const collapseScheduleItems = (schedules: IWorkshopSchedule[]): CollapseProps['items'] => {
    const isScheduleExist = (date: string): boolean => {
      const schedule = schedules.filter((schedule: IWorkshopSchedule) => schedule.date === date)
      return schedule.length > 0
    }

    return [
      {
        key: 1,
        label: convertLongDateLocaleToThai('10/14/2023'),
        children: renderTable('10/14/2023', schedules),
        style: {
          border: 0,
          display: isScheduleExist('10/14/2023') ? 'block' : 'none',
        },
      },
      {
        key: 2,
        label: convertLongDateLocaleToThai('10/15/2023'),
        children: renderTable('10/15/2023', schedules),
        style: {
          border: 0,
          display: isScheduleExist('10/15/2023') ? 'block' : 'none',
        },
      },
      {
        key: 3,
        label: convertLongDateLocaleToThai('10/16/2023'),
        children: renderTable('10/16/2023', schedules),
        style: {
          border: 0,
          display: isScheduleExist('10/16/2023') ? 'block' : 'none',
        },
      },
    ]
  }

  const collapseItems: CollapseProps['items'] = subWorkshop.map((item: ISubWorkshop, i: number) => {
    const scheduleItems = collapseScheduleItems(item.schedules)

    return {
      key: i,
      label: item.title,
      children: <Collapse size="small" bordered={false} items={scheduleItems} />,
      style: {
        border: 0,
      },
    }
  })

  return (
    <div>
      <Title level={3} style={{ textAlign: 'center' }}>
        ตารางเวิร์คช็อป
      </Title>
      <Collapse size="large" bordered={false} items={collapseItems} defaultActiveKey={[0]} />
      <Space direction="vertical" align="center" style={{ width: '100%', marginBlock: '20px' }}>
        <Text italic strong style={{ color: '#f3b34e', fontSize: '18px' }}>
          *ลงทะเบียนหน้างานเท่านั้น*
        </Text>
      </Space>
    </div>
  )
}

export default SubWorkshopSchedule
