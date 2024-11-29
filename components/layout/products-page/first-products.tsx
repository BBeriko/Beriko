"use client";

import { supabase } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Image {
  name: string;
  id: string;
  size: number;
  created_at: string;
}

const CDNURL =
  "https://efgdwcswampnvhpafcef.supabase.co/storage/v1/object/public/gallery-images/products/";

export default function FirstProducts() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setSession(data.session);
      }
    };

    checkSession();
  }, []);

  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    const { data, error } = await supabase.storage
      .from("gallery-images")
      .list("products/", { limit: 100, offset: 0 });

    if (data !== null) {
      // @ts-ignore
      setImages(data);
    } else {
      console.log(error);
    }
  }

  async function deleteImage(imageName: any) {
    const { error } = await supabase.storage
      .from("gallery-images")
      .remove(["products/" + imageName]);

    if (error) {
      alert(error);
    } else {
      alert(
        "Slika izbrisana. Molimo osvježite stranicu kako biste vidjeli promjene."
      );
      location.reload();
    }
  }

  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24 first-product-bg">
      <div className="px-3 lg:px-48">
        <h1 className="text-4xl font-semibold mb-8">Montažni Objekti</h1>
        <div className="space-y-3">
          <p>
            Prednosti su velike, nema samo automobil koristi od ovog komfornog
            prostora; ukućanima može poslužiti kao dodatni prostor za odlaganje
            ili kao mala radionica.
          </p>
          <p>
            Mjesta za postavljanje objekta mogu biti razna i uključivati većinu
            vaših želja a nije potrebna građevinska dozvola: uz kuće i okućnice,
            uz stambene zgrade i kuće u nizu, na privatnim parkiralištima, uz
            restorane, pokraj tvornica, radiona i servisa, kraj vikendica i
            kleti, u kampanjama, maslinicima i voćnjacima...
          </p>
          <p>
            U izradi se koristi višegodišnja švedska proizvodna iskustva, prema
            promišljenoj koncepciji koja obuhvaća svaki detalj, a namjensko i
            servisno osoblje stoji vam na raspolaganju da dopremi i montira
            objekte na vašu željenu lokaciju . Montažna garaža pruža zaštitu od
            leda, kiše, snijega, sunca, oluja, životinja, UV zraka i vrućine.
          </p>
          <p>
            Objekt može poslužiti kao garaža, skladište ili radionica a isto
            tako i za sakupljanje vode u voćnjaku ili masliniku. Automobilske
            gume, skuteri i alat tradicionalno se smještaju u garažni prostor.
            Ako je garaža duža od automobila, na njezinom kraju može se
            izgraditi mala radna ploha.
          </p>
          <p>
            Nadstrešnica služi za zaštitu automobila i brzo sušenje mokrog
            automobila. Zimi se stakla ne lede, a ljeti automobil ostaje u
            hladu.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        {images.map((image, index) => (
          <div
            className="w-full flex justify-center mt-2 md:mr-2"
            key={image.name}
          >
            <div className="flex flex-col">
              <Image
                src={CDNURL + image.name}
                alt={image.name}
                width={500}
                height={100}
                className="h-full shadow-xl rounded-t"
              />
              <div className="flex justify-between">
                <p className="bg-[color:var(--analogous)] p-4 w-16 text-center text-white rounded-b">
                  {index + 1}
                </p>
                {session && (
                  <Trash2
                    className="text-rose-600 hover:text-rose-500 w-12 h-12 cursor-pointer"
                    onClick={() => deleteImage(image.name)}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
