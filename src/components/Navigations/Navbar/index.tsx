import styles from './index.module.scss'
import GoogleSignIn from './GoogleSignIn'

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <GoogleSignIn />
      </div>
    </div>
  )
}

export default Navbar
