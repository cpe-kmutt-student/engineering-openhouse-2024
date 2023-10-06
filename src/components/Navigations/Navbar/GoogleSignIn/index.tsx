import { Button } from 'antd'
import React from 'react'
import { handleSignInWithGoogle } from 'src/utils/axios'

interface Props {
  style?: React.CSSProperties
  text?: string
}

const GoogleSignIn: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <Button type="primary" onClick={handleSignInWithGoogle} {...props}>
      {props.text || 'เข้าสู่ระบบ'}
    </Button>
  )
}

export default GoogleSignIn
