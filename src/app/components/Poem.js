import Image from "next/image"

export default function Poem(){
    return(
        <main className="py-10">
            {/* Desktop */}
             <div className="hidden  2xl:block">


         <Image
  src="/poet.png"
  alt="Image is missing"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-full mt-20 object-contain"
/>
            </div>
            {/* Desktop */}

            {/* Laptop */}

             <div className="hidden lg:block 2xl:hidden">

         <Image
  src="/poet.png"
  alt="Image is missing"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-full mt-20 object-contain"
/>

            </div>
            {/* Laptop */}

{/* Tab */}

<div className="md:block hidden lg:hidden h-full w-full object-center">

       <Image
  src="/poet_mob.png"
  alt="Image is missing"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-full object-contain mt-12"
/>
            </div>
{/* Tab */}


            {/* Mobile */}

             <div className="block md:hidden h-full w-full object-center">

         <Image
  src="/poet_mob.png"
  alt="Image is missing"
  width={0}
  height={0}
  sizes="100vw"
  className="w-full h-full object-contain mt-12"
/>

            </div>
            {/* Mobile */}
        </main>
    )
}