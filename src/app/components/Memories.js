'use client'
import { useEffect } from 'react';
import Image from 'next/image'
import AOS from 'aos'
import "aos/dist/aos.css";



export default function SweetMemories() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main>

      {/* Desktop */}
      <section id='Memories' className="w-full hidden 2xl:block py-10 bg-white">
        <div className=" mx-[20%] px-6">

          {/* TITLE */}
          <div className="text-center mb-16">
            <p className="text-[4vw] font-1 text-[#c9a58d]" >
              Sweet Memories
            </p>
            <h2
              className="text-[1.5vw] font-2 font-semibold  text-gray-700 mt-2 "
            >
              OUR CAPTURED MOMENTS
            </h2>
          </div>

          <div className='grid grid-cols-3 gap-x-10'>
            <div className='flex gap-10 flex-col '>
              <Image src="/memories-1.jpg" alt='Image is missing' width={1000} height={1000}></Image>
              <Image src="/memories-2.jpg" alt='Image is missing' width={1000} height={1000}></Image>
              <Image src="/memories-3.jpg" alt='Image is missing' width={1000} height={1000}></Image>

            </div>
            <div className='flex flex-col gap-10'>
              <Image src="/memories-4.jpg" alt='Image is missing' height={1000} width={1000}></Image>
              <Image src="/memories-5.jpg" alt='Image is missing' height={1000} width={1000}></Image>

            </div>

            <div className='flex gap-10 flex-col '>
              <Image src="/memories-6.jpg" alt='Image is missing' width={1000} height={1000}></Image>
              <Image src="/memories-7.jpg" alt='Image is missing' width={1000} height={1000}></Image>

            </div>

          </div>

        </div>
      </section>
      {/* Desktop */}


      {/* Laptop */}

      <section id='Memories' className="w-full hidden lg:block 2xl:hidden py-10 bg-white">
        <div className=" mx-[10%] px-6">

          {/* TITLE */}
          <div className="text-center mb-16">
            <p className="text-[4vw] font-1 text-[#c9a58d]" >
              Sweet Memories
            </p>
            <h2
              className="text-[1.5vw] font-semibold font-2  text-gray-700 mt-2 "
            >
              OUR CAPTURED MOMENTS
            </h2>
          </div>

          <div className='grid grid-cols-3 gap-x-5'>
            <div className='flex gap-5 flex-col '>
              <div data-aos="fade-up"> <Image src="/memories-1.jpg" alt='Image is missing' width={1000} height={1000} ></Image></div>
              <div data-aos="fade-up">  <Image src="/memories-2.jpg" alt='Image is missing' width={1000} height={1000}></Image></div>
              <div data-aos="fade-up"> <Image src="/memories-3.jpg" alt='Image is missing' width={1000} height={1000}></Image></div>

            </div>
            <div className='flex flex-col gap-5'>
              <div data-aos="fade-up"><Image src="/memories-4.jpg" alt='Image is missing' height={1000} width={1000}></Image></div>
              <div data-aos="fade-up"><Image src="/memories-5.jpg" alt='Image is missing' height={1000} width={1000}></Image></div>

            </div>

            <div className='flex gap-5 flex-col '>
              <div data-aos="fade-up"> <Image src="/memories-6.jpg" alt='Image is missing' width={1000} height={1000}></Image></div>
              <div data-aos="fade-up"> <Image src="/memories-7.jpg" alt='Image is missing' width={1000} height={1000}></Image></div>

            </div>

          </div>

        </div>
      </section>

      {/* Laptop */}


      {/* Tab */}

      <section className="w-full md:block hidden lg:hidden py-10 bg-white">
        <div className=" px-10">

          {/* TITLE */}
          <div className="text-center mb-16">
            <p className="text-[7.5vw] text-[#c9a58d] font-1" >
              Sweet Memories


              
            </p>
            <h2
              className="text-[4vw] font-semibold font-2 text-gray-700 mt-2 "
            >
              OUR CAPTURED MOMENTS
            </h2>
          </div>

          <div className='flex flex-col gap-10'>
            <div className='flex gap-10 flex-col '>
              <Image src="/memories-1.jpg" alt='Image is missing' width={1000} height={1000}></Image>
              <Image src="/memories-2.jpg" alt='Image is missing' width={1000} height={1000}></Image>
              <Image src="/memories-3.jpg" alt='Image is missing' width={1000} height={1000}></Image>

            </div>
            <div className='flex gap-10 flex-col'>
              <Image src="/memories-4.jpg" alt='Image is missing' height={1000} width={1000}></Image>
              <Image src="/memories-5.jpg" alt='Image is missing' height={1000} width={1000}></Image>

            </div>

            <div className='flex gap-10 flex-col'>
              <Image src="/memories-6.jpg" alt='Image is missing' width={1000} height={1000}></Image>
              <Image src="/memories-7.jpg" alt='Image is missing' width={1000} height={1000}></Image>

            </div>

          </div>

        </div>
      </section>

      {/* Tab */}

      {/* Mobile */}
      <section className="w-full block md:hidden py-10 bg-white">
        <div className=" px-6">

          {/* TITLE */}
          <div className="text-center mb-16">
            <p className="text-[7vw] font-1 text-[#c9a58d]" >
              Sweet Memories
            </p>
            <h2
              className="text-[4vw] font-2 font-semibold  text-gray-700 mt-2 "
            >
              OUR CAPTURED MOMENTS
            </h2>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex gap-6 flex-col '>
              <Image src="/memories-1.jpg" alt='Image is missing' width={1000} height={1000}></Image>
              <Image src="/memories-2.jpg" alt='Image is missing' width={1000} height={1000}></Image>
              <Image src="/memories-3.jpg" alt='Image is missing' width={1000} height={1000}></Image>

            </div>
            <div className='flex gap-6 flex-col'>
              <Image src="/memories-4.jpg" alt='Image is missing' height={1000} width={1000}></Image>
              <Image src="/memories-5.jpg" alt='Image is missing' height={1000} width={1000}></Image>

            </div>

            <div className='flex gap-6 flex-col'>
              <Image src="/memories-6.jpg" alt='Image is missing' width={1000} height={1000}></Image>
              <Image src="/memories-7.jpg" alt='Image is missing' width={1000} height={1000}></Image>

            </div>

          </div>

        </div>
      </section>

      {/* Mobile */}
    </main>
  )
}
