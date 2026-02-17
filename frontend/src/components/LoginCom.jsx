import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import logo from '../assets/DefendTHEFlag.png'



function Login({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/home")
            
        } catch (error) {
            alert(JSON.stringify(error?.response?.data ?? error.message))
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="p-6" >
                <img src={logo} alt="DefenTheFlag logo" className='h-10' />
                <div className="h-auto w-auto p-6 bg-surface rounded-md pb-4">
                  <h1 className='items-center text-center'>Sign in into Defend the Flag</h1>
                  <div className='p-3 flex flex-col'>
                    <p1 className='text-accent font-normal'>Username</p1>
                    <input className='bg-input rounded-md' type="text"  onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                  </div>
                  <div className='p-3 flex flex-col'>
                    <p1 className='text-accent font-normal '  >Password</p1>
                    <input className='bg-input rounded-md' onChange={(e) => setPassword(e.target.value)}  type="password" />
                  </div>
                  <div className='p-5 justify-center flex'>
                    <button className='btn' type="submit">GameTime</button>
                  </div>
                  <div className=' border-input border'></div>
                  <div className='flex flex-col m-0 mt-3 '>
                    <p1 className='m-0'>New to defend the flag?</p1>
                    <p1 className='m-0 text-accent '><a href="http://localhost:5173/register">Create an accont -</a></p1>
                  </div>
                  
        
        
                </div>
              </div>
              
            </div>
            </form>
        
    );
}

export default Login