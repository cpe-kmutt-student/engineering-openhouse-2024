import { Typography } from 'antd'
import styles from './index.module.scss'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'

interface Props {
  title: string
  subTitle: string
  image: string
}

const ImageHeader: React.FC<Props> = ({ title, subTitle, image }: Props): JSX.Element => {
  const { Title } = Typography

  useEffect(() => {
    if (image) {
      cacheImage(image)
    }
  }, [image])

  return (
    <div className={styles.imageHeader}>
      <img src={image} alt="department" loading="lazy" />
      <div className={styles.title}>
        <Title style={{ margin: 0 }} level={1}>
          {title}
        </Title>
        <Title level={2}>{subTitle}</Title>
      </div>
    </div>
  )
}

export default ImageHeader
