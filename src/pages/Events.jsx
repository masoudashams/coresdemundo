
import React from 'react'
import { mycards, images } from '../constants/data'

function Events() {
  return (
    <div className='container mx-auto py-10'>
      <div className='flex my-8 flex-wrap justify-between items-center'>
        {mycards.map((item, index) => <Card key={index} item={item} />)}
      </div>
      <div className='flex my-8 flex-wrap justify-between items-center'>
        {images.map((item, index) => <Card key={index} item={item} />)}
      </div>
    </div>
  )
}

export default Events

function Card({ item }) {
  return <div className='flex flex-col h-[400px] ml-8 p-4  max-w-sm border border-black '>
    <img src={item.image} className="h-64" />

    <div className='text-left p-2'>
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
    </div>
  </div>
}