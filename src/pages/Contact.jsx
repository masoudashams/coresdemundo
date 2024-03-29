import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({
    'name': '',
    'email': '',
    'message': ''
  })

  const handleChange = (event) => {
    let { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  return (
    <div className='w-screen h-full mt-20 flex flex-wrap md:flex-nowrap container mx-auto justify-center items-center'>
      <div className='text-left w-full max-w-md'>

        <h3 className='uppercase font-black text-4xl'>
          Get in Touch
        </h3>

        <div className='border border-black w-full mt-3 px-10 pt-3 pb-10'>
          <TextField
            name="name"
            label="name"
            onChange={handleChange}
            value={form.name}
            placeholder="Enter your name"
          />
          <TextField
            name="email"
            label="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Enter your email"
          />
          <TextArea
            name="message"
            label="message"
            onChange={handleChange}
            value={form.message}
            placeholder="Enter your message"
          />
        </div>

      </div>
      <div className='w-10'></div>
      {/* <MyMap /> */}
    </div>
  )
}

export default Contact


function TextField({ name, value, onChange, placeholder, label, }) {
  return <div className='block mb-4 font-raleway'>
    <label className='uppercase block font-normal text-2xl' htmlFor={name}>{label}</label>
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={name}
      name={name}
      className='border w-full border-black px-2 py-1' />
  </div>
}
function TextArea({ name, value, onChange, placeholder, label, }) {
  return <div className='block'>
    <label className='uppercase block font-normal text-2xl' htmlFor={name}>{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      id={name}
      name={name}
      className='border min-h-[180px] resize-none w-full border-black px-2 py-1' />
  </div>
}