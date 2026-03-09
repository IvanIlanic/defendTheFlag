import discord from "../assets/discord.png";
import skull from "../assets/Skull.png";
import tipp from "../assets/Tipp.png";
import plus from "../assets/plus.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api";

function GameCreate1() {
    const navigate = useNavigate()
     
    const [teams, setTeams] = useState([])
    const [userInput, setUserInput] = useState([null])

    const setQueueTeams = async () =>{
        try{
            const res = await api.post("/api/queue-game/team/", {
                team_id:userInput
            })
        alert("Team added");
        navigate("/gameCreate2");
        }
        catch(err){
            alert(err.response?.data?.detail || "Cannot add team!")
        }
    }

    
    const getTeams = async () =>{
        try{
            const res = await api.get("/api/teams/")
            setTeams(res.data)
        }
        catch(err){
            alert(err.response?.data?.detail || "Fail to load team")
        }
    }

    useEffect(()=>{
        getTeams()
    },[])

return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div>
                <h1 className='m-0 text-4xl'>1st</h1>
                <h1 className='m-0'>step</h1>
            </div>
            <div className='flex flex-col p-10 pt-2'>
                <h1>Teaming</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>Time to chose your team! There is nothing better than chatting while trying to make and break stuff</p1>
            </div>
            
        </div>
        <div>
        {teams.map((t) => (
                  <div key={t.id} onClick={()=> {
                    setUserInput(t.id);
                    console.log(userInput)
                  }}>
                    <h1 className="m-5 text-4xl">{t.name}</h1>
        
                    <div className="flex flex-row">
                      <div id="NamesIcons">
                        {Array.isArray(t.members) &&
                          t.members.map((m) => (
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
                            <h1 className="h-2">{t.slang}</h1>
                            <p className="opacity-70">Slang</p>
                          </div>
                          <div className="p-6">
                            <h1 className="h-2">{t.description}</h1>
                            <p className="opacity-70">Description</p>
                          </div>
                        </div>
                      </div>
                    </div>
        
                    <div className="border-input border-1"></div>
                  </div>
                ))}
        </div>

        <div className='justify-center items-center'>
            <button className='btn bg-darkBackground' onClick={()=> setQueueTeams()}>
                <p1> Continue</p1>
            </button>
        </div>
        
        
        
    </div>
)
}

export default GameCreate1