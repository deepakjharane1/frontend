import React from 'react'


function LeftSection({ ImageURL, ProductName, ProductDescription, tryDemo, learnmore, googleplay, appstore}) {
    return ( 
       <div className='container '>
        <div className='row mt-5 mb-5'>
            <div className='col-6 '>
                <img style={{width:'90%'}}  src={ImageURL}/>
            </div>
            <div className='col-6 mt-5 p-2'>
                <h1 style={{marginLeft:'20px'}}>{ProductName}</h1>
                <p className='mt-4' style={{marginLeft:'20px'}}>{ProductDescription}</p>
                 <div className='' >
                 <a style={{marginLeft:'20px', fontWeight:'500',fontSize:'1.2rem'}} href={tryDemo}>Try demo</a>
                 <a style={{marginLeft:'20px', fontWeight:'500',fontSize:'1.2rem'}} href={learnmore}>Learn more</a><br></br>
                 </div>
                 <div className='mt-4' style={{marginLeft:'20px'}}>
                 <a href={googleplay}> <img src='media/image/google-play.svg' /> </a>
                 <a href={appstore}> <img src='media/image/appstore-store.svg'/> </a>
                 </div>
            </div>
        </div>
       </div>
     );
}

export default LeftSection;