import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Home'
import { Salgados } from './Salgados'
import { Doces } from './Doces'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/salgados',
    element: <Salgados />,
  },
  {
    path: '/doces',
    element: <Doces />,
  },
])

export default router
