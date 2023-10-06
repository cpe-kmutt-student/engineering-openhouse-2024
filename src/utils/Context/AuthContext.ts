import { createContext } from 'react'

export interface IAuthContext {
  id: string
  email: string
  isAuthenticated: boolean
}

export const initialContextValue: IAuthContext = {
  id: '',
  email: '',
  isAuthenticated: false,
}

interface IAuthContextType {
  authContext: IAuthContext
  setAuthContext: (value: IAuthContext) => void
}

export const AuthContext = createContext<IAuthContextType | null>(null)
