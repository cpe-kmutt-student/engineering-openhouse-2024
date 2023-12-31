import styles from './index.module.scss'
import GoogleSignIn from './GoogleSignIn'
import { Button, Dropdown, Image, MenuProps } from 'antd'
import Logo from 'src/contents/images/logo.svg'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cacheImage } from 'src/utils/cacheImage'
import { ABOUT_PATH, MAP_PATH, PROFILE_PATH } from 'src/configs/routes'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { axiosInstance } from 'src/utils/axios'
import { MenuOutlined } from '@ant-design/icons'

const Navbar: React.FC = () => {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const isAuthenticated = auth?.authContext.isAuthenticated

  const handleLogout = async () => {
    const res = await axiosInstance.post('/api/auth/logout')
    if (res.status === 200) {
      navigate(0)
    }
  }

  const items: MenuProps['items'] = [
    {
      key: 'about',
      label: (
        <Link to={ABOUT_PATH} className={styles.link}>
          เกี่ยวกับเรา
        </Link>
      ),
    },
    {
      key: 'map',
      label: (
        <Link to={MAP_PATH} className={styles.link}>
          แผนผังงาน
        </Link>
      ),
    },
    {
      key: 'profile',
      style: { display: isAuthenticated ? 'block' : 'none' },
      label: (
        <Link to={PROFILE_PATH} className={styles.link}>
          โปรไฟล์
        </Link>
      ),
    },
    {
      key: 'auth',
      style: { padding: 0, margin: '10px' },
      label: isAuthenticated ? (
        <Button onClick={handleLogout} type="primary" style={{ width: '100px' }}>
          Log Out
        </Button>
      ) : (
        <GoogleSignIn style={{ width: '100px' }} />
      ),
    },
  ]

  useEffect(() => {
    cacheImage(Logo)
  }, [])

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Image preview={false} src={Logo} width={45} />
        <Link to={ABOUT_PATH} className={styles.link}>
          <Button type="text">เกี่ยวกับเรา</Button>
        </Link>
        <Link to={MAP_PATH} className={styles.link}>
          <Button type="text">แผนผังงาน</Button>
        </Link>
        {isAuthenticated && (
          <Link to={PROFILE_PATH} className={styles.link}>
            <Button type="text">โปรไฟล์</Button>
          </Link>
        )}
      </div>
      <div className={styles.actionButtonGroup}>
        {isAuthenticated ? (
          <Button onClick={handleLogout} type="primary">
            Log Out
          </Button>
        ) : (
          <GoogleSignIn />
        )}
      </div>
      <Dropdown className={styles.mobileMenu} menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
        <Button type="text" icon={<MenuOutlined />} />
      </Dropdown>
    </div>
  )
}

export default Navbar
