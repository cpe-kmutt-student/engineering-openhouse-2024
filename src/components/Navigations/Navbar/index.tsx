import styles from './index.module.scss'
import GoogleSignIn from './GoogleSignIn'
import { Image } from 'antd'
import Logo from '../../../contents/images/logo.svg'
import { useEffect } from 'react'
import { cacheImage } from '../../../utils/cacheImage'

const Navbar: React.FC = (): JSX.Element => {
  useEffect(() => {
    cacheImage(Logo)
  }, [])

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image preview={false} src={Logo} width={45} />
      </div>
      <div className={styles.links}>
        <GoogleSignIn />
      </div>
    </div>
  )
}

export default Navbar
