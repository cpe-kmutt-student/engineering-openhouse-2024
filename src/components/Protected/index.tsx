import { Navigate } from 'react-router-dom'
import { BASE_PATH } from '../../configs/routes'
import { ReactNode } from 'react'

interface Props {
  element: ReactNode
}

const Protected: React.FC<Props> = ({ element }: Props) => {
  // TODO: Auth context or use Redux instead
  const isAuth = false

  const redirectWithContinuePath = (): ReactNode => {
    const pathname = location.pathname + location.search

    return <Navigate to={`${BASE_PATH}?continue=${encodeURIComponent(pathname)}`} />
  }

  return isAuth ? element : redirectWithContinuePath()
}

export default Protected
