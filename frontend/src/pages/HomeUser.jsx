import { useState, useEffect } from 'react'
import api from '../api'

import postgres from '../assets/postgres.png'
import terminal from '../assets/terminal.png'
import windows from '../assets/windows.png'
import team from '../assets/team.png'
import Boom from '../assets/Boom.png'
import ranks from '../assets/ranks.png'
import goldMedal from '../assets/goldMedal.png'
import bladerunners from '../assets/bladerunners.png'
import cyberpsychos from '../assets/cyberpsychos.png'
import northnet from '../assets/northnet.png'
import Tipp from '../assets/Tipp.png'
import skull from '../assets/Skull.png'
import val from '../assets/Val.png'
function HomeUser() {
    const [description,setDescription] = useState("")
    const [slang,setSlang] = useState("");

    // Running the function the moment the page is opened
    useEffect(() => {
        getName()
    },[])

    const getName = () => {
        api
        .get("/api/notes/")
        .then((res) => res.data)
        .then((data) => {setSlang(data); console.log(data)})
        .catch((err) => alert(err))
    }
    return (
        
        <div className="min-h-screen w-auto bg-background flex flex-column ">
            <div className="p-10">
               <div className='flex flex-row '>
                    <div className='flex flex-col max-w-1/3 'id='Leftside'>
                        <div className='flex flex-col bg-surface  w-max p-10 rounded-md' id="User" >
                            <div className='flex flex-row justify-center items-center'>
                                <div>
                                    <img src={Tipp} alt="" className='h-30 p-2' />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='m-0 text-xl font-normal'>ImmortalusGod</h1>
                                    <h1 className='m-0 text-sm font-normal'>Coffee Overflow</h1>
                                </div>     
                                                        
                            </div>
                            <h1>lvl</h1>
                            <p1>23</p1>
                            <div className='border-input border-1'></div>
                            <div className='flex flex-row'>
                                <img src="" alt="icon" />
                                <div className='flex flex-col p-3'>
                                    <h1>45</h1>
                                    <p1 className='opacity-70'>Games played</p1>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <img src="" alt="icon" />
                                <div className='flex flex-col p-3'>
                                    <h1>321</h1>
                                    <p1 className='opacity-70'>Points Achieved</p1>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <img src="" alt="icon" />
                                <div className='flex flex-col p-3'>
                                    <h1>62.3%</h1>
                                    <p1 className='opacity-70'>Win rate</p1>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <img src="" alt="icon" />
                                <div className='flex flex-col p-3'>
                                    <h1>B+</h1>
                                    <p1 className='opacity-70'>Teamwork</p1>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <img src="" alt="icon" />
                                <div className='flex flex-col p-3'>
                                    <h1>B</h1>
                                    <p1 className='opacity-70'>Skill set</p1>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <img src="" alt="icon" />
                                <div className='flex flex-col p-3'>
                                    <h1>B</h1>
                                    <p1 className='opacity-70'>TechSkillz</p1>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <img src="" alt="icon" />
                                <div className='flex flex-col p-3'>
                                    <h1>touch</h1>
                                    <p1 className='opacity-70'>Favourite command</p1>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <img src="" alt="icon" />
                                <div className='flex flex-col p-3'>
                                    <h1>linux</h1>
                                    <p1 className='opacity-70'>Most played system</p1>
                                </div>
                            </div>
                        </div>
                        
                        <div className='h-85 rounded-md w-85 bg-surface p-10 my-10' id='Graph'>
                            <p1>graph</p1>
                        </div>
                        <div className='flex flex-col'>
                            <h1>Your ranking system</h1>
                            <div className='h-50 rounded-md w-85 bg-surface p-10 my-10 flex flex-col'>
                                <img src="" alt="rankpic" />
                                <p1>Rank</p1>
                                <h1>342cbits</h1>
                                <p1>You are missing 38 for the Diamond III</p1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col pl-50' id='rightSide'>
                        <div className='flex flex-row h-90' id='upper'>
                            <div id='friends' className='bg-surface p-10 rounded-md'>
                                <p1>Friends</p1>
                                <div className='flex flex-row'>
                                                    <div className='flex flex-row justify-center items-center'>
                                                        <div>
                                                            <img src={Tipp} alt="" className='h-20 p-2' />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <h1 className='m-0 text-xl font-normal'>Name1</h1>
                                                            <h1 className='m-0 text-sm font-normal'>Slang</h1>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className='flex flex-row'>
                                                    <div className='flex flex-row justify-center items-center'>
                                                        <div>
                                                            <img src={val} alt="" className='h-20 p-2' />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <h1 className='m-0 text-xl font-normal'>Name1</h1>
                                                            <h1 className='m-0 text-sm font-normal'>Slang</h1>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div className='flex flex-row'>
                                                    <div className='flex flex-row justify-center items-center'>
                                                        <div>
                                                            <img src={skull} alt="" className='h-20 p-2' />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <h1 className='m-0 text-xl font-normal'>Name1</h1>
                                                            <h1 className='m-0 text-sm font-normal'>Slang</h1>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                        </div>
                                        <div className='h- w-100 p-10 pt-0 mt-0 m-10 flex flex-col  items-center' id='clanContribute'>
                                            <img src={bladerunners} className='w-100' alt="bladerunners" />
                                            <h1>34 342 </h1>
                                            <h1>battles won</h1>
                                            <h1 className='font-normal'>You contributed 103 battles</h1>
                                        </div>
                        </div>
                        <div className='flex flex-row pt-10' id='upperStats'>
                             <div className='bg-surface rounded-md w-1/3 h-auto p-5 m-5'>
                                <h1>45</h1>
                                <p1 className='opacity-70'>Games played</p1>
                             </div>
                             <div className='bg-surface rounded-md w-1/3 h-auto p-5 m-5'>
                                <h1>32</h1>
                                <p1 className='opacity-70'>Trophies</p1>
                             </div>
                             <div className='bg-surface rounded-md w-1/3 h-auto p-5 m-5'>
                                <h1>102</h1>
                                <p1 className='opacity-70'>Game Objectives</p1>
                             </div>
                        </div>
                        <div className='flex flex-row justify-center items-center' id='middle'>
                            <div className='bg-surface p-10 w-2/3 rounded-md' id='teams'>
                            <h1>Teams</h1>
                            <div className='flex flex-row pt-10' >
                             <div className='bg-surface rounded-md w-1/4 h-auto p-5 m-5'>
                                <h1>DiddyPufs</h1>
                                <h1>45</h1>
                                <p1 className='opacity-70'>Games played</p1>
                             </div>
                             <div className='bg-surface rounded-md w-1/4 h-auto p-5 m-5'>
                                <h1>JagerBombs</h1>
                                <h1>32</h1>
                                <p1 className='opacity-70'>Trophies</p1>
                             </div>
                        </div>
                        </div>
                            <div id='start battle ' className='p-10'>
                                 <button className='bg-darkBackground p-10 rounded-md'>
                                    <h1>Start the <br /> battle</h1>
                                    <p1>Start a new cyberbattle with against other cyber forces! But remember! Once started, there is no going back.</p1>
                                 </button>
                            </div>
                        </div>

                        <div className="jusitfy-center items-center p-10"id='games '>
                            <div className='flex flex-row bg-input items-center justify-center rounded-md p-3 m-3'>
                                <button className='rounded-md px-6 mx-6 bg-darkBackground'><p1>Games</p1></button>
                                <button className=' px-6 mx-6 rounded-md text-white bg-darkBackground'><p1>Past</p1></button>
                            </div>
                            <div className='border-input border-1'></div>
                            <div className='flex flex-row p-5'>
                                <img src={terminal} className='h-10' alt="" />
                                <img src={goldMedal} className='h-10' alt="" />
                                <h1>Diddy</h1>
                                <p1>Vs</p1>
                                <h1>Rocky Padjeros</h1>
                                <div className='flex flex-col pl-30'>
                                    <p1>30/30 swifter</p1>
                                    <p1>24 points</p1>
                                    <p1>A+ rank</p1>
                                    <p1>12.12.2025.</p1>
                                </div>
                            </div>
                            <div className='flex flex-row p-5'>
                                <img src={terminal} className='h-10' alt="" />
                                <img src={goldMedal} className='h-10' alt="" />
                                <h1>Diddy</h1>
                                <p1>Vs</p1>
                                <h1>Rocky Padjeros</h1>
                                <div className='flex flex-col pl-30'>
                                    <p1>30/30 swifter</p1>
                                    <p1>24 points</p1>
                                    <p1>A+ rank</p1>
                                    <p1>12.12.2025.</p1>
                                </div>
                            </div>
                            <div className='flex flex-row p-5'>
                                <img src={terminal} className='h-10' alt="" />
                                <img src={goldMedal} className='h-10' alt="" />
                                <h1>Diddy</h1>
                                <p1>Vs</p1>
                                <h1>Rocky Padjeros</h1>
                                <div className='flex flex-col pl-30'>
                                    <p1>30/30 swifter</p1>
                                    <p1>24 points</p1>
                                    <p1>A+ rank</p1>
                                    <p1>12.12.2025.</p1>
                                </div>
                            </div>
                        </div>
                        <div id='clanBattles' className='flex flex-col'>
                            <h1>Cyber Clans</h1>
                            <p1 className='text-accent opacity-70'>NorthNet is currently leading the cyberfield with 35342 won battles. Vikings on the dot!</p1>
                            
                            <div className='flex flex-row justify-center items-center'>
                                <div className='flex flex-col justify-center items-center' >
                                    <img src={bladerunners} alt="bladerunners" />
                                    <h1>3241</h1>
                                </div>
                                <div className='flex flex-col justify-center items-center' >
                                    <img src={northnet} alt="bladerunners" />
                                    <h1>3241</h1>
                                </div>
                                <div className='flex flex-col justify-center items-center' >
                                    <img src={cyberpsychos} alt="bladerunners" />
                                    <h1>3241</h1>
                                </div>
                            </div>
                        
                        </div>
                        

                    </div>
               </div>
            </div>
        </div>
    )
}

export default HomeUser