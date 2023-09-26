import styles from './index.module.scss'
import RegisterForm, { IRegister } from 'src/components/Register/Form'
import schoolData from 'src/contents/thailand_school_name.json'

const Register: React.FC = (): JSX.Element => {
  const onFinish = (values: IRegister) => {
    console.log(values)
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
