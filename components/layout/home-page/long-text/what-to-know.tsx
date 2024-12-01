import Image from "next/image";

export default function WhatToKnow() {
  return (
    <article className="py-6 sm:py-12 lg:py-5 px-3 md:px-10 lg:px-24 bg-white">
      <div className="flex flex-col gap-12 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-bold text-rose-500 md:text-center mb-4">
            ŠTO TREBATE ZNATI PRIJE NEGO KUPITE NOVI MONTAŽNI OBJEKT
          </h2>
          <p>
            Vjerujemo da će se obitelji s početka priče nakon popravka
            automobila zakleti da više <span className="font-bold">NIKAD</span>{" "}
            neće izložiti svoju imovinu nepotrebnom riziku izlaganja vremenskim
            nepogodama. Nažalost, potrebna je tragedija da nas se trgne. Nemoj
            te je čekati.
          </p>
          <Image
            className="w-[700px] h-[300px] mx-auto"
            src="https://utfs.io/f/KEu7z70yXtIh3RmgX4FnC74XyQiNOgsDkISZpJxU6cWHRz1q"
            alt="what-to-know1"
            width={600}
            height={196}
          />
          <div className="flex flex-col gap-6">
            <p>
              Beriko osigurava <span className="font-bold">KVALITETAN</span>{" "}
              sustav malih objekata i pogodni su za vaše potrebe kao što su:
              <span className="font-bold">
                garažiranje automobila, motocikala, sktera, bicikala, spremanje
                plovila zimi, spremanje poljoprivrednih strojeva, stvari i
                opreme, skladištenje, radionice i servisi
              </span>{" "}
              te mnoge druge svrhe.
            </p>
            <p>
              Prednosti su velike, nema samo automobil koristi od ovog komfornog
              prostora; ukućanima može poslužiti kao dodatni{" "}
              <span className="font-bold">
                prostor za odlaganje ili kao mala radionica
              </span>
              .
            </p>
            <p>
              <span className="font-bold">Lokacija:</span> Mjesta za
              postavljanje objekta mogu biti razna i uključivati većinu vaših
              želja a nije potrebna građevinska dozvola:{" "}
              <span className="font-bold">
                uz kuće i okućnice, uz stambene zgrade i kuće u nizu, na
                privatnim parkiralištima, uz restorane, pokraj tvornica, radiona
                i servisa, kraj vikendica i kleti, u kampanjama, maslinicima i
                voćnjacima...
              </span>
            </p>
          </div>
          <Image
            className="w-[400px] h-[300px] mx-auto"
            src="https://utfs.io/f/KEu7z70yXtIhEPZSxGb06MjBEZ1dtKrcDSCvHb3V97wqGpQx"
            alt="what-to-know2"
            width={600}
            height={450}
          />
          <p>
            <span className="font-bold">Zaštita:</span> U izradi se koristi
            višegodišnja švedska proizvodna iskustva, prema promišljenoj
            koncepciji koja obuhvaća svaki detalj, a namjensko i servisno
            osoblje stoji vam na raspolaganju da dopremi i montira objekte na
            vašu željenu lokaciju . Montažna garaža{" "}
            <span className="font-bold">
              pruža zaštitu od leda, kiše, snijega, sunca, oluja, životinja, UV
              zraka i vrućine.
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}
