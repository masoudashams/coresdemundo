import React from 'react'
import Card from '../components/Card'
import Slider from '../components/Slider'
import { carditems } from '../constants/data'


function Home() {

  return (
    <>
      <section className='grid grid-cols-1  lg:grid-cols-3 lg:gap-50 justify-items-center mt-9 '>
        <div className='mt-6 md:mt-[250px] md:ml-44'>
          <h1><span className='text-red-600'>C</span>
            <span className='text-blue-400'>O</span>
            <span className='text-yellow-300'>R</span>
            <span className='text-green-500'>E</span>
            <span className='text-orange-400'>S</span>
            <br />Do<br />MUNDO</h1>
        </div>

        <div className='mx-auto min-w-[140px] my-12 md:mr-20'>
          <img src={require('../assets/home.png')} alt="homepage" />
        </div>

        <div className='mt-4 md:mt-[250px] '>
          <p> lorem dolor sit amet consectetur,at<br />
            Alias  veritatis magnam autem cumque ab in<br />
            itaque nam repudiandae ipsa amet blanditiis <br />
            Saepe, optio voluptatem! Aliquam.</p>
        </div>
      </section>

      <br />

      <section>
        <div className='bg-neutral-900 font-utopia  mt-52 h-full md:h-screen  text-white w-screen'>
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

      <div className='w-full container mx-4 sm:mx-auto  h-30 py-20  text-left'>
        <h1>UPCOMING EVENTS AND PROJECTS</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
      </div>
      {/* card carousel    */}

      <section className='container mx-4 overflow-x-scroll sm:mx-auto scroll '>
        <div className='container w-full mx-auto py-10'>
          <div className='flex flex-row'>
            {carditems.map((item, i) => <Card key={i} index={i} item={item} />)}
          </div>
        </div>
      </section>
    </>

  )
}

export default Home


