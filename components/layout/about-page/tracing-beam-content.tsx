import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function Timeline() {
  return (
    <TracingBeam className="px-10 md:px-0 mt-24">
      <div className="lg:max-w-10xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className={`mb-10 md:flex p-0 md:items-center justify-center ${
              index % 2 === 0 ? "md:flex-row " : "md:flex-row-reverse "
            }`}
          >
            <div className="md:w-6/12 md:px-4">
              {item.badge && item.badge.trim() !== "" && (
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>
              )}

              <p className="text-4xl  mb-4 fon font-bold">{item.title}</p>
              <div className="space-y-3  mb-5 w-full md:w-10/12   ">
                {item.description}
              </div>
            </div>

            <div className="text-sm prose prose-sm dark:prose-invert md:w-6/12 flex items-center justify-center">
              {item?.image && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 0,
                    paddingBottom: "100%",
                  }}
                >
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-r-md"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "OSNOVAN BERIKO",
    description: (
      <div className="space-y-3">
        <p className="leading-7">
          Beriko nije samo tvrtka - mi smo zajednica entuzijasta, stručnjaka i
          vizionara koji dijele istu strast prema tehnologiji. Naše vrijednosti,
          poput inovacije, integriteta i održivosti, utkane su u sve što radimo.
          S ponosom gradimo mostove između ideja i realizacije, povezujući ljude
          s tehnologijom na način koji nadilazi samo poslovanje.
        </p>
      </div>
    ),
    badge: "01.03.2003.",
    image: "https://utfs.io/f/KEu7z70yXtIha1fux1pU504bLhlP2zDywtM8ORsS6cNBGKVI",
  },
  {
    title: "PRVI RAD",
    description: (
      <div className="space-y-3">
        <p>
          U proteklih deset godina prometnuli smo se u svojevrsnog lidera na
          tržištu montažnih objekata u Hrvatskoj.
        </p>
        <p>
          Omogućujemo Vam da na najjednostavniji i najpovoljniji način dođete do
          svoje montažne garaže, garažnih vrata, te svega ostalog što je
          potrebno za vaš moderan montažni objekt.
        </p>
      </div>
    ),
    badge: "15.11.2003.",
    image: "https://utfs.io/f/KEu7z70yXtIhmr8yJpzdzSQAocj0Hm2iv8nBVl3OYwJtC4gX",
  },
  {
    title: "100. ZADOVOLJEN KUPAC",
    description: (
      <p className="leading-7">
        U središtu našeg cilja nalazi se kontinuirana predanost izvrsnosti i
        kvaliteti. Naš tim stručnjaka, s bogatim iskustvom u različitim
        područjima tehnologije, posvećen je pružanju rješenja koja nadmašuju
        očekivanja naših klijenata. Svaki projekt koji preuzimamo nije samo
        izazov, već prilika za stvaranje nečeg izvanrednog.
      </p>
    ),
    badge: "03.06.2007.",
    image: "https://utfs.io/f/KEu7z70yXtIhcZglMSoPSUYDu1N3BZKXtMmd4xhaHczEe7yn",
  },
  {
    title: "DANAS",
    description: (
      <div className="space-y-3">
        <p className="leading-7">
          Kroz svaki korak našeg puta, ostajemo predani ideji da je kvaliteta
          izrade na prvom mjestu. Za bolju budućnost - jedan u kojem su
          inovacije dostupne svima, potičući rast i napredak u zajednici. Mi
          nismo samo tvrtka. Mi smo pokretač promjena.
        </p>
        <p className="leading-7">Dobrodošli u naš svijet.</p>
      </div>
    ),
    image:
      "https://utfs.io/f/KEu7z70yXtIhKSzqswv0yXtIh7G5ljWY38NgizvsLonBkbCM",
  },
];
