import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Render } from './components/render'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Render/>
  </StrictMode>
)
