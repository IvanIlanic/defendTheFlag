import logo from '../assets/DefendTHEFlag.png'

function Login() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="p-6" >
        <img src={logo} alt="DefenTheFlag logo" className='h-10' />
        <div className="h-auto w-auto p-6 bg-surface rounded-md pb-4">
          <h1 className='items-center text-center'>Sign in into Defend the Flag</h1>
          <div className='p-3 flex flex-col'>
            <p1 className='text-accent font-normal'>Email</p1>
            <input className='bg-input rounded-md' type="text" />
          </div>
          <div className='p-3 flex flex-col'>
            <p1 className='text-accent font-normal'>Password</p1>
            <input className='bg-input rounded-md' type="password" />
          </div>
          <div className='p-5 justify-center flex'>
            <button className='btn'>GameTime</button>
          </div>
          <div className=' border-input border'></div>
          <div className='flex flex-col m-0 mt-3 '>
            <p1 className='m-0'>New to defend the flag?</p1>
            <p1 className='m-0 text-accent '>Create an accont -</p1>
          </div>
          


        </div>
      </div>
      
    </div>
  )
}

export default Login
