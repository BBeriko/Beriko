import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Dimensions() {
  return (
    <article className="py-6 sm:py-12 lg:py-5 px-3 md:px-10 lg:px-24 bg-white">
      <div className="flex flex-col gap-12 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-center text-rose-500 md:text-center mb-2">
            DIMENZIJE
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex flex-col gap-4">
              <p>
                Visina (m) od 2 do 4 <br /> Širina (m) od 3 do 8 <br /> Dužina
                (m) od 5 do 20
              </p>
              <p>Zamislite dan s dovoljno prostora za život......</p>
              <p>S poštovanjem,</p>
              <p>Bernard Domović</p>
              <p className="font-bold">mob: 098 64 62 60</p>
            </div>
            <Image
              className="w-[300px] h-[75px] mx-auto"
              src="https://utfs.io/f/KEu7z70yXtIhY9dIByWB92uSbVDkXG4T5O3UqyLe1fWlH7Ez"
              alt="potpis"
              width={1000}
              height={900}
            />
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <p>
              <span className="font-bold">P.S.</span> Upravo tako! Isprobajte nove prostorne mogućnosti i ako
              smatrate da njima nećete ispuniti svoja očekivanja, imate mjesec
              dana da mi ga vratite i dobijete potpuni povrat vašeg novca! Tako
              ne riskirate ni lipe.
            </p>
            <p>
              <span className="font-bold">P.P.S.</span> Nakon što dobijete montažni objekt otkrit ćete gore
              navedene prednosti i shvatiti da ste povukli pravi potez. Konačno
              ćete uživati u čistom i nesmrznutom automobilu i svemu što on
              pruža. Naručite montažni objekt pa ćete besplatno dobiti dva bonus
              poklona: boju i montažu – i uživajte odmah od prvoga dana!
            </p>
            <p>
              <span className="font-bold">P.P.P.S.</span> BESPLATNO! Bez obzira na to što je montažni objekt
              vrhunski, dio ljudi je neodlučno. Znam da bi vam objekt dobro
              došao pa zato dajem još jednu mogućnost: klikni dolje i potpuno i
              sigurno naruči montažni objekt!
            </p>
            <div className="flex gap-2 items-center">
              <CheckCircle className="w-7 h-7 text-[color:var(--analogous)]" />
              <h6 className="text-rose-500">Isporuka</h6>
            </div>
            <p className="ml-9">Proizvod će Vam biti dostavljen putem najbrže i najpouzdanije montažerske ekipe!</p>
            <div className="flex gap-2 items-center">
              <CheckCircle className="w-7 h-7 text-[color:var(--analogous)]" />
              <h6 className="text-rose-500">100% sigurna kupovina</h6>
            </div>
            <p className="ml-9">Proizvod možete platiti po isporuci, što će Vas zaštititi od eventualnih zlouporaba. Vaši osobni podaci će biti potpuno sigurni!</p>
          </div>
          <Link className="mx-auto" href="#contact">
            <Button className="text-2xl py-8 px-12 mt-6 text-white">POŠTALJITE UPIT</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
