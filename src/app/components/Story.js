

'use client'
import Image from 'next/image'
import { FaHeart, FaRing, FaDove } from 'react-icons/fa'

export default function LoveStory() {
  return (


    <main className=" ">
{/* Desktop */}

<div id='Story' className='bg-pink-100 py-16 hidden 2xl:block'>

      {/* TITLE */}
      <div className="flex flex-col items-center mb-16">
        <Image src="/butterfly.png" alt="Butterfly" width={220} height={220} />
        <h2 className="text-[3.2vw] font-1 font-semibold text-center">
Our Story
        </h2>
      </div>

      {/* TIMELINE */}
<section className="mx-[18%] relative">

  {/* CENTER LINE */}
  <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dotted border-[#c9d8e6]" />

  <div className="flex flex-col">

    {/* ================= ITEM 1 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <div className="p-5 w-[45%] text-left">
          <h4 className="text-[1.6vw] font-semibold">🌱 A Beautiful Beginning</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
Our story began with families, blessings, and destiny bringing us together.
Two strangers, one meeting — and a journey written by fate.        
           
          </p>
        </div>

        <Image
          src="/our_story-1.png"
          alt="A Beautiful Beginning"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaHeart size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 2 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <Image
          src="/our_story-2.png"
          alt="College Love"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />



     <div className="w-[45%] p-5">
          <h4 className="text-[1.6vw] font-semibold">🤝 Our First Meet</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
We met for the first time with shy smiles and nervous hearts.
But somewhere between simple conversations, comfort slowly started growing.            </p>
        </div>



      
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaDove size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 3 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <div className="p-5 w-[45%] text-left">
          <h4 className="text-[1.6vw] font-semibold">🤍 From Strangers to Soulmates</h4>

          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
       A simple meeting turned into meaningful conversations,
and those conversations slowly turned into love.
          </p>
        </div>

        <Image
          src="/our_story-3.png"
          alt="The Proposal"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaRing size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 4 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <Image
          src="/our_story-4.png"
          alt="Years Together"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />

        <div className="w-[45%] p-5">
          <h4 className="text-[1.6vw] font-semibold">💍 The Promise</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
          With families by our side and love in our hearts,
we decided to walk this beautiful journey together — forever.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaHeart size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

  </div>
</section>



      </div>

      {/* Desktop */}




      {/* Laptop */}
<div id='Story' className='bg-pink-100 py-16 2xl:hidden hidden lg:block'>

      {/* TITLE */}
      <div className="flex flex-col items-center mb-16">
        <Image src="/butterfly.png" alt="Butterfly" width={220} height={220} />
        <h2 className="text-[3.2vw] font-1 font-semibold text-center">
Our Story
        </h2>
      </div>

      {/* TIMELINE */}
<section className="mx-[18%] relative">

  {/* CENTER LINE */}
  <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dotted border-[#c9d8e6]" />

  <div className="flex flex-col">

    {/* ================= ITEM 1 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <div className="p-5 w-[45%] text-left">
          <h4 className="text-[1.6vw] font-semibold">🌱 A Beautiful Beginning</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
Our story began with families, blessings, and destiny bringing us together.
Two strangers, one meeting — and a journey written by fate.           
          </p>
        </div>

        <Image
          src="/our_story-1.png"
          alt="A Beautiful Beginning"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaHeart size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 2 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <Image
          src="/our_story-2.png"
          alt="College Love"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />



     <div className="w-[45%] p-5">
          <h4 className="text-[1.6vw] font-semibold">🤝 Our First Meet</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
          We met for the first time with shy smiles and nervous hearts.
But somewhere between simple conversations, comfort slowly started growing.
           </p>
        </div>



      
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaDove size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 3 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <div className="p-5 w-[45%] text-left">
          <h4 className="text-[1.6vw] font-semibold">🤍 From Strangers to Soulmates</h4>

          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
          A simple meeting turned into meaningful conversations,
and those conversations slowly turned into love.
          </p>
        </div>

        <Image
          src="/our_story-3.png"
          alt="The Proposal"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaRing size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

    {/* ================= ITEM 4 ================= */}
    <div className="relative">
      <div className="flex items-center justify-between font-2">
        <Image
          src="/our_story-4.png"
          alt="Years Together"
          width={300}
          height={300}
          className="object-cover rounded-full"
        />

        <div className="w-[45%] p-5">
          <h4 className="text-[1.6vw] font-semibold">💍 The Promise</h4>
          <p className="text-[#7a8a9a] text-[1.1vw] mt-3 leading-relaxed">
          With families by our side and love in our hearts,
we decided to walk this beautiful journey together — forever.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8">
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#c9a58d] flex items-center justify-center text-[#c9a58d] shadow-md">
          <FaHeart size={12} />
        </div>
        <span className="h-10 border-l-2 border-dotted border-[#c9d8e6]" />
      </div>
    </div>

  </div>
</section>


      </div>
      {/* Laptop */}
      

      {/* Tab */}


<div className='bg-pink-100 py-16 hidden md:block lg:hidden'>

      {/* TITLE */}
      <div className="flex flex-col items-center mb-16">
        <Image src="/butterfly.png" alt="Butterfly" width={220} height={220} />
        <h2 className="text-[6.7vw] font-1 font-semibold text-center">
Our Story
        </h2>
      </div>

{/* TIMELINE */}
<section className="relative">
  <div className="flex flex-col">

    {/* ================= ITEM 1 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story-1.png"
          alt="A Beautiful Beginning"
          width={1000}
          height={1000}
          className="object-cover"
        />

        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🌱 A Beautiful Beginning
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
           Our story began with families, blessings, and destiny bringing us together.
Two strangers, one meeting — and a journey written by fate.
          </p>
        </div>
      </div>
    </div>

    {/* ================= ITEM 2 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story-2.png"
          alt="College Love"
          width={1000}
          height={1000}
          className="object-cover"
        />


        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🤝 Our First Meet
          </h4>
        
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
We met for the first time with shy smiles and nervous hearts.
But somewhere between simple conversations, comfort slowly started growing.
          </p>
        </div>
  
      </div>
    </div>

    {/* ================= ITEM 3 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story-3.png"
          alt="The Proposal"
          width={1000}
          height={1000}
          className="object-cover"
        />
      <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🤍 From Strangers to Soulmates
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            A simple meeting turned into meaningful conversations,
and those conversations slowly turned into love.
          </p>
        </div>
      </div>
    </div>

    {/* ================= ITEM 4 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story-4.png"
          alt="Years of Togetherness"
          width={1000}
          height={1000}
          className="object-cover"
        />

        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            💍 The Promise
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
          With families by our side and love in our hearts,
we decided to walk this beautiful journey together — forever.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>


      </div>



      {/* Tab */}


      {/* Mobile */}

<div className='bg-pink-100 py-16 md:hidden block'>

      {/* TITLE */}
      <div className="flex flex-col items-center mb-16">
        <Image src="/butterfly.png" alt="Butterfly" width={220} height={220} />
        <h2 className="text-[6.7vw] font-1 font-semibold text-center">
Our Story
        </h2>
      </div>

{/* TIMELINE */}
<section className="relative">
  <div className="flex flex-col">

    {/* ================= ITEM 1 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story-1.png"
          alt="A Beautiful Beginning"
          width={1000}
          height={1000}
          className="object-cover"
        />

        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🌱 A Beautiful Beginning
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
           Our story began with families, blessings, and destiny bringing us together.
Two strangers, one meeting — and a journey written by fate.
          </p>
        </div>
      </div>
    </div>

    {/* ================= ITEM 2 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story-2.png"
          alt="College Love"
          width={1000}
          height={1000}
          className="object-cover"
        />


        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🤝 Our First Meet
          </h4>
        
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
We met for the first time with shy smiles and nervous hearts.
But somewhere between simple conversations, comfort slowly started growing.
          </p>
        </div>
  
      </div>
    </div>

    {/* ================= ITEM 3 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story-3.png"
          alt="The Proposal"
          width={1000}
          height={1000}
          className="object-cover"
        />
      <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            🤍 From Strangers to Soulmates
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            A simple meeting turned into meaningful conversations,
and those conversations slowly turned into love.
          </p>
        </div>
      </div>
    </div>

    {/* ================= ITEM 4 ================= */}
    <div className="relative">
      <div className="flex flex-col py-6 items-center justify-center font-2">
        <Image
          src="/our_story-4.png"
          alt="Years of Togetherness"
          width={1000}
          height={1000}
          className="object-cover"
        />

        <div className="w-full px-[10%] p-5">
          <h4 className="text-[5vw] font-semibold text-center">
            💍 The Promise
          </h4>
          <p className="text-[#7a8a9a] text-[3.2vw] font-3 text-center mt-3 leading-relaxed">
            With families by our side and love in our hearts,
we decided to walk this beautiful journey together — forever.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>


      </div>
      {/* Mobile */}
      
    </main>
  )
}
