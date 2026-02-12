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
            navigate("/login")
            
        } catch (error) {
            alert(error)
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
                          <h1 className='items-center text-center'>Creating a new account!</h1>
                          <div className='p-3 flex flex-col'>
                            <p1 className='text-accent font-normal'>Username</p1>
                            <input className='bg-input rounded-md' type="text" />
                          </div>
                          <div className='p-3 flex flex-col'>
                            <p1 className='text-accent font-normal'>Email</p1>
                            <input className='bg-input rounded-md' type="text" value="userName" onChange={(e)=> setUsername(e.target.value)} placeholder="Username" />
                          </div>
                          <div className='p-3 flex flex-col'>
                            <p1 className='text-accent font-normal'>Password</p1>
                            <input className='bg-input rounded-md' type="password"  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                          </div>
                          <div className='p-3 flex flex-col'>
                            <p1 className='text-accent font-normal'>Recheck the password</p1>
                            <input className='bg-input rounded-md' type="password" />
                          </div>
                          <div className='p-5 justify-center flex'>
                            <button className='btn' type="submit">Create the account</button>
                          </div>
                        </div>
                      </div>
                      
                    </div>
            </form>
        
    );
}

export default Login