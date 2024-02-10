import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
 
 <BrowserRouter>
 <Routes>
<Route path ="/" element={<Home />} />
<Route path ="/about" element={<About />} />

<Route path ="/sign-in" element={<SignIn />} />
<Route path ="/sign-up" element={<SignUp />} />
<Route path ="/dashboard" element={<Dashboard />} />

 </Routes>
 </BrowserRouter>
  )
}

export default App
