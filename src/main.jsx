import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/root/Root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Root></Root>
  </StrictMode>,
)
