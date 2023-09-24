import { Image, Typography } from 'antd'
import { ITravel, ITravelWay, travels } from 'src/contents/about/travel'
import styles from './index.module.scss'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'

const AboutTravel: React.FC = (): JSX.Element => {
  const { Title, Paragraph } = Typography

  useEffect(() => {
    travels.map(({ image }: ITravel) => cacheImage(image))
  }, [])

  const renderTravel = travels.map((travel: ITravel, i: number) => {
    return (
      <div className={styles.travel} key={i}>
        <Title level={3}>
          โดย <span style={{ color: '#F3B34E' }}>{travel.title}</span>
        </Title>
        {travel.ways.map((way: ITravelWay, iWay: number) => (
          <div className={styles.way} key={iWay}>
            <Title level={4}>
              {(iWay += 1)}. {way.name}
            </Title>
            {way.description && <Paragraph className={styles.paragraph}>{way.description}</Paragraph>}
            <ul className={styles.step}>
              {way.buses && way.buses.map((bus: string, iBus: number) => <li key={iBus}>{bus}</li>)}
            </ul>
          </div>
        ))}
        <div className={styles.image}>
          <Image src={travel.image} alt="image" loading="lazy" />
        </div>
      </div>
    )
  })
  return <div className={styles.travels}>{renderTravel}</div>
}

export default AboutTravel
