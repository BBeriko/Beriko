import Image from "next/image";

export default function Secret() {
  return (
    <article className="py-6 sm:py-12 lg:py-5 px-3 md:px-10 lg:px-24 bg-white">
      <div className="flex flex-col gap-12 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-rose-500 md:text-center mb-2">
            OTKRIJTE TAJNU KAKO OČUVATI VRIJEDNOST
          </h2>
          <p>
            Automobil duže vrijeme ostaje nov: Garažiran automobil ima veću
            vrijednost kod prodaje.
          </p>
          <p>
            Prije dođete na posao: Ujutro nema čišćenja vjetrobranskih stakala i
            ne kasnite na radno mjesto.
          </p>
          <p>
            Dulji vijek akomulatora: Zatvoreni prostor je i topliji te se
            automobil lakše pali a akomulator dulje traje.
          </p>
          <p>
            Zaštita od drugih vozila: Kod otvaranja vrata ali i mimoilaženja
            drugih vozila automobili se oštećuju na otvorenom.
          </p>
          <Image
            className="w-[400px] h-[300px] mx-auto"
            alt="secret"
            src="https://utfs.io/f/KEu7z70yXtIhet1HJwkbMstZeRInBA1hYyf52izXJxjNc9PE"
            width={868}
            height={524}
          />
          <p>
            Neprocijenjiva vrijednost ulaganja: Zbog svega navedenog za vas je
            investicija u garažu neprocjenjiva a ostaje vam i za drugi
            automobil. Investicija se vraća u roku od 5 godina kroz očuvaniji
            automobil a kod spriječavanja vandalizma vraća se trenutno.
          </p>
        </div>
      </div>
    </article>
  );
}
