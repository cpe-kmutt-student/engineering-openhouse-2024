import { Space, Typography } from 'antd'
import styles from './index.module.scss'

const Activities: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className={styles.activities}>
      <Space direction="vertical">
        <Title level={4}>Pedophile</Title>
        <Title level={4}>Pedophile</Title>
        <Title level={4}>Pedophile</Title>
        <Title level={4}>Pedophile</Title>
        <Title level={4}>Pedophile</Title>
      </Space>
    </div>
  )
}

export default Activities
