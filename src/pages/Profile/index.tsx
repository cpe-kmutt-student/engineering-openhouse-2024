import { Button } from 'antd'
import styles from './index.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { LoadingPage } from '../Loading'
import ProfileInfo, { IUserInfo } from 'src/components/Profile/ProfileInfo'
import { axiosInstance } from 'src/utils/axios'
import { useNavigate } from 'react-router-dom'
import { REGISTER_PATH } from 'src/configs/routes'
import { AccountType } from 'src/contents/register/enum'
import EditProfile, { EditProfileForm } from 'src/components/Profile/EditProfile'

const Profile: React.FC = (): JSX.Element => {
  const [user, setUser] = useState<IUserInfo>({
    prefix: 'นาย',
    firstName: 'ภูบดินทร์',
    lastName: 'พูลหน่าย',
    firstNameEng: 'Phubordin',
    lastNameEng: 'Poolnai',
    email: 'mirailisclm@gmail.com',
    phone: '0987654321',
    educationLevel: 'มหาลัย',
    schoolName: 'KMUTT',
    accountType: AccountType.student,
    profileUrl: 'https://avatars.githubusercontent.com/u/45442561?v=4',
  })
  const [loading, setLoading] = useState<boolean>(true)
  const [isEdit, setEdit] = useState<boolean>(false)

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

  const onFinish = async (values: EditProfileForm) => {
    const res = await axiosInstance.patch('/api/users', values)
    if (res.status === 200) {
      navigate(0)
    }
  }

  useEffect(() => {
    getUserInfo().then(() => setLoading(false))
    setLoading(false)
  }, [getUserInfo])

  if (loading) return <LoadingPage />

  return (
    <div className={styles.profilePage}>
      <ProfileInfo user={user} />
      {isEdit && <EditProfile onFinish={onFinish} userInfo={user} />}
      <div className={styles.actionButtons}>
        <Button onClick={() => setEdit(!isEdit)} type="text">
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
