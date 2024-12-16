import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx';
import './styles/global.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter basename="/project-travel-planning">
    <App />
  </BrowserRouter>
  </StrictMode>

)
