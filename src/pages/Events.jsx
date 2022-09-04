
import React from 'react'
import Card from '../components/Card'
import { mycards } from '../constants/data'

function Events() {
  return (
    <div className='container mx-auto py-10'>
      <div className='flex my-8 flex-wrap justify-center md:justify-evenly items-center'>
        {mycards.map((item, index) =>
          <div key={index} className="m-2">
            <Card key={index} item={item} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Events
