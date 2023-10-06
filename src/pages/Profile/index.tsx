import { Button, Input, Modal, Result } from 'antd'
import styles from './index.module.scss'
import React, { useCallback, useEffect, useState } from 'react'
import { LoadingPage } from '../Loading'
import ProfileInfo, { IUserInfo } from 'src/components/Profile/ProfileInfo'
import { axiosInstance } from 'src/utils/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { REGISTER_PATH, STAMP_PATH } from 'src/configs/routes'
import { AccountType } from 'src/contents/register/enum'
import EditProfile, { EditProfileForm } from 'src/components/Profile/EditProfile'
import ProfileNav from 'src/components/Profile/ProfileNav'

const Profile: React.FC = (): JSX.Element => {
  const [user, setUser] = useState<IUserInfo>({
    prefix: 'นาย',
    firstName: 'ภูบดินทร์',
    lastName: 'พูลหน่าย',
    firstNameEng: 'Phubordin',
    lastNameEng: 'Poolnai',
    email: '',
    phone: '',
    is_advisor: false,
    accountType: AccountType.general,
    profileUrl: 'https://avatars.githubusercontent.com/u/45442561?v=4',
    currentProvince: '',
  })

  const [loading, setLoading] = useState<boolean>(true)
  const [isEdit, setEdit] = useState<boolean>(false)
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [eStampValue, setEStampValue] = useState<string>('')

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

  const onEditUser = async (values: EditProfileForm) => {
    const newValues: IUserInfo = {
      ...values,
      accountType: user.accountType,
      schoolName: user.schoolName,
      email: user.email,
      profileUrl: user.profileUrl,
      is_advisor: user.is_advisor,
      currentProvince: user.currentProvince,
    }

    const res = await axiosInstance.post('/api/users', newValues)

    if (res.status === 200) {
      navigate(0)
    }
  }

  const handleStampShortCode = async () => {
    try {
      // TODO : Request E-Stamp ShortCode
      const res = await axiosInstance.get(`/api/users/take/${eStampValue}`)
      setModalOpen(false)

      if (res.status === 200) {
        modalStampSuccess()
      }
    } catch (err) {
      setModalOpen(false)
      modalStampError()
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
  }, [getUserInfo])

  useEffect(() => {
    if (location.state && location.state.requestStatus === 'Success') {
      modalStampSuccess()
    }

    if (location.state && location.state.requestStatus === 'Error') {
      modalStampError()
    }
  }, [modalStampSuccess, location, modalStampError])

  if (loading) return <LoadingPage />

  return (
    <div className={styles.profilePage}>
      <ProfileNav />
      <ProfileInfo user={user} />
      {isEdit && <EditProfile onFinish={onEditUser} userInfo={user} />}
      <div className={styles.actionButtons}>
        <Button onClick={() => setModalOpen(true)} type="text">
          กรอกรหัส E-Stamp
        </Button>
        <Button onClick={() => setEdit(!isEdit)} type="text">
          แก้ไขข้อมูล
        </Button>
        <Button onClick={handleLogout} type="primary">
          ออกจากระบบ
        </Button>
      </div>
      <Modal
        title="กรอกรหัส E-Stamp"
        open={isModalOpen}
        onOk={handleStampShortCode}
        onCancel={() => setModalOpen(false)}
        cancelText="ยกเลิก"
        okText="ยืนยัน"
        centered
        cancelButtonProps={{ type: 'text', style: { color: '#000000' } }}
        closeIcon={false}
      >
        <Input
          maxLength={5}
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEStampValue(e.target.value)}
        />
      </Modal>
    </div>
  )
}

export default Profile
