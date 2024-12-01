"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="text-sm overflow-y-auto bottom-0 left-0 text-newWhite py-12 bg-gradient-to-b from-primary/60 to-primary pt-12 sm:pt-36">
      <div className="px-3 md:px-10 lg:px-24 space-y-12 md:space-y-24">
        <div className="space-y-12 md:space-y-0 flex flex-col md:flex-row md:space-x-24">
          <div className="space-y-6 min-w-[180px]">
            <Image
              src="https://utfs.io/f/KEu7z70yXtIh8k4eWbySeWkuAlRcKazbEojGsgDmyxPMd9n7"
              width={200}
              height={200}
              alt="Logo"
              className="bg-white"
            />
            <h2>Izgradite svoju savršenu garažu uz Beriko.</h2>
            <p className="md:max-w-[500px]">
              S preciznom montažom i besprijekornim detaljima, unaprijedite svoj
              prostor do savršenstva. Pouzdajte se u Beriko za vrhunsko iskustvo
              montaže garaža.
            </p>
          </div>
          <div className="flex flex-col justify-around flex-1 md:flex-row space-y-12 md:space-y-0 md:space-x-12 items-top">
            <div className="flex flex-col space-y-4">
              <h2 className="text-slate-700 text-lg whitespace-nowrap mb-4">
                O nama
              </h2>
              <Link
                href="/about"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                Povijest firme
              </Link>
              <Link
                href="/about/#team"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                Naš tim
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-slate-700 text-lg mb-4">Navigacija</h2>
              <Link
                href="/"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                Naslovna
              </Link>
              <Link
                href="/about"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                O nama
              </Link>
              <Link
                href="/gallery"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                Galerija
              </Link>
              <Link
                href="/products"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                Katalog proizvoda
              </Link>
              <Link
                href="/reviews"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                Recenzije
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="text-slate-700 text-lg mb-4">Pomoć</h2>
              <Link
                href="/contact"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                Kontakt
              </Link>
              <Link
                href="/contact/#FAQs"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                FAQs
              </Link>
              <Link
                href="/privacy-policy"
                className="ml-4 md:ml-0 hover:opacity-75 duration-300"
              >
                Politika Privatnosti
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <h2 className="flex justify-center">
            2024 © Beriko - Montažni objekti
          </h2>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61556832431837"
              className="rounded-md p-4 bg-slate-500 text-white hover:opacity-75 duration-300"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/beriko.buildings/"
              className="rounded-md p-4 bg-slate-500 text-white hover:opacity-75 duration-300"
            >
              <IoLogoInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
