import React from 'react'
import image from '../../assets/images/pricing.jpg'

const Purchase = () => {
  return (
    <div className='bg-top bg-no-repeat bg-cover bg-fixed overflow-hidden relative ' style={{backgroundImage: `url(${image})`}}>
        <div className='bg-black bg-opacity-40 w-full h-full py-[100px]'>
            <div className="relative flex flex-col justify-center items-center group">
                <div className="absolute font-['poppins'] top-[2px] font-[900] text-[4.5rem] leading-10 text-opacity-10 text-gray-400">
                    A
                </div>
                <div className="text-[42px] text-white font-bold mb-3">Affordable Price</div>
                <div className="w-10 bg-white h-[0.005em] group-hover:w-[60px] transition-all duration-300 ease-in-out" />
                <div className="text-white text-opacity-85 mt-5 w-[90%] lg:w-[47%] text-center text-[19px] leading-tight">
                Morbi nec massa ac ligula pulvinar congue. Nunc ut sollicitudin nibh. Etiam sem nibh, auctor sed, pharetra congue tellus malesuada dolor.                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 w-[95%] md:w-[75%] items-center mx-auto gap-8 mt-[72px]'>
                <div className='bg-white group text-center'>
                    <div className='bg-black bg-opacity-5 py-9'>
                    <h2 className='text-2xl font-bold uppercase mb-2 group-hover:text-[#f25454] transition-all duration-300 ease-in-out'>Basic</h2>
                    <h1 className='text-7xl font-bold text-black text-opacity-70 group-hover:text-[#f25454] transition-all duration-300 ease-in-out my-1'><span className=' align-super text-2xl'>$</span>19</h1>
                    <p className='font-thin uppercase text-sm group-hover:text-[#f25454] transition-all duration-300 ease-in-out'>Month</p>
                    </div>
                    <div className='my-10 text-sm'>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>100 MB Disk Space</p>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>2 Subdomains</p>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>5 Email Accounts</p>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>Webmail Support</p>
                    <p className='mx-6 py-3 text-center text-opacity-70 text-black'>Customer Support 24/7</p>
                    </div>
                    <div className='bg-black text-white hover:bg-[#f25454] text-center py-3 tracking-wider font-bold transition-all duration-300 ease-in-out'>Purchase</div>
                </div>
                <div className='bg-white group text-center relative'>
                    <div className='absolute w-[114px] h-[114px] overflow-hidden text-white text-center tracking-[1px] uppercase -left-[10px] top-[-10px] text-[12px] '><div className='absolute top-[0.05px] right-0 border-[5px] border-[#0c0c0c] border-t-transparent border-l-transparent' /><div className='absolute bottom-0 left-[0.05px] border-[5px] border-[#0c0c0c] border-t-transparent border-l-transparent'/><div className='w-[165px] shadow absolute -left-[37px] top-[21px] -rotate-45 py-3 bg-[#23292c]'>popular</div></div>
                    <div className='bg-[#f25454] text-white py-12'>
                    <h2 className='text-2xl font-bold uppercase mb-2'>Professional</h2>
                    <h1 className='text-7xl font-bold  my-1'><span className=' align-super text-2xl'>$</span>35</h1>
                    <p className='font-thin uppercase text-sm'>Month</p>
                    </div>
                    <div className='my-12 text-sm'>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>100 MB Disk Space</p>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>2 Subdomains</p>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>5 Email Accounts</p>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>Webmail Support</p>
                    <p className='mx-6 py-3 text-center text-opacity-70 text-black'>Customer Support 24/7</p>
                    </div>
                    <div className='bg-black text-white hover:bg-[#f25454] text-center py-3 tracking-wider font-bold transition-all duration-300 ease-in-out'>Purchase</div>
                </div>
                <div className='bg-white group text-center'>
                    <div className='bg-black bg-opacity-5 py-9'>
                    <h2 className='text-2xl font-bold uppercase mb-2 group-hover:text-[#f25454] transition-all duration-300 ease-in-out'>Business</h2>
                    <h1 className='text-7xl font-bold text-black text-opacity-70 group-hover:text-[#f25454] transition-all duration-300 ease-in-out my-1'><span className=' align-super text-2xl'>$</span>89</h1>
                    <p className='font-thin uppercase text-sm group-hover:text-[#f25454] transition-all duration-300 ease-in-out'>Month</p>
                    </div>
                    <div className='my-10 text-sm'>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>1000 MB Disk Space</p>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>Unlimited Subdomains</p>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>Unlimited Email Accounts</p>
                    <p className='mx-6 py-3 border-b-[1px] text-center text-opacity-70 text-black border-opacity-50 border-gray-300'>Webmail Support</p>
                    <p className='mx-6 py-3 text-center text-opacity-70 text-black'>Customer Support 24/7</p>
                    </div>
                    <div className='bg-black text-white hover:bg-[#f25454] text-center py-3 tracking-wider font-bold transition-all duration-300 ease-in-out'>Purchase</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Purchase