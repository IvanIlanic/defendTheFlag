import { useNavigate } from "react-router-dom"
import api from "../api"
import { useEffect, useState } from "react"

function GameCreate5() {

    const navigate = useNavigate()
const [game, setGame] = useState([])

const findGame = async ()=> {
    try{
        const res = await api.post("/api/game/create")
        enterGame()
    }

    catch(err){
        alert(err.response?.data?.detail || "Cannot find a game")
    }
}

const enterGame = async ()=>{
    try{
        const res = await api.get("/api/game")
        navigate(`/game/${res.data.id}`)
    }
    catch(err){
        alert(err.response?.data?.detail || "Cannot enter the game")
    }
}

useEffect(()=>{
    findGame()
},[])
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div>
                <h1 className='m-0 text-4xl'>5th</h1>
                <h1 className='m-0'>step</h1>
            </div>
            <div className='flex flex-col p-10 pt-2'>
                <h1>Looking for a game</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>Full send, I like that, time to look for a game and prepare for the adventure. Leave this opened and wait for the game to be found!</p1>
            </div>
            <div>
                <h1 className='mb-0'>Looking</h1>
                <h1 className='mb-0'>for a</h1>
                <h1 className=''>game_</h1>
            </div>
            
        </div>

        <div className='justify-center items-center'>
            <button className='btn bg-darkBackground '>
                <p1> Continue</p1>
            </button>
        </div>
        
        
        
    </div>
)
}

export default GameCreate5