import { Button } from 'antd'
import React from 'react'
import { axiosInstance } from 'src/utils/axios'

interface Props {
  style?: React.CSSProperties
  text?: string
}

const GoogleSignIn: React.FC<Props> = (props: Props): JSX.Element => {
  const handleSignInWithGoogle = async () => {
    const res = await axiosInstance.get('/api/auth/google')

    if (res.status === 200) {
      window.location.href = res.data.url
    }
  }

  return (
    <Button type="primary" onClick={handleSignInWithGoogle} {...props}>
      {props.text || 'เข้าสู่ระบบ'}
    </Button>
  )
}

export default GoogleSignIn
