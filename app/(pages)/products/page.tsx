import Contact from "@/components/layout/home-page/contact";
import FirstProducts from "@/components/layout/products-page/first-products";
import HeroSection from "@/components/layout/products-page/hero-section";
import UploadImage from "@/components/layout/products-page/upload-image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katalog Proizvoda - Beriko",
};

const ProductsPage = () => {
  return (
    <main>
      <HeroSection />
      <UploadImage />
      <FirstProducts />
      <Contact />
    </main>
  );
};

export default ProductsPage;
