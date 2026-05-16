 import Navbar from "./components/Navbar";
 import Hero from "./components/Hero";
 import WeddingCount from "./components/WeddingCount" ;
import Intro from "./components/Intro"
import Story from "./components/Story"
import Memories from "./components/Memories" 
import Venue from "./components/Venue"
import Poem from "./components/Poem"
import Gallery from "./components/Gallery"
import Footer from "./components/footer";
 export default function Wedding(){
  return(
    <main>
          <Navbar />
           <Hero />
           <WeddingCount />
          <Intro />
          <Story />
          <Memories />
          <Venue />
          <Poem />
          <Gallery />
          <Footer />
     </main>
  )
 }



// import React from 'react'

// function Screen() {
//   return (
//     <div>
//     {/* Desktop */}
//     <div className="hidden  2xl:block ">
//     <div className='flex justify-center items-center h-screen text-5xl'>
//         lllllllllllllllll
//         </div>
//     </div>
//     {/* Desktop */}

//     {/* Laptop */}

//     <div className="hidden 2xl:hidden lg:block">
//  Laptop
//     </div>
//     {/* Laptop */}

//     {/* Tab */}

//     <div className="hidden  lg:hidden  md:block">
//  Tab

//     </div>

//     {/* Tab */}

//     {/* Mobile */}

//     <div className="md:hidden ">
//         <div className='flex justify-center items-center h-screen text-5xl'>
//        Mobile
//         </div>

//     </div>

//     {/* Mobile */}
//   </div>
//   )
// }

// export default Screen