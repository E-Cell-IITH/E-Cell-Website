import React from 'react'

function Card (){
    return <div className='h-[35rem] w-[25rem] bg-[#191E32] rounded-2xl'></div>
}

function Speakers() {
  return (
    <section className=' py-5 px-5'>
        <div>
            <h2 className="text-center font-medium text-5xl text-blue ">
                SPEAKERS
            </h2>
        </div>
        <div className='flex flex-row gap-6 py-8 justify-evenly'>
            <Card/> 
            <Card/> 
            <Card/> 
        </div>
    </section>
  )
}

export default Speakers