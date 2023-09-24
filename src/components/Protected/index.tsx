import { Navigate } from 'react-router-dom'
import { ReactNode, useContext } from 'react'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { BASE_PATH } from 'src/configs/routes'

interface Props {
  element: ReactNode
}

const Protected: React.FC<Props> = ({ element }: Props) => {
  const authContext = useContext(AuthContext)

  const isAuthenticated = !!authContext?.authContext.email

  const redirectWithContinuePath = (): ReactNode => {
    const pathname = location.pathname + location.search

    return <Navigate to={`${BASE_PATH}?continue=${encodeURIComponent(pathname)}`} />
  }

  return isAuthenticated ? element : redirectWithContinuePath()
}

export default Protected
