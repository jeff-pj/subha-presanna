import Image from "next/image";
import { TiHeart } from "react-icons/ti";
import Link from "next/link";

export default function Footer() {
  return (
    <main>
      {/* Desktop */}
      <div className="hidden 2xl:block">
        <footer className="pt-6 bg-pink-200 opacity-75">
          <div className="flex justify-center items-center">
            <Image
              src="/logo_1.png"
              alt="logo"
              width={250}
              height={250}
              className="object-contain"
            />{" "}
          </div>

          <div className="flex px-[20%] pt-4 font-2 text-[1.4vw] justify-between">
            <Link href="#Home" className="hover:text-[#c59d5f]">
              Home
            </Link>
            <TiHeart />
            <Link href="#About" className="hover:text-[#c59d5f]">
              About
            </Link>
            <TiHeart />
            <Link href="#Story" className="hover:text-[#c59d5f]">
              Story
            </Link>
            <TiHeart />
            <Link href="#Memories" className="hover:text-[#c59d5f]">
              Memories
            </Link>
            <TiHeart />
            <Link href="#Events" className="hover:text-[#c59d5f]">
              Events
            </Link>
            <TiHeart />
            <Link href="#Gallery" className="hover:text-[#c59d5f]">
              Gallery
            </Link>
          </div>

          <p className="text-center  px-5 font-2 text-gray-500 pt-10 pb-6 text-[1vw]">
            {" "}
            @Copyright 2026 | Zenth Tech | All right reserved.
          </p>
        </footer>
      </div>
      {/* Desktop */}

      {/* Lap */}

      <div className="2xl:hidden hidden lg:block">
        <footer className="pt-6 bg-pink-200 opacity-75">
          <div className="flex justify-center items-center">
            <Image
              src="/logo_1.png"
              alt="logo"
              width={250}
              height={250}
              className="object-contain"
            />{" "}
          </div>

          <div className="flex px-[20%] pt-4 font-2 text-[1.4vw] justify-between">
            <Link href="#Home" className="hover:text-[#c59d5f]">
              Home
            </Link>
            <TiHeart />
            <Link href="#About" className="hover:text-[#c59d5f]">
              About
            </Link>
            <TiHeart />
            <Link href="#Story" className="hover:text-[#c59d5f]">
              Story
            </Link>
            <TiHeart />
            <Link href="#Memories" className="hover:text-[#c59d5f]">
              Memories
            </Link>
            <TiHeart />
            <Link href="#Events" className="hover:text-[#c59d5f]">
              Events
            </Link>
            <TiHeart />
            <Link href="#Gallery" className="hover:text-[#c59d5f]">
              Gallery
            </Link>
          </div>

          <p className="text-center  px-5 font-2 text-gray-500 pt-10 pb-6 text-[1vw]">
            {" "}
            @Copyright 2026 | Zenth Tech | All right reserved.
          </p>
        </footer>
      </div>

      {/* Lap */}

      {/* Tab */}

      <div className="hidden lg:hidden md:block">
        <footer className="py-[5%] bg-pink-200 opacity-75">
          <div className="flex justify-center items-center">
            <Image
              src="/logo_1.png"
              alt="logo"
              width={300}
              height={150}
              className="object-contain"
            />
          </div>

          <div className="flex px-[10%] pt-4 font-2 text-[4vw] justify-between">
            <Link href="#Home" className="hover:text-[#c59d5f]">
              Home
            </Link>
            <TiHeart />
            <Link href="#About" className="hover:text-[#c59d5f]">
              About
            </Link>
            <TiHeart />
            <Link href="#Story" className="hover:text-[#c59d5f]">
              Story
            </Link>
            <TiHeart />
            <Link href="#Memories" className="hover:text-[#c59d5f]">
              Memories
            </Link>
          </div>
          <div className="flex px-[10%] font-2 text-[4vw] justify-center py-5 gap-3 items-center">
            <TiHeart />
            <Link href="#Events" className="hover:text-[#c59d5f]">
              Events
            </Link>
            <TiHeart />
            <Link href="#Gallery" className="hover:text-[#c59d5f]">
              Gallery
            </Link>
          </div>
          <p className="text-center  px-5 font-2 text-gray-500 text-[3vw]">
            {" "}
            @Copyright 2026 | Zenth Tech | All right reserved.
          </p>
        </footer>
      </div>

      {/* Tab */}
      {/* Mobile */}

      <div className="md:hidden block">
        <footer className="py-[5%] bg-pink-200 opacity-75">
          <div className="flex justify-center items-center">
            <Image
              src="/logo_1.png"
              alt="logo"
              width={300}
              height={130}
              className="object-contain"
            />
          </div>

          <div className="flex px-[10%] pt-4 font-2 text-[4vw] justify-between">
            <Link href="#Home" className="hover:text-[#c59d5f]">
              Home
            </Link>
            <TiHeart />
            <Link href="#About" className="hover:text-[#c59d5f]">
              About
            </Link>
            <TiHeart />
            <Link href="#Story" className="hover:text-[#c59d5f]">
              Story
            </Link>
            <TiHeart />
            <Link href="#Memories" className="hover:text-[#c59d5f]">
              Memories
            </Link>
          </div>
          <div className="flex px-[10%] font-2 text-[4vw] justify-center py-5 gap-3 items-center">
            <TiHeart />
            <Link href="#Events" className="hover:text-[#c59d5f]">
              Events
            </Link>
            <TiHeart />
            <Link href="#Gallery" className="hover:text-[#c59d5f]">
              Gallery
            </Link>
          </div>
          <p className="text-center  px-5 font-2 text-gray-500 text-[3vw]">
            {" "}
            @Copyright 2026 | Zenth Tech | All right reserved.
          </p>
        </footer>
      </div>

      {/* Mobile */}
    </main>
  );
}
