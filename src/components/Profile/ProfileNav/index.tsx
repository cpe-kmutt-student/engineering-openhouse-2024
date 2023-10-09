import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { PROFILE_PATH, STAMP_PATH } from 'src/configs/routes'
import { isTodayOpenHouse } from 'src/utils/date'

const ProfileNav: React.FC = (): JSX.Element => {
  return (
    <div className={styles.nav}>
      <Link to={PROFILE_PATH}>โปรไฟล์</Link>
      {isTodayOpenHouse() && <Link to={STAMP_PATH}>E-Stamp</Link>}
    </div>
  )
}

export default ProfileNav
