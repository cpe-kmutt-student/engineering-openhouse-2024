import { createContext } from 'react'

export interface IAuthContext {
  id: string
  email: string
  firstName: string
  lastName: string
  profileUrl: string
  isAuthenticated: boolean
}

export interface IAuthUserAPI extends IAuthContext {
  accountType: string
  created_at: string
  educationLevel: string
  firstNameEng: string
  lastNameEng: string
  phone: string
  schoolName: string
}

export const initialContextValue: IAuthContext = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  profileUrl: '',
  isAuthenticated: false,
}

interface IAuthContextType {
  authContext: IAuthContext
  setAuthContext: (value: IAuthContext) => void
}

export const AuthContext = createContext<IAuthContextType | null>(null)
