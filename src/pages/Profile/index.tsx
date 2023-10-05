import { Button, Modal, Result } from 'antd'
import styles from './index.module.scss'
import { useCallback, useEffect, useState } from 'react'
import { LoadingPage } from '../Loading'
import ProfileInfo, { IUserInfo } from 'src/components/Profile/ProfileInfo'
import { axiosInstance } from 'src/utils/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { REGISTER_PATH, STAMP_PATH } from 'src/configs/routes'
import { AccountType } from 'src/contents/register/enum'
import EditProfile, { EditProfileForm } from 'src/components/Profile/EditProfile'

const Profile: React.FC = (): JSX.Element => {
  const [user, setUser] = useState<IUserInfo>({
    prefix: '',
    firstName: '',
    lastName: '',
    firstNameEng: '',
    lastNameEng: '',
    email: '',
    phone: '',
    accountType: AccountType.general,
    profileUrl: '',
    currentProvince: '',
  })

  const [loading, setLoading] = useState<boolean>(true)
  const [isEdit, setEdit] = useState<boolean>(false)

  const navigate = useNavigate()
  const location = useLocation()

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
      navigate(REGISTER_PATH, { replace: true })
    }
  }, [navigate])

  const onFinish = async (values: EditProfileForm) => {
    const newValues: IUserInfo = {
      ...values,
      accountType: user.accountType,
      schoolName: user.schoolName,
      email: user.email,
      profileUrl: user.profileUrl,
      currentProvince: user.currentProvince,
    }

    const res = await axiosInstance.post('/api/users', newValues)

    if (res.status === 200) {
      navigate(0)
    }
  }

  const modalStampSuccess = useCallback(() => {
    return Modal.success({
      icon: null,
      centered: true,
      content: <Result status="success" title="ได้รับแล้ว เย่" />,
      onOk: () => navigate(STAMP_PATH),
      okButtonProps: {
        className: styles.buttonModal,
      },
    })
  }, [navigate])

  const modalStampError = useCallback(() => {
    return Modal.error({
      icon: null,
      centered: true,
      content: <Result status="error" title="เกิดข้อผิดพลาด ไม่สามารถรับ E-Stamp ได้" />,
      okButtonProps: {
        className: styles.buttonModal,
      },
    })
  }, [])

  useEffect(() => {
    getUserInfo().then(() => setLoading(false))

    if (location.state && location.state.requestStatus === 'Success') {
      modalStampSuccess()
    }

    if (location.state && location.state.requestStatus === 'Error') {
      modalStampError()
    }
  }, [getUserInfo, modalStampSuccess, location, modalStampError])

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
