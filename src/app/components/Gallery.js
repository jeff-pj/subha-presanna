

import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main>

      {/* Desktop */}
      <div id="Gallery" className="2xl:block hidden px-10 py-16">

                  <div className="relative">
            <h1 className="text-[3.5vw] font-1 text-center pt-6 font-semibold text-[#000000]">
              Frozen <span className="text-[#936A38]">Moment</span>
            </h1>
            <hr className="mx-auto  h-1 w-[200] border-0 bg-linear-to-r from-[#0b2d52] via-[#8a6333] to-[#d22f27]" />
          </div>

        {/* MAIN FLEX (2 CONTAINERS) */}
        <div className="flex gap-10 pt-5">

          {/* ================= LEFT CONTAINER ================= */}
          <div className="w-full ">

            <div className="overflow-hidden">
              <Image
                src="/img-1.jpg"
                alt="Wedding Photography"
                width={1000}
                height={700}
                className="w-full h-[500] object-cover"
              />
            </div>

            <div className="mt-6">

              <h2 className="text-[3vw] font-1 text-center font-semibold mt-2">
                Prasanna & Subha
              </h2>


            </div>

          </div>

          {/* ================= RIGHT CONTAINER ================= */}
          <div className="w-full flex flex-col gap-8">

            {/* -------- INNER CONTAINER 1 -------- */}
            <div className="flex gap-4 justify-start items-center">
              <div className="w-40 h-40 shrink-0 overflow-hidden  ">
                <Image
                  src="/drive-1.jpg"
                  alt="Wedding Gown"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            <div>
      <h3 className="text-[1.5vw] font-semibold">Pre Wedding Photos | Footprint Studio</h3>
  

      <Link
        href=" "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 border border-pink-400 text-pink-400 rounded-full text-[1vw] font-medium hover:bg-pink-400 hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
            </div>

            {/* -------- INNER CONTAINER 2 -------- */}
            <div className="flex gap-4 justify-start items-center">
              <div className="w-40 h-40 shrink-0 overflow-hidden  ">
                <Image
                  src="/drive-2.jpg"
                  alt="Flower Decoration"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
                     <div>
      <h3 className="text-[1.5vw] font-semibold">Wedding Photos | Footprint Studio</h3>
  

      <Link
        href="  "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 border border-pink-400 text-pink-400 rounded-full text-[1vw] font-medium hover:bg-pink-400 hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
            </div>

            {/* -------- INNER CONTAINER 3 -------- */}
            <div className="flex gap-4 justify-start items-center">
              <div className="w-40 h-40 shrink-0 overflow-hidden  ">
                <Image
                  src="/drive-3.jpg"
                  alt="Wedding Gift"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
                     <div>
      <h3 className="text-[1.5vw] font-semibold">Custom Photos | Footprint Studio</h3>
  

      <Link
        href=" "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 border border-pink-400 text-pink-400 rounded-full text-[1vw] font-medium hover:bg-pink-400 hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
            </div>

          </div>
        </div>
      </div>

      {/* Desktop */}

      {/* Laptop */}

       <div id="Gallery" className="2xl:hidden hidden lg:block px-10 py-16">
        
                  <div className="relative">
            <h1 className="text-[3.5vw] font-1 text-center pt-6 font-semibold text-[#000000]">
              Frozen <span className="text-[#936A38]">Moment</span>
            </h1>
            <hr className="mx-auto  h-1 w-[200] border-0 bg-linear-to-r from-[#0b2d52] via-[#8a6333] to-[#d22f27]" />
          </div>

        {/* MAIN FLEX (2 CONTAINERS) */}
        <div className="flex gap-10 pt-5">

          {/* ================= LEFT CONTAINER ================= */}
          <div className="w-full ">

            <div className="overflow-hidden">
              <Image
                src="/img-1.jpg"
                alt="Wedding Photography"
                width={1000}
                height={700}
                className="w-full h-[500] object-cover"
              />
            </div>

            <div className="mt-6">

              <h2 className="text-[3vw] font-1 text-center font-semibold mt-2">
                  Prasanna & Subha
              </h2>


            </div>

          </div>

          {/* ================= RIGHT CONTAINER ================= */}
          <div className="w-full flex flex-col gap-8">

            {/* -------- INNER CONTAINER 1 -------- */}
            <div className="flex gap-4 justify-start items-center">
              <div className="w-40 h-40 shrink-0 overflow-hidden  ">
                <Image
                  src="/drive-1.jpg"
                  alt="Wedding Gown"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            <div>
      <h3 className="text-[1.5vw] font-semibold">Pre Wedding Photos | Footprint Studio</h3>
  

      <Link
        href=" "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 border border-pink-400 text-pink-400 rounded-full text-[1vw] font-medium hover:bg-pink-400 hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
            </div>

            {/* -------- INNER CONTAINER 2 -------- */}
            <div className="flex gap-4 justify-start items-center">
              <div className="w-40 h-40 shrink-0 overflow-hidden  ">
                <Image
                  src="/drive-2.jpg"
                  alt="Flower Decoration"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
                     <div>
      <h3 className="text-[1.5vw] font-semibold">Wedding Photos | Footprint Studio</h3>
  

      <Link
        href="  "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 border border-pink-400 text-pink-400 rounded-full text-[1vw] font-medium hover:bg-pink-400 hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
            </div>

            {/* -------- INNER CONTAINER 3 -------- */}
            <div className="flex gap-4 justify-start items-center">
              <div className="w-40 h-40 shrink-0 overflow-hidden  ">
                <Image
                  src="/drive-3.jpg"
                  alt="Wedding Gift"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
                     <div>
      <h3 className="text-[1.5vw] font-semibold">Custom Photos | Footprint Studio</h3>
  

      <Link
        href=" "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-3 border border-pink-400 text-pink-400 rounded-full text-[1vw] font-medium hover:bg-pink-400 hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
            </div>

          </div>
        </div>
      </div>

      {/* Laptop */}


