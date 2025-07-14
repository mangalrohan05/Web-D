import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Login from './components/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Home/></>
    },
    {
      path: '/login',
      element: <><Navbar/><Login/></>
    },
    {
      path: "/about",
      element: <><Navbar/><About/></>
    },
  ])

  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
