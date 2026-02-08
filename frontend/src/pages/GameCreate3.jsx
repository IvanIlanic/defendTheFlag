import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'
import tipp from '../assets/Tipp.png'
import val from '../assets/Val.png'
import windows from '../assets/windows.png'
import terminal from '../assets/terminal.png'
import postgres from '../assets/postgres.png'

function GameCreate1() {
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <div className='border-input border-1'></div>
        <div className='flex flex-row'>
            <div>
                <h1 className='m-0 text-4xl'>3th</h1>
                <h1 className='m-0'>step</h1>
            </div>
            <div className='flex flex-col p-10 pt-2'>
                <h1>Chose a system</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>What system do you want to bug with? Linux, webbased, AD? Totally up to you. If you feeling crayz for a database even :D.</p1>
            </div>
            
        </div>
        
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <h1 className='mb-0'>Game of</h1>
                        <h1 className='text-4xl mb-0 '>Active</h1>
                        <h1 className='text-4xl'>Directory</h1>
                    </div>
                    <img src={windows} alt="windows" className='max-w-1/6 ' />
                </div>
                <p1 className='max-w-1/3'>Swifter is a gamemode where sprints are short and dynamic, each phase is lasting for half an hour (30mins) and there is no time to waste!</p1>
            </div>
            <div className='flex flex-col'>
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
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <h1 className='mb-0'>Game of</h1>
                        <h1 className='text-4xl mb-0 '>Active</h1>
                        <h1 className='text-4xl'>Directory</h1>
                    </div>
                    <img src={postgres} alt="windows" className='max-w-1/6' />
                </div>
                <p1 className='max-w-1/3'>Swifter is a gamemode where sprints are short and dynamic, each phase is lasting for half an hour (30mins) and there is no time to waste!</p1>
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