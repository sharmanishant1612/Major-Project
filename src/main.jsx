import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Blog from './components/blog/blog.jsx'
import Contact from './components/contact/contact.jsx'
import Notes from './components/notes/notes.jsx'
import Layout from './components/layout.jsx'
import Resource from './components/resource/resource.jsx'
import LoginPage from './components/login/Login.jsx'
import SignupPage from './components/login/Signup.jsx'
import Authprovider from './components/authProvider/AuthProvider.jsx'
import Protectroute from './components/ProtectRoute/ProtectRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "notes",
        element:<Notes/>
      },
      {
        path: "blog",
        element: <Blog/>
      },
      {
        path: "resource",
        element: <Resource/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "login",
        element: <LoginPage/>
      },
      {
        path: "signup",
        element: <SignupPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router}/>
    </Authprovider>
  </StrictMode>,
)
