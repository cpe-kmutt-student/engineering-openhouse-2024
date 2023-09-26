import styles from './index.module.scss'
import RegisterForm, { IRegister } from 'src/components/Register/Form'
import schoolData from 'src/contents/thailand_school_name.json'
import { axiosInstance } from 'src/utils/axios'

const Register: React.FC = (): JSX.Element => {
  const onFinish = async (values: IRegister) => {
    console.log(values)
    const res = await axiosInstance.post('/api/users', values)
    if (res.status === 200) {
      window.location.href = '/profile'
    }
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.content}>
        <RegisterForm onFinish={onFinish} schoolData={schoolData} />
      </div>
    </div>
  )
}

export default Register
