import React, { Suspense, useState } from 'react'
import { Routes, Route, Navigate, useLocation, useSearchParams } from 'react-router-dom'
import {
  ABOUT_PATH,
  WORKSHOP_DEPARTMENT_PATH,
  BASE_PATH,
  EVENT_PATH,
  NOT_FOUND_PATH,
  PROFILE_PATH,
  ENGINEER_STARTER_TOUR_PATH,
  REGISTER_PATH,
} from './configs/routes'
import Home from './pages/Home'
import { LoadingPage } from './pages/Loading'
import Department from './pages/Department'
import EngineerStarterTour from './pages/Activities/EngineerStarterTour'
import Navbar from './components/Navigations/Navbar'
import BackToOpenhouse from './components/Navigations/BackToOpenhouseNav'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import Protected from './components/Protected'
import { AuthContext, IAuthContext, initialContextValue } from './utils/Context/AuthContext'
import Profile from './pages/Profile'

const App: React.FC = (): JSX.Element => {
  const [authContext, setAuthContext] = useState<IAuthContext>(initialContextValue)

  const location = useLocation()

  const [searchParams] = useSearchParams()
  const continuePath = searchParams.get('continue')

  const routeNavFilter = (pathname: string) => {
    switch (pathname) {
      case BASE_PATH:
        return <Navbar continuePath={continuePath} />

      default:
        return <BackToOpenhouse />
    }
  }

  // TODO : handle context

  // useEffect(() => {
  // }, [])

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      <div className="App">
        <Suspense fallback={<LoadingPage />}>
          {routeNavFilter(location.pathname)}
          <Routes>
            <Route path={BASE_PATH} element={<Home />} />
            <Route path={EVENT_PATH} element={<Home />} />
            <Route path={ABOUT_PATH} element={<AboutUs />} />

            <Route path={WORKSHOP_DEPARTMENT_PATH} element={<Department />} />
            <Route path={ENGINEER_STARTER_TOUR_PATH} element={<EngineerStarterTour />} />

            <Route path={REGISTER_PATH} element={<Protected element={<Register />} />} />
            <Route path={PROFILE_PATH} element={<Protected element={<Profile />} />} />

            <Route path={NOT_FOUND_PATH} element={<Navigate to={BASE_PATH} />} />
          </Routes>
        </Suspense>
      </div>
    </AuthContext.Provider>
  )
}

export default App
