import { Button, Form, Input, Modal, Result, Space, Typography } from 'antd'
import styles from './index.module.scss'
import React, { useCallback, useEffect, useState } from 'react'
import { LoadingPage } from '../Loading'
import ProfileInfo, { IUserInfo } from 'src/components/Profile/ProfileInfo'
import { axiosInstance } from 'src/utils/axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { REGISTER_PATH, SATISFACTION_SURVEY2_PATH, STAMP_PATH } from 'src/configs/routes'
import { AccountType } from 'src/contents/register/enum'
import EditProfile, { EditProfileForm } from 'src/components/Profile/EditProfile'
import ProfileNav from 'src/components/Profile/ProfileNav'
import { DownloadOutlined, EditOutlined } from '@ant-design/icons'
import { buttonEvent } from 'src/utils/gaEvents'

const Profile: React.FC = (): JSX.Element => {
  const { Title, Text } = Typography

  const [user, setUser] = useState<IUserInfo>({
    prefix: '',
    firstName: '',
    lastName: '',
    firstNameEng: '',
    lastNameEng: '',
    email: '',
    phone: '',
    is_advisor: false,
    accountType: AccountType.general,
    profileUrl: '',
    currentProvince: '',
    schoolProvince: '',
    form_submit: false,
  })

  const [loading, setLoading] = useState<{ user: boolean; certificate: boolean }>({
    user: true,
    certificate: true,
  })
  const [isEdit, setEdit] = useState<boolean>(false)
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [isCerModalOpen, setCerModalOpen] = useState<boolean>(false)
  const [isFormSubmitting, setSubmit] = useState<boolean>(false)
  const [isDownloadCer, setDownloadCer] = useState<boolean>(true)

  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = async () => {
    const res = await axiosInstance.post('/api/auth/logout')

    if (res.status === 200) {
      navigate('/')
      navigate(0)
    }
  }

  const getUserInfo = async (): Promise<void> => {
    const res = await axiosInstance.get('/api/users/info')

    if (res.status === 200) {
      setUser(res.data.data)
    }

    if (res.status === 204) {
      navigate(REGISTER_PATH, { replace: true })
    }
  }

  const getCertificate = async () => {
    const res = await axiosInstance.get('/api/users/cert')

    if (res.status === 200) {
      setDownloadCer(res.data.data.cert)
    }
  }

  const onEditUser = async (values: EditProfileForm) => {
    const newValues: IUserInfo = {
      ...values,
      accountType: user.accountType,
      schoolName: user.schoolName,
      email: user.email,
      profileUrl: user.profileUrl,
      is_advisor: user.is_advisor,
      currentProvince: user.currentProvince,
      schoolProvince: user.schoolProvince,
      educationLevel: user.educationLevel,
    }

    const res = await axiosInstance.post('/api/users', newValues)

    if (res.status === 200) {
      buttonEvent('editProfile')
      navigate(0)
    }
  }

  const handleStampShortCode = async ({ input }: { input: string }) => {
    setSubmit(true)

    try {
      const res = await axiosInstance.get(`/api/users/shortcode/${input}`)
      if (res.status === 200) {
        buttonEvent('stampShortCode')
        setModalOpen(false)
        modalStampSuccess()
        setSubmit(false)
      }
    } catch (err) {
      setModalOpen(false)
      modalStampError()
      setSubmit(false)
    }
  }

  const modalStampSuccess = useCallback(() => {
    return Modal.success({
      icon: null,
      centered: true,
      content: <Result status="success" title="รับ E-stamp สำเร็จ" />,
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

  const handleCertificate = async () => {
    const res = await axiosInstance.post('/api/users/cert')
    if (res.status === 200) {
      buttonEvent('downloadCertificate')
      if (user.form_submit === false) {
        return navigate(SATISFACTION_SURVEY2_PATH)
      } else {
        setCerModalOpen(false)
      }
    }
  }

  useEffect(() => {
    getUserInfo().then(() => setLoading({ ...loading, user: false }))
    getCertificate().then(() => setLoading({ ...loading, certificate: false }))
  }, [])

  useEffect(() => {
    if (location.state && location.state.requestStatus === 'Success') {
      modalStampSuccess()
    }

    if (location.state && location.state.requestStatus === 'Error') {
      modalStampError()
    }
  }, [modalStampSuccess, location, modalStampError])

  if (loading.certificate && loading.user) return <LoadingPage />

  return (
    <div className={styles.profilePage}>
      <ProfileNav />
      <ProfileInfo user={user} />
      {isEdit && <EditProfile onFinish={onEditUser} userInfo={user} setEdit={setEdit} />}
      <div className={styles.actionButtons}>
        <Button onClick={() => setModalOpen(true)} type="default">
          กรอกรหัส E-Stamp
        </Button>
        {isDownloadCer && (
          <Button type="text" icon={<DownloadOutlined />} onClick={() => setCerModalOpen(true)}>
            ดาวน์โหลดเกียรติบัตร
          </Button>
        )}

        {!user.form_submit && (
          <Button onClick={() => setEdit(true)} type="default" icon={<EditOutlined />}>
            แก้ไขข้อมูล
          </Button>
        )}
        <Button onClick={handleLogout} type="primary">
          ออกจากระบบ
        </Button>
      </div>
      <Modal title="กรอกรหัส E-Stamp" open={isModalOpen} centered closeIcon={false} footer={null}>
        <Form onFinish={handleStampShortCode}>
          <Form.Item
            name="input"
            rules={[
              { required: true, message: 'กรุณาใส่รหัส E-Stamp', max: 5 },
              { min: 5, max: 5, message: 'โค้ด E-Stamp ต้องมีจำนวน 5 หลัก' },
            ]}
          >
            <Input maxLength={5} />
          </Form.Item>
          <div className={styles.modalFormButton}>
            <Button type="text" onClick={() => setModalOpen(false)} style={{ color: '#000000' }}>
              ยกเลิก
            </Button>
            <Button type="primary" htmlType="submit" loading={isFormSubmitting}>
              ยืนยัน
            </Button>
          </div>
        </Form>
      </Modal>
      <Modal title="รับเกียรติบัตร" open={isCerModalOpen} centered closeIcon={false} footer={null}>
        <Form onFinish={handleCertificate}>
          {user.form_submit ? (
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              <Title level={4}>รับเกียรติบัตรอีกครั้ง</Title>
            </Space>
          ) : (
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
              <Title level={3}>
                {user.firstName} {user.lastName}
              </Title>
              <Title level={5}>
                {user.firstNameEng} {user.lastNameEng}
              </Title>
              <Text type="danger" strong>
                *หากยืนยันแล้วจะไม่สามารถแก้ไขข้อมูลได้*
              </Text>
            </Space>
          )}
          <div className={styles.modalFormButton}>
            <Button type="text" onClick={() => setCerModalOpen(false)} style={{ color: '#000000' }}>
              ยกเลิก
            </Button>
            <Button type="primary" htmlType="submit" loading={isFormSubmitting}>
              ยืนยัน
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

export default Profile
