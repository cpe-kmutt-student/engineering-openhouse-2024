import { Button, Typography } from 'antd'
import styles from './index.module.scss'
import { useContext } from 'react'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { LoadingPage } from '../Loading'
import ProfileInfo from 'src/components/Profile/ProfileInfo'

const Profile: React.FC = (): JSX.Element => {
  const { Title } = Typography

  const user = useContext(AuthContext)

  const handleLogout = () => {
    // TODO : Logout handler
    console.log('nice')
  }

  // TODO : E-stamp handler

  // useEffect(() => {

  // }, [])

  if (!user) return <LoadingPage />

  return (
    <div className={styles.profilePage}>
      <ProfileInfo auth={user.authContext} />
      <div className={styles.eStamp}>
        <Title level={3}>E-Stamp</Title>
      </div>
      <div className={styles.logout}>
        <Button onClick={handleLogout} type="primary">
          ออกจากระบบ
        </Button>
      </div>
    </div>
  )
}

export default Profile