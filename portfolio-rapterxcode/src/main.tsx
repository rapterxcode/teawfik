import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './App.css'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
], {
  //basename: '/portfolio-rapterxcode'
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
