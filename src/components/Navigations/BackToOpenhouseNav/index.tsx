import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { BASE_PATH } from '../../../configs/routes'
import { Button } from 'antd'

const BackToOpenhouse: React.FC = (): JSX.Element => {
  return (
    <div className={styles.backToOpenhouse}>
      <Link to={BASE_PATH}>
        <Button type="primary">
          กลับสู่&nbsp;<span>Openhouse</span>
        </Button>
      </Link>
    </div>
  )
}

export default BackToOpenhouse
