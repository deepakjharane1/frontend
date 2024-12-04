import React from 'react'

function Pricing() {
    return ( 
        <div className=' col container d-flex justify-content-between mt-5 p-5'>
            <div className='row col-6'>
                <h3>Unbeatable pricing</h3>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='#'  style={{textDecoration: 'none',fontSize:'1.1rem', fontWeight:'600'}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='row'>

                <img style={{width:'60%'}} src='media/image/pricing1.svg' alt='Load Image'/>
                
            </div>

            <div className='row'>

                <img style={{width:'60%'}} src='media/image/pricing2.svg' alt='Load Image'/> 
                

            </div>

            <div className='row'>

                <img style={{width:'55%'}} src='media/image/pricing3.svg' alt='Load Image'/>
                
            </div>

        
        </div>
     );
}

export default Pricing;