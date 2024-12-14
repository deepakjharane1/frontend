import React from 'react'

function Hero() {
    return ( 
       <div className='container mt-5 mb-5'>
        <div className='row text-center p-5'>
            <h1>Charges</h1>
            <p className='' style={{color:'grey', fontSize:'1.4rem'}}>List of all charges and taxes</p>
        </div>
        <div className='row text-center mt-5 mb-5' >
            <div className='col-4 mt-5'>
                <img src='media/image/pricing0.svg' alt='no image' style={{width:'60%'}}/>
                <h3>Free equity delivery</h3>
                <p className='mt-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 mt-5'>
               <img src='media/image/pricing3.svg' alt='no image' style={{width:'60%'}} />
               <h3>Intraday and F&O trades</h3>
               <p className='mt-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 mt-5'>
               <img src='media/image/pricing0.svg' alt='no image' style={{width:'60%'}}/>
               <h3>Free direct MF</h3>
               <p className='mt-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
       </div>
     );
}

export default Hero;