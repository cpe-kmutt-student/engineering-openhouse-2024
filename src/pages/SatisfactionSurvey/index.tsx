import { AuthContext } from 'src/utils/Context/AuthContext'
import styles from './index.module.scss'
import { useContext } from 'react'

const SatisfactionSurvey: React.FC = (): JSX.Element => {
  const auth = useContext(AuthContext)

  const FORM_URL = `https://docs.google.com/forms/d/e/1FAIpQLSdcKt92D3g94JaBbK0VdrvMQPVXu8Tln43FmRI053YsvrV7Sw/viewform?usp=pp_url&entry.1388905119=${auth?.authContext.email}`
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

export default SatisfactionSurvey
