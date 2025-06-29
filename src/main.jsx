import { inject } from '@vercel/analytics'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Initialize Vercel Analytics
inject();

createRoot(document.getElementById('root')).render (
  <StrictMode>
    <App />
  </StrictMode>
)
