import Image from "next/image";

export default function Hazzard() {
  return (
    <article className="py-6 sm:py-12 lg:py-5 px-3 md:px-10 lg:px-24">
      <div className="flex flex-col gap-12 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">
            Dragi graditelju montažnog objekta,
          </h2>
          <p>
            dajemo svakom vlasniku dodatnu vrijednost njegovom automobilu i dva
            poklon bonusa ako se odazovete na niže navedenu ponudu.
          </p>
          <p>
            Svake godine, posebno u zimskoj sezoni, u Hrvatskoj nastrada od
            leda, snijega i olujnog nevremena sve više automobila. Praksa je
            nažalost pokazala da nitko, pa čak ni stanovnici urbanih sredina
            nisu pošteđeni od problema kako da zaštite svoje metalne ljubimce i
            imovinu.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-rose-500 md:text-center mb-4">
            KAKO NAM MRAZ, LED I OLUJNO NEVRIJEME STVARAJU PROBLEME
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <p>
              <span className="font-bold">Dalmacijanews:</span>
              <br />
              <i>
                Snijeg je pao na Pelješcu, Splitu i Šibeniku. U Orebiću ima više
                od 10 centimetara snijega, a on je padao i u Trpnju. Prvi snijeg
                ove sezone pao je i na području Ploča. U Vrgorcu je u nedjelju
                oko 22 sata bilo 20 centimetara snijega, a do 30 cm u zaleđu
                grada.
              </i>
            </p>
            <Image
              className="w-[300px] h-[300px] mx-auto md:mx-0"
              alt="snow-storm"
              src="https://utfs.io/f/KEu7z70yXtIh0zO1AAJCJ9zKXRBioqfEP2bWSY0U6v31u78j"
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-4">
            <p>
              <span className="font-bold">Večernji list, 26.7.2017. :</span>
              <br />
              <i>
                Neviđene scene u Istri, zbog tuče na cesti i ralica: Jako
                nevrijeme s tučom je oko 14 sati zahvatilo dijelove istočne
                Istre. Gotovo nevjerojatne scene dolaze iz istočnih dijelova
                Istre gdje je tuča potpuno prekrila ceste, a na terenu je čak i
                ralica. Ovako nešto na autocesti nitko nije očekivao, javlja
                istramet.hr.
              </i>
            </p>
            <Image
              className="w-[300px] h-[300px] mx-auto md:mx-0"
              alt="damaged-car"
              src="https://utfs.io/f/KEu7z70yXtIhmJn38PdzSQAocj0Hm2iv8nBVl3OYwJtC4gXI"
              width={800}
              height={800}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <p>
              <span className="font-bold">24 SATA, 21.lipanj 2017. :</span>
              <br />
              <i>
                Olujno nevrijeme u Zagrebu i Zagorju: Kiša, tuča, grmljavina!
                Jako nevrijeme u srijedu pogodilo je dijelove Krapinsko-zagorske
                županije, Zagrebačke te dijelove grada Zagreba. Zbog tuče se na
                pojedinim dionicama prometovalo otežano, a očekuju se
                informacije o eventualnim štetama.
              </i>
            </p>
            <Image
              className="w-[250px] h-[400px] md:w-[300px] md:h-[300px] mx-auto md:mx-0"
              alt="stop"
              src="https://utfs.io/f/KEu7z70yXtIhu2BilS9EPsNeCHgB6kQVKIf5XSocj18zuhqO"
              width={514}
              height={918}
            />
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-4">
            <p>
              <span className="font-bold">
                Priopćenje PU Osječkio-baranjske od 4. lipanj 2010. :
              </span>
              <br />
              <i>
                U vremenskom razdoblju od 1. do 3. lipnja na više lokacija u
                Osijeku i okolici nepoznata osoba ili više njih oštetili su
                parkirane automobile. Automobili su oštećeni grebanjem oštrim
                predmetima, skakanjem po njima, te lomljenjem brisača i
                razbijanjem svjetlosne signalizacije. Ukupna šteta iznosi oko
                20.000 kuna.
              </i>
            </p>
            <Image
              className="w-[400px] h-[300px] mx-auto md:mx-0"
              alt="ice"
              src="https://utfs.io/f/KEu7z70yXtIhHh3A3tlTeKSurl5Qjp9wJyd83EiVLzN1oqFv"
              width={640}
              height={428}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
