import twitter from '../assets/twitter.png'
import reddit from '../assets/reddit.png'
import discord from '../assets/discord.png'
import instagram from '../assets/instagram.png'

function Footer(){
    return(
        <div className="flex flex-row h-40 bg-background relative">
            <div className="flex flex-row p-10">
                <img src={discord} alt="bladerunners" className='max-h-10 m-5' />
                <img src={instagram} alt="bladerunners" className='max-h-10 m-5' />
                <img src={twitter} alt="bladerunners" className='max-h-10 m-5' />
                <img src={reddit} alt="bladerunners" className='max-h-10 m-5' />
                
            </div>
            <div className='right-0 bottom-0 absolute p-10'>
                <p1 className="font-light text-accent opacity-70 ">@2026 Defend the Flag</p1>
            </div>
            

        </div>
    )
}

export default Footer