import { Typography } from 'antd'
import styles from './index.module.scss'
import { useContext } from 'react'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { LoadingPage } from '../Loading'

const Profile: React.FC = (): JSX.Element => {
  const { Title } = Typography

  const user = useContext(AuthContext)

  if (!user) return <LoadingPage />

  return (
    <div className={styles.profilePage}>
      <Title>{user.authContext.name}</Title>
    </div>
  )
}

export default Profile
