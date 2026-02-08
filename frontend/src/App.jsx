import react from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import HomeUser from './pages/HomeUser';
import Footer from './pages/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Userinfo from './pages/UserInfo';
import Trophies from './pages/Trophies';
import TeamCreation from './pages/TeamCreation';
import GameScreen from './pages/GameScreen';
import Teams from './pages/Teams';
import Gamemaster from './pages/Gamemaster';
import GameCreate1 from './pages/GameCreate1';
import GameCreate2 from './pages/GameCreate2';
import GameCreate3 from './pages/GameCreate3';
import GameCreate4 from './pages/GameCreate4';
import GameCreate5 from './pages/GameCreate5';

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
        <Route path='/homeUser' element={<HomeUser/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>} />
        <Route path='/footer' element={<Footer/>} />
        <Route path='/userInfo' element={<Userinfo/>}/>
        <Route path='/trophies' element={<Trophies/>}/>
        <Route path='/teamCreation' element={<TeamCreation/>}/>
        <Route path='/gameScreen' element={<GameScreen/>}/>
        <Route path='/teams' element={<Teams/>}/>
        <Route path='/gamemaster' element={<Gamemaster/>}/>
        <Route path='/gameCreate1' element={<GameCreate1/>}/>
        <Route path='/gameCreate2' element={<GameCreate2/>}/>
        <Route path='/gameCreate3' element={<GameCreate3/>}/>
        <Route path='/gameCreate4' element={<GameCreate4/>}/>
        <Route path='/gameCreate5' element={<GameCreate5/>}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
