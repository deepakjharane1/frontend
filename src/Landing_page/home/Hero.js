import React from 'react'

function Hero() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row text-center '>
                <img style={{width : '80%', margin : '0 auto'}} src='media/image/homeHero.png' alt='HeroImage' className='mb-5' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p style={{fontSize:'1.5rem'}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary mt-4' style={{width:"20%", margin:'0 auto', fontWeight:'bold', fontSize:'1.2rem'}}>Signup for free</button>
            </div>
        </div>
     );
}

export default Hero;