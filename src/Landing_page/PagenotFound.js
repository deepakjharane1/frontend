import React from 'react'
import { Link } from 'react-router-dom';


function PagenotFound() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center '>
                <h2 className='mt-5'>404 Page Not Found </h2>
                <p style={{fontSize:'1.2rem'}}>Restart browser. Close and reopen the browser to reload the page, as this can refresh the connection and resolve the problem</p>
                <Link to='/' className='btn btn-primary mt-4' style={{width:"20%", margin:'0 auto', fontWeight:'bold', fontSize:'1.2rem'}}>Go to home</Link>
            </div>
        </div>
     );
}

export default PagenotFound;