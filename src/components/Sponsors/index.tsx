import { Image, Space, Typography } from 'antd'
import styles from './index.module.scss'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { ISponsor, SponsorSize, sponsors } from 'src/contents/sponsors'

import SmoLogo from 'src/contents/images/SmoLogo.svg'
import KMUTTLogo from 'src/contents/images/KMUTTLogo.png'

const Sponsors: React.FC = (): JSX.Element => {
  const { Title } = Typography

  useEffect(() => {
    const images = [SmoLogo, KMUTTLogo]

    images.map((image: string) => cacheImage(image))
    sponsors.map(({ image }) => cacheImage(image))
  }, [])

  const renderSponsors = (size: SponsorSize) => {
    return sponsors
      .filter((sponsor: ISponsor) => sponsor.size === size)
      .map((sponsor: ISponsor, i: number) => {
        return (
          <div className={styles.box} key={i}>
            <Image src={sponsor.image} width={size === SponsorSize.Big ? 200 : 100} alt="smo-logo" preview={false} />
          </div>
        )
      })
  }

  return (
    <div className={styles.sponsors}>
      <Space direction="horizontal">
        <Image src={SmoLogo} alt="smo-logo" preview={false} />
        <Image src={KMUTTLogo} alt="smo-logo" preview={false} />
      </Space>
      <Title level={2}>Sponsors</Title>
      <section className={styles.content}>
        <div className={styles.big}>{renderSponsors(SponsorSize.Big)}</div>
        <div className={styles.small}>{renderSponsors(SponsorSize.Small)}</div>
      </section>
    </div>
  )
}

export default Sponsors
