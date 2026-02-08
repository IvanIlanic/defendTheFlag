import react from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Footer from './pages/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Userinfo from './pages/UserInfo';
import Trophies from './pages/Trophies';
import TeamCreation from './pages/TeamCreation';
import GameScreen from './pages/GameScreen';
import Teams from './pages/Teams';
import Gamemaster from './pages/Gamemaster';

function Logout (){ // Used to clear the local storage from the tokens when the user logsout
  localStorage.clear()
  return <Navigate to="/login"/>
}

function RegisterAndLogout (){
  localStorage.clear()
  return <Register/>
}

function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/userInfo' element={<Userinfo/>}/>
        <Route path='/trophies' element={<Trophies/>}/>
        <Route path='/teamCreation' element={<TeamCreation/>}/>
        <Route path='/gameScreen' element={<GameScreen/>}/>
        <Route path='/teams' element={<Teams/>}/>
        <Route path='/gamemaster' element={<Gamemaster/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
