"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleSheet = () => setIsSheetOpen((prev) => !prev);
  const closeSheet = () => setIsSheetOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrolling) {
        setScrolling(true);
      } else if (window.scrollY === 0 && scrolling) {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  const pathname = usePathname();

  const routesBig = [
    {
      label: "O nama",
      href: "/about",
    },
    {
      label: "Galerija",
      href: "/gallery",
    },
    {
      label: "Katalog proizvoda",
      href: "/products",
    },
    {
      label: "Recenzije",
      href: "/reviews",
    },
  ];

  const routesSmall = [
    {
      label: "Naslovna",
      href: "/",
    },
    {
      label: "O nama",
      href: "/about",
    },
    {
      label: "Galerija",
      href: "/gallery",
    },
    {
      label: "Katalog proizvoda",
      href: "/products",
    },
    {
      label: "Recenzije",
      href: "/reviews",
    },
  ];

  return (
    <nav className="max-w-full fixed top-0 left-0 right-0 z-50 bg-black/30 text-newWhite">
      <div
        className={`px-3 md:px-10 lg:px-24 py-6 flex justify-between items-center transition-all duration-300 ${
          pathname === "/about" ||
          pathname == "/gallery" ||
          pathname == "/reviews" ||
          scrolling
            ? "bg-[color:var(--light)] text-newBlack"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <Link href="/">
            <Image alt="Beriko" src="https://utfs.io/f/KEu7z70yXtIh8k4eWbySeWkuAlRcKazbEojGsgDmyxPMd9n7" className="w-[200px]" width={1920} height={1920} />
          </Link>
          <div className="gap-x-10 mr-10 hidden lg:flex">
            {routesBig.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "",
                  pathname === route.href ? "border-b border-newBlack" : ""
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="hidden items-center gap-x-4 md:flex">
            <Link href="/contact">
              <Button>Kontakt</Button>
            </Link>
          </div>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger onClick={toggleSheet}>
              <RxHamburgerMenu
                size={30}
                className="block lg:hidden cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="bg-[#37507a] text-slate-200">
              <SheetHeader>
                <SheetTitle className="text-newWhite/60">Navigacija</SheetTitle>
                <SheetDescription>
                  <div className="space-y-10 flex flex-col mt-[10%] p-8 text-lg text-newWhite">
                    {routesSmall.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={closeSheet}
                        className={cn(
                          "",
                          pathname === route.href
                            ? "text-[color:var(--analogous)]"
                            : ""
                        )}
                      >
                        {route.label}
                      </Link>
                    ))}
                    <div className="flex items-center justify-center md:justify-left gap-x-4 md:hidden pt-12 text-black dark:text-white">
                      <Link href="/contact" onClick={closeSheet}>
                        <Button variant="secondary">Kontakt</Button>
                      </Link>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
