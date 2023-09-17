import React from 'react'
import styles from './index.module.scss'
import Loading from '../../components/Loading'

export const LoadingPage: React.FC = (): JSX.Element => {
  return (
    <div className={styles.loadingPage}>
      <Loading size="large" />
    </div>
  )
}
