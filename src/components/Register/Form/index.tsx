import { AutoComplete, Button, Form, FormInstance, Input, Radio, Select, Typography } from 'antd'
import styles from './index.module.scss'
import { useRef, useState } from 'react'
import { IEducationLevel, educationLevel } from 'src/contents/register/educationLevel'
import { UserType } from 'src/contents/register/enum'

interface Props {
  schoolData: ISchoolData[]
  onFinish: (value: IRegister) => void
}

interface ISchoolData {
  school_name: string
}

const RegisterForm: React.FC<Props> = ({ onFinish, schoolData }: Props): JSX.Element => {
  const [options, setOptions] = useState<{ value: string }[]>([])

  const formRef = useRef<FormInstance>(null)
  const [form] = Form.useForm()
  const userType = Form.useWatch('userType', form)

  const { Option } = Select
  const { Title } = Typography

  const handleSelectChange = (value: string) => {
    formRef.current?.setFieldsValue({ educationLevel: value })
  }

  const searchSchool = (searchText: string) => {
    const searchValue = schoolData
      .filter((el: ISchoolData) => el.school_name.includes(searchText))
      .map((el: ISchoolData) => {
        return {
          value: el.school_name,
        }
      })

    return searchText ? searchValue.slice(0, 10) : []
  }

  const renderEducationLevel = educationLevel.map((item: IEducationLevel, i: number) => (
    <Option value={item.value} key={i}>
      {item.label}
    </Option>
  ))

  return (
    <div className={styles.form}>
      <Title>ลงทะเบียน</Title>
      <Form layout="vertical" onFinish={onFinish} ref={formRef} form={form}>
        <div className={styles.formGroup}>
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
        </div>
        <div className={styles.formGroup}>
          <Form.Item<IRegister>
            label="First name"
            name="firstNameEN"
            rules={[{ required: true, message: 'กรุณาระบุชื่อจริง (ภาษาอังกฤษ)' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<IRegister>
            label="Last name"
            name="lastNameEN"
            rules={[{ required: true, message: 'กรุณาระบุนามสกุล (ภาษาอังกฤษ)' }]}
          >
            <Input />
          </Form.Item>
        </div>
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
            <Radio value={UserType.student}>นักเรียน/นักศึกษา</Radio>
            <Radio value={UserType.teacher}>อาจารย์</Radio>
            <Radio value={UserType.guardian}>ผู้ปกครอง</Radio>
            <Radio value={UserType.general}>บุคคลทั่วไป</Radio>
          </Radio.Group>
        </Form.Item>
        {userType === UserType.student && (
          <>
            <Form.Item<IRegister>
              name="educationLevel"
              label="ระดับการศึกษา"
              rules={[{ required: true, message: 'กรุณาระบุระดับการศึกษา' }]}
            >
              <Select onChange={handleSelectChange}>{renderEducationLevel}</Select>
            </Form.Item>
            <Form.Item<IRegister>
              label="ชื่อสถานศึกษา"
              name="schoolName"
              rules={[{ required: true, message: 'กรุณาระบุชื่อสถานศึกษา' }]}
            >
              <AutoComplete options={options} onSearch={(text) => setOptions(searchSchool(text))} />
            </Form.Item>
          </>
        )}
        <Button type="primary" htmlType="submit">
          ลงทะเบียน
        </Button>
      </Form>
    </div>
  )
}

export default RegisterForm

export interface IRegister {
  firstName: string
  lastName: string
  firstNameEN: string
  lastNameEN: string
  phoneNumber: string
  userType: UserType
  educationLevel?: string
  schoolName?: string
}
