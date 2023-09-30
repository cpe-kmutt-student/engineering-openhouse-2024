import { AutoComplete, Button, Form, FormInstance, Input, Radio, Select, Typography } from 'antd'
import styles from './index.module.scss'
import { useRef, useState } from 'react'
import { IEducationLevel, educationLevel } from 'src/contents/register/educationLevel'
import { AccountType } from 'src/contents/register/enum'
import { namePrefix } from 'src/contents/register/prefix'

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
  const accountType = Form.useWatch('accountType', form)

  const { Option } = Select
  const { Title } = Typography

  const handleEducationSelectChange = (value: string) => {
    formRef.current?.setFieldsValue({ educationLevel: value })
  }

  const handlePrefixSelectChange = (value: string) => {
    formRef.current?.setFieldsValue({ prefix: value })
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

  const renderNamePrefix = namePrefix.map((prefix: string, i: number) => (
    <Option value={prefix} key={i}>
      {prefix}
    </Option>
  ))

  return (
    <div className={styles.form}>
      <Title>ลงทะเบียน</Title>
      <Form layout="vertical" onFinish={onFinish} ref={formRef} form={form}>
        <Form.Item<IRegister>
          name="prefix"
          label="คำนำหน้าชื่อ"
          rules={[{ required: true, message: 'กรุณาระบุระดับการศึกษา' }]}
        >
          <Select onChange={handlePrefixSelectChange}>{renderNamePrefix}</Select>
        </Form.Item>
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
            name="firstNameEng"
            rules={[{ required: true, message: 'กรุณาระบุชื่อจริง (ภาษาอังกฤษ)' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<IRegister>
            label="Last name"
            name="lastNameEng"
            rules={[{ required: true, message: 'กรุณาระบุนามสกุล (ภาษาอังกฤษ)' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item<IRegister>
          label="หมายเลขโทรศัพท์"
          name="phone"
          rules={[
            { required: true, message: 'กรุณาระบุหมายเลขโทรศัพท์' },
            { min: 10, max: 10, message: 'หมายเลขโทรศัพท์ต้องมีจำนวน 10 หลัก' },
            { pattern: new RegExp(/^[0-9]+$/), message: 'หมายเลขโทรศัพท์ต้องไม่มีตัวอักษร' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<IRegister>
          label="ประเภทผู้ใช้งาน"
          rules={[{ required: true, message: 'กรุณาระบุประเภทผู้ใช้งาน' }]}
          name="accountType"
        >
          <Radio.Group>
            <Radio value={AccountType.student}>นักเรียน/นักศึกษา</Radio>
            <Radio value={AccountType.teacher}>อาจารย์</Radio>
            <Radio value={AccountType.guardian}>ผู้ปกครอง</Radio>
            <Radio value={AccountType.general}>บุคคลทั่วไป</Radio>
          </Radio.Group>
        </Form.Item>
        {accountType === AccountType.student && (
          <>
            <Form.Item<IRegister>
              name="educationLevel"
              label="ระดับการศึกษา"
              rules={[{ required: true, message: 'กรุณาระบุระดับการศึกษา' }]}
            >
              <Select onChange={handleEducationSelectChange}>{renderEducationLevel}</Select>
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
  prefix: string
  firstName: string
  lastName: string
  firstNameEng: string
  lastNameEng: string
  phone: string
  accountType: AccountType
  educationLevel?: string
  schoolName?: string
}
