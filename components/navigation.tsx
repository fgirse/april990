"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Target } from "lucide-react"
import { Button } from "../components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import Image from "next/image";
import Bulleye from "../public/bulleye.png";
import Logo from "../public/LogoNeu.png";
import Wood from "../public/Wood4.svg";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  // Dropdown states for mobile
  const [aboutOpen, setAboutOpen] = useState(false);
  const [drinksOpen, setDrinksOpen] = useState(false);
  const [wohinOpen, setWohinOpen] = useState(false);

  return (
    <nav className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-90"
        style={{ backgroundImage: "url('/Wood4.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}         
      />
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg text-white hover:text-white transition-colors"
        >
          <Image src={Logo} alt="LogoNeu" width={120} height={80} className=" md:w-20 md:h-16   lg:w-28 lg:h-24 lg:mt-7 lg:mb-2" />
          
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-between md:flex">
          <Link
            href="/"
            className="flex items-center gap-8 text-2xl uppercase font-medium text-white hover:text-white transition-colors"
          >
           <Image src={Bulleye} width={40} height={40} alt={""}  />
            Home
          </Link>

          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-52 flex flex-row justify-around items-center gap- text-2xl uppercase font-medium text-white hover:text-white transition-colors">
             <Image src={Bulleye} width={40} height={40} alt={""}  />
              About
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white w-52">
              <DropdownMenuItem asChild>
                <Link href="/about/team" className="flex items-center gap-2">
                 <Image src={Bulleye} width={40} height={40} alt={""}  />
                  Our Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/history" className="flex items-center gap-2">
                 <Image src={Bulleye} width={40} height={40} alt={""}  />
                  History
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/about/mission" className="flex items-center gap-2">
                 <Image src={Bulleye} alt="Bullauge" width={40} height={40}  />
                  Mission
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Drinks Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-52 justify-around flex items-center gap-2 text-2xl uppercase font-medium text-white hover:text-white transition-colors">
             <Image src={Bulleye} width={40} height={40} alt={""}  />
              Drinks
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white w-52">
              <DropdownMenuItem asChild>
                <Link href="/drinks/coffee" className="flex items-center gap-2">
                 <Image src={Bulleye} width={40} height={40} alt={""}  />
                  Coffee
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/drinks/tea" className="flex items-center gap-2">
                 <Image src={Bulleye} width={40} height={40} alt={""}  />
                  Tea
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/drinks/juice" className="flex items-center gap-2">
                 <Image src={Bulleye} width={40} height={40} alt={""}  />
                  Juice
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Wohin Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-52 justify-around flex items-center gap-2 text-2xl uppercase font-medium text-white hover:text-white transition-colors">
             <Image src={Bulleye} width={40} height={40} alt={""}  />
              Team
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-white w-52">
              <DropdownMenuItem asChild>
                <Link href="/wohin/locations" className="flex items-center gap-2">
                 <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                  Locations
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/wohin/directions" className="flex items-center gap-2">
                 <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                  Directions
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/wohin/map" className="flex items-center gap-2">
                 <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                  Map
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/contact"
            className="flex items-center gap-2 text-2xl uppercase font-medium text-white hover:text-white transition-colors"
          >
           <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
            Wohin?
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="default" size="icon" className="text-white hover:text-white hover:bg-amber-900/30">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-2xl uppercase font-medium hover:bg-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
               <Image src={Bulleye} width={40} height={40} alt={"Bulleye"}  />
                Home
              </Link>

              {/* About Dropdown */}
              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center gap-2 text-2xl uppercase font-semibold focus:outline-none"
                  onClick={() => setAboutOpen((v) => !v)}
                  aria-expanded={aboutOpen}
                >
                  <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                  About
                  <span className="ml-auto">{aboutOpen ? '▲' : '▼'}</span>
                </button>
                {aboutOpen && (
                  <div className="ml-6 flex flex-col gap-2">
                    <Link
                      href="/about/team"
                      className="flex items-center gap-2 text-2xl uppercase transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                      Our Team
                    </Link>
                    <Link
                      href="/about/history"
                      className="flex items-center gap-2 text-2xl uppercase transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                      History
                    </Link>
                    <Link
                      href="/about/mission"
                      className="flex items-center gap-2 text-2xl uppercase transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                      Mission
                    </Link>
                  </div>
                )}
              </div>

              {/* Drinks Dropdown */}
              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center gap-2 text-2xl uppercase font-semibold focus:outline-none"
                  onClick={() => setDrinksOpen((v) => !v)}
                  aria-expanded={drinksOpen}
                >
                  <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                  Drinks
                  <span className="ml-auto">{drinksOpen ? '▲' : '▼'}</span>
                </button>
                {drinksOpen && (
                  <div className="ml-6 flex flex-col gap-2">
                    <Link
                      href="/drinks/coffee"
                      className="flex items-center gap-2 text-2xl uppercase transition-colors hover:text-yellow-6"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                      Coffee
                    </Link>
                    <Link
                      href="/drinks/tea"
                      className="flex items-center gap-2 text-2xl uppercase transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                      Tea
                    </Link>
                    <Link
                      href="/drinks/juice"
                      className="flex items-center gap-2 text-2xl uppercase transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                      Juice
                    </Link>
                  </div>
                )}
              </div>

              {/* Wohin Dropdown */}
              <div className="flex flex-col gap-2">
                <button
                  className="flex items-center gap-2 text-2xl uppercase font-semibold focus:outline-none"
                  onClick={() => setWohinOpen((v) => !v)}
                  aria-expanded={wohinOpen}
                >
                  <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                  Wohin
                  <span className="ml-auto">{wohinOpen ? '▲' : '▼'}</span>
                </button>
                {wohinOpen && (
                  <div className="ml-6 flex flex-col gap-2">
                    <Link
                      href="/wohin/locations"
                      className="flex items-center gap-2 text-2xl uppercase transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                      Locations
                    </Link>
                    <Link
                      href="/wohin/directions"
                      className="flex items-center gap-2 text-2xl uppercase transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                      Directions
                    </Link>
                    <Link
                      href="/wohin/map"
                      className="flex items-center gap-2 text-2xl uppercase transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                     <Image src={Bulleye} width={40} height={40} alt={"Bullauge"}  />
                      Map
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="flex items-center gap-2 text-2xl uppercase font-medium hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
               <Image src={Bulleye} width={40} height={40} alt={""}  />
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
