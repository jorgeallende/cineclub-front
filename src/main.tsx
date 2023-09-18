import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/Landing/index.tsx'
import Register from './pages/Register'
import LoginPage from './pages/Login'
import Profile from './pages/Profile/index.tsx'
import Dashboard from './pages/Dashboard/index.tsx'
import NewMovie from './pages/NewMovie/index.tsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './muitheme.ts'
import NewClub from './pages/NewClub/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/new-movie',
    element: <NewMovie />,
  },
  {
    path: '/new-club',
    element: <NewClub />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
