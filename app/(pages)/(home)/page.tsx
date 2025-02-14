import Contact from "@/components/layout/home-page/contact";
import ImageSlider from "@/components/layout/home-page/image-carousel";
import FinishedJobCounter from "@/components/layout/home-page/finished-jobs-counter";
import Testimonials from "@/components/layout/home-page/testimonials";
import Hero from "@/components/layout/home-page/hero";
import FeatureStrenght from "@/components/layout/home-page/feature-strenght";
import QualitySection from "@/components/layout/home-page/quality-section";

import ServicesSection from "@/components/layout/home-page/services-section";
import FAQSection from "@/components/layout/home-page/faqs-section";
import Map from "@/components/layout/home-page/map";

import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";
import LongText from "@/components/layout/home-page/long-text";

const LazyMap = dynamic(
  () => import("@/components/layout/home-page/leaflet-map"),
  {
    ssr: false,
    loading: () => (
      <div className="py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24">
        <Skeleton className="w-full h-[30rem]" />,
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main>
      <Hero />
      <LongText />
      <FeatureStrenght />
      <QualitySection />
      <ImageSlider />
      <FinishedJobCounter />
      <ServicesSection />
      <LazyMap />
      <Testimonials />
      <FAQSection />
      <Map />
      <Contact />
    </main>
  );
}
