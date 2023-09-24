import { Image, Space, Typography } from 'antd'
import styles from './index.module.scss'
import { IAuthContext } from 'src/utils/Context/AuthContext'

interface Props {
  auth: IAuthContext
}

const ProfileInfo: React.FC<Props> = ({ auth }: Props): JSX.Element => {
  const { Title } = Typography

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Image
          src="https://static.miraheze.org/bluearchivewiki/c/c3/Koharu.png?version=fa543d09d94b998647a5273a0d05c1bb"
          alt="avatar"
          width={150}
          height={150}
          preview={false}
        />
      </div>
      <div className={styles.content}>
        <Space align="center" direction="vertical" style={{ width: '100%' }}>
          <Title level={2}>{auth.name}</Title>
          <Title level={3}>Phubordin Poolnai</Title>
        </Space>
      </div>
    </div>
  )
}

export default ProfileInfo
