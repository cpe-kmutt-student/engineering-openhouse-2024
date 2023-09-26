import { createContext } from 'react'

export interface IAuthContext {
  id: string
  email: string
  firstName: string
  lastName: string
  profileUrl: string
}

export const initialContextValue: IAuthContext = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  profileUrl: '',
}

interface IAuthContextType {
  authContext: IAuthContext
  setAuthContext: (value: IAuthContext) => void
}

export const AuthContext = createContext<IAuthContextType | null>(null)
