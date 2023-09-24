import { Button } from 'antd'
import { axiosInstance } from '../../../../utils/axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { ACCESS_TOKEN } from '../../../../configs/cookie'

interface Props {
  continuePath: string | null
}

const GoogleSignIn: React.FC<Props> = ({ continuePath }: Props): JSX.Element => {
  const navigate = useNavigate()

  const [cookie, setCookie] = useCookies([ACCESS_TOKEN])

  const handleSignInWithGoogle = async () => {
    // TODO: Sign in with Google & handle access_token cookie

    const res = await axiosInstance.get('/api/auth/google')
    console.log(res)
    // setCookie(ACCESS_TOKEN, res.data.access_token)

    if (continuePath) {
      navigate(continuePath)
    } else if (res.status === 200) {
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
