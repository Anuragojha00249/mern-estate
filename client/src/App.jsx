import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path='/Profile' element={<Profile/>} />
      <Route path='/SignUp' element={<SignUp/>} />
       

    </Routes>
    </BrowserRouter>
  )
}

export default App