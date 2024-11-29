export default function FreeBonus() {
  return (
    <article className="py-6 sm:py-12 lg:py-5 px-3 md:px-10 lg:px-24 bg-white">
      <div className="flex flex-col gap-12 max-w-[800px] mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <h2 className="text-3xl font-bold text-rose-500 mb-2">
              BESPLATNI bonus #1: pocinčana konstrukcija
            </h2>
            <p>
              Kada naručite montažni objekt, dobit ćete i besplatno cinčane
              konstrukcije. Biti ćete zadovoljni jer nećete imati brige oko
              održavanja.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-rose-500 mb-2">
              BESPLATNI bonus #2: montaža objekta
            </h2>
            <p>
              To nije sve. Ako naručite odmah dobiti ćete potpuno besplatno i
              drugi poklon. To je montaža samog objekta na vašoj lokaciji.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
