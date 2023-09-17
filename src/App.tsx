import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  ABOUT_PATH,
  BASE_PATH,
  EVENT_PATH,
  NOT_FOUND_PATH,
  PROFILE_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
} from './configs/routes'
import Landing from './pages/Landing'
import { LoadingPage } from './pages/Loading'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path={BASE_PATH} element={<Landing />} />
          <Route path={ABOUT_PATH} element={<LoadingPage />} />
          <Route path={EVENT_PATH} element={<Landing />} />

          <Route path={SIGN_IN_PATH} element={<Landing />} />
          <Route path={SIGN_UP_PATH} element={<Landing />} />
          <Route path={PROFILE_PATH} element={<Landing />} />
          <Route path={NOT_FOUND_PATH} element={<Navigate to={BASE_PATH} />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
