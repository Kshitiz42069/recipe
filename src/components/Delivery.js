import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery</h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[550px] mx-auto my-4' 
                src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" 
                alt=''
            />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless convenience on demand</h1>
                <h2 className='md:text-2xl sm:text-3xl text-xl font-bold py-2'> For better experience download the YumEats App</h2>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Delivery