import React from 'react'

function About() {
  return (
    <>

      <div className="bg-about h-full">
        <div className='container h-full flex flex-col items-center text-center mx-auto  text-white py-12'>

          <h1 className='mb-2'>OUR STORY</h1>
          <p className='mt-2 md:mt-10 text-sm sm:text-lg text-justify'>Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
            in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          </p>
          <p className='mt-8 text-justify'>for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
            are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          <div className='flex my-80 justify-start w-full  '>
            <img src="../images/logo1.png" alt="" />
            <img src="../images/logo2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-about2  text-justify">
        <div className='container mx-auto flex flex-col items-center text-center text-white p-4'>
          <h1 className=' '>WHO WE ARE?</h1>
          <p className=''>Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
            in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          </p>
          <p className='mt-8'>for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
            are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          <div className='flex space-x-16 my-80 w-14 justify-center'>
            <img src="../images/v1.png" alt="" />
            <img src="../images/v2.png" alt="" />
            <img src="../images/v3.png" alt="" />
          </div>
        </div>
      </div>






    </>
  )
}

export default About
