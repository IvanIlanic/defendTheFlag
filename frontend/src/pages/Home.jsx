import postgres from '../assets/postgres.png'
import terminal from '../assets/terminal.png'
import windows from '../assets/windows.png'
import team from '../assets/team.png'
import Boom from '../assets/Boom.png'


function Home() {
    return (
        
        <div className="min-h-screen w-auto bg-background flex flex-column ">
            <div className="p-60 pl-100">
                <h1 className="text-4xl font-light">Become a warrior in a <span className="text-accent">cyber</span>-battlefield.</h1>
                <div className="flex flex-wrap-reverse">
                    <h1 className="font-light p-0 pr-30">Create the system<tr/>Secure it<tr/>Exploit the enemy <span className="animate-pulse">_</span></h1>
                    <button className="bg-accent rounded-sm max-h-10 px-10 text-foreground border-foreground border  " type="button">Get started</button>
                </div>
                <div className="flex flex-row p-auto">
                    <div className="container w-auto">
                        <h1 className="font-light mb-0 ">Create the system</h1>
                        <p1 className="font-light text-accent opacity-70 ">Create a system with your team that will be decided by the gameMaster</p1>
                        <div className='flex flex-column m-5 pt-10'>
                            <img src={windows} alt="windows" className='max-h-40 '/>
                            <img src={terminal} alt="terminal" className='max-h-40 pl-50 absolute '/>
                            <img src={postgres} alt="postgres" className='max-h-40 pl-20 absolute' />
                        </div>
                        
                    </div>
                    <div className="container w-md ">
                        <h1 className="font-light mb-0">Secure it</h1>
                        <p1 className="font-light text-accent opacity-70">Try your best to make the system as secure as possible</p1>
                        <div className='items-center justify-center flex p-10'>
                            <img src={team} alt="team" className='max-h-60  ' />

                        </div>
                    </div>
                    <div className="container w-md ">
                        <h1 className="font-light mb-0">Exploit the enemy</h1>
                        <p1 className="font-light text-accent opacity-70 ">Get access to the enemy system and try to destroy it by any means possible</p1>
                        <div className='items-center justify-center flex p-10'>
                            <img src={Boom} alt="team" className='max-h-60  ' />

                        </div>
                    </div>
                </div>
                <h1 className="text-4xl font-light">Why not just capture the <span className="text-accent">flag</span></h1>
                <p1 className="font-light text-accent opacity-70">You are not just playing a game of hide and seek by looking at common patterns, you are learning how to create a secured system and mastering a keen eye, all while writing a real life scenario documentation.</p1>
                <h1 className="text-4xl font-light">Its not a <span className="text-accent fond-normal">game</span>, its a real life <span className="text-accent">wareware.</span></h1>
                
            </div>
        </div>
    )
}

export default Home