"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { supabase } from "@/utils/supabase/client";

interface Image {
  name: string;
  id: string;
  size: number;
  created_at: string;
}

const CDNURL =
  "https://efgdwcswampnvhpafcef.supabase.co/storage/v1/object/public/gallery-images/gallery/";

export default function ImageSlider() {
  const carouselRef = useRef(null);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [images, setImages] = useState<Image[]>([]);

  const restartAutoplay = () => {
    if (plugin.current) {
      plugin.current.play();
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  async function getImages() {
    const { data, error } = await supabase.storage
      .from("gallery-images")
      .list("gallery/", { sortBy: { column: 'created_at', order: 'desc' } });
  
    if (data !== null) {
      const sortedData = data.sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
      
      const latestFive = sortedData.slice(0, 5);
      
      // @ts-ignore
      setImages(latestFive);
    } else {
      console.log(error);
    }
  }

  return (
    <section className="flex justify-center px-3 py-12 bg-primary/30">
      <Carousel
        ref={carouselRef}
        plugins={[plugin.current]}
        className="w-4/5"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={restartAutoplay}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-3/4">
              <div className="p-1">
                <Card className="border-none">
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <div className="relative w-full h-full">
                      <Image
                        src={CDNURL + image.name}
                        alt="Carousel image"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-md"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
