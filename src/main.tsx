import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pagination from './routes/Pagination.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pagination />
  </StrictMode>,
)
