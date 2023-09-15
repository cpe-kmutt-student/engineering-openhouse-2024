import { useTranslation } from 'react-i18next'
import { Translation } from '../../services/translation'
import { useState } from 'react'

const Hello: React.FC = (): JSX.Element => {
  const [name, setName] = useState<string>('')

  const { t } = useTranslation()

  return (
    <>
      <input type="text" name="name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
      <h1>{t(Translation.hello, { name })}</h1>
    </>
  )
}

export default Hello
