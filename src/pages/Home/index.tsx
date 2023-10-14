import { Button, Modal, Result, Typography } from 'antd'
import styles from './index.module.scss'
import { imageSlideDesktop, imageSlideMobile } from 'src/contents/imageSlide'
import ImageSlide from 'src/components/Home/ImageSlide'
import DepartmentsWorkshop from 'src/components/Home/Departments'
import EventActivities from 'src/components/Home/EventActivities'
import Sponsors from 'src/components/Sponsors'
import EventSchedules from 'src/components/Home/EventSchedules'
import { useCallback, useContext, useEffect } from 'react'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { Link, useLocation } from 'react-router-dom'
import { EVENTS_PATH, MAP_PATH } from 'src/configs/routes'
import { handleSignInWithGoogle } from 'src/utils/axios'

const Home: React.FC = (): JSX.Element => {
  const auth = useContext(AuthContext)
  const location = useLocation()

  const { Title } = Typography

  const modalStampError = useCallback(() => {
    return Modal.error({
      icon: null,
      centered: true,
      content: <Result status="error" title="กรุณาเข้าสู่ระบบ" />,
      okText: 'เข้าสู่ระบบ',
      onOk: handleSignInWithGoogle,
      maskClosable: true,
      okButtonProps: {
        className: styles.buttonModal,
      },
    })
  }, [])

  useEffect(() => {
    if (location.state && location.state.requestStatus === 'Error') {
      modalStampError()
    }
  }, [modalStampError, location])

  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.imageSlideDesktop}>
          <ImageSlide images={imageSlideDesktop} />
        </div>
        <div className={styles.imageSlideMobile}>
          <ImageSlide images={imageSlideMobile} />
        </div>
        {!auth?.authContext.isAuthenticated && (
          <div style={{ textAlign: 'center' }} onClick={handleSignInWithGoogle}>
            <button className={styles.registerButton}>ลงทะเบียน</button>
          </div>
        )}
        <div style={{ textAlign: 'center', marginTop: '0.5rem' }} onClick={handleSignInWithGoogle}>
          <Link to={MAP_PATH}>
            <Button type="default">แผนผังงาน</Button>
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.eventSchedules}>
            <Title level={2} style={{ textAlign: 'center' }}>
              กิจกรรม
            </Title>
            <EventSchedules showAll={false} />
            <div className={styles.button}>
              <Link to={EVENTS_PATH}>
                <Button type="default">ดูทั้งหมด</Button>
              </Link>
            </div>
          </div>
          <div className={styles.departmentActivities}>
            <Title level={2} style={{ textAlign: 'center' }}>
              กิจกรรมส่วนภาควิชา
            </Title>
            <DepartmentsWorkshop />
          </div>
          <div className={styles.collegeActivities}>
            <Title level={2} style={{ textAlign: 'center' }}>
              กิจกรรมส่วนกลาง
            </Title>
            <EventActivities />
          </div>
        </div>
        <Sponsors />
      </div>
    </>
  )
}

export default Home
