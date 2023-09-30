import { Image, Space, Typography } from 'antd'
import { IParkingInfo, parkingInfo } from 'src/contents/about/parking'
import styles from './index.module.scss'

const Parking: React.FC = (): JSX.Element => {
  const { Title, Paragraph } = Typography

  const renderParkingInfo = parkingInfo.map((parking: IParkingInfo, i: number) => {
    return (
      <Space className={styles.parkingInfo} align="center" direction="vertical" key={i} style={{ width: '100%' }}>
        <Title level={4}>{parking.name}</Title>
        <Paragraph className={styles.paragraph}>{parking.description}</Paragraph>
        {parking.image && (
          <div className={styles.image}>
            <Image width={300} src={parking.image} alt="parking" />
          </div>
        )}
      </Space>
    )
  })

  return <div className={styles.parking}>{renderParkingInfo}</div>
}

export default Parking
