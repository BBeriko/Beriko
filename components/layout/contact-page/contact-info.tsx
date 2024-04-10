import { Mail, Phone, UsersRound } from "lucide-react";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

export default function ContactInfo() {
  return (
    <div className="bg-primary/20">
      <section className=" pb-10 w-[95%] mx-auto ">
        <h1 className="font-extrabold text-4xl   text-center">Javite nam se</h1>
        <hr className="w-28 h-2 mx-auto mt-5 bg-primary border-0 rounded   " />

        <div className="flex flex-col md:flex-row md:justify-around md:items-center space-y-5 md:space-y-0 md:py-12 py-10 w-full ">
          <div className="text-black bg-primary/20 w-full md:w-[30%] lg:w-[25%] flex flex-col justify-center  gap-y-5 items-center p-10 rounded-sm shadow-xl ">
            <Phone size={36} strokeWidth={1.5} />
            <p className="font-bold text-xl">Telefon</p>
            <p>+385 97 644 5543</p>
          </div>

          <div className="text-black bg-primary/20 w-full  md:w-[35%] lg:w-[25%]  flex flex-col justify-center gap-y-5 items-center p-10 rounded-sm shadow-xl ">
            <UsersRound size={36} strokeWidth={1.5} />
            <p className="font-bold text-xl">Društvene mreže</p>
            <div className="flex items-center justify-center gap-x-5  ">
              <Link
                href="#"
                className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
              >
                <FiFacebook size={20} />
              </Link>
              <Link
                href="#"
                className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
              >
                <IoLogoInstagram size={20} />
              </Link>
            </div>
          </div>
          <div className="text-black bg-primary/20 w-full md:w-[30%] lg:w-[25%]  flex flex-col justify-center gap-y-5 items-center  p-10 rounded-sm shadow-xl ">
            <Mail size={36} strokeWidth={1.5} />
            <p className="font-bold text-xl">Email</p>
            <p>
              <Link href="mailto:beriko@gmail.com">beriko@gmail.com</Link>
            </p>
          </div>
        </div>
        <div className=" w-full text-center text-4xl font-extrabold">
          <h1>Pronađite nas ovdje!</h1>
        </div>
      </section>
    </div>
  );
}