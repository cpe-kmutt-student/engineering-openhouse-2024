import { Button, Image, Typography } from 'antd'
import styles from './index.module.scss'
import MapImage from 'src/contents/images/Map.webp'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { GOOGLE_MAP } from 'src/configs/routes'
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
        <Link href={GOOGLE_MAP} target="_blank">
          <Button type="primary">Google Map</Button>
        </Link>
      </div>
      <Sponsors />
    </div>
  )
}

export default Map
