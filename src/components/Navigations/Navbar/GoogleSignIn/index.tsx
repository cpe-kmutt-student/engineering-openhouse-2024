import { GoogleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { axiosInstance } from '../../../../utils/axios'

const GoogleSignIn: React.FC = (): JSX.Element => {
  const handleSignInWithGoogle = async () => {
    // TODO: Sign in with Google
    const res = await axiosInstance.get('/api/auth/google')
    console.log(res)
    if (res.status === 200) {
      window.location.href = res.data.url
    }
  }

  return (
    <Button type="primary" icon={<GoogleOutlined />} onClick={handleSignInWithGoogle}>
      เข้าสู่ระบบด้วย Google
    </Button>
  )
}

export default GoogleSignIn
