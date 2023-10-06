import { AutoComplete, Button, Checkbox, Form, FormInstance, Input, Radio, Select, Typography } from 'antd'
import styles from './index.module.scss'
import { useRef, useState } from 'react'
import { IEducationLevel, educationLevel } from 'src/contents/register/educationLevel'
import { AccountType } from 'src/contents/register/enum'
import { namePrefix } from 'src/contents/register/prefix'
import { IUserInfo } from 'src/components/Profile/ProfileInfo'
import { searchProvince, searchSchool } from 'src/utils/search'

interface Props {
  onFinish: (value: RegisterFormType) => void
}

export type RegisterFormType = Omit<IUserInfo, 'email' | 'profileUrl'>

const RegisterForm: React.FC<Props> = ({ onFinish }: Props): JSX.Element => {
  const [schoolOptions, setSchoolOptions] = useState<{ value: string }[]>([])
  const [provinceOptions, setProvinceOptions] = useState<{ value: string }[]>([])

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

  const accountTypeFilter = () => {
    switch (accountType) {
      case AccountType.student:
        return (
          <>
            <Form.Item<RegisterFormType>
              name="educationLevel"
              label="ระดับการศึกษา"
              rules={[{ required: true, message: 'กรุณาระบุระดับการศึกษา' }]}
            >
              <Select onChange={handleEducationSelectChange}>{renderEducationLevel}</Select>
            </Form.Item>
            <Form.Item<RegisterFormType>
              label="ชื่อสถานศึกษา"
              name="schoolName"
              rules={[{ required: true, message: 'กรุณาระบุชื่อสถานศึกษา' }]}
            >
              <AutoComplete options={schoolOptions} onSearch={(text) => setSchoolOptions(searchSchool(text))} />
            </Form.Item>
            <Form.Item<RegisterFormType>
              label="จังหวัดสถานศึกษา"
              name="schoolProvince"
              rules={[{ required: true, message: 'กรุณาระบุจังหวัดสถานศึกษา' }]}
            >
              <AutoComplete options={provinceOptions} onSearch={(text) => setProvinceOptions(searchProvince(text))} />
            </Form.Item>
          </>
        )

      case AccountType.teacher:
        return (
          <>
            <Form.Item<RegisterFormType> name="is_advisor" valuePropName="checked">
              <Checkbox>ฉันเป็นครูแนะแนว</Checkbox>
            </Form.Item>
            <Form.Item<RegisterFormType>
              label="ชื่อสังกัดสถานศึกษา"
              name="schoolName"
              rules={[{ required: true, message: 'กรุณาระบุชื่อสถานศึกษา' }]}
            >
              <AutoComplete options={schoolOptions} onSearch={(text) => setSchoolOptions(searchSchool(text))} />
            </Form.Item>
            <Form.Item<RegisterFormType>
              label="จังหวัดสังกัดสถานศึกษา"
              name="schoolProvince"
              rules={[{ required: true, message: 'กรุณาระบุจังหวัดสถานศึกษา' }]}
            >
              <AutoComplete options={provinceOptions} onSearch={(text) => setProvinceOptions(searchProvince(text))} />
            </Form.Item>
          </>
        )

      default:
    }
  }

  return (
    <div className={styles.form}>
      <Title>ลงทะเบียน</Title>
      <Form layout="vertical" onFinish={onFinish} ref={formRef} form={form}>
        <Form.Item<RegisterFormType>
          name="prefix"
          label="คำนำหน้าชื่อ"
          rules={[{ required: true, message: 'กรุณาระบุระดับการศึกษา' }]}
        >
          <Select onChange={handlePrefixSelectChange}>{renderNamePrefix}</Select>
        </Form.Item>
        <div className={styles.formGroup}>
          <Form.Item<RegisterFormType>
            label="ชื่อจริง"
            name="firstName"
            rules={[{ required: true, message: 'กรุณาระบุชื่อจริง' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<RegisterFormType>
            label="นามสกุล"
            name="lastName"
            rules={[{ required: true, message: 'กรุณาระบุนามสกุล' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className={styles.formGroup}>
          <Form.Item<RegisterFormType>
            label="First name"
            name="firstNameEng"
            rules={[{ required: true, message: 'กรุณาระบุชื่อจริง (ภาษาอังกฤษ)' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<RegisterFormType>
            label="Last name"
            name="lastNameEng"
            rules={[{ required: true, message: 'กรุณาระบุนามสกุล (ภาษาอังกฤษ)' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item<RegisterFormType>
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
        <Form.Item<RegisterFormType>
          label="จังหวัดที่อาศัยปัจจุบัน"
          name="currentProvince"
          rules={[{ required: true, message: 'กรุณาระบุจังหวัด' }]}
        >
          <AutoComplete options={provinceOptions} onSearch={(text) => setProvinceOptions(searchProvince(text))} />
        </Form.Item>
        <Form.Item<RegisterFormType>
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
        {accountTypeFilter()}
        <Button type="primary" htmlType="submit">
          ลงทะเบียน
        </Button>
      </Form>
    </div>
  )
}

export default RegisterForm
