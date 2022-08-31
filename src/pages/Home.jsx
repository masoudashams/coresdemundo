import React from 'react'
import Slider from '../components/Slider'
import { carditems } from '../constants/data'


function Home() {

  return (
    <>
      <section className='grid grid-cols-1  lg:grid-cols-3 lg:gap-50 justify-items-center mt-9 '>
        <div className='mt-6 md:mt-[250px] ml-44'>
          <h1><span className='text-red-600'>C</span>
            <span className='text-blue-400'>O</span>
            <span className='text-yellow-300'>R</span>
            <span className='text-green-500'>E</span>
            <span className='text-orange-400'>S</span>
            <br />Do<br />MUNDO</h1>
        </div>

        <div className='  mx-w-[140px] my-12 mr-20'>
          <img src={require('../assets/home.png')} alt="homepage" />
        </div>

        <div className='mt-[500px] md:mt-[250px] '>
          <p>Lorem ipsum dolor sit amet consectetur,at<br />
            Alias veritatis magnam autem cumque ab in<br />
            itaque nam repudiandae ipsa amet blanditiis <br />
            Saepe, optio voluptatem! Aliquam.</p>
        </div>
      </section>

      <br />

      <section>
        <div className='bg-neutral-900 font-utopia  mt-52 h-screen  text-white w-screen'>
          <h1 className='absolute ml-10 mt-8' >
            Transforming neighborhoods
          </h1>
          <br />
          <span>
            <p className='absolute ml-10 mt-14 text-sm'>Dengo Chocolates hired Colors of
              the World to color the wall of its
              factory. The author of the work was
              the Congolese artist Lavi Israël, 28
              years old, who has been in Brazil
              since 2015.</p>
          </span>
          <Slider />
        </div>
      </section>
      
      <div className='w-full  h-30  p-20  text-left'>
       <h1>UPCOMING EVENTS AND PROJECTS</h1>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
      </div>
     {/* card carousel    */}


      <section className='container  overflow-x-scroll scroll '>
        <div className='container mx-auto py-10'>
        <div className=' flex  my-8 flex-nowrap justify-between items-center'>
          {carditems.map((item, i) => <Card key={i} item={item} />)}
        </div>
        </div>
      </section>



      
    </>
    
  )
}

export default Home



function Card({ item }) {
  return  <div  className='flex flex-col h-[400px]  ml-8  text-start justify-between   border border-black cursor-pointer hover:scale-105 ease-out duration-300'>
    <img src={item.image} className="h-64 " />
    <div className='text-left p-2  '>
      <h1>{item.title}</h1><br/>
      <p className='px-6 py-4 w-[200px] text-sm break-all '>{item.desc}</p>
      
    </div>
 </div>

}