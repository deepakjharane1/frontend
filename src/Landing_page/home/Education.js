import React from 'react'

function Education() {
    return (  
        <div className='container d-flex justify-content-evenly   mt-5  p-1'>
            <div className='row col-6 align-items-center p-3 '>
                <img style={{width:'75%'}} src='media/image/index-education.svg'/>
            </div>
            <div className='row col-6 mb-5 p-3'>
                <h2>Free and open market education</h2>
                
                
                <p className='mt-2'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a  href='#'  style={{textDecoration: 'none',fontSize:'1.1rem', fontWeight:'600'}}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                <p className='mt-1'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a className='mt-0' href='#'  style={{textDecoration: 'none',fontSize:'1.1rem', fontWeight:'600'}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
    );
}

export default Education;