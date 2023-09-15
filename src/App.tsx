import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { BASE_PATH, NOT_FOUND_PATH, OH_PAGE } from './services/routes'
import Landing from './pages/Landing'
import Openhouse from './pages/Openhouse'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path={BASE_PATH} element={<Landing />} />
        <Route path={OH_PAGE} element={<Openhouse />} />

        <Route path={NOT_FOUND_PATH} element={<Navigate to={BASE_PATH} />} />
      </Routes>
    </div>
  )
}

export default App
