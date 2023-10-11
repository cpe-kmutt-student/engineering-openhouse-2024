import { Button, Image, Space, Typography } from 'antd'
import styles from './index.module.scss'
import MapImage from 'src/contents/images/Map.webp'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { OPEN_HOUSE_EMBED } from 'src/configs/routes'
import Sponsors from 'src/components/Sponsors'

const Map: React.FC = (): JSX.Element => {
  const { Title, Link } = Typography

  useEffect(() => {
    cacheImage(MapImage)
  }, [])

  return (
    <div className={styles.map}>
      <Title level={2}>แผนผังงาน</Title>
      <Image src={MapImage} alt="map" loading="lazy" preview={false} />
      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
        <Space direction="vertical" align="center" style={{ width: '100%' }}>
          <div className={styles.mapEmbed}>
            <iframe
              src={OPEN_HOUSE_EMBED}
              style={{ border: 0 }}
              allowFullScreen={false}
              className={styles.googleMap}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <Link href={OPEN_HOUSE_EMBED} target="_blank">
            <Button type="default" style={{ border: 'none' }}>
              ดูแผนที่ภายในงาน
            </Button>
          </Link>
        </Space>
      </div>
      <Sponsors />
    </div>
  )
}

export default Map
