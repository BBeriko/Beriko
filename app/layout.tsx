import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/main-layout/footer";
import Navbar from "@/components/layout/main-layout/navbar";
import { Toaster } from "sonner";
import CookieConsent from "@/components/layout/main-layout/cookie-consent";
import Script from "next/script";

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Beriko - Montažni Objekti, hale, bungalovi, skladišta. radionice i garaže",
  description:
    "Beriko - Stručnjaci za izradu montažnih objekata. Nudimo visokokvalitetna, prilagodljiva i izdržljiva rješenja za montažne objekte i garažna vrata, uz izvrsnu uslugu i zadovoljstvo klijenata. Otkrijte inovativne i dugotrajne proizvode koji ispunjavaju vaše potrebe.",
  keywords: [
    "Montažni objekti",
    "Hale",
    "Bungalovi",
    "Skladišta",
    "Radionice",
    "Garaže",
    "Kućice za pse",
  ],
  creator: "Beriko",
  authors: [{ name: "Beriko" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://www.beriko.com"),
  openGraph: {
    images: ["opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const showStatCounterScript = false;

  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <main className="mt-[92px]">{children}</main>
        <Footer />
        <CookieConsent />
        <Toaster position="top-center" richColors />

        {showStatCounterScript && (
          <Script id="statcounter-inline" strategy="afterInteractive">
            {`
              var sc_project=2425395;
              var sc_security="40ea0fb5";
              var scJsHost = (("https:" == document.location.protocol) ? "https://secure." : "http://www.");
              var scriptElement = document.createElement("script");
              scriptElement.src = scJsHost + "statcounter.com/counter/counter.js";
              scriptElement.async = true;
              document.body.appendChild(scriptElement);
            `}
          </Script>
        )}
        <span className="statcounter hidden">
          <a
            id="sc_counter_2425395"
            className="statcounter"
            href="https://www.statcounter.com/"
            target="_blank"
          >
            <img
              src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAOAQMAAABJgO2XAAAABlBMVEUAAAAqJCRdVn+OAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE5JREFUCJljYMAN5GwqJJ+/P8/AYJx2xtogR7IByOCpZjg/s4HBPK/i9oMzNxsYrMt4Zxs2nAdJ8f42bDgIYpyRNuYBSoG0P2bvx2MBAwCtCBrT857ZxQAAAABJRU5ErkJggg=="
              alt="StatCounter - Free Web Tracker and Counter"
            />
          </a>
        </span>
        <noscript>
          <div className="statcounter">
            <a title="web analytics" href="https://statcounter.com/">
              <img
                className="statcounter"
                src="https://c.statcounter.com/2425395/0/40ea0fb5/0/"
                alt="web analytics"
              />
            </a>
          </div>
        </noscript>
      </body>
    </html>
  );
}
