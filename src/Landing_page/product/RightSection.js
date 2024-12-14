import React from 'react'


function RightSection({ImageURL, ProductName, ProductDescription, lernmore}) {
    return ( 
        <div className='container p-5 '>
        <div className='row mt-5 mb-5'>
            
            <div className='col-6 mt-5 p-5'>
                <h1 className='mt-2' style={{marginRight:'20px'}}>{ProductName}</h1>
                <p className='mt-3' style={{marginRight:'20px'}}>{ProductDescription}</p>
                 <div className='' >
                 <a style={{marginRight:'20px', fontWeight:'500',fontSize:'1.2rem'}} href={lernmore}>Learn more</a><br></br>
                 </div>
            </div>
            <div className='col-6  '>
                <img src={ImageURL}/>
            </div>
        </div>
       </div>
     );
}

export default RightSection;