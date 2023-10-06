import { Collapse, CollapseProps, Typography } from 'antd'
import styles from './index.module.scss'
import { IRC, IRCDetail } from 'src/contents/department/types'

interface Props {
  rc: IRC[]
}

const RCDetail: React.FC<Props> = ({ rc }: Props): JSX.Element => {
  const { Title, Text } = Typography

  const renderRc = (details: IRCDetail[], location: string) => {
    return (
      <div className={styles.detail}>
        <Text style={{ color: '#FFFFFF' }}>สถานที่: {location}</Text>
        {details.map((item: IRCDetail, j: number) => {
          return (
            <div key={j} style={{ color: '#FFFFFF', marginTop: '20px' }}>
              {item.title && (
                <Title level={4} style={{ color: '#FFB031' }}>
                  {item.title}
                </Title>
              )}
              <Text strong style={{ color: '#FFFFFF' }}>
                {item.headDescription}
              </Text>
              <ul style={{ color: '#FFFFFF', marginLeft: '30px' }}>
                {item.description.map((list: string, k: number) => {
                  return (
                    <li key={k}>
                      <Text style={{ color: '#FFFFFF' }}>{list}</Text>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }

  const items: CollapseProps['items'] = rc.map((rcInfo: IRC, i: number) => {
    return {
      key: i,
      label: rcInfo.department,
      children: renderRc(rcInfo.details, rcInfo.location),
      style: {
        border: 0,
      },
    }
  })

  return (
    <div className={styles.rcDetail}>
      <Collapse size="large" bordered={false} items={items} defaultActiveKey={['1']} style={{ marginBottom: '20px' }} />
    </div>
  )
}

export default RCDetail
