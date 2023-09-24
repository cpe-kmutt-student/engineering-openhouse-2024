import React, { useEffect } from 'react'
import styles from './index.module.scss'
import { Carousel } from 'antd'
import { cacheImage } from 'src/utils/cacheImage'

interface Props {
  images: string[]
}

const ImageSlide: React.FC<Props> = ({ images }: Props): JSX.Element => {
  useEffect(() => {
    images.map((image) => cacheImage(image))
  }, [images])

  const renderImage = images.map((image: string, i: number) => {
    return (
      <div key={i} className={styles.content}>
        <img src={image} alt={`image-${i}`} loading="lazy" />
      </div>
    )
  })

  return (
    <Carousel autoplay className={styles.imageSlide}>
      {renderImage}
    </Carousel>
  )
}

export default ImageSlide
