import { Button, Form, FormInstance, Input, Select, Typography } from 'antd'
import styles from './index.module.scss'
import { IUserInfo } from '../ProfileInfo'
import React, { useEffect, useRef } from 'react'
import { namePrefix } from 'src/contents/register/prefix'

interface Props {
  userInfo: IUserInfo
  setEdit: (value: boolean) => void
  onFinish: (value: EditProfileForm) => void
}

type ExcludeUserInfoType =
  | 'accountType'
  | 'educationLevel'
  | 'schoolName'
  | 'email'
  | 'profileUrl'
  | 'schoolProvince'
  | 'currentProvince'
  | 'is_advisor'

export type EditProfileForm = Omit<IUserInfo, ExcludeUserInfoType>

const EditProfile: React.FC<Props> = ({ userInfo, onFinish, setEdit }: Props): JSX.Element => {
  const { Title } = Typography
  const { Option } = Select

  const formRef = useRef<FormInstance>(null)
  const [form] = Form.useForm()

  const handlePrefixSelectChange = (value: string) => {
    formRef.current?.setFieldsValue({ prefix: value })
  }

  const renderNamePrefix = namePrefix.map((prefix: string, i: number) => (
    <Option value={prefix} key={i}>
      {prefix}
    </Option>
  ))

  const handleReset = () => {
    setEdit(false)
    form.setFieldValue('prefix', userInfo.prefix)
    form.setFieldValue('firstName', userInfo.firstName)
    form.setFieldValue('lastName', userInfo.lastName)
    form.setFieldValue('firstNameEng', userInfo.firstNameEng)
    form.setFieldValue('lastNameEng', userInfo.lastNameEng)
    form.setFieldValue('phone', userInfo.phone)
  }

  useEffect(() => {
    form.setFieldValue('prefix', userInfo.prefix)
    form.setFieldValue('firstName', userInfo.firstName)
    form.setFieldValue('lastName', userInfo.lastName)
    form.setFieldValue('firstNameEng', userInfo.firstNameEng)
    form.setFieldValue('lastNameEng', userInfo.lastNameEng)
    form.setFieldValue('phone', userInfo.phone)
  }, [form, userInfo])

  return (
    <div className={styles.editProfile}>
      <Title level={3} style={{ textAlign: 'center' }}>
        แก้ไขข้อมูล
      </Title>
      <Form layout="vertical" onFinish={onFinish} ref={formRef} form={form}>
        <Form.Item<EditProfileForm>
          name="prefix"
          label="คำนำหน้าชื่อ"
          rules={[{ required: true, message: 'กรุณาระบุระดับการศึกษา' }]}
        >
          <Select onChange={handlePrefixSelectChange}>{renderNamePrefix}</Select>
        </Form.Item>
        <div className={styles.formGroup}>
          <Form.Item<EditProfileForm>
            label="ชื่อจริง"
            name="firstName"
            rules={[{ required: true, message: 'กรุณาระบุชื่อจริง' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<EditProfileForm>
            label="นามสกุล"
            name="lastName"
            rules={[{ required: true, message: 'กรุณาระบุนามสกุล' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className={styles.formGroup}>
          <Form.Item<EditProfileForm>
            label="First name"
            name="firstNameEng"
            rules={[{ required: true, message: 'กรุณาระบุชื่อจริง (ภาษาอังกฤษ)' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<EditProfileForm>
            label="Last name"
            name="lastNameEng"
            rules={[{ required: true, message: 'กรุณาระบุนามสกุล (ภาษาอังกฤษ)' }]}
          >
            <Input />
          </Form.Item>
        </div>
        <Form.Item<EditProfileForm>
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
        <div className={styles.submitBtn}>
          <Button type="text" onClick={() => handleReset()}>
            ยกเลิก
          </Button>
          <Button type="primary" htmlType="submit">
            บันทึก
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default EditProfile
