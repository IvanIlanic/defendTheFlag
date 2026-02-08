import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'
import tipp from '../assets/Tipp.png'
import val from '../assets/Val.png'

function GameScreen() {
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div>
                <p1 className='m-0 text-2xl'>Review</p1>
                <h1 className='m-0 text-4xl font-normal'>Time</h1>
            </div>
            <div className='flex flex-col p-10 pt-2'>
                <h1>Design Time</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>You can review the team while they are playing the game, take you sweet time, since there is no need to rush! Thank you!</p1>
            </div>
        </div>
        <div>
            <h1 className='m-0 text-4xl'>DiddlyPufs</h1>
            <div className='border-input border-1'></div>
            <div className='flex flex-row'>
                <div id='NamesIcons'>
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center items-center'>
                            <div>
                                <img src={tipp} alt="" className='h-20 p-2' />
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
                <div className='flex flex-col p-15'>
                    <div className='flex flex-row'>
                        <div className='p-6'>
                            <h1 className='h-2'>45</h1>
                            <p1 className='opacity-70'>Commands written</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>321</h1>
                            <p1 className='opacity-70'>Points Achieved</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>32.3%</h1>
                            <p1 className='opacity-70'>Complete rate</p1>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='p-6 pl-20'>
                            <h1 className='h-2'>Reaver</h1>
                            <p1 className='opacity-70'>Most used tool</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>B</h1>
                            <p1 className='opacity-70'>Skill</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>302</h1>
                            <p1 className='opacity-70'>World rank</p1>
                        </div>
                    </div>
            </div>
            
            
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col p-5'>
                    <p1>DiddyPufs IP</p1>
                    <p1>192.132.2.32.</p1>
                </div>
                <div className='flex flex-col p-5'>
                    <p1>LoginId</p1>
                    <p1>batman12!!@bumerangToaster4</p1>
                </div>
                <div className='flex flex-col p-5'>
                    <p1>DiddyPufs Discord</p1>
                    <button className='bg-darkBackground px-3 py-1'>
                        <p1 className='font-light opacity-70'>Link ...</p1>
                    </button>
                </div>
            </div>
        </div>
        <div className='flex justify-center'>
            <h1 className='font-normal text-accent'>Cyber <span className='text-white'> battle</span><br /> <span className='text-white text-3xl'> With</span></h1>
        </div>


        <div>
            <h1 className='m-0 text-4xl'>DiddlyPufs</h1>
            <div className='border-input border-1'></div>
            <div className='flex flex-row'>
                <div id='NamesIcons'>
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center items-center'>
                            <div>
                                <img src={tipp} alt="" className='h-20 p-2' />
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
                <div className='flex flex-col p-15'>
                    <div className='flex flex-row'>
                        <div className='p-6'>
                            <h1 className='h-2'>45</h1>
                            <p1 className='opacity-70'>Commands written</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>321</h1>
                            <p1 className='opacity-70'>Points Achieved</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>32.3%</h1>
                            <p1 className='opacity-70'>Complete rate</p1>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='p-6 pl-20'>
                            <h1 className='h-2'>Reaver</h1>
                            <p1 className='opacity-70'>Most used tool</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>B</h1>
                            <p1 className='opacity-70'>Skill</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>302</h1>
                            <p1 className='opacity-70'>World rank</p1>
                        </div>
                    </div>
            </div>
            
            
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col p-5'>
                    <p1>DiddyPufs IP</p1>
                    <p1>192.132.2.32.</p1>
                </div>
                <div className='flex flex-col p-5'>
                    <p1>LoginId</p1>
                    <p1>batman12!!@bumerangToaster4</p1>
                </div>
                <div className='flex flex-col p-5'>
                    <p1>DiddyPufs Discord</p1>
                    <button className='bg-darkBackground px-3 py-1'>
                        <p1 className='font-light opacity-70'>Link ...</p1>
                    </button>
                </div>
            </div>
        </div>

        <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <h1 className='m-0'>Report</h1>
                <h1 className='text-xl m-0 opacity-70 '>Gamemaster</h1>
                <h1 className='text-4xl m-0 p-0 '>RoliBoliRews</h1>
                <p1 className='opacity-70 p-0 m-0 text-accent max-w-1/3'>Review the teams by the way they are performing! Be clean and honest. Its a game after all.Rate with a number between 0 and 10Write something that caught your eye</p1>
            </div>
        </div>

        <div className='flex flex-row px-20'>
            <div className='flex flex-col max-w-1/2 p-20'>
                <h1>DumbleDorfs</h1>
                <div>
                    <p1>Communication</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Clarity</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Frequency</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Opennes</p1>
                        </div>
                    </div>
                    <textarea className='field-sizing-content bg-surface text-white w-full h-1/4' name="" id="" ></textarea>
                </div>
                <div>
                    <p1>System creation</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Firewall</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>User management</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Trolling</p1>
                        </div>
                    </div>
                    <textarea className='field-sizing-content bg-surface text-white w-full h-1/4' name="" id="" ></textarea>
                </div>
                <div>
                    <p1>Attacking</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Finds</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Use of commands</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Methods</p1>
                        </div>
                    </div>
                    <textarea className='field-sizing-content bg-surface text-white w-full h-1/4' name="" id="" ></textarea>
                </div>
                <div>
                    <p1>Documentation</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Writing</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Proof</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Standard</p1>
                        </div>
                    </div>
                    <textarea className='field-sizing-content bg-surface text-white w-full h-1/4' name="" id="" ></textarea>
                </div>
                
                
            </div>
            <div className='flex flex-col max-w-1/2 p-20'>
                <h1>JuicyByte</h1>
                <div>
                    <p1>Communication</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Clarity</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Frequency</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Opennes</p1>
                        </div>
                    </div>
                    <textarea className='field-sizing-content bg-surface text-white w-full h-1/4' name="" id="" ></textarea>
                </div>
                <div>
                    <p1>System creation</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Firewall</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>User management</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Trolling</p1>
                        </div>
                    </div>
                    <textarea className='field-sizing-content bg-surface text-white w-full h-1/4' name="" id="" ></textarea>
                </div>
                <div>
                    <p1>Attacking</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Finds</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Use of commands</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Methods</p1>
                        </div>
                    </div>
                    <textarea className='field-sizing-content bg-surface text-white w-full h-1/4' name="" id="" ></textarea>
                </div>
                <div>
                    <p1>Documentation</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Writing</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Proof</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>_</h1>
                            <p1 className='opacity-70 w-0'>Standard</p1>
                        </div>
                    </div>
                    <textarea className='field-sizing-content bg-surface text-white w-full h-1/4' name="" id="" ></textarea>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-center'>
            <div className='flex flex-col p-10'>
                <p1>DumbleDorf report</p1>
                <button className='bg-darkBackground px-3 py-1'>
                        <p1 className='font-light '>Download ...</p1>
                </button>
            </div>
            <div>
                <p1>Final</p1>
                <h1>Report</h1>
                <p1 className='text-accent opacity-70'>Here you can view both teams final reports! Should be in pdf file.</p1>
            </div>
            <div className='flex flex-col p-10'>
                <p1>DumbleDorf report</p1>
                <button className='bg-darkBackground px-3 py-1'>
                        <p1 className='font-light '>Download ...</p1>
                </button>
            </div>
        </div>
        <div className='flex flex-row'>   
            <div className='flex flex-col px-30'>
                <div className='flex flex-row'>
                    <div className=' bg-darkBackground text-white w-5 h-5 text-center '>o</div>
                    <div>
                        <h1 className='mb-1 px-2'>Firewall</h1>
                        <p1 className='opacity-70'>Setup the firewall</p1>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className=' bg-darkBackground text-white w-5 h-5 text-center '>o</div>
                    <div>
                        <h1 className='mb-1 px-2'>Troll</h1>
                        <p1 className='opacity-70'>Write a trolling message for enemy team</p1>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className=' bg-darkBackground text-white w-5 h-5 text-center '>o</div>
                    <div>
                        <h1 className='mb-1 px-2'>UserManagement</h1>
                        <p1 className='opacity-70'>Create account for each user</p1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col px-30'>
                <div className='flex flex-row'>
                    <div className=' bg-darkBackground text-white w-5 h-5 text-center '>o</div>
                    <div>
                        <h1 className='mb-1 px-2'>Firewall</h1>
                        <p1 className='opacity-70'>Setup the firewall</p1>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className=' bg-darkBackground text-white w-5 h-5 text-center '>o</div>
                    <div>
                        <h1 className='mb-1 px-2'>Troll</h1>
                        <p1 className='opacity-70'>Write a trolling message for enemy team</p1>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className=' bg-darkBackground text-white w-5 h-5 text-center '>o</div>
                    <div>
                        <h1 className='mb-1 px-2'>UserManagement</h1>
                        <p1 className='opacity-70'>Create account for each user</p1>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
)
}

export default GameScreen