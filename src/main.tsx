import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.scss'
import { ConfigProvider } from 'antd'
import { theme } from './configs/theme.ts'
import ReactGA from 'react-ga'

ReactGA.initialize(import.meta.env.APP_GOOGLE_MEASURE_ID)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </BrowserRouter>,
)
