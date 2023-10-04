import { Image, Space, Typography } from 'antd'
import styles from './index.module.scss'
import SmoLogo from 'src/contents/images/SmoLogo.svg'
import AboutContact from 'src/components/AboutUs/Contact'
import AboutTravel from 'src/components/AboutUs/Travel'
import Parking from 'src/components/AboutUs/Parking'
import FrequentlyQuestion from 'src/components/AboutUs/FrequentlyQuestion'
import Sponsors from 'src/components/Sponsors'

const GOOGLE_MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15508.519762944872!2d100.4930246!3d13.6498587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a39764e8f689%3A0x6b0f05ed6b33f35b!2z4Liq4LmC4Lih4Liq4Lij4LiZ4Lix4LiB4Lio4Li24LiB4Lip4Liy4LiE4LiT4Liw4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4Lio4Liy4Liq4LiV4Lij4LmMIOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4ouC5gOC4l-C4hOC5guC4meC5guC4peC4ouC4teC4nuC4o-C4sOC4iOC4reC4oeC5gOC4geC4peC5ieC4suC4mOC4meC4muC4uOC4o-C4tQ!5e0!3m2!1sen!2sth!4v1696084524397!5m2!1sen!2sth'

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
