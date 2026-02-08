import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'
import tipp from '../assets/Tipp.png'
import val from '../assets/Val.png'
import medal from '../assets/goldMedal.png'
import terminal from '../assets/terminal.png'

function GamePastDetail() {
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        
        <div className='flex flex-row'>
            <div className='flex flex-col p-10 pt-2'>
                <h1>Games</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>The battles of the past which show the past winners and losers. Pay close attention to the triumphing enemies, you can learn a lot from them!</p1>
            </div>
        </div>
        <div className='border-input border-1'></div>
        <div>
            <div className='flex flex-row h-'>
                <div className='p-10'>
                    <p1 className="text-accent opacity-70">The legendary battle of</p1>
                    <div className='flex flex-row'>
                        <h1 className='mb-0 text-xl'>DiddlyPufs</h1>
                        <img  className='w-10' src={medal} alt="" />
                    </div>
                    
                    <p1 className="text-accent opacity-70 text-xl font-bold">Vs</p1>
                    <h1 className='m-0 text-xl'>JuicyBytess</h1>
                    
                </div>
                <div className='p-10'>
                    <p1 className="opacity-70">Gamemode</p1>
                    <div className='flex flex-col'>
                    <h1 className='mb-0'>Swifter</h1>
                    <h1 className='text-4xl'>30/30min</h1>
                    <img className="w-10"src={terminal} alt="" />
                    </div>
                </div>
                <div className='p-10'>
                    <p1 className="opacity-70">Time</p1>
                    <div className='flex flex-col'>
                    <h1 className='mb-0 text-accent opacity-70'>12.12.2024.</h1>
                    <div className='flex flex-col'>
                        <h1 className='mb-0'>19:30</h1>
                        <div className='border-input border-1'></div>
                        <h1 className='mb-0'>20:30</h1>
                        <p1 className="opacity-70 text-accent">Gamemode</p1>
                    </div>
                    </div>
                </div>
                
            </div>
            
            
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
                            <h1 className='h-2 '>45/ <span className='opacity-70 text-base'>65</span></h1>
                            <p1 className='opacity-70'>Commands written</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>321/ <span className='opacity-70 text-base'>232</span></h1>
                            <p1 className='opacity-70'>Points Achieved</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>32.3%/ <span className='opacity-70 text-base'>23.3%</span></h1>
                            <p1 className='opacity-70'>Complete rate</p1>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='p-6 pl-20'>
                            <h1 className='h-2'>Reaver/ <span className='opacity-70 text-base'>ls</span></h1>
                            <p1 className='opacity-70'>Most used tool</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>B/ <span className='opacity-70 text-base'>C+</span></h1>
                            <p1 className='opacity-70'>Skill</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>302/ <span className='opacity-70 text-base'>304</span></h1>
                            <p1 className='opacity-70'>World rank</p1>
                        </div>
                    </div>
            </div>
            <div className='flex flex-col'>
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

            </div>
            
        </div>
        <div>
            <div className='flex flex-row h-'>
                <div className='p-10'>
                    <p1 className="text-accent opacity-70">The legendary battle of</p1>
                    <div className='flex flex-row'>
                        <h1 className='mb-0 text-xl'>DiddlyPufs</h1>
                        <img  className='w-10' src={medal} alt="" />
                    </div>
                    
                    <p1 className="text-accent opacity-70 text-xl font-bold">Vs</p1>
                    <h1 className='m-0 text-xl'>JuicyBytess</h1>
                    
                </div>
                <div className='p-10'>
                    <p1 className="opacity-70">Gamemode</p1>
                    <div className='flex flex-col'>
                    <h1 className='mb-0'>Swifter</h1>
                    <h1 className='text-4xl'>30/30min</h1>
                    <img className="w-10"src={terminal} alt="" />
                    </div>
                </div>
                <div className='p-10'>
                    <p1 className="opacity-70">Time</p1>
                    <div className='flex flex-col'>
                    <h1 className='mb-0 text-accent opacity-70'>12.12.2024.</h1>
                    <div className='flex flex-col'>
                        <h1 className='mb-0'>19:30</h1>
                        <div className='border-input border-1'></div>
                        <h1 className='mb-0'>20:30</h1>
                        <p1 className="opacity-70 text-accent">Gamemode</p1>
                    </div>
                    </div>
                </div>
                
            </div>
            
            
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
                            <h1 className='h-2 '>45/ <span className='opacity-70 text-base'>65</span></h1>
                            <p1 className='opacity-70'>Commands written</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>321/ <span className='opacity-70 text-base'>232</span></h1>
                            <p1 className='opacity-70'>Points Achieved</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>32.3%/ <span className='opacity-70 text-base'>23.3%</span></h1>
                            <p1 className='opacity-70'>Complete rate</p1>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='p-6 pl-20'>
                            <h1 className='h-2'>Reaver/ <span className='opacity-70 text-base'>ls</span></h1>
                            <p1 className='opacity-70'>Most used tool</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>B/ <span className='opacity-70 text-base'>C+</span></h1>
                            <p1 className='opacity-70'>Skill</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>302/ <span className='opacity-70 text-base'>304</span></h1>
                            <p1 className='opacity-70'>World rank</p1>
                        </div>
                    </div>
            </div>
            <div className='flex flex-col'>
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

            </div>
            
        </div>
        <div>
            <div className='flex flex-row h-'>
                <div className='p-10'>
                    <p1 className="text-accent opacity-70">The legendary battle of</p1>
                    <div className='flex flex-row'>
                        <h1 className='mb-0 text-xl'>DiddlyPufs</h1>
                        <img  className='w-10' src={medal} alt="" />
                    </div>
                    
                    <p1 className="text-accent opacity-70 text-xl font-bold">Vs</p1>
                    <h1 className='m-0 text-xl'>JuicyBytess</h1>
                    
                </div>
                <div className='p-10'>
                    <p1 className="opacity-70">Gamemode</p1>
                    <div className='flex flex-col'>
                    <h1 className='mb-0'>Swifter</h1>
                    <h1 className='text-4xl'>30/30min</h1>
                    <img className="w-10"src={terminal} alt="" />
                    </div>
                </div>
                <div className='p-10'>
                    <p1 className="opacity-70">Time</p1>
                    <div className='flex flex-col'>
                    <h1 className='mb-0 text-accent opacity-70'>12.12.2024.</h1>
                    <div className='flex flex-col'>
                        <h1 className='mb-0'>19:30</h1>
                        <div className='border-input border-1'></div>
                        <h1 className='mb-0'>20:30</h1>
                        <p1 className="opacity-70 text-accent">Gamemode</p1>
                    </div>
                    </div>
                </div>
                
            </div>
            
            
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
                            <h1 className='h-2 '>45/ <span className='opacity-70 text-base'>65</span></h1>
                            <p1 className='opacity-70'>Commands written</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>321/ <span className='opacity-70 text-base'>232</span></h1>
                            <p1 className='opacity-70'>Points Achieved</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>32.3%/ <span className='opacity-70 text-base'>23.3%</span></h1>
                            <p1 className='opacity-70'>Complete rate</p1>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='p-6 pl-20'>
                            <h1 className='h-2'>Reaver/ <span className='opacity-70 text-base'>ls</span></h1>
                            <p1 className='opacity-70'>Most used tool</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>B/ <span className='opacity-70 text-base'>C+</span></h1>
                            <p1 className='opacity-70'>Skill</p1>
                        </div>
                        <div className='p-6'>
                            <h1 className='h-2'>302/ <span className='opacity-70 text-base'>304</span></h1>
                            <p1 className='opacity-70'>World rank</p1>
                        </div>
                    </div>
            </div>
            <div className='flex flex-col'>
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

            </div>
            
        </div>
        
    </div>
)
}

export default GamePastDetail