import { Button, Image, Typography } from 'antd'
import styles from './index.module.scss'
import MapImage from 'src/contents/images/Map.webp'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { OPEN_HOUSE_MAP } from 'src/configs/routes'
import Sponsors from 'src/components/Sponsors'

const Map: React.FC = (): JSX.Element => {
  const { Title, Link } = Typography

  useEffect(() => {
    cacheImage(MapImage)
  }, [])

  return (
    <div className={styles.map}>
      <Title level={2}>แผนที่งาน</Title>
      <Image src={MapImage} alt="map" loading="lazy" preview={false} />
      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
        <Link href={OPEN_HOUSE_MAP}>
          <Button type="primary">Google Map</Button>
        </Link>
      </div>
      <Sponsors />
    </div>
  )
}

export default Map
