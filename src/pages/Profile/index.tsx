import { Button } from 'antd'
import styles from './index.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { LoadingPage } from '../Loading'
import ProfileInfo, { IUserInfo } from 'src/components/Profile/ProfileInfo'
import { axiosInstance } from 'src/utils/axios'
import { useNavigate } from 'react-router-dom'
import { REGISTER_PATH } from 'src/configs/routes'

const Profile: React.FC = (): JSX.Element => {
  const [user, setUser] = useState<IUserInfo>({
    firstName: '',
    lastName: '',
    firstNameEng: '',
    lastNameEng: '',
    email: '',
    phone: '',
    educationLevel: '',
    schoolName: '',
    profileUrl: '',
  })
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  const handleLogout = async () => {
    const res = await axiosInstance.post('/api/auth/logout')

    if (res.status === 200) {
      navigate(0)
    }
  }

  const getUserInfo = useCallback(async (): Promise<void> => {
    const res = await axiosInstance.get('/api/users/info')

    if (res.status === 200) {
      setUser(res.data.data)
    }

    if (res.status === 204) {
      navigate(REGISTER_PATH)
    }
  }, [navigate])

  useEffect(() => {
    getUserInfo().then(() => setLoading(false))
  }, [getUserInfo])

  if (loading) return <LoadingPage />

  return (
    <div className={styles.profilePage}>
      <ProfileInfo user={user} />
      <div className={styles.actionButtons}>
        <Button onClick={handleLogout} type="text">
          แก้ไขข้อมูล
        </Button>
        <Button onClick={handleLogout} type="primary">
          ออกจากระบบ
        </Button>
      </div>
    </div>
  )
}

export default Profile
