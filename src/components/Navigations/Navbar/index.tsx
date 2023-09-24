import styles from './index.module.scss'
import GoogleSignIn from './GoogleSignIn'
import { Button, Image } from 'antd'
import Logo from 'src/contents/images/logo.svg'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cacheImage } from 'src/utils/cacheImage'
import { ABOUT_PATH } from 'src/configs/routes'

interface Props {
  continuePath: string | null
}

const Navbar: React.FC<Props> = ({ continuePath }: Props) => {
  useEffect(() => {
    cacheImage(Logo)
  }, [])

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Image preview={false} src={Logo} width={45} />
        <Link to={ABOUT_PATH}>
          <Button type="text">เกี่ยวกับเรา</Button>
        </Link>
      </div>
      <GoogleSignIn continuePath={continuePath} />
    </div>
  )
}

export default Navbar
