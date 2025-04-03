
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Favheroes from './pages/Favheroes'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/login'
import Signup from './pages/signup'
import { useSelector } from 'react-redux'
import Animation from './pages/Animation';



function App() {


 let userslice=useSelector((state)=>state.user)
 console.log(userslice.login)
let login=userslice.login

  return (
    <>
      <BrowserRouter>
     <div className='h-[66px]'>
     <Navbar/>
     </div>
      <Routes>
        
        <Route path='/' element={login===true?<Home/>:<Navigate to={'/login'}/>}/>
        <Route path='/fav' element={login===true?<Favheroes/>:<Navigate to={'/login'}/>}/>
        <Route path='/signup' element={login===false?<Signup/>:<Navigate to={'/'}/>}/>
        <Route path='/login' element={login===false?<Login/>:<Navigate to={'/'}/>}/>
        <Route path='/animation' element={<Animation/>} />
       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
