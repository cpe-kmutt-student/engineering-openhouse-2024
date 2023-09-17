import { Button, Typography } from 'antd'
import { useState } from 'react'

const Hello: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>('')

  const { Title } = Typography

  return (
    <>
      <input type="text" name="name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <Title level={2}>Hello, {name}</Title>
      <Button type="primary">Click me</Button>
    </>
  )
}

export default Hello
