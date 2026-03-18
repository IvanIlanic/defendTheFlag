import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'
import tipp from '../assets/Tipp.png'
import val from '../assets/Val.png'

import plus from "../assets/plus.png";

import api from '../api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function GameScreen() {

    const [game, setGame] = useState(null)
    const {gameId} = useParams()

    const getGame = async ()=> {
        try{
            const res = await api(`/api/game/${gameId}/`)
            setGame(res.data)
        }
        catch(err){
            alert(err.response?.data?.detail || "Cannot get the game")
        }
    }

    const getTime = async () => {
        try{
            const res = await api.post("/api/game/changeGameState/",{
                game_id:game.id
            })
        }
        catch(err){
            alert(err.response?.data?.detail || "Cannot change new time states")
        }
    }

    
    useEffect(()=>{
        getGame();
    },[gameId])

    useEffect(()=>{
        if (!game) return

        const interval = setInterval(()=>{
            getTime()
            getGame()
        },3000)
        return () => clearInterval(interval)
    },[game])
    

    if (!game) return <div>Loading...</div>

    const team1 = game.teams?.[0]
    const team2 = game.teams?.[1]
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div>
                <h1 className='m-0 text-4xl'>1st</h1>
                <h1 className='m-0'>phase</h1>
            </div>
            <div className='flex flex-col p-10 pt-2'>
                <h1>Design Time</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>You are correctly designing the system and making it stronger in the name of security and user management</p1>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                <h1 className='m-0 text-7xl'>{game.stateStart}</h1>
                <h1 className='m-0 text-accent opacity-70 font-normal'>time start</h1>
            </div>
            
            <div className='flex flex-col'>
                <h1 className='m-0 text-7xl'>{game.stateEnd}</h1>
                <h1 className='m-0 text-accent opacity-70 font-normal'>time end</h1>
            </div>
            <h1>{game.state}</h1>
            </div>
            
            
        </div>
        <div>
            <h1 className='m-0 text-4xl'>{team1.name}</h1>
            <div className='border-input border-1'></div>
            <div className='flex flex-row'>
                <div>
                        
                            <div className="flex flex-row">
                              <div id="NamesIcons">
                                {Array.isArray(team1.members) &&
                                  team1.members.map((m) => (
                                    <div className="flex flex-row" key={m.id}>
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
                                    <h1 className="h-2">{team1.slang}</h1>
                                    <p className="opacity-70">Slang</p>
                                  </div>
                                  <div className="p-6">
                                    <h1 className="h-2">{team1.description}</h1>
                                    <p className="opacity-70">Description</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                
                            <div className="border-input border-1"></div>
                      </div>
            
            
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col p-5'>
                    <p1>{`${team1.name} IP:`}</p1>
                    <p1>192.132.2.32.</p1>
                </div>
                <div className='flex flex-col p-5'>
                    <p1>LoginId</p1>
                    <p1>batman12!!@bumerangToaster4</p1>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <h1 className='font-normal text-accent'>Cyber <span className='text-white'> battle</span><br /> <span className='text-white text-3xl'> With</span></h1>
        </div>


        <div>
            <h1 className='m-0 text-4xl'>{team2.name}</h1>
            <div className='border-input border-1'></div>
            <div className='flex flex-row'>
                <div>
                        
                            <div className="flex flex-row">
                              <div id="NamesIcons">
                                {Array.isArray(team2.members) &&
                                  team2.members.map((m) => (
                                    <div className="flex flex-row" key={m.id}>
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
                                    <h1 className="h-2">{team2.slang}</h1>
                                    <p className="opacity-70">Slang</p>
                                  </div>
                                  <div className="p-6">
                                    <h1 className="h-2">{team2.description}</h1>
                                    <p className="opacity-70">Description</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                
                            <div className="border-input border-1"></div>
                      </div>
            
            
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col p-5'>
                    <p1>{`${team2.name} IP:`}</p1>
                    <p1>192.132.2.32.</p1>
                </div>
                <div className='flex flex-col p-5'>
                    <p1>LoginId</p1>
                    <p1>batman12!!@bumerangToaster4</p1>
                </div>
            </div>
        </div>

        <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <h1 className='m-0'>Your</h1>
                <h1 className='text-4xl '>Objectives</h1>

                <h1 className='m-0'>Firewall</h1>
                <p1 className='opacity-70 mb-4'>Setup the firewall</p1>
                <h1 className='m-0'>Troll</h1>
                <p1 className='opacity-70 mb-4'>Write a trolling message for enemy team</p1>
                <h1 className='m-0'>UserManagement</h1>
                <p1 className='opacity-70 mb-4'>Create account for each user</p1>
            </div>

            <div className='max-w-1/4'>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <h1 className='h-1'>Your</h1>
                        <h1 className='text-accent text-4xl'>21</h1>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='h-1'>Turns <br />remaining</h1>
                    </div>
                </div>

                <p1 className='opacity-70 p-0 m-0 '>Be careful how are you using your terminal writings!! If you lose them all there is nothing more you can do!</p1>
            </div>
        </div>
        
    </div>
)
}

export default GameScreen