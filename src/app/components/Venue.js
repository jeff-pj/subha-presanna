'use client'
import Image from 'next/image'

export default function WeddingScheduleGrid() {
  return (

    <main>

      {/* Desktop */}
    <section id='Events'  className="w-full 2xl:block hidden bg-[#faf7f5] py-20">
   <div className='font-bold text-[3vw] font-1 text-center pb-5'>Our Wedding</div>
            <p className="text-center text-gray-500 text-[1.5vw] font-2 px-5 mb-10">A sacred beginning to our forever</p>
    
      <div className="mx-[10%] relative">

        <div className="grid grid-cols-3 grid-rows-2 border border-[#e7cfc7]">

          {/* LEFT TOP */}
          <div className="relative  border-[#e7cfc7]  flex items-center justify-center m-4">
            <div className="relative">
              <Image src="/our_wedding-1.jpg" alt="Reception" width={1000} height={1000} className='h-[300] w-[300] object-cover' />
           
            </div>

            {/* SAME HANGING LINE */}
            <span className="absolute bottom-[-20] left-1/2 -translate-x-1/2 w-[2] h-[90] bg-[#d7a59a]" />
          </div>

          {/* CENTER TOP */}
          <div className="relative border border-[#e7cfc7] flex flex-col items-center justify-center text-center ">
                   <p className="text-gray-600 text-[2vw] font-2 ">
           Date & Time


            </p>
       <p className='text-gray-600 text-[1.2vw] font-2 pt-4'>January 28, 2026<br />09:30 AM</p>



            {/* SAME HANGING LINE */}
            <span className="absolute bottom-[-70] left-1/2 -translate-x-1/2 w-[2] h-[90] bg-[#d7a59a]" />
          </div>

          {/* RIGHT TOP */}
          <div className="relative border border-[#e7cfc7] flex items-center justify-center p-4">
            <div className="relative">
              <Image src="/our_wedding-3.jpg" alt="Party" width={1000} height={1000} className='h-[300] w-[300] object-cover' />
           
            </div>

            {/* SAME HANGING LINE */}
            <span className="absolute bottom-[-20] left-1/2 -translate-x-1/2 w-[2] h-[90] bg-[#d7a59a]" />
          </div>

          {/* BOTTOM ROW */}
          <div className="border border-[#e7cfc7] flex flex-col items-center justify-center ">
                 <p className="text-gray-600 text-[2vw] font-2 ">
        Location


            </p>
                  <p className="text-gray-600 text-[1.2vw] text-center p-6 font-2 ">
            Perumalappan Temple in Bandarahalli , Karimangalam , Dharmapuri , 
 Tamil Nadu – 635123
            </p>
          </div>

          <div className="border  border-[#e7cfc7] flex items-center justify-center p-4">
            <Image src="/our_wedding_2.png" alt="Decor" width={1000} height={1000} className='h-[300] w-[300] object-cover'/>
         </div>

          <div className="border border-[#e7cfc7]  items-center flex flex-col justify-center ">
                     <p className="text-gray-600 text-[2vw] font-2 ">
            Help & Contact
            </p>
                 <p className="text-gray-600 text-[1.2vw] text-center p-4 font-2 ">
           For any assistance or details, feel free to reach out:
<br />


Mr.Prasanna +91 8667676919
            </p>

            
          </div>

        </div>
      </div>
    </section>
    {/* Desktop */}


    {/* Laptop */}
     <section id='Events'  className="w-full lg:block 2xl:hidden hidden bg-[#faf7f5] py-20">
        <div className='font-bold text-[3vw] font-1 text-center pb-5'>Our Wedding</div>
            <p className="text-center text-gray-500 text-[1.5vw] font-2 px-5 mb-10">A sacred beginning to our forever</p>
    
      <div className="mx-[10%] relative">

        <div className="grid grid-cols-3 grid-rows-2 border border-[#e7cfc7]">

          {/* LEFT TOP */}
          <div className="relative  border-[#e7cfc7]  flex items-center justify-center m-4">
            <div className="relative">
              <Image src="/our_wedding-1.jpg" alt="Reception" width={1000} height={1000} className='h-[300] w-[300] object-cover' />
           
            </div>

            {/* SAME HANGING LINE */}
            <span className="absolute bottom-[-20] left-1/2 -translate-x-1/2 w-[2] h-[90] bg-[#d7a59a]" />
          </div>

          {/* CENTER TOP */}
          <div className="relative border border-[#e7cfc7] flex flex-col items-center justify-center text-center ">
                   <p className="text-gray-600 text-[2vw] font-2 ">
           Date & Time


            </p>
       <p className='text-gray-600 text-[1.2vw] font-2 pt-4'>January 28, 2026<br />09:30 AM</p>



            {/* SAME HANGING LINE */}
            <span className="absolute bottom-[-70] left-1/2 -translate-x-1/2 w-[2] h-[90] bg-[#d7a59a]" />
          </div>

          {/* RIGHT TOP */}
          <div className="relative border border-[#e7cfc7] flex items-center justify-center p-4">
            <div className="relative">
              <Image src="/our_wedding-3.jpg" alt="Party" width={1000} height={1000} className='h-[300] w-[300] object-cover' />
           
            </div>

            {/* SAME HANGING LINE */}
            <span className="absolute bottom-[-20] left-1/2 -translate-x-1/2 w-[2] h-[90] bg-[#d7a59a]" />
          </div>

          {/* BOTTOM ROW */}
          <div className="border border-[#e7cfc7] flex flex-col items-center justify-center ">
                 <p className="text-gray-600 text-[2vw] font-2 ">
        Location


            </p>
                  <p className="text-gray-600 text-[1.2vw] text-center p-6 font-2 ">
            Perumalappan Temple in Bandarahalli , Karimangalam , Dharmapuri , 
 Tamil Nadu – 635123
            </p>
          </div>


          <div className="border  border-[#e7cfc7] flex items-center justify-center p-4">
            <Image src="/our_wedding_2.png" alt="Decor" width={1000} height={1000} className='h-[300] w-[300] object-cover'/>
         </div>

          <div className="border border-[#e7cfc7]  items-center flex flex-col justify-center ">
                     <p className="text-gray-600 text-[2vw] font-2 ">
            Help & Contact
            </p>
                 <p className="text-gray-600 text-[1.2vw] text-center p-4 font-2 ">
           For any assistance or details, feel free to reach out:
<br />
Mr.
Prasanna +91 8667676919
            </p>
          </div>

        </div>
      </div>
    </section>
    {/* Lap */}


{/* Tab */}


 <section className="w-full bg-[#faf7f5] py-20 md:block hidden lg:hidden">
        <div className='font-bold text-[7vw] font-1 text-center '>Our Wedding</div>
        <p className="text-center text-gray-500 text-[3.5vw] font-2 px-5 mb-10">A sacred beginning to our forever</p>
      <div className="mx-[10%] relative">

        <div className="grid grid-cols-1 grid-rows-6 border border-[#e7cfc7]">

          {/* LEFT TOP */}
          <div className="relative  border-[#e7cfc7]  flex items-center justify-center m-4">
            <div className="relative">
              <Image src="/our_wedding-1.jpg" alt="Reception" width={1000} height={1000} className='h-[300] w-[300] object-cover' />
              <div className="absolute inset-0 flex items-center justify-center">
            
              </div>
            </div>

          </div>

          {/* CENTER TOP */}
          <div className="relative border border-[#e7cfc7] flex flex-col items-center justify-center text-center ">
            <p className="text-gray-600 text-[6vw] font-2 ">
           Date & Time


            </p>
       <p className='text-gray-600 text-[4vw] font-2 pt-4'>January 28, 2026<br />09:30 AM</p>


          </div>

          {/* RIGHT TOP */}
          <div className="relative border border-[#e7cfc7] flex items-center justify-center p-4">
            <div className="relative">
              <Image src="/our_wedding_2.png" alt="Party" width={1000} height={1000} className='h-[300] w-[300] object-cover' />
              <div className="absolute inset-0 flex items-center justify-center">
               
              </div>
            </div>

          </div>

          {/* BOTTOM ROW */}
          <div className="border border-[#e7cfc7]  text-lg flex items-center flex-col justify-center ">
            <p className="text-gray-600 text-[6vw] font-2 ">
        Location


            </p>
                  <p className="text-gray-600 text-[4vw] text-center p-6 font-2 ">
            Perumalappan Temple in Bandarahalli , Karimangalam , Dharmapuri , 
 Tamil Nadu – 635123
            </p>
  

          </div>

          <div className="border  border-[#e7cfc7] flex items-center justify-center p-4">
            <Image src="/our_wedding-3.jpg" alt="Decor" width={1000} height={1000} className='h-[300] w-[300] object-cover'/>
<div className="absolute  flex items-center justify-center">
               
              </div>          </div>

          <div className="border border-[#e7cfc7]  text-lg flex items-center flex-col justify-center ">
            <p className="text-gray-600 text-[6vw] font-2 ">
            Help & Contact
            </p>
                 <p className="text-gray-600 text-[4vw] text-center p-4 font-2 ">
           For any assistance or details, feel free to reach out:
<br />
Mr.
Prasanna +91 8667676919
            </p>
        </div>

        </div>
      </div>
    </section>

{/* Tab */}


{/* Mobile */}

 <section className="w-full bg-[#faf7f5] py-20 block md:hidden">
        <div className='font-bold text-[7vw] font-1 text-center '>Our Wedding</div>
        <p className="text-center text-gray-500 text-[3.5vw] font-2 px-5 mb-10">A sacred beginning to our forever</p>
      <div className="mx-[10%] relative">

        <div className="grid grid-cols-1 grid-rows-6 border border-[#e7cfc7]">

          {/* LEFT TOP */}
          <div className="relative  border-[#e7cfc7]  flex items-center justify-center m-4">
            <div className="relative">
              <Image src="/our_wedding-1.jpg" alt="Reception" width={1000} height={1000} className='h-[300] w-[300] object-cover' />
              <div className="absolute inset-0 flex items-center justify-center">
            
              </div>
            </div>

          </div>

          {/* CENTER TOP */}
          <div className="relative border border-[#e7cfc7] flex flex-col items-center justify-center text-center ">
            <p className="text-gray-600 text-[6vw] font-2 ">
           Date & Time


            </p>
       <p className='text-gray-600 text-[4vw] font-2 pt-4'>January 28, 2026<br />09:30 AM</p>


          </div>

          {/* RIGHT TOP */}
          <div className="relative border border-[#e7cfc7] flex items-center justify-center p-4">
            <div className="relative">
              <Image src="/our_wedding_2.png" alt="Party" width={1000} height={1000} className='h-[300] w-[300] object-cover' />
              <div className="absolute inset-0 flex items-center justify-center">
               
              </div>
            </div>

          </div>

          {/* BOTTOM ROW */}
          <div className="border border-[#e7cfc7]  text-lg flex items-center flex-col justify-center ">
            <p className="text-gray-600 text-[6vw] font-2 ">
        Location


            </p>
                  <p className="text-gray-600 text-[4vw] text-center p-6 font-2 ">
            Perumalappan Temple in Bandarahalli , Karimangalam , Dharmapuri , 
 Tamil Nadu – 635123
            </p>
  

          </div>

          <div className="border  border-[#e7cfc7] flex items-center justify-center p-4">
            <Image src="/our_wedding-3.jpg" alt="Decor" width={1000} height={1000} className='h-[300] w-[300] object-cover'/>
<div className="absolute  flex items-center justify-center">
               
              </div>          </div>

          <div className="border border-[#e7cfc7]  text-lg flex items-center flex-col justify-center ">
            <p className="text-gray-600 text-[6vw] font-2 ">
            Help & Contact
            </p>
                 <p className="text-gray-600 text-[4vw] text-center p-4 font-2 ">
           For any assistance or details, feel free to reach out:

            </p>

                                    <p className="text-gray-600 text-[4vw] text-center  font-2 ">
 
Mr.
Prasanna +91 8667676919
            </p>
        </div>

        </div>
      </div>
    </section>

    {/* Mobile */}
    </main>
  )
}

