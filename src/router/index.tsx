import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
])
export default router
