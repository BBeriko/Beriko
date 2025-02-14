import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 lg:py-12 px-3 md:px-10 lg:px-24 hero-image text-white mt-[-96px]">
      <div className="flex items-center justify-center h-[35rem]">
        <div className="space-y-6 lg:pr-24 justify-center backdrop-blur-[3px] p-16 rounded-xl">
          <h1 className="2xl:text-6xl text-4xl sm:text-5xl font-semibold sm:min-w-[400px] max-w-[700px]">
            Visoko Kvalitetni montažni objekti: hale, bungalovi, skladišta,
            radionice i garaže
          </h1>
          <p className="max-w-[500px] lg:max-w-[700px]">
            Beriko d.o.o. specijaliziran je u izradi visokokvalitetnih montažnih
            objekata. Naše inovativne dizajne i trajni materijali osiguravaju
            dugotrajnu izdržljivost i zadovoljstvo kupaca.
          </p>
          <div className="space-x-4">
            <Link href="/contact">
              <Button size="lg">Kontakt</Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                className="border-2 border-[color:var(--analogous)] text-newBlack"
                variant="outline"
              >
                Istražite
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
