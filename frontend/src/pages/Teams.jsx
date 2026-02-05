import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'
import tipp from '../assets/Tipp.png'
import val from '../assets/Val.png'
import plus from '../assets/plus.png'

function GameScreen() {
return(
    
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <div className="">
                <h1 className='font-normal'>Teams</h1>

            </div>
        <div className='border-input border-1'></div>
        <div>
        <div>
            <h1 className='m-5 text-4xl'>DiddlyPufs</h1>
           
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
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center items-center'>
                            <div>
                                <img src={plus} alt="plus" className='h-20 p-2' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='m-0 text-xl font-normal'>Add</h1>
                                <h1 className='m-0 text-sm font-normal'>Make your lobby larger!</h1>
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
            <div className='border-input border-1'></div>
        </div>
        <div>
            <h1 className='m-5 text-4xl'>DiddlyPufs</h1>
           
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
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center items-center'>
                            <div>
                                <img src={plus} alt="plus" className='h-20 p-2' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='m-0 text-xl font-normal'>Add</h1>
                                <h1 className='m-0 text-sm font-normal'>Make your lobby larger!</h1>
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
            <div className='border-input border-1'></div>
        </div>
        <div>
            <h1 className='m-5 text-4xl'>JagerBombs</h1>
           
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
                    <div className='flex flex-row'>
                        <div className='flex flex-row justify-center items-center'>
                            <div>
                                <img src={plus} alt="plus" className='h-20 p-2' />
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='m-0 text-xl font-normal'>Add</h1>
                                <h1 className='m-0 text-sm font-normal'>Make your lobby larger!</h1>
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
            <div className='border-input border-1'></div>
        </div>
        </div>
        


        
        
    </div>
)
}

export default GameScreen