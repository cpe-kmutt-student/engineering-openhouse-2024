import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { BASE_PATH } from '../../../configs/routes'
import { Button, Image } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Logo from '../../../contents/images/logo.svg'
import { useEffect } from 'react'
import { cacheImage } from '../../../utils/cacheImage'

const BackToOpenhouse: React.FC = (): JSX.Element => {
  useEffect(() => {
    cacheImage(Logo)
  }, [])

  return (
    <div className={styles.backToOpenhouse}>
      <Link to={BASE_PATH}>
        <div className={styles.buttonDesktop}>
          <Button type="text" icon={<ArrowLeftOutlined />}>
            กลับสู่&nbsp;<span>Openhouse</span>
          </Button>
        </div>
        <div className={styles.buttonMobile}>
          <Button icon={<ArrowLeftOutlined />} type="text" />
        </div>
      </Link>
      <div className={styles.logo}>
        <Image preview={false} src={Logo} width={45} />
      </div>
    </div>
  )
}

export default BackToOpenhouse
