import Image from "next/image";

export default function FeatureStrenght() {
  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24 bg-primary/30">
      <div className="flex items-center justify-center">
        <Image
          src="https://utfs.io/f/KEu7z70yXtIhIq0YJWQ732Wv4h68t9UCDgiPaBFlQVmwMsbj"
          alt="feature-strength"
          width={966}
          height={656}
          className="hidden xl:block w-[500px] h-[350px] 2xl:w-[700px] 2xl:h-[500px]"
        />
        <div className="space-y-10 xl:pl-24 justify-center xl:w-[70%]">
          <h1 className="text-right ml-auto 2xl:text-6xl text-4xl sm:text-5xl font-semibold sm:min-w-[400px] max-w-[700px]">
            Otkrijte Snagu i Prilagodljivost Naših Montažnih Objekata.
          </h1>
          <p className="max-w-[500px] lg:max-w-[700px] text-right ml-auto">
            Naše montažne konstrukcije izrađene su da traju, pružajući udobnost
            i mogućnosti prilagodbe. Bez obzira Trebate li garažu, prostor za
            pohranu ili radionicu, naše konstrukcije dizajnirane su da zadovolje
            Vaše specifične potrebe.
          </p>
          <div className="xl:space-x-8 space-y-4 xl:space-y-0 flex flex-col xl:flex-row md:ml-20">
            <div className="space-y-2 shadow-md p-8 rounded-md bg-white xl:ml-auto">
              <h2 className="text-xl font-semibold">Snaga</h2>
              <p className="text-sm xl:w-[200px]">
                Naše montažne konstrukcije dizajnirane su s visokokvalitetnim
                materijalima za dugotrajnu uporabu i stabilnost.
              </p>
            </div>
            <div className="space-y-2 shadow-md p-8 rounded-md bg-white xl:ml-auto">
              <h2 className="text-xl font-semibold">Personalizacija</h2>
              <p className="text-sm xl:w-[200px]">
                Izaberite iz raznovrsne ponude opcija kako biste prilagodili
                konstrukciju prema vlastitim vizijama i oblikovali je prema
                Vašim željama.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
