import Image from "next/image";

export default function LittleThings() {
  return (
    <article className="py-6 sm:py-12 lg:py-5 px-3 md:px-10 lg:px-24 bg-white">
      <div className="flex flex-col gap-12 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-rose-500 md:text-center mb-2">
            MALE SITNICE KOJE ČINE VELIKE STVARI
          </h2>
          <div>
            <p>
              <span className="font-bold">Objekti ugodni za oko:</span> S
              obzirom na dizajn svojih sastavnih elemenata, objekti su tehnicki
              precizan i lijep proizvod. Nudimo tri vrste vratiju:
            </p>
            <ol className="list-decimal ml-12 my-3">
              <li>
                <span className="font-bold">sekcijska vrata</span> s motorom i
                daljinskim otvaraju se i u udobnosti automobila
              </li>
              <li>
                <span className="font-bold">kip vrata</span> na opruge su lijepa
                a otvaraju se u jednom pokretu ruke
              </li>
              <li>
                <span className="font-bold">dvokrilna vrata</span> s bravom i
                ključem koja se lagano otvaraju
              </li>
            </ol>
          </div>
          <p>
            <span className="font-bold">
              Dug vijek trajanja a bez održavanja:
            </span>{" "}
            Nemate nikakvih briga oko održavanje objekta jer se obloge zasnivaju
            na kvalitetnim čeličnim,
            <span className="font-bold">obostrano pocinčanim</span> i bojanim
            profiliranim neizoliranim pločama ili izoliranim{" "}
            <span className="font-bold">TERMOPANELIMA</span>, a pocinčani
            profili čine rešetkastu konstrukciju objekta.
          </p>
          <p>
            Obloge su učvršćene{" "}
            <span className="font-bold">pocinčanim samourezujućim vijcima</span>{" "}
            a u dodatnu opremu za oblaganje krova ubrajamo samourezujuće
            pocinčane vijke s brtvom i{" "}
            <span className="font-bold">filc protiv kondenzacije!</span>
          </p>
          <p>
            Čelična i <span className="font-bold">pocinčana konstrukcija</span>{" "}
            izvedena je radi antikorozivne zaštite prema uvjetima za zaštitu
            čeličnih konstrukcija od korozije. Zbog toga su objekti pogodni za
            montiranje u priobalju i na otocima.
          </p>
          <Image
            className="w-[700px] h-[300px] mx-auto"
            alt="little-things"
            src="https://utfs.io/f/KEu7z70yXtIhzaWxcLEolDUQiGWJVfjA1P5OaRFIrg7eMps8"
            width={600}
            height={171}
          />
          <p>
            <span className="font-bold">Nema kapanja kondenzata</span> po automobilu i stvarima: Sloj filca uprešan
            na pokrovu sprečava kondenziranje pare i kapanje u unutrašnjosti
            objekta.
          </p>
          <p>
            Krov može imati i oblik valovitog crijepa mediterana raznih boja
            koji se prvenstveno koristi zbog estetskog izgleda montažnih kućica.
            Montažna garaža može imati krovište koje je jednostrešno ili
            dvostrešno.
          </p>
          <p>
            <span className="font-bold">Ugodna klima:</span> Ispod ploča je manja temperatura u ljeti a viša u zimi
            što stvara ugodnu klimu u objektima.
          </p>
        </div>
      </div>
    </article>
  );
}
