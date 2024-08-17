import ReactDOM from 'react-dom/client'
// import App from './App.tsx';
import './index.css'
import { RouterProvider } from 'react-router-dom'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>
//   }
// ]);

import router from './router/index.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <RouterProvider router={router} />
  </div>
)
