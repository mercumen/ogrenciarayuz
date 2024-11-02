import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './test.jsx'

createRoot(document.getElementById('test')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
