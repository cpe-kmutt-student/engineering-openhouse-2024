import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from 'src/utils/axios'

interface Props {
  continuePath: string | null
}

const GoogleSignIn: React.FC<Props> = ({ continuePath }: Props): JSX.Element => {
  const navigate = useNavigate()

  const handleSignInWithGoogle = async () => {
    // TODO: Sign in with Google & handle access_token cookie

    const res = await axiosInstance.get('/api/auth/google')

    if (continuePath) {
      navigate(continuePath)
    }
    if (res.status === 200) {
      window.location.href = res.data.url
    }
  }

  return (
    <Button type="primary" onClick={handleSignInWithGoogle}>
      Login
    </Button>
  )
}

export default GoogleSignIn
