import { Image, Space, Typography } from 'antd'
import styles from './index.module.scss'
import SmoLogo from 'src/contents/images/SmoLogo.png'
import AboutContact from 'src/components/AboutUs/Contact'
import AboutTravel from 'src/components/AboutUs/Travel'
import Parking from 'src/components/AboutUs/Parking'
import FrequentlyQuestion from 'src/components/AboutUs/FrequentlyQuestion'
import Sponsors from 'src/components/Sponsors'

const GOOGLE_MAP_URL = 'https://www.google.com/maps/d/embed?mid=1Hxak7Bh9K4PLuiL2tFHwDPeIAsJzZn4&hl=en&ehbc=2E312F'

const AboutUs: React.FC = (): JSX.Element => {
  const { Title } = Typography

  return (
    <div className={styles.aboutUsPage}>
      <div className={styles.content}>
        <div>
          <Space align="center" direction="vertical" style={{ width: '100%' }}>
            <Image preview={false} src={SmoLogo} alt="smoLogo" loading="lazy" />
            <Title level={2}>ช่องทางการติดต่อ</Title>
          </Space>
          <AboutContact />
        </div>
        <div>
          <Title level={2} style={{ textAlign: 'center' }}>
            ช่องทางการเดินทาง
          </Title>
          <AboutTravel />
        </div>
        <div>
          <Title level={2} style={{ textAlign: 'center' }}>
            สถานที่จอดรถ
          </Title>
          <Parking />
        </div>
        <div className={styles.map}>
          <Title level={2} style={{ textAlign: 'center' }}>
            แผนที่
          </Title>
          <iframe
            src={GOOGLE_MAP_URL}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.googleMap}
          />
        </div>
        <div className={styles.questions}>
          <Title level={2} style={{ textAlign: 'center' }}>
            คำถามที่พบบ่อย
          </Title>
          <FrequentlyQuestion />
        </div>
      </div>
      <Sponsors />
    </div>
  )
}

export default AboutUs
