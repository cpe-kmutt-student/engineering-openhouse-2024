import { Typography } from 'antd'
import styles from './index.module.scss'
import Wheel from './wheel/Wheel'
import { CountDown } from './countdown/Countdown'

const Home: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <>
      <div className={styles.homePage}>
        <div>
          <Wheel />
          <div>
            <br />
            <Title level={2} style={{ textAlign: 'center' }}>
              Coming Soon
            </Title>
            <Title level={3} style={{ textAlign: 'center' }}>
              Engineering Openhouse <br /> Carnival at Bangmod
            </Title>
            <CountDown deadline="October, 2, 2023" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
