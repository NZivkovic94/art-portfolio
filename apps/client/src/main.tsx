import { createRoot } from 'react-dom/client'
import './styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
