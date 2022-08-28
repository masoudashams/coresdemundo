import React from 'react'
import Slider  from './Slider'



function Home() {
  return (
    <div className='grid grid-cols-1  lg:grid-cols-3 lg:gap-50 justify-items-center mt-9 '> 

    <div className='mt-6 md:mt-[250px] ml-44'>
      <h1><span className='text-red-600'>C</span>
      <span className='text-blue-400'>O</span>
      <span className='text-yellow-300'>R</span>
      <span className='text-green-500'>E</span>
      <span className='text-orange-400'>S</span>
       <br/>Do<br/>MUNDO</h1>   
   </div>

     <div className='  mx-w-[140px] my-12 mr-20'>
     <img  src={require('../assets/home.png')} />
     </div>

    <div className='mt-[500px] md:mt-[250px] '>
        <p>Lorem ipsum dolor sit amet consectetur,at<br/>
             Alias veritatis magnam autem cumque ab in<br/>
             itaque nam repudiandae ipsa amet blanditiis <br/>
             Saepe, optio voluptatem! Aliquam.</p>
    </div><br/>

    <div className='bg-neutral-900  mt-52  text-white w-screen h-36'>
      <h1 className='absolute ml-10 mt-8' >PROJECTSWEW'RDON</h1><br />
      <span>
      <p  className='absolute ml-10 mt-14 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab maiores neque mollitia quisquam quasi dignissimos</p> <br/>
     <p className='absolute ml-10 mt-14 text-sm'>nisi minima repellat sit, eos ex natus dolore nobis.</p>
     </span>

     <Slider />
       
    
      
    </div>
    
    </div>
  )
}

export default Home