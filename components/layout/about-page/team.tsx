import Image from "next/image";

export default function Team() {
  return (
    <section
      className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24"
      id="team"
    >
      <h2 className="text-center mt-6 text-4xl font-semibold">Naš Tim</h2>
      <hr className="w-40 h-2 mx-auto mt-5 mb-16 bg-primary border-0 rounded   " />
      <div className="flex items-top">
        <Image
          src="https://utfs.io/f/KEu7z70yXtIhvQzHAwjJxWbVZTG1QNpgn35lr4MtwjOmvPk6"
          alt="director"
          width={1079}
          height={1762}
          className="w-[300px]"
        />
        <div className="ml-10">
          <h1 className="text-4xl font-semibold">Bernard Domović</h1>
          <h2 className="text-slate-400 mt-2"> - mag.eoc</h2>
          <h2 className="text-slate-400 mt-2"> - Direktor</h2>
          <h3 className="mt-6">
            Osnivač i direktor tvrtke Beriko d.o.o. - Diplomirani ekonomist.
          </h3>
        </div>
      </div>
    </section>
  );
}
