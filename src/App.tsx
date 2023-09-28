import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import {
  ABOUT_PATH,
  WORKSHOP_DEPARTMENT_PATH,
  BASE_PATH,
  NOT_FOUND_PATH,
  PROFILE_PATH,
  EVENT_PATH,
  REGISTER_PATH,
  QR_CODE_VERITY,
} from './configs/routes'
import Home from './pages/Home'
import { LoadingPage } from './pages/Loading'
import Department from './pages/Department'
import Navbar from './components/Navigations/Navbar'
import BackToOpenhouse from './components/Navigations/BackToOpenhouseNav'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import Protected from './components/Protected'
import { AuthContext, IAuthContext, initialContextValue } from './utils/Context/AuthContext'
import Profile from './pages/Profile'
import Stamp from './pages/Stamp'
import EventActivity from './pages/EventActivity'
import { axiosInstance } from './utils/axios'

const App: React.FC = (): JSX.Element => {
  const [authContext, setAuthContext] = useState<IAuthContext>(initialContextValue)
  const [loading, setLoading] = useState<boolean>(true)

  const location = useLocation()

  const routeNavFilter = (pathname: string) => {
    switch (pathname) {
      case BASE_PATH:
        return <Navbar />

      case QR_CODE_VERITY:
        return

      default:
        return <BackToOpenhouse />
    }
  }

  const handleLogin = useCallback(async (): Promise<void> => {
    try {
      const res = await axiosInstance.get('/api/users')

      if (res.status === 200) {
        setAuthContext({ ...res.data.data, isAuthenticated: true })
      }
    } catch (err) {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleLogin().then(() => setLoading(false))
  }, [handleLogin])

  if (loading) return <LoadingPage />

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      <div className="App">
        <Suspense fallback={<LoadingPage />}>
          {routeNavFilter(location.pathname)}
          <Routes>
            <Route path={BASE_PATH} element={<Home />} />
            <Route path={ABOUT_PATH} element={<AboutUs />} />

            <Route path={WORKSHOP_DEPARTMENT_PATH} element={<Department />} />
            <Route path={EVENT_PATH} element={<EventActivity />} />

            <Route path={REGISTER_PATH} element={<Register />} />
            <Route path={PROFILE_PATH} element={<Protected element={<Profile />} />} />
            <Route path={QR_CODE_VERITY} element={<Protected element={<Stamp />} />} />

            <Route path={NOT_FOUND_PATH} element={<Navigate to={BASE_PATH} />} />
          </Routes>
        </Suspense>
      </div>
    </AuthContext.Provider>
  )
}

export default App
