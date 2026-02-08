import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'
import tipp from '../assets/Tipp.png'
import val from '../assets/Val.png'
import windows from '../assets/windows.png'
import terminal from '../assets/terminal.png'
import postgres from '../assets/postgres.png'

function GameCreate4() {
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div>
                <h1 className='m-0 text-4xl'>4th</h1>
                <h1 className='m-0'>step</h1>
            </div>
            <div className='flex flex-col p-10 pt-2'>
                <h1>Chose a system</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>Everything is set, all there is left to confirm that the team is ready to rumble.</p1>
            </div>
            
        </div>
        <div className='flex flex-col'>
                <div>
                        <h1 className='text-xl mb-0'>Team</h1>
                        <h1 className='mb-0'>Chosen</h1>
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
                        
                    </div>
                    <div className='border-input border-1'></div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col'>
                            <h1 className='text-xl mb-0'>Game</h1>
                            <h1 className='mb-0'>Chosen</h1>
                        </div>
                        <div className='flex flex-col p-10'>
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
                        <div className='flex flex-row p-10'>
                            <div className='flex flex-col'>
                                <h1 className='mb-0'>Swifter</h1>
                                <h1 className='text-4xl'>30/30min</h1>
                                <p1 className='max-w-1/5'>Swifter is a gamemode where sprints are short and dynamic, each phase is lasting for half an hour (30mins) and there is no time to waste!</p1>
                        </div>
                            
        </div>

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

export default GameCreate4