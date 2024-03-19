import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
       <Outlet/>
    </>
  )
}

export default App
