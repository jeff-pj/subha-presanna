"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function CoupleSection() {
  return (
    <main>
      {/* Desktop */}
    <div id="About" className="w-full 2xl:block hidden bg-white">
      <div className="flex px-[10%] gap-10 justify-center items-center py-20">
        <div className="h-full w-full  text-center ">
          {/* Profile Image */}
          <div className="mb-10 flex justify-center">
            <div className="w-full h-full  overflow-hidden">
              <Image
                src="/Groom1.png" // change image if needed
                alt="Daniel Oliver"
                width={1000}
                height={1000}
                className="object-cover  w-[320] h-[320] rounded-full "
              />
            </div>
          </div>

          {/* Name */}
          <h3 className=" text-[4.3vw]  text-[#1f2d3d] mb-2 font-4">
                      Subha
          </h3>

          {/* Description */}
          <p className="text-[1.1vw] font-7 text-[#7a8a9a] leading-relaxed">
             A beautiful smile, a kind heart, and a strong mind.
She brings warmth, happiness, and love wherever she goes

         </p>
        </div>

        <div className=" ">
          <Image
            src="/love_logo.png"
            alt="Image is missing"
            height={1000}
            width={1000} 
            className="rotate-90"
          ></Image>
        </div>

        <div className="h-full w-full  text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-10">
            <div className="w-full h-full   overflow-hidden">
              <Image
                src="/Bride1.png" // change image if needed
                alt="Sarah Margrate"
                width={1000}
                height={1000}
                className="object-cover w-[320] h-[320] rounded-full"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-base text-[4.3vw]  text-[#1f2d3d] mb-2 font-4 ">
        Prasanna
          </h3>

          {/* Description */}
          <p className="text-[1.1vw] font-7 text-[#7a8a9a] leading-relaxed">
        
A calm and caring soul with strong values.
Always supportive, always loving — a perfect partner in every way 
          </p>
        </div>

      </div>
    
    </div>

      {/* Desktop */}


{/* Laptop */}

 <div id="About" className=" w-full lg:block hidden 2xl:hidden bg-white">
      <div className="flex px-[10%] gap-10 justify-center items-center py-20">
        <div className="h-full w-full  text-center ">
          {/* Profile Image */}
          <div className="mb-10 flex justify-center">
            <div className="w-full h-full  overflow-hidden">
              <Image
                    src="/Groom1.png" // change image if needed
                alt="Sarah Margrate"
                width={1000}
                height={1000}
                className="object-cover w-[320] h-[320] rounded-full -rotate-360"
              />
            </div>
          </div>

          {/* Name */}
          <h3 className=" text-[4.3vw]  text-[#1f2d3d] mb-2 font-4">
                       Subha
          </h3>

          {/* Description */}
          <p className="text-[1.1vw] font-7 text-[#7a8a9a] leading-relaxed">
     
 A beautiful smile, a kind heart, and a strong mind.
She brings warmth, happiness, and love wherever she goes</p>
        </div>

        <div className=" ">
          <Image
            src="/love_logo.png"
            alt="Image is missing"
            height={1000}
            width={1000} 
            className="rotate-90"
          ></Image>
        </div>

        <div className="h-full w-full  text-center">
          {/* Profile Image */}
          <div className="flex justify-center mb-10">
            <div className="w-full h-full   overflow-hidden">
              <Image
                 src="/Bride1.png" // change image if needed
                alt="Daniel Oliver"
                width={1000}
                height={1000}
                className="object-cover  w-[320] h-[320] rounded-full "

              />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-base text-[4.3vw]  text-[#1f2d3d] mb-2 font-4 ">
     Prasanna
          </h3>

          {/* Description */}
          <p className="text-[1.1vw] font-7 text-[#7a8a9a] leading-relaxed">
           A calm and caring soul with strong values.
Always supportive, always loving — a perfect partner in every way  

          </p>
        </div>

      </div>

    </div>
{/* Laptop */}

{/* Tab */}

<div className="w-full bg-white hidden md:block lg:hidden">
        <div className="flex flex-col px-[5%]  justify-center items-center py-10">
        <div className="h-full w-full  text-center ">
          {/* Profile Image */}
          
            <div className="w-full h-full overflow-hidden mb-4 flex justify-center items-center">
              <Image
                src="/Groom1.png" // change image if needed
                alt="Daniel Oliver"
                width={1000}
                height={1000}
                className="object-cover h-[320] w-[320] rounded-full "
              />
            </div>
          

          {/* Name */}
          <h3 className="text-[9.8vw] font-semibold text-[#1f2d3d] mb-2 font-4">
                   Subha
          </h3>

          {/* Description */}
          <p className="text-[4.2vw] font-7 text-[#7a8a9a] ">
             A beautiful smile, a kind heart, and a strong mind.
She brings warmth, happiness, and love wherever she goes
         </p>
        </div>

          <Image
            src="/love_logo.png"
            alt="Image is missing"
            height={340}
            width={340}  className=" p-4 opacity-50"
          ></Image>
        

        <div className="h-full w-full  text-center">
          {/* Profile Image */}
          
            <div className="w-full h-full mb-4 flex justify-center  overflow-hidden">
              <Image
                src="/Bride1.png" // change image if needed
                alt="Sarah Margrate"
                width={1000}
                height={1000}
                className="object-cover w-[320] h-[320] rounded-full  border-2 "
              />
            </div>
        

          {/* Name */}
          <h3 className=" text-[9.8vw] font-semibold  text-[#1f2d3d] mb-2 font-4 ">
          Prasanna
          </h3>

          {/* Description */}
          <p className="text-[4.2vw] font-7 text-[#7a8a9a]">
      
A calm and caring soul with strong values.
Always supportive, always loving — a perfect partner in every way 
          </p>
        </div>

      </div>

     
    </div>

{/* Tab */}

{/* Mobile */}

<div className="w-full bg-white md:hidden block">


      <div className="flex flex-col px-[5%]  justify-center items-center py-10">
        <div className="h-full w-full  text-center ">
          {/* Profile Image */}
          
            <div className="w-full h-full overflow-hidden mb-4 flex justify-center items-center">
              <Image
                src="/Groom1.png" // change image if needed
                alt="Daniel Oliver"
                width={1000}
                height={1000}
                className="object-cover h-[320] w-[320] rounded-full "
              />
            </div>
          

          {/* Name */}
          <h3 className="text-[9.8vw] font-semibold text-[#1f2d3d] mb-2 font-4">
                    Subha
          </h3>

          {/* Description */}
          <p className="text-[4.2vw] font-7 text-[#7a8a9a] ">
   
A beautiful smile, a kind heart, and a strong mind.
She brings warmth, happiness, and love wherever she goes </p>
        </div>

          <Image
            src="/love_logo.png"
            alt="Image is missing"
            height={340}
            width={340}  className=" p-4 opacity-50"
          ></Image>
        

        <div className="h-full w-full  text-center">
          {/* Profile Image */}
          
            <div className="w-full h-full mb-4 flex justify-center  overflow-hidden">
              <Image
                src="/Bride1.png" // change image if needed
                alt="Sarah Margrate"
                width={1000}
                height={1000}
                className="object-cover w-[320] h-[320] rounded-full  border-2 "
              />
            </div>
        

          {/* Name */}
          <h3 className=" text-[9.8vw] font-semibold  text-[#1f2d3d] mb-2 font-4 ">
          Prasanna
          </h3>

          {/* Description */}
          <p className="text-[4.2vw] font-7 text-[#7a8a9a]">
            A calm and caring soul with strong values.
Always supportive, always loving — a perfect partner in every way 
          </p>
        </div>

      </div>


   
    </div>
    {/* Mobile */}
    </main>
  );
}
