import { AuthContext } from 'src/utils/Context/AuthContext'
import styles from './index.module.scss'
import { useContext } from 'react'

const Certificate: React.FC = (): JSX.Element => {
  const auth = useContext(AuthContext)

  const FORM_URL = `
  https://docs.google.com/forms/d/e/1FAIpQLSfaaSnFkJju0_NtdBpGX_GKN2j6BzbuykYIbRmCw8CQlyz3vw/viewform?usp=pp_url&entry.40952531=${auth?.authContext.email}`

  return (
    <div className={styles.survey}>
      <iframe
        src={FORM_URL}
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default Certificate
