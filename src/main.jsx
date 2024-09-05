import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GitExpertApp } from './GifExpertApp.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  // El modo estricto solo se aplica en desarrollo, permite identificar errores
  <StrictMode>
    <GitExpertApp />
  </StrictMode>
)
