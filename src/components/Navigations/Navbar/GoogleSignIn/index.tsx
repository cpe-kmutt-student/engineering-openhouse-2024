import { Button } from 'antd'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'src/utils/Context/AuthContext'
import { axiosInstance } from 'src/utils/axios'

interface Props {
  continuePath: string | null
}

const GoogleSignIn: React.FC<Props> = ({ continuePath }: Props): JSX.Element => {
  const auth = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSignInWithGoogle = async () => {
    // TODO: Sign in with Google & handle access_token cookie

    const res = await axiosInstance.get('/api/auth/google')

    if (res.status === 200) {
      const userRes = await axiosInstance.get('/api/users')

      if (userRes.status === 200) {
        auth?.setAuthContext(userRes.data.data)
        navigate(continuePath ?? res.data.url, { replace: true })
      }
    }
  }

  return (
    <Button type="primary" onClick={handleSignInWithGoogle}>
      Login
    </Button>
  )
}

export default GoogleSignIn
