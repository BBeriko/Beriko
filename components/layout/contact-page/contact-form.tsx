"use client";

import { Button } from "@/components/ui/button";
import { Barcode, CreditCard, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { IoIdCard, IoLogoInstagram } from "react-icons/io5";
import { toast } from "sonner";

export default function ContactForm() {
  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      toast.success("Email uspješno poslan!");
    } catch (error) {
      toast.error("Došlo je do pogreške pri slanju emaila.");
    }
  }

  return (
    <section className="py-5 lg:py-12 px-3 bg-primary/20 text-black">
      <section className="w-[90%] mx-auto">
        <div className="pt-10">
          <h1 className="text-center font-semibold text-4xl">
            Kontakt informacije
          </h1>
        </div>
        <div className="bg-primary flex-col text-white w-[90%] md:w-[50%] h-[23rem] relative z-10 shadow-md p-8 mx-auto left-0 right-0 top-24">
          <h2 className="text-2xl text-center font-semibold">Kontakt Info</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center md:items-top">
              <MapPin className="mr-6 w-9 h-9 sm:w-4 sm:h-4" />
              <p>HR-48362 KLOŠTAR PODRAVSKI, Sjepana Radića 2</p>
            </div>
            <div className="flex gap-1">
              <div className="flex items-center gap-6">
                <IoIdCard />
                <p>OIB:</p>
              </div>
              <p>4735 4554 801</p>
            </div>
            <div className="flex gap-1">
              <div className="flex items-center gap-6">
                <Barcode className="w-4 h-4" />
                <p>SWIFT/BIC:</p>
              </div>
              <p>ESBCHR22</p>
            </div>
            <div className="flex gap-1">
              <div className="flex items-center gap-6">
                <CreditCard className="w-4 h-4" />
                <p>IBAN:</p>
              </div>
              <p>HR63 240 2006 1100 9532 59</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-6 w-4 h-4" />
              <p>beriko@beriko.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-6 w-4 h-4" />
              <p>098 64 62 60</p>
            </div>
          </div>
          <div className="flex justify-center mt-2 lg:mt-8 space-x-4">
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
        <div className="bg-white w-full shadow-md pt-20">
          <div className="mx-12 pt-16">
            <h1 className="text-2xl text-center mr-10 sm:mr-0 sm:text-left font-semibold">
              Pošaljite nam upit!
            </h1>
            <form
              method="post"
              onSubmit={handleOnSubmit}
              className="py-12 w-full"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">
                      Ime i Prezime
                    </label>
                    <input
                      className="border-b border-newBlack py-2"
                      type="text"
                      placeholder="Ime i prezime"
                      name="ime"
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">Email</label>
                    <input
                      className="border-b border-newBlack py-2"
                      type="email"
                      placeholder="mail@mail.com"
                      name="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">Telefon</label>
                    <input
                      className="border-b border-newBlack py-2"
                      type="phone"
                      placeholder="+385 99 999 999"
                      name="telefon"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">Grad</label>
                    <input
                      className="border-b border-newBlack py-2"
                      type="text"
                      placeholder="Grad"
                      name="grad"
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">Ulica i broj</label>
                    <input
                      className="border-b border-newBlack py-2"
                      type="text"
                      placeholder="Ulica i broj"
                      name="ulica"
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">Predmet</label>
                    <select
                      className="border-b border-newBlack py-2"
                      name="object"
                    >
                      <option value="garaža">Garaža</option>
                      <option value="hala">Hala</option>
                      <option value="bungalov">Bungalov</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">
                      Dimenzije &#40; cm &#41;
                    </label>
                    <input
                      className="border-b border-newBlack py-2"
                      type="text"
                      placeholder="širina &#215; duljina &#215; visina"
                      name="dimenzije"
                      required
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">Broj prozora</label>
                    <select
                      className="border-b border-newBlack py-2"
                      name="windows"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">
                      Broj sekcijskih vrata
                    </label>
                    <select
                      className="border-b border-newBlack py-2"
                      name="sekcijska_vrata"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">
                      Broj jednokrilnih vrata
                    </label>
                    <select
                      className="border-b border-newBlack py-2"
                      name="jednokrilna_vrata"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">
                      Izgled krovišta
                    </label>
                    <select
                      className="border-b border-newBlack py-2"
                      name="izgled_krovista"
                    >
                      <option value="Jednostrešno">Jednostrešno</option>
                      <option value="Dvostrešno">Dvostrešno</option>
                    </select>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">
                      Debiljna termopanela &#40; mm &#41;{" "}
                    </label>
                    <select
                      className="border-b border-newBlack py-2"
                      name="debljina_termopanela"
                    >
                      <option value="30">30</option>
                      <option value="50">50</option>
                    </select>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">
                      Boja krovišta
                    </label>
                    <select
                      className="border-b border-newBlack py-2"
                      name="boja_krovista"
                    >
                      <option value="Bijela">Bijela</option>
                      <option value="Crvena">Crvena</option>
                    </select>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-primary text-xs">Boja zidova</label>
                    <select
                      className="border-b border-newBlack py-2"
                      name="boja_zidova"
                    >
                      <option value="Bijela">Bijela</option>
                      <option value="Antracit">Antracit</option>
                    </select>
                  </div>
                </div>
              </div>
              <textarea
                placeholder="Upišite svoj upit..."
                name="message"
                className="resize-none border-b border-newBlack py-2 mt-12 mr-8 h-32 w-full"
              ></textarea>
              <Button type="submit" className="flex p-6 w-36 ml-auto mt-12">
                Pošalji
              </Button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
