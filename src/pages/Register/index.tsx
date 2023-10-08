import { useContext } from 'react'
import styles from './index.module.scss'
import RegisterForm, { RegisterFormType } from 'src/components/Register/Form'
import { axiosInstance } from 'src/utils/axios'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { Navigate } from 'react-router-dom'
import { BASE_PATH } from 'src/configs/routes'

const Register: React.FC = (): JSX.Element => {
  const auth = useContext(AuthContext)
  const isAuthenticated = auth?.authContext.isAuthenticated

  const onFinish = async (values: RegisterFormType) => {
    const newValue: RegisterFormType = {
      ...values,
      is_advisor: values.is_advisor || false,
    }

    const res = await axiosInstance.post('/api/users', newValue)
    if (res.status === 200) {
      window.location.href = '/profile'
    }
  }

  return isAuthenticated ? (
    <div className={styles.registerPage}>
      <div className={styles.content}>
        <RegisterForm onFinish={onFinish} />
      </div>
    </div>
  ) : (
    <Navigate replace to={BASE_PATH} state={{ requestStatus: 'Error' }} />
  )
}

export default Register
