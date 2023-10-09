import axios from 'axios'
import { registerEvent } from './gaEvents'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.APP_BACKEND_URL ?? 'http://localhost:5000',
  withCredentials: true,
})

export const handleSignInWithGoogle = async () => {
  const res = await axiosInstance.get('/api/auth/google')

  if (res.status === 200) {
    registerEvent()
    window.location.href = res.data.url
  }
}
