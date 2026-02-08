import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'
import tipp from '../assets/Tipp.png'
import val from '../assets/Val.png'

function GameCreate1() {
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
                <p1 className='max-w-1/2 text-accent opacity-70'>TIme to chose your team! There is nothing better than chatting while trying to make and break stuff</p1>
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
            
        </div>
        <div className='justify-center items-center'>
            <button className='btn bg-darkBackground '>
                <p1> Continue</p1>
            </button>
        </div>
        
        
        
    </div>
)
}

export default GameCreate1