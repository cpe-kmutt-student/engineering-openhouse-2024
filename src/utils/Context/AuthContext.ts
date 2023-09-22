import { createContext } from 'react'

export interface IAuthContext {
  name: string
  email: string
  tel: string
}

export const initialContextValue: IAuthContext = {
  name: '',
  email: '',
  tel: '',
}

interface IAuthContextType {
  authContext: IAuthContext
  setAuthContext: (value: IAuthContext) => void
}

export const AuthContext = createContext<IAuthContextType | null>(null)
