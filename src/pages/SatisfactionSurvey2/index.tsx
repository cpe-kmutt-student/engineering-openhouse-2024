import styles from './index.module.scss'

const SatisfactionSurvey2: React.FC = (): JSX.Element => {
  const FORM_URL = `https://docs.google.com/forms/d/e/1FAIpQLScdketYFWuFcLSqdeqlphDZ2xNnG0rLwSGl3zIQR5AnOPneSw/viewform?embedded=true`
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

export default SatisfactionSurvey2
