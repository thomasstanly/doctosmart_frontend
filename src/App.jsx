import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage/HomePage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path:'login',
      element: <Login />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
