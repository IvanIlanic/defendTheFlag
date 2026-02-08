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
                <h1 className='m-0 text-4xl'>2nd</h1>
                <h1 className='m-0'>step</h1>
            </div>
            <div className='flex flex-col p-10 pt-2'>
                <h1>GameMode</h1>
                <p1 className='max-w-1/2 text-accent opacity-70'>Choose the game mode you want to play, something short like a swifter, or something like a long runner.</p1>
            </div>
            
        </div>
        
        <div className='flex flex-row'>
            <div className='flex flex-col'>
                <h1 className='mb-0'>Swifter</h1>
                <h1 className='text-4xl'>30/30min</h1>
                <p1 className='max-w-1/5'>Swifter is a gamemode where sprints are short and dynamic, each phase is lasting for half an hour (30mins) and there is no time to waste!</p1>
            </div>
            <div className='flex flex-col'>
                <h1 className='mb-0'>AllDayer</h1>
                <h1 className='text-4xl'>24/24h</h1>
                <p1 className='max-w-1/5'>Wanna chill and learn about the system for the whole day? This is a perfect gamemode for you. Talk with people for a whole day and share your experiences without having to worry about the clock!</p1>
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