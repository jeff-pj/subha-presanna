'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { Carousel } from 'antd';

function Memorys() {
  const images = [
    '/hero1.png',
    '/hero2.png',
    '/hero-3.png',
    '/hero-4.png',
  ];

  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current?.next();
  };

  const prev = () => {
    carouselRef.current?.prev();
  };

  return (
    <div>
      {/* ================= DESKTOP================= */}
      <div id='Hero' className="2xl:block hidden">
        <div className="w-full h-screen relative">

         

          {/* CAROUSEL */}
          <Carousel
            ref={carouselRef}
            autoplay
            speed={2000}
            autoplaySpeed={3000}     // 3 sec auto scroll
            pauseOnHover={false}    // keep auto-scroll even after hover
            infinite
            effect="fade-left"           // correct effect
            dots
            className="h-full"
          >
            {images.map((src, index) => (
              <div key={index} className="relative w-full h-screen">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </Carousel>
      <div className='absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center px-6 py-2 w-full'>

        <p className='text-white font-4 text-[2.4vw]'>Two strangers, one destiny   ❤️</p>
    <p className='text-white font-2 text-[1.5vw]'>
An arranged match turned into forever</p>
      </div>
        </div>
        
      </div>
      {/* ================= DESKTOP ================= */}

      
      {/* Lap */}

       <div id='Hero' className="lg:block hidden 2xl:hidden">
        <div className="w-full h-screen relative">

          {/* LEFT ARROW */}
   

          {/* CAROUSEL */}
          <Carousel
            ref={carouselRef}
            autoplay
            speed={2000}
            autoplaySpeed={4000}     // 3 sec auto scroll
            pauseOnHover={false}    // keep auto-scroll even after hover
            infinite
            effect="fade-left"           // correct effect
            dots
            className="h-full"
          >
            {images.map((src, index) => (
              <div key={index} className="relative w-full h-screen">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </Carousel>
    <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 text-center  py-2 w-full">

  <p className="text-white font-4 text-[2.4vw]">
Two strangers, one destiny   ❤️  </p>
  <p className="text-white font-2 text-[1.2vw]">
      An arranged match turned into forever
  </p>
</div>

        </div>
        
      </div>
      {/* Lap */}

{/* Tab */}


 <div className="md:block lg:hidden hidden">
        <div className="w-fullrelative">

        

        

          {/* CAROUSEL */}
          <Carousel
            ref={carouselRef}
            autoplay
            speed={2000}
            autoplaySpeed={3000}     // 3 sec auto scroll
            pauseOnHover={false}    // keep auto-scroll even after hover
            infinite
            effect="fade-left"           // correct effect
            dots
            className="h-full"
          >
            {images.map((src, index) => (
              <div key={index} className="relative w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  height={1000}
                  width={1000}
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </Carousel>
         <div className='absolute bottom-[5%] w-full text-center  py-2'>
     
      <p className="text-white font-4 text-[5vw]">
Two strangers, one destiny   ❤️  </p>
  <p className="text-white font-2 text-[3vw]">
    An arranged match turned into forever
  </p> </div>
        </div>
        
      </div>

{/* Tab */}


      {/* Mobile */}

 <div className="block md:hidden">
        <div className="w-full  relative">

        


          {/* CAROUSEL */}
          <Carousel
            ref={carouselRef}
            autoplay
            speed={2000}
            autoplaySpeed={3000}     // 3 sec auto scroll
            pauseOnHover={false}    // keep auto-scroll even after hover
            infinite
            effect="fade-left"           // correct effect
            dots
            className="h-full"
          >
            {images.map((src, index) => (
              <div key={index} className="relative w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  height={1000}
                  width={1000}
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </Carousel>
      <div className='absolute bottom-[5%] w-full text-center  py-2'>
     
      <p className="text-white font-4 text-[5vw]">
Two strangers, one destiny   ❤️  </p>
  <p className="text-white font-2 text-[3vw]">
    An arranged match turned into forever...
  </p> </div>
        </div>
        
      </div>

      {/* Mobile */}


    </div>
  );
}

export default Memorys;