{/* Tab */}



       <div className="hidden md:block lg:hidden px-[10%]  py-16">
        
                 <div className="relative">
            <h1 className="text-[8.2vw] font-1 text-center pt-5 font-poppins font-semibold text-[#000000]">
              Frozen <span className="text-[#936A38]">Moment</span>
            </h1>
            <hr className="mx-auto  h-1 w-[200] border-0 bg-linear-to-r from-[#0b2d52] via-[#8a6333] to-[#d22f27]" />
          </div>

        {/* MAIN FLEX (2 CONTAINERS) */}
        <div className=" gap-10 pt-5">

          {/* ================= LEFT CONTAINER ================= */}
          <div className="w-full ">

            <div className="overflow-hidden">
              <Image
                src="/img-1.jpg"
                alt="Wedding Photography"
                width={1000}
                height={400}
                className="w-full h-[350] object-cover"
              />
            </div>

            <div className="mt-6">

              <h2 className="text-[7.5vw] font-1 text-center font-semibold pb-5">
                  Prasanna & Subha
              </h2>


            </div>

          </div>

          {/* ================= RIGHT CONTAINER ================= */}
 <div className="w-full flex flex-col gap-10">

  {/* -------- PRE WEDDING PHOTOS -------- */}
  <div className="flex flex-col gap-5">
    <Image
      src="/drive-1.jpg"
      alt="Pre Wedding Photos"
      width={1000}
      height={350}
      className="w-full h-87.5 object-cover"
    />

    <div>
      <h3 className="text-[4.8vw] font-semibold">Pre Wedding Photos | Footprint Studio</h3>
  

      <Link
        href=" "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 w-full py-2 text-center border border-pink-400  text-pink-400  rounded-full text-[4vw] font-medium hover:bg-pink-400  hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
  </div>

  {/* -------- WEDDING PHOTOS -------- */}
  <div className="flex flex-col gap-5">
    <Image
      src="/drive-2.jpg"
      alt="Wedding Photos"
      width={1000}
      height={350}
      className="w-full h-87.5 object-cover"
    />

    <div>
      <h3 className="text-[4.8vw] font-semibold">Wedding Photos | Footprint Studio</h3>
     

      <Link
        href="  "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 w-full py-2 text-center border border-pink-400  text-pink-400  rounded-full text-[4vw] font-medium hover:bg-pink-400  hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
  </div>

  {/* -------- CUSTOM PHOTOS -------- */}
  <div className="flex flex-col gap-5">
    <Image
      src="/drive-3.jpg"
      alt="Custom Photos"
      width={1000}
      height={350}
      className="w-full h-87.5 object-cover"
    />

    <div>
      <h3 className="text-[4.8vw] font-semibold">Custom Photos | Footprint Studio</h3>
  

      <Link
        href=" "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 w-full py-2 text-center border border-pink-400  text-pink-400  rounded-full text-[4vw] font-medium hover:bg-pink-400  hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
  </div>

