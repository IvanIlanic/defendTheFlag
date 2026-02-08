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
                    <div className="flex flex-col"id='NamesIcons'>
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
            <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <h1 className='m-0'>Report</h1>
                <h1 className='text-xl m-0 opacity-70 '>Gamemaster</h1>
                <h1 className='text-4xl m-0 p-0 '>RoliBoliRews</h1>
                
            </div>
        </div>

        <div className='flex flex-row px-20'>
            <div className='flex flex-col max-w-1/2 p-20'>
                <h1>DumbleDorfs</h1>
                <div>
                    <p1>Communication</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>Clarity</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>3</h1>
                            <p1 className='opacity-70 w-0'>Frequency</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Opennes</p1>
                        </div>
                        
                    </div>
                    <p1 className="opacity-70 text-accent">Overall good communication, fanatically crazy team.</p1>
                </div>
                <div>
                    <p1>System creation</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>6.5</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Firewall</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>User management</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>Trolling</p1>
                        </div>
                    </div>
                    <p1 className="opacity-70 text-accent">The firewall was configured correctly by allowing only necessary traffic and blocking unused ports, which improved system security. However, some rules were poorly organized and not clearly documented, making the configuration harder to manage and understand

User accounts were set up with appropriate permissions, reducing the risk of unauthorized access. On the other hand, some users were given broader privileges than needed, which could lead to security or accountability issues..

Good trolling messages hehe</p1>
                </div>
                <div>
                    <p1>Attacking</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>Finds</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>3</h1>
                            <p1 className='opacity-70 w-0'>Use of commands</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Methods</p1>
                        </div>
                    </div>
                    <p1 className="opacity-70 text-accent">Good finds, finding a privileged user to open a port for sending, creating a program to crack the storage limit. Missing trolling messages and remote code execution via apache struts</p1>
                </div>
                <div>
                    <p1>Documentation</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>Writing</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>3</h1>
                            <p1 className='opacity-70 w-0'>Proof</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>3</h1>
                            <p1 className='opacity-70 w-0'>Standard</p1>
                        </div>
                    </div>
                    <p1 className="opacity-70 text-accent">Good report, missing examples of execution of code, error messages and user privilages.</p1>
                </div>
                <div className='p-10 '>
                    <div className='bg-darkBackground p-10 hb-0 text-center rounded-md '>
                    <p1>Graph</p1>
                    </div>
                </div>
                
                
            </div>
            <div className='flex flex-col max-w-1/2 p-20'>
                <h1>DumbleDorfs</h1>
                <div>
                    <p1>Communication</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>Clarity</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>3</h1>
                            <p1 className='opacity-70 w-0'>Frequency</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Opennes</p1>
                        </div>
                        
                    </div>
                    <p1 className="opacity-70 text-accent">Overall good communication, fanatically crazy team.</p1>
                </div>
                <div>
                    <p1>System creation</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>6.5</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Firewall</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>User management</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>Trolling</p1>
                        </div>
                    </div>
                    <p1 className="opacity-70 text-accent">The firewall was configured correctly by allowing only necessary traffic and blocking unused ports, which improved system security. However, some rules were poorly organized and not clearly documented, making the configuration harder to manage and understand

User accounts were set up with appropriate permissions, reducing the risk of unauthorized access. On the other hand, some users were given broader privileges than needed, which could lead to security or accountability issues..

Good trolling messages hehe</p1>
                </div>
                <div>
                    <p1>Attacking</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>Finds</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>3</h1>
                            <p1 className='opacity-70 w-0'>Use of commands</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Methods</p1>
                        </div>
                    </div>
                    <p1 className="opacity-70 text-accent">Good finds, finding a privileged user to open a port for sending, creating a program to crack the storage limit. Missing trolling messages and remote code execution via apache struts</p1>
                </div>
                <div>
                    <p1>Documentation</p1>
                    <div className='flex flex-row'>
                        <div className='pr-5'>
                            <h1 className='mb-0'>5</h1>
                            <p1 className='opacity-70 w-0'>Grade</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>7</h1>
                            <p1 className='opacity-70 w-0'>Writing</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>3</h1>
                            <p1 className='opacity-70 w-0'>Proof</p1>
                        </div>
                        <div className='pr-5'>
                            <h1 className='mb-0'>3</h1>
                            <p1 className='opacity-70 w-0'>Standard</p1>
                        </div>
                    </div>
                    <p1 className="opacity-70 text-accent">Good report, missing examples of execution of code, error messages and user privilages.</p1>
                </div>
                <div className='p-10'>
                    <div className='bg-darkBackground p-10 hb-0 text-center rounded-md '>
                    <p1>Graph</p1>
                    </div>
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
            
            
        </div>
)
}

export default GamePastDetail