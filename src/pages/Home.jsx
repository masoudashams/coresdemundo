import React from 'react'
import Slider from '../components/Slider'
import { carditems } from '../constants/data'


function Home() {

  return (
    <div>
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


      <section className='my-12'>
        <div className='flex overflow-x-scroll w-screen flex-nowrap'>
          {carditems.map((item, i) => <Card key={i} item={item} />)}
        </div>
      </section>
    </div>
  )
}

export default Home



function Card({ item }) {
  return <div className='border border-black  ml-5 min-h-fit min-w-[400px] max-w-md'>
    <img src={item.image} className="h-64" />
    <div className='text-left p-2'>
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
    </div>
  </div>
}