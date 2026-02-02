import logo from '../assets/DefendTHEFlag.png'

function Register() {
    return(
        <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="p-6" >
                <img src={logo} alt="DefenTheFlag logo" className='h-10' />
                <div className="h-auto w-auto p-6 bg-surface rounded-md pb-4">
                  <h1 className='items-center text-center'>Creating a new account!</h1>
                  <div className='p-3 flex flex-col'>
                    <p1 className='text-accent font-normal'>Username</p1>
                    <input className='bg-input rounded-md' type="text" />
                  </div>
                  <div className='p-3 flex flex-col'>
                    <p1 className='text-accent font-normal'>Email</p1>
                    <input className='bg-input rounded-md' type="text" />
                  </div>
                  <div className='p-3 flex flex-col'>
                    <p1 className='text-accent font-normal'>Password</p1>
                    <input className='bg-input rounded-md' type="password" />
                  </div>
                  <div className='p-3 flex flex-col'>
                    <p1 className='text-accent font-normal'>Recheck the password</p1>
                    <input className='bg-input rounded-md' type="password" />
                  </div>
                  <div className='p-5 justify-center flex'>
                    <button className='btn'>Create the account</button>
                  </div>
                </div>
              </div>
              
            </div>
    )
} 

export default Register