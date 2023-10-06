import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { BASE_PATH } from 'src/configs/routes'
import { Button, Image } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import Logo from 'src/contents/images/logo.svg'
import { useEffect } from 'react'
import { cacheImage } from 'src/utils/cacheImage'
import { axiosInstance } from 'src/utils/axios'

const NavbarLogout: React.FC = (): JSX.Element => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    const res = await axiosInstance.post('/api/auth/logout')
    if (res.status === 200) {
      navigate(BASE_PATH, { replace: true })
      navigate(0)
    }
  }

  useEffect(() => {
    cacheImage(Logo)
  }, [])

  return (
    <div className={styles.navbarLogout}>
      <div>
        <div className={styles.buttonDesktop}>
          <Button type="text" onClick={handleLogout} icon={<ArrowLeftOutlined />}>
            Logout
          </Button>
        </div>
        <div className={styles.buttonMobile}>
          <Button icon={<ArrowLeftOutlined />} type="text" onClick={handleLogout} />
        </div>
      </div>
      <div className={styles.logo}>
        <Image preview={false} src={Logo} width={45} />
      </div>
    </div>
  )
}

export default NavbarLogout
