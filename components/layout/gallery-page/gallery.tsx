"use client";

import { useEffect, useState } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/utils/supabase/client";
import { Session } from "@supabase/supabase-js";

interface Image {
  name: string;
  id: string;
  size: number;
  created_at: string;
}

const CDNURL =
  "https://efgdwcswampnvhpafcef.supabase.co/storage/v1/object/public/gallery-images/gallery/";

export default function Gallery() {
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
      .list("gallery/", { limit: 100, offset: 0 });

    if (data !== null) {
      const sortedImages = data.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      // @ts-ignore
      setImages(sortedImages);
    } else {
      console.log(error);
    }
  }

  async function deleteImage(imageName: any) {
    const { error } = await supabase.storage
      .from("gallery-images")
      .remove(["gallery/" + imageName]);

    if (error) {
      alert(error);
    } else {
      alert(
        "Slika izbrisana. Molimo osvježite stranicu kako biste vidjeli promjene."
      );
      location.reload();
    }
  }

  useEffect(() => {
    if (!session) return;

    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item, index) => {
      const galleryItem = item as HTMLElement;
      const btn = document.createElement("button");
      btn.style.position = "absolute";
      btn.style.top = "10px";
      btn.style.right = "10px";
      btn.style.zIndex = "10";
      btn.style.background = "transparent";
      btn.style.border = "none";
      btn.style.cursor = "pointer";
      btn.style.color = "red";

      const trashIcon = document.createElement("div");
      trashIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2 w-8 h-8"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;

      btn.appendChild(trashIcon);

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (images[index]) {
          console.log(images[index].name);
          deleteImage(images[index].name);
        }
      });

      galleryItem.style.position = "relative";
      galleryItem.appendChild(btn);
    });
  }, [images, session]);

  return (
    <section className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
      <iframe
        className="aspect-video rounded shadow-xl mb-16 w-full"
        src="https://www.youtube.com/embed/8Y5rPDlEGAY?si=a-PXyXV49T_l1Nge"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        <h1 className="text-center text-4xl font-semibold">Galerija</h1>
        <p className="text-center font-lg text-slate-400 mt-4 mb-10">
          Pogledajte naš rad kojim se ponosimo!
        </p>
      </div>
      {images.length > 0 ? (
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          getCaptionFromTitleOrAlt={false}
        >
          {images.map((image) => (
            <Link
              className="gallery-item"
              href={CDNURL + image.name}
              key={image.name}
            >
              <Image
                alt={image.name}
                src={CDNURL + image.name}
                width={2000}
                height={2000}
                className="w-full block"
              />
            </Link>
          ))}
        </LightGallery>
      ) : (
        <p>Slike se učitavaju...</p>
      )}
    </section>
  );
}
