import { Button } from 'antd'
import styles from './index.module.scss'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../../configs/routes'
import RegisterForm, { IRegister } from '../../components/Register/Form'

const Register: React.FC = (): JSX.Element => {
  const onFinish = (values: IRegister) => {
    console.log(values)
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.button}>
        <Link to={BASE_PATH}>
          <Button icon={<ArrowLeftOutlined />} type="default">
            กลับไปหน้า Openhouse
          </Button>
        </Link>
      </div>
      <RegisterForm onFinish={onFinish} />
    </div>
  )
}

export default Register
