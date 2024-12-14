import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

function ProductPage() {
    return ( 
       <>
       <Hero/>

       <LeftSection ImageURL='media/image/kite (1).png' 
       ProductDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' 
       ProductName='Kite'
       tryDemo=''
       learnmore=''
       googleplay=''
       appstore=''/> 
      
       <RightSection ImageURL='media/image/products-console (1).png' 
       ProductName='Console'
       ProductDescription='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
       lernmore=''/>

      <LeftSection ImageURL='media/image/varsity (1).png' 
       ProductDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' 
       ProductName='Varsity mobile'
       tryDemo=''/>


      <RightSection ImageURL='media/image/products-kiteconnect.png' 
       ProductName='Kite Connect API'
       ProductDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
       lernmore=''/>
   
       

      <LeftSection ImageURL='media/image/coin (2).png' 
       ProductDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' 
       ProductName='Coin'
       tryDemo='Coin'/>
</>
     );
}

export default ProductPage;