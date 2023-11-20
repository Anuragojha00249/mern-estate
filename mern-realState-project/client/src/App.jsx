import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/SignIn' element={<SignIn/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Profile' element={<Profile/>} />
      <Route path='/SignUp' element={<SignUp/>} />
       

    </Routes>
    </BrowserRouter>
  )
}

export default App