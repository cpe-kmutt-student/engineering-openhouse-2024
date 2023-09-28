import { Typography } from 'antd'
import styles from './index.module.scss'

const EStamp: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className={styles.eStamp}>
      <Title level={3}>E-Stamp</Title>
    </div>
  )
}

export default EStamp
