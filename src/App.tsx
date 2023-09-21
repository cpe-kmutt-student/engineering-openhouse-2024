import React, { Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
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

const App: React.FC = (): JSX.Element => {
  const location = useLocation()

  const routeNavFilter = (pathname: string) => {
    switch (pathname) {
      case BASE_PATH:
        return <Navbar />

      case REGISTER_PATH:
        return

      case PROFILE_PATH:
        return

      default:
        return <BackToOpenhouse />
    }
  }

  // TODO: Protected Routes

  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        {routeNavFilter(location.pathname)}
        <Routes>
          <Route path={BASE_PATH} element={<Home />} />
          <Route path={EVENT_PATH} element={<Home />} />
          <Route path={ABOUT_PATH} element={<AboutUs />} />

          <Route path={WORKSHOP_DEPARTMENT_PATH} element={<Department />} />
          <Route path={ENGINEER_STARTER_TOUR_PATH} element={<EngineerStarterTour />} />

          <Route path={REGISTER_PATH} element={<Register />} />
          <Route path={PROFILE_PATH} element={<Home />} />

          <Route path={NOT_FOUND_PATH} element={<Navigate to={BASE_PATH} />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