</div>
        </div>
      </div>



{/* Tab */}


      {/* Mobile */}

       <div className="md:hidden block px-5  py-16">
        
                  <div className="relative">
            <h1 className="text-[8.2vw] font-1 text-center pt-5 font-poppins font-semibold text-[#000000]">
              Frozen <span className="text-[#936A38]">Moment</span>
            </h1>
            <hr className="mx-auto  h-1 w-[200] border-0 bg-linear-to-r from-[#0b2d52] via-[#8a6333] to-[#d22f27]" />
          </div>

        {/* MAIN FLEX (2 CONTAINERS) */}
        <div className=" gap-10 pt-5">

          {/* ================= LEFT CONTAINER ================= */}
          <div className="w-full ">

            <div className="overflow-hidden">
              <Image
                src="/img-1.jpg"
                alt="Wedding Photography"
                width={1000}
                height={400}
                className="w-full h-[350] object-cover"
              />
            </div>

            <div className="mt-6">

              <h2 className="text-[7.5vw] font-1 text-center font-semibold pb-5">
                Prasanna & Subha
              </h2>


            </div>

          </div>

          {/* ================= RIGHT CONTAINER ================= */}
 <div className="w-full flex flex-col gap-10">

  {/* -------- PRE WEDDING PHOTOS -------- */}
  <div className="flex flex-col gap-5">
    <Image
      src="/drive-1.jpg"
      alt="Pre Wedding Photos"
      width={1000}
      height={350}
      className="w-full h-87.5 object-cover"
    />

    <div>
      <h3 className="text-[4.8vw] font-semibold">Pre Wedding Photos | Footprint Studio</h3>
  

      <Link
        href=" "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 w-full py-2 text-center border border-pink-400  text-pink-400  rounded-full text-[4vw] font-medium hover:bg-pink-400  hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
  </div>

  {/* -------- WEDDING PHOTOS -------- */}
  <div className="flex flex-col gap-5">
    <Image
      src="/drive-2.jpg"
      alt="Wedding Photos"
      width={1000}
      height={350}
      className="w-full h-87.5 object-cover"
    />

    <div>
      <h3 className="text-[4.8vw] font-semibold">Wedding Photos | Footprint Studio</h3>
     

      <Link
        href="  "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 w-full py-2 text-center border border-pink-400  text-pink-400  rounded-full text-[4vw] font-medium hover:bg-pink-400  hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
  </div>

  {/* -------- CUSTOM PHOTOS -------- */}
  <div className="flex flex-col gap-5">
    <Image
      src="/drive-3.jpg"
      alt="Custom Photos"
      width={1000}
      height={350}
      className="w-full h-87.5 object-cover"
    />

    <div>
      <h3 className="text-[4.8vw] font-semibold">Custom Photos | Footprint Studio</h3>
  

      <Link
        href=" "
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 w-full py-2 text-center border border-pink-400  text-pink-400  rounded-full text-[4vw] font-medium hover:bg-pink-400  hover:text-white transition"
      >
        View Photos
      </Link>
    </div>
  </div>

</div>
        </div>
      </div>
      {/* Mobile */}
    </main>
  );
}
