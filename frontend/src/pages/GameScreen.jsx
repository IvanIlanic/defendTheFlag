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
                <h1 className='m-0 text-4xl'>1st</h1>
                <h1 className='m-0'>phase</h1>
            </div>
            <div className='flex flex-col p-10 pt-2'>
                <h1>Design Time</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>You are correctly designing the system and making it stronger in the name of security and user management</p1>
            </div>
            <div className='flex flex-col'>
                <h1 className='m-0 text-7xl'>12 32’ 2”</h1>
                <h1 className='m-0 text-accent opacity-70 font-normal'>time remaining</h1>
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