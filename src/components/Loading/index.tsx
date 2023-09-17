import { Spin, SpinProps } from 'antd'
import React from 'react'

const Loading: React.FC<SpinProps> = (props: SpinProps): JSX.Element => {
  return <Spin {...props} />
}

export default Loading
