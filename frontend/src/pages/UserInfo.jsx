import discord from '../assets/discord.png'
import skull from '../assets/Skull.png'

function Userinfo() {
return(
    <div className="flex flex-col bg-background min-h-screen w-auto p-10 ">
        <h1 className='font-normal'>User <br />information</h1>
        <div className='border-input border-1'></div>
        <div className="flex flex-row justify-center items-center p-30">
            <div className="flex flex-col max-w-1/3">
                <div>
                    <p1 className="font-light text-accent opacity-70">User name</p1>
                    <h1 className="font-light mb-0">ImmortalusGod</h1>
                </div>
                <div>
                    <p1 className="font-light text-accent opacity-70">Your slang</p1>
                    <h1 className="font-light mb-0">Coffe Overflow</h1>
                </div>
                <div>
                    <p1 className="font-light text-accent opacity-70">Desciption</p1>
                    <h1 className="font-light mb-0">Yooo, add me on a discord if you know anything about sql injections, trying to learn that rn. Have some experience in automation and memory exploitation</h1>
                </div>
                <div>
                    <p1 className="font-light text-accent opacity-70">User email</p1>
                    <h1 className="font-light mb-0">ilanicivan@gmail.com</h1>
                </div>
                <div>
                    <p1 className="font-light text-accent opacity-70">User password</p1>
                    <h1 className="font-light mb-0">*********</h1>
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
        </div>
        <div className="border-input border-1"></div>
    </div>
)
}

export default Userinfo