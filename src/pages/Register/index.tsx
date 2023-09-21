import styles from './index.module.scss'
import RegisterForm, { IRegister } from '../../components/Register/Form'
import BackToOpenhouse from '../../components/Navigations/BackToOpenhouseNav'

const Register: React.FC = (): JSX.Element => {
  const onFinish = (values: IRegister) => {
    console.log(values)
  }

  return (
    <div className={styles.registerPage}>
      <BackToOpenhouse />
      <div className={styles.content}>
        <RegisterForm onFinish={onFinish} />
      </div>
    </div>
  )
}

export default Register
