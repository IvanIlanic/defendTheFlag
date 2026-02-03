import message404 from '../assets/404.png'

function NotFound() {
    return(
        <div className="min-h-screen bg-background flex flex-col items-center justify-center">
            <div className='flex flex-row'>
                <img src={message404} alt="404 logo" className='h-60' />
                <div className='flex flex-col'>
                    <h1 className="text-5xl font-normal">Page not found!</h1>
                    <p1 className="text-3xl font-light">You sure that your at the right place mister hackman</p1>
                </div>
                
            </div>
            
        </div>
    )
}

export default NotFound