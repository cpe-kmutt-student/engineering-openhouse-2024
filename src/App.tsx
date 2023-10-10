import React, { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import {
  ABOUT_PATH,
  WORKSHOP_DEPARTMENT_PATH,
  BASE_PATH,
  NOT_FOUND_PATH,
  PROFILE_PATH,
  EVENT_PATH,
  REGISTER_PATH,
  QR_CODE_VERITY_PATH,
  SATISFACTION_SURVEY_PATH,
  STAMP_PATH,
  EVENTS_PATH,
  MAP_PATH,
  CERTIFICATE_FORM_PATH,
} from './configs/routes'
import Protected from './components/Protected'
import { AuthContext, IAuthContext, initialContextValue } from './utils/Context/AuthContext'
import { axiosInstance } from './utils/axios'
import ReactGA from 'react-ga4'
import ScrollToTop from './components/ScrollToTop'
import { routeNavFilter } from './utils/nav'
import { LoadingPage } from './pages/Loading'
import Certificate from './pages/Certificate'

const Home = lazy(() => import('./pages/Home'))
const Department = lazy(() => import('./pages/Department'))
const Register = lazy(() => import('./pages/Register'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Profile = lazy(() => import('./pages/Profile'))
const Stamp = lazy(() => import('./pages/Stamp'))
const Event = lazy(() => import('./pages/Event'))
const SatisfactionSurvey = lazy(() => import('./pages/SatisfactionSurvey'))
const EStamp = lazy(() => import('./pages/EStamp'))
const Events = lazy(() => import('./pages/Events'))
const Map = lazy(() => import('./pages/Map'))

const App: React.FC = (): JSX.Element => {
  const [authContext, setAuthContext] = useState<IAuthContext>(initialContextValue)
  const [loading, setLoading] = useState<boolean>(true)

  const location = useLocation()

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

  if (!import.meta.env.DEV) ReactGA.initialize(import.meta.env.APP_GOOGLE_MEASURE_ID)

  if (loading) return <LoadingPage />

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      <ScrollToTop />
      <div className="App">
        <Suspense fallback={<LoadingPage />}>
          {routeNavFilter(location.pathname)}
          <Routes>
            <Route path={BASE_PATH} element={<Home />} />
            <Route path={ABOUT_PATH} element={<AboutUs />} />
            <Route path={EVENTS_PATH} element={<Events />} />
            <Route path={MAP_PATH} element={<Map />} />

            <Route path={WORKSHOP_DEPARTMENT_PATH} element={<Department />} />
            <Route path={EVENT_PATH} element={<Event />} />

            <Route path={REGISTER_PATH} element={<Register />} />

            <Route path={PROFILE_PATH} element={<Protected element={<Profile />} />} />
            <Route path={QR_CODE_VERITY_PATH} element={<Protected element={<Stamp />} />} />
            <Route path={SATISFACTION_SURVEY_PATH} element={<Protected element={<SatisfactionSurvey />} />} />
            <Route path={CERTIFICATE_FORM_PATH} element={<Protected element={<Certificate />} />} />
            <Route path={STAMP_PATH} element={<Protected element={<EStamp />} />} />

            <Route path={NOT_FOUND_PATH} element={<Navigate to={BASE_PATH} />} />
          </Routes>
        </Suspense>
      </div>
    </AuthContext.Provider>
  )
}

export default App
