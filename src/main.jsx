import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import DefaultLayout from '../src/components/DefaultLayout.jsx'
import GuestLayout from '../src/components/GuestLayout.jsx'
import Login from './views/Login.jsx'
import Register from './views/Register.jsx'
import NotFound from './views/NotFound.jsx'
import About from './views/About.jsx'
import Help from './views/Help.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [{
            path: "/home",
            element: <App />,
        }, {
            path: "/about",
            element: <About />,
        }, {
            path: "/help",
            element: <Help />,
        },]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/login' />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
