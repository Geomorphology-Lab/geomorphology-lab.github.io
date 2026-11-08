import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'
import { printEasterEgg } from './easterEgg'
import { protectPhotos } from './protect'

// Console-only message for curious visitors (no UI change)
printEasterEgg()
protectPhotos()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
