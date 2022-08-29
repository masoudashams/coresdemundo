
import React from 'react'
import { mycards,images } from '../constants/data'

function Events() {
  return (
    <div >
       <section >
        <div className='flex overflow-x-scroll w-screen flex-nowrap justify-center'>
          {mycards.map((item, i) => <Card key={i} item={item} />)}
        </div>
      </section>
      <section >
        <div className='flex overflow-x-scroll w-screen flex-nowrap'>
          {images.map((item, i) => <Card key={i} item={item} />)}
        </div>
      </section>
    </div>
  )
}

export default Events

function Card({ item }) {
  return <div className='border border-black mt-8 mx-14 min-h-fit min-w-[300px] max-w-md size={20px} '>
    <img src={item.image} className="h-64" />
    <div className='text-left p-2'>
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
    </div>
  </div>
}