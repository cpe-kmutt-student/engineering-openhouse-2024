import { Button, Image, Typography } from 'antd'
import styles from './index.module.scss'
import MapImage from 'src/contents/images/Map.png'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { OPEN_HOUSE_MAP } from 'src/configs/routes'

const Map: React.FC = (): JSX.Element => {
  const { Title, Link } = Typography

  useEffect(() => {
    cacheImage(MapImage)
  }, [])

  return (
    <div className={styles.map}>
      <Title level={2}>แผนที่งาน</Title>
      <Image src={MapImage} />
      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}>
        <Link href={OPEN_HOUSE_MAP}>
          <Button type="primary">Google Map</Button>
        </Link>
      </div>
    </div>
  )
}

export default Map
