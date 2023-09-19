import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  ABOUT_PATH,
  WORKSHOP_DEPARTMENT_PATH,
  BASE_PATH,
  EVENT_PATH,
  NOT_FOUND_PATH,
  PROFILE_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  ENGINEER_STARTER_TOUR_PATH,
} from './configs/routes'
import Home from './pages/Home'
import { LoadingPage } from './pages/Loading'
import Department from './pages/Department'
import EngineerStarterTour from './pages/Activities/EngineerStarterTour'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path={BASE_PATH} element={<Home />} />
          <Route path={ABOUT_PATH} element={<LoadingPage />} />
          <Route path={EVENT_PATH} element={<Home />} />

          <Route path={WORKSHOP_DEPARTMENT_PATH} element={<Department />} />

          <Route path={ENGINEER_STARTER_TOUR_PATH} element={<EngineerStarterTour />} />

          <Route path={SIGN_IN_PATH} element={<Home />} />
          <Route path={SIGN_UP_PATH} element={<Home />} />
          <Route path={PROFILE_PATH} element={<Home />} />

          <Route path={NOT_FOUND_PATH} element={<Navigate to={BASE_PATH} />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
