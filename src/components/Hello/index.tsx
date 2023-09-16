import { useState } from 'react'

const Hello: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>('')

  return (
    <>
      <input type="text" name="name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <h1>Hello, {name}</h1>
    </>
  )
}

export default Hello
