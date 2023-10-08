import { Image, Space, Typography } from 'antd'
import styles from './index.module.scss'
import { AccountType } from 'src/contents/register/enum'

interface Props {
  user: IUserInfo
}

export interface IUserInfo {
  prefix: string
  firstName: string
  lastName: string
  firstNameEng: string
  lastNameEng: string
  phone: string
  accountType: AccountType
  email: string
  profileUrl: string
  currentProvince: string
  is_advisor: boolean
  educationLevel?: string
  schoolName?: string
  schoolProvince?: string
  reward_1?: boolean
  reward_2?: boolean
  form_submit?: boolean
}

const ProfileInfo: React.FC<Props> = ({ user }: Props): JSX.Element => {
  const { Title, Text } = Typography

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Image src={user.profileUrl} alt="avatar" width={150} height={150} preview={false} />
      </div>
      <div className={styles.content}>
        <Space direction="vertical" align="center" style={{ width: '100%' }}>
          <Title level={2}>
            {user.firstName} {user.lastName}
          </Title>
          <Title level={3}>
            {user.firstNameEng} {user.lastNameEng}
          </Title>
          <Text className={styles.schoolName}>
            {user.accountType === AccountType.student || user.accountType === AccountType.teacher
              ? user.schoolName
              : user.currentProvince}
          </Text>
        </Space>
        <Space direction="vertical" align="center" style={{ width: '100%', marginTop: '20px' }}>
          <Text>อีเมล: {user.email}</Text>
          <Text>เบอร์โทรศัพท์: {user.phone}</Text>
        </Space>
      </div>
    </div>
  )
}

export default ProfileInfo
