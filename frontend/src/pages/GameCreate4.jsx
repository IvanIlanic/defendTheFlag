
import val from '../assets/Val.png'
import windows from '../assets/windows.png'
import terminal from '../assets/terminal.png'
import postgres from '../assets/postgres.png'
import discord from "../assets/discord.png";
import skull from "../assets/Skull.png";
import tipp from "../assets/Tipp.png";
import plus from "../assets/plus.png";

import api from '../api'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


function GameCreate4() {

    const [queue, setQueue] = useState(null)
    const navigate = useNavigate()

    const startSearch = async() =>{
        try{
            const res = await api.post("/api/queue-game/state2/")
            alert("Game started")
            navigate("/gameCreate5")
        }
        catch(err){
            alert(err.response?.data?.detail || "Cannot start game")
        }
    }
    const getQueue = async ()=> {
        try{
            const res = await api.get("/api/queue-game/")
            setQueue(res.data)
            console.log(res.data)
        }
        catch(err){
            alert(err.response?.data?.detail || "Cannot get team")
        }
    }

    useEffect(()=>{
        getQueue()
        
    },[])

    

    if (!queue) return <div>Loading...</div>;
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div>
                <h1 className='m-0 text-4xl'>4th</h1>
                <h1 className='m-0'>step</h1>
            </div>
            <div className='flex flex-col p-10 pt-2'>
                <h1>Confirmation</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>Everything is set, all there is left to confirm that the team is ready to rumble.</p1>
            </div>
            
        </div>
        <div className='flex flex-col'>
                <div>
                        <h1 className='text-xl mb-0'>Team</h1>
                        <h1 className='mb-0'>Chosen</h1>
                        <div key={queue.team.id}>
                                    <h1 className="m-5 text-4xl">{queue.team.name}</h1>
                        
                                    <div className="flex flex-row">
                                      <div id="NamesIcons">
                                        {Array.isArray(queue.team.members) &&
                                          queue.team.members.map((m) => (
                                            <div className="flex flex-row" key={m.id ?? m}>
                                              <div className="flex flex-row justify-center items-center">
                                                <div>
                                                  <img src={tipp} alt="" className="h-20 p-2" />
                                                </div>
                                                <div className="flex flex-col">
                                                  <h1 className="m-0 text-xl font-normal">
                                                    {m.username ?? `User ID: ${m}`}
                                                  </h1>
                                                  <h1 className="m-0 text-sm font-normal">
                                                    {m.slang || ""}
                                                  </h1>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                        
                                        
                                      </div>
                        
                                      <div className="flex flex-col p-15">
                                        <div className="flex flex-row">
                                          <div className="p-6">
                                            <h1 className="h-2">{queue.team.slang}</h1>
                                            <p className="opacity-70">Slang</p>
                                          </div>
                                          <div className="p-6">
                                            <h1 className="h-2">{queue.team.description}</h1>
                                            <p className="opacity-70">Description</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                        
                                    <div className="border-input border-1"></div>
                                  </div>
                        
                        
                    </div>
                    <div className='border-input border-1'></div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl mb-0'>Game</h1>
                            <h1 className='mb-0'>Chosen</h1>
                        </div>
                        {queue.gameSystem === "Linux" && (
                            <div className='flex flex-col p-10' >
                                            <div className='flex flex-row'>
                                                <div className='flex flex-col'>
                                                    <h1 className='mb-0'>Depth of</h1>
                                                    <h1 className='text-4xl mb-0 '>Linux</h1>
                                                    <h1 className='text-4xl'>Terminal</h1>
                                                </div>
                                                <img src={terminal} alt="windows" className='max-w-1/6' />
                                            </div>
                                            <p1 className='max-w-1/3'>This is a classic, set up that Ubuntu environment, play with the user management, firewall and setup a web server. </p1>
                                            
                                        </div>
                        )}
                        {queue.gameTime == "30m" && (
                            <div className='flex flex-row p-10'>
                            <div className='flex flex-col'>
                                <h1 className='mb-0'>Swifter</h1>
                                <h1 className='text-4xl'>30/30min</h1>
                                <p1 className='max-w-1/5'>Swifter is a gamemode where sprints are short and dynamic, each phase is lasting for half an hour (30mins) and there is no time to waste!</p1>
                            </div>
                            
                        </div>
                        )}
                        

                    </div>
        </div>
        
        
        


        
        <div className='justify-center items-center'>
            <button className='btn bg-darkBackground ' onClick={()=>{
                startSearch();
                }}>
                <p1> Continue</p1>
            </button>
        </div>
        
        
        
    </div>
)
}

export default GameCreate4