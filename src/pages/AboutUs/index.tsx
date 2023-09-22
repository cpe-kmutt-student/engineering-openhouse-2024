import { Image, Space, Typography } from 'antd'
import styles from './index.module.scss'
import AboutContact from '../../components/AboutUs/Contact'
import AboutTravel from '../../components/AboutUs/Travel'
import Sponsors from '../../components/Sponsors'
import SmoLogo from '../../contents/images/SmoLogo.png'
import Parking from '../../components/AboutUs/Parking'
import FrequentlyQuestion from '../../components/AboutUs/FrequentlyQuestion'

const GOOGLE_MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.106954580387!2d100.4938625114989!3d13.651257399556378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a251bb6b0cf1%3A0xf656e94ff13324ad!2sKing%20Mongkut%E2%80%99s%20University%20of%20Technology%20Thonburi%20(KMUTT)!5e0!3m2!1sen!2sth!4v1695309518475!5m2!1sen!2sth'

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
            สภานที่จอดรถ
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
