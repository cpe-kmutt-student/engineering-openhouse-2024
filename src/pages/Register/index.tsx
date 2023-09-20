import { Button, Form, Input, Radio, Space, Typography } from 'antd'
import styles from './index.module.scss'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../../configs/routes'

const Register: React.FC = (): JSX.Element => {
  const { Title } = Typography

  const onFinish = (values: IRegister) => {
    console.log(values)
  }

  return (
    <div className={styles.registerPage}>
      <div className={styles.button}>
        <Link to={BASE_PATH}>
          <Button icon={<ArrowLeftOutlined />} type="text">
            กลับไปหน้า Openhouse
          </Button>
        </Link>
      </div>
      <div className={styles.form}>
        <Title>ลงทะเบียน</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Space>
            <Form.Item<IRegister>
              label="ชื่อจริง"
              name="firstName"
              rules={[{ required: true, message: 'กรุณาระบุชื่อจริง' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<IRegister>
              label="นามสกุล"
              name="lastName"
              rules={[{ required: true, message: 'กรุณาระบุนามสกุล' }]}
            >
              <Input />
            </Form.Item>
          </Space>
          <Form.Item<IRegister>
            label="หมายเลขโทรศัพท์"
            name="phoneNumber"
            rules={[{ required: true, message: 'กรุณาระบุหมายเลขโทรศัพท์' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<IRegister>
            label="ประเภทผู้ใช้งาน"
            rules={[{ required: true, message: 'กรุณาระบุประเภทผู้ใช้งาน' }]}
            name="userType"
          >
            <Radio.Group>
              <Radio value={IUserType.student}>นักเรียน/นักศึกษา</Radio>
              <Radio value={IUserType.teacher}>อาจารย์</Radio>
              <Radio value={IUserType.guardian}>ผู้ปกครอง</Radio>
              <Radio value={IUserType.general}>บุคคลทั่วไป</Radio>
            </Radio.Group>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Register

interface IRegister {
  firstName: string
  lastName: string
  phoneNumber: string
  userType: IUserType
  educationLevel: string
  schoolName: string
}

enum IUserType {
  student = 'student',
  teacher = 'teacher',
  guardian = 'guardian',
  general = 'general',
}
