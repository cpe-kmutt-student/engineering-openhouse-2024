import styles from './index.module.scss'
import GoogleSignIn from './GoogleSignIn'
import { Button, Image } from 'antd'
import Logo from 'src/contents/images/logo.svg'
import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { cacheImage } from 'src/utils/cacheImage'
import { ABOUT_PATH, PROFILE_PATH } from 'src/configs/routes'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { axiosInstance } from 'src/utils/axios'

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

  useEffect(() => {
    cacheImage(Logo)
  }, [])

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Image preview={false} src={Logo} width={45} />
        <Link to={ABOUT_PATH} replace>
          <Button type="text">เกี่ยวกับเรา</Button>
        </Link>
        {isAuthenticated && (
          <Link to={PROFILE_PATH} replace>
            <Button type="text">โปรไฟล์</Button>
          </Link>
        )}
      </div>
      {isAuthenticated ? (
        <Button onClick={handleLogout} type="primary">
          Logout
        </Button>
      ) : (
        <GoogleSignIn />
      )}
    </div>
  )
}

export default Navbar
