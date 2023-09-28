import { Navigate, useLocation } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { BASE_PATH } from 'src/configs/routes'
import { LoadingPage } from 'src/pages/Loading'

interface Props {
  element: JSX.Element
}

const Protected: React.FC<Props> = ({ element }: Props) => {
  const [loading] = useState<boolean>(false)

  const location = useLocation()
  const auth = useContext(AuthContext)

  const isAuthenticated = auth?.authContext.isAuthenticated

  if (loading) return <LoadingPage />

  return isAuthenticated ? element : <Navigate replace to={BASE_PATH} state={{ from: location }} />
}

export default Protected
