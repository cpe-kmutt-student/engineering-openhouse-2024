import styles from './index.module.scss'
import RegisterForm, { RegisterFormType } from 'src/components/Register/Form'
import { axiosInstance } from 'src/utils/axios'

const Register: React.FC = (): JSX.Element => {
  const onFinish = async (values: RegisterFormType) => {
    const res = await axiosInstance.post('/api/users', values)
    if (res.status === 200) {
      window.location.href = '/profile'
    }
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.content}>
        <RegisterForm onFinish={onFinish} />
      </div>
    </div>
  )
}

export default Register
