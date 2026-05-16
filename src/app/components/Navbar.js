import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      {/* Desktop */}
      <div className="2xl:block hidden">
      <nav className="bg-[#fff8f7] w-full h-20 flex items-center ">
        <ul className="flex w-full justify-center items-center gap-x-10 font-poppins text-gray-700">
          <li className="cursor-pointer font-2 text-[2vw] hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Home">Home</Link></li>
          <li className="cursor-pointer font-2 text-[2vw] hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#About">About</Link></li>
          <li className="cursor-pointer font-2 text-[2vw] hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Story">Story</Link></li>

          {/* Logo */}
          <li>
            <Image
              src="/logo_1.png"
              alt="logo"
              width={200}
              height={150}
              className="object-contain"
            />
          </li>

          <li className="cursor-pointer font-2 text-[2vw] hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Memories">Memories</Link></li>
          <li className="cursor-pointer font-2 text-[2vw] hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Events">Events</Link></li>
          <li className="cursor-pointer font-2 text-[2vw] hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Gallery">Gallery</Link></li>
        </ul>
      </nav>
    </div>

    {/* Desktop */}

    {/* Laptop */}
    <div className="lg:block 2xl:hidden hidden">
      <nav className="bg-[#fff8f7] w-full h-20 flex items-center ">
        <ul className="flex w-full justify-center items-center font-2 text-[1.4vw] gap-x-10 font-poppins text-gray-700">
          <li className="cursor-pointer hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Home"> Home</Link></li>
          <li className="cursor-pointer hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#About">About</Link></li>
          <li className="cursor-pointer hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Story">Story</Link></li>

          {/* Logo */}
          <li>
            <Image
              src="/logo_1.png"
              alt="logo"
              width={200}
              height={150}
              className="object-contain"
            />
          </li>

          <li className="cursor-pointer hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Memories">Memories</Link></li>
          <li className="cursor-pointer hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Events">Events</Link></li>
          <li className="cursor-pointer hover:text-[#c59d5f] hover:border-b-2 hover:border-[#c59d5f]"><Link href="#Gallery">Gallery</Link></li>
        </ul>
      </nav>
    </div>

    {/* Laptop */}


{/* Tab */}
 <div className="hidden md:block lg:hidden">
        <nav className="bg-[#fff8f7] w-full h-20 px-6 flex items-center justify-between">

          {/* Left Logo */}
          <Image
            src="/love.png"
            alt="logo"
            width={90}
            height={90}
            className="object-contain"
          />

          {/* Right Social Icons */}
              <div className="flex items-center gap-4 text-gray-700">
            <Link href="https://www.instagram.com/levisrich?igsh=MWVvdDN1cnMwa2RtZw=="       target="_blank"
        rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookSquare className="text-xl hover:text-[#c59d5f] transition cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/roselineruby2502?igsh=MTlhZGZjMndmM2N5bw=="       target="_blank"
        rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-[#c59d5f] transition cursor-pointer" />
            </Link>
          </div>

        </nav>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block md:hidden">
        <nav className="bg-[#fff8f7] w-full h-16 px-4 flex items-center justify-between">

          {/* Left Logo */}
          <Image
            src="/logo_1.png"
            alt="logo"
            width={130}
            height={130}
            className="object-contain"
          />

          {/* Right Social Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <Link href="https://www.instagram.com/levisrich?igsh=MWVvdDN1cnMwa2RtZw=="       target="_blank"
        rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookSquare className="text-xl hover:text-[#c59d5f] transition cursor-pointer" />
            </Link>
            <Link href="https://www.instagram.com/roselineruby2502?igsh=MTlhZGZjMndmM2N5bw=="       target="_blank"
        rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl hover:text-[#c59d5f] transition cursor-pointer" />
            </Link>
          </div>

        </nav>
      </div>

    {/* Mobile */}
    </div>
  );
}

export default Navbar;