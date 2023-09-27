import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { BASE_PATH, NOT_FOUND_PATH } from './configs/routes'
import Home from './pages/Home'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path={BASE_PATH} element={<Home />} />
        <Route path={NOT_FOUND_PATH} element={<Navigate to={BASE_PATH} />} />
      </Routes>
    </div>
  )
}

export default App
