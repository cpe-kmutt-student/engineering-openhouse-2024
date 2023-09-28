import { Image, Space, Typography } from 'antd'
import styles from './index.module.scss'
import SmoLogo from 'src/contents/images/SmoLogo.png'
import KMUTTLogo from 'src/contents/images/KMUTTLogo.png'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { sponsors } from 'src/contents/sponsors'

const Sponsors: React.FC = (): JSX.Element => {
  const { Title } = Typography

  useEffect(() => {
    const images = [SmoLogo, KMUTTLogo, ...sponsors]
    images.map((image: string) => cacheImage(image))
  }, [])

  const renderSponsors = sponsors.map((sponsor: string, i: number) => {
    return (
      <div className={styles.box} key={i}>
        <Image src={sponsor} width={100} alt="smo-logo" preview={false} />
      </div>
    )
  })

  return (
    <div className={styles.sponsors}>
      <Space direction="horizontal">
        <Image src={SmoLogo} alt="smo-logo" preview={false} />
        <Image src={KMUTTLogo} alt="smo-logo" preview={false} />
      </Space>
      <Title level={2}>Sponsors</Title>
      <section className={styles.content}>{renderSponsors}</section>
    </div>
  )
}

export default Sponsors
