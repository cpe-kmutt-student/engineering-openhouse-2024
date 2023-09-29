import styles from './index.module.scss'

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScoggyAUew5m8MxYGV8-JaDVAElVTHc3SY9hmEE-RtRcDYZ3w/viewform'

const SatisfactionSurvey: React.FC = (): JSX.Element => {
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
