import { Mail, Phone, UsersRound } from "lucide-react";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";

export default function ContactInfo() {
  return (
    <section className="py-5 lg:py-20 px-3 md:px-10 lg:px-10 bg-primary/20 text-black">
      <section className="w-[95%] mx-auto">
        <h1 className="font-semibold text-4xl text-center">Javite nam se</h1>
        <hr className="w-28 h-2 mx-auto mt-5 bg-primary border-0 rounded" />
        <div className="flex md:mt-10 flex-col md:flex-row md:justify-around md:items-center space-y-7 md:space-y-0 md:py-12 py-10 w-full ">
          <div className="text-black bg-primary/20 w-full md:w-[30%] lg:w-[25%] flex flex-col justify-center  gap-y-5 items-center p-20 rounded-sm shadow-xl ">
            <Phone className="m-auto w-12 h-12" />
            <p className="font-bold text-3xl">Telefon</p>
            <p className="texts-sm font-semibold whitespace-nowrap">098 64 62 60</p>
          </div>

          <div className="text-black bg-primary/20 w-full  md:w-[35%] lg:w-[25%]  flex flex-col justify-center gap-y-5 items-center py-20 px-10 rounded-sm shadow-xl ">
            <UsersRound className="m-auto w-12 h-12" />
            <p className="font-bold text-center text-3xl">Društvene mreže</p>
            <div className="flex items-center justify-center gap-x-5  ">
              <Link
                href="https://www.facebook.com/profile.php?id=61556832431837"
                className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
              >
                <FiFacebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/beriko.buildings/"
                className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
              >
                <IoLogoInstagram size={20} />
              </Link>
            </div>
          </div>
          <div className="text-black bg-primary/20 w-full md:w-[30%] lg:w-[25%]  flex flex-col justify-center gap-y-5 items-center  p-20 rounded-sm shadow-xl ">
            <Mail className="m-auto h-12 w-12" />
            <p className="font-bold text-3xl">Email</p>
            <p className="font-semibold">
              <Link href="mailto:beriko@gmail.com">beriko@beriko.com</Link>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
