import { Button } from 'antd'
import { axiosInstance } from 'src/utils/axios'

const GoogleSignIn: React.FC = (): JSX.Element => {
  const handleSignInWithGoogle = async () => {
    const res = await axiosInstance.get('/api/auth/google')

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
