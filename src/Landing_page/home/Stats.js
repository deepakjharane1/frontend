import React from 'react'

function Stats() {
    return ( 
        <div className='container d-flex justify-content-around mt-5 p-5 '>
            <div className='row col-6'>
                <h3 className='mb-5'>Trust with confidence</h3>
                <h5>Customer-first always</h5>
                <p style={{fontSize: '1rem'}}>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                
                <h5>No spam or gimmick</h5>
                <p style={{fontSize: '1rem'}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                <h5 className=''>The Zerodha universe</h5>
                <p style={{fontSize: '1rem'}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h5>Do better with money</h5>
                <p style={{fontSize: '1rem'}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
             
            </div>
            <div className='row'>
                <img src='media/image/ecosystem.png' alt='Stats Image'/>

                <div className='d-flex justify-content-around mt-1' >
                <a href='#' style={{textDecoration: 'none', fontSize:'1.1rem',fontWeight:'600'}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href='#' style={{textDecoration: 'none',fontSize:'1.1rem', fontWeight:'600'}}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                {/* <img className='mt-5' src='media/image/press-logos.png' alt='Logos-press'/> */}
            </div>
        </div>
     );
}

export default Stats;