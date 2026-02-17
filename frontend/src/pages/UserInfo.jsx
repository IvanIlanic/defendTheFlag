import { useState, useEffect } from 'react'
import api from '../api'
import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'

function Userinfo() {
    // Going to use for storing
    const [me,setMe] = useState(null)

    // Running the function the moment the page is opened
    const getMe = () => {
        api.get("api/me/")
        .then((res) => setMe(res.data))
        .catch((err) => alert(err))
    }

    useEffect(() => {
        getMe()
    
    },[]) // Use [] so it doesnt load inf

    if(!me) return <div>Loading ...</div>
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <h1 className='font-normal'>User <br />information</h1>
        <div className='border-input border-1'></div>
        <div className="flex flex-row justify-center items-center p-30">
            <div className="flex flex-col max-w-1/3">
                <div>
                    <p1 className="font-light text-accent opacity-70">User name</p1>
                    <h1 className="font-light mb-0">{me.username}</h1>
                </div>
                <div>
                    <p1 className="font-light text-accent opacity-70">Your slang</p1>
                    <h1 className="font-light mb-0">{me.slang || "No slang"}</h1>
                </div>
                <div>
                    <p1 className="font-light text-accent opacity-70">Desciption</p1>
                    <h1 className="font-light mb-0">{me.description || "No description"}</h1>
                </div>
                <div>
                    <p1 className="font-light text-accent opacity-70">User email</p1>
                    <h1 className="font-light mb-0">Email</h1>
                </div>
                <div>
                    <p1 className="font-light text-accent opacity-70">User password</p1>
                    <h1 className="font-light mb-0">*********</h1>
                </div>
            </div>
            
            <div className="flex flex-col max-w-1/3 p-10">
                <p1 className="font-light text-accent opacity-70">User icon</p1>
                <img src={skull} alt="usericon" />
                <button className='bg-darkBackground px-3 py-1'>
                    <p1 className='font-light opacity-70'>Upload ...</p1>
                </button>
                <p1 className="font-light text-accent opacity-70 pt-5">User background</p1>
                <img src={skull} alt="usericon" />
                <button className='bg-darkBackground px-3 py-1'>
                    <p1 className='font-light opacity-70'>Upload ...</p1>
                </button>
            </div>
            
        </div>
        
        <div className="flex flex-col justify-center items-center">
            <div className="border-input border-1 w-1/3 "></div>
            <p1 className="font-light text-accent opacity-70 pt-4">Discord link</p1>
            <button className="btn bg-surface">
                <img src={discord} alt="discord" className='w-5' />
            </button>
        </div>
        <div className="border-input border-1"></div>
    </div>
)
}

export default Userinfo