import React from 'react'

function Hero() {
    return ( 
        <div className='container-fluid p-5 ' style={{backgroundColor:'#387ed1', width:'100%',color:'#fff'}}>
            <div className='row p-5'>
                <div className='col-6'>
                    <h2 className='mb-5'>Support portal</h2>
                    <h4 className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
                    <input className='p-3 mb-4 form-control' type='text' placeholder='Eg: how do i active F&O why is my order rejected...'></input>
                    <a href='' className='' style={{color:'#fff', textDecoration:'underline' , fontSize:'1.2rem'}}>Track account opening</a>
                    <a href='' className='p-1 mt-4 '  style={{color:'#fff', fontSize:'1.2rem' ,textDecoration:'underline' }}> Track segment activation</a>
                    <a href=''  style={{color:'#fff', textDecoration:'underline', fontSize:'1.2rem'}}> Intraday margins</a><br></br>
                    <a href='' className=''  style={{color:'#fff' ,textDecoration:'underline', lineHeight: '1rem', fontSize:'1.2rem'}}>Kite user manual</a>
                </div>
                <div className='col-6'>col-2</div>
            </div>
        </div>
     );
}

export default Hero;