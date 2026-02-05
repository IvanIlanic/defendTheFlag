import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'

function TeamCreation() {
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <h1 className='font-normal'>Team <br />creation</h1>
        <div className='border-input border-1'></div>
        <div className="flex flex-row justify-center items-center p-30">
            <div className="flex flex-col max-w-1/3">
                <div className='flex flex-col'>
                    <p1 className="font-light text-accent opacity-70">Team name</p1>
                    <input className='bg-input rounded-md text-white' type="text" />
                </div>
                <div className='flex flex-col'>
                    <p1 className="font-light text-accent opacity-70">Your slang</p1>
                    <input className='bg-input rounded-md text-white' type="text" />
                </div>
                <div className='flex flex-col'>
                    <p1 className="font-light text-accent opacity-70">Team description</p1>
                    <textarea className='field-sizing-content bg-input text-white' name="" id=""></textarea>
                </div>
            </div>
            
            <div className="flex flex-col max-w-1/3 p-10">
                <p1 className="font-light text-accent opacity-70">User icon</p1>
                <img src={skull} alt="usericon" />
                <button className='bg-darkBackground px-3 py-1'>
                    <p1 className='font-light opacity-70'>Upload ...</p1>
                </button>
                <p1 className="font-light text-accent opacity-70 pt-5">User background</p1>
                <img src={skull} alt="usericon" />
                <button className='bg-darkBackground px-3 py-1'>
                    <p1 className='font-light opacity-70'>Upload ...</p1>
                </button>
            </div>
            
        </div>
        
        <div className="flex flex-col justify-center items-center">
            <div className="border-input border-1 w-1/3 "></div>
            <p1 className="font-light text-accent opacity-70 pt-4">Discord link</p1>
            <button className="btn bg-surface">
                <img src={discord} alt="discord" className='w-5' />
            </button>
            <button className='btn bg-surface'>
                Create the team
            </button>
        </div>
        <div className="border-input border-1"></div>
    </div>
)
}

export default TeamCreation