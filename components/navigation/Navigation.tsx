"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import LogoNeu from "../../public/LogoNeu.png";
import Bulleye from "../../public/Bulleye.svg"

const aboutItems = [
  {
    title: "Rettungsanker-Story",
    href: "/about(",
    description: "Learn about our journey and mission",
  },
  {
    title: "Team",
    href: "/about/team",
    description: "Das Rettungsakerteamstellt sich vor",
  },

]

const drinksSnacksItems = [
  {
    title: "Drinks",
    href: "/drinks-snacks/drinks",
    description: "Refreshing beverages for every taste",
  },
  {
    title: "Snacks",
    href: "/drinks-snacks/snacks",
    description: "Delicious snacks to fuel your day",
  },
  {
    title: "Combos",
    href: "/drinks-snacks/combos",
    description: "Special combo deals",
  },
]

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-xl font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-xl leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export default function Navigation() {
  const [open, setOpen] = React.useState(false)
  
  React.useEffect(() => {
    console.log("Mobile menu open state changed:", open)
  }, [open])

  // Debug: Show current state in the UI
  console.log("Current render - open state:", open)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-wood">
      <div className="container flex h-36 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={LogoNeu} alt="Logo" width={120} height={80} className="text-xl font-bold" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
                  <Image src="/icons/bullseye.svg" alt="" width={16} height={16} className="w-4 h-4" />
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-2">
                <Image src="/icons/bullseye.svg" alt="" width={16} height={16} className="w-4 h-4" />
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {aboutItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="flex items-center gap-2">
                <Image src="/icons/bullseye.svg" alt="" width={16} height={16} className="w-4 h-4" />
                Drinks & Snacks
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {drinksSnacksItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/sportarena" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
                  <Image src="/icons/bullseye.svg" alt="" width={16} height={16} className="w-4 h-4" />
                  Sportarena
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/wohin" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}>
                  <Image src="/icons/bullseye.svg" alt="" width={16} height={16} className="w-4 h-4" />
                  Wohin?
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          {/* Debug indicator */}
          <span className="text-xs bg-yellow-200 px-2 py-1 rounded text-black">
            {open ? "OPEN" : "CLOSED"}
          </span>
          
          {/* Simple mobile menu button */}
          <button
            className="bg-blue-500 text-white p-2 rounded-md border-2 border-blue-600 hover:bg-blue-600"
            onClick={() => {
              console.log("Simple button clicked! Current state:", open);
              setOpen(!open);
            }}
          >
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Conditional mobile menu overlay */}
          {open && (
            <div 
              className="fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={() => setOpen(false)}
            >
              <div 
                className="fixed right-0 top-0 h-full w-[66vw] bg-white shadow-lg p-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>

                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    className="text-4xl font-medium hover:text-blue-600 transition-colors flex items-center gap-2 text-black"
                    onClick={() => setOpen(false)}
                  >
                    <Image src={Bulleye} alt="" width={16} height={16} className="w-4 h-4" />
                    Home
                  </Link>

                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-medium flex items-center gap-2 text-black">
                      <Image src={Bulleye} alt="" width={16} height={16} className="w-4 h-4" />
                      About
                    </span>
                    <div className="flex flex-col gap-2 ml-4">
                      {aboutItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="text-xl text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-medium flex items-center gap-2 text-black">
                      <Image src={Bulleye} alt="" width={16} height={16} className="w-4 h-4" />
                      Drinks & Snacks
                    </span>
                    <div className="flex flex-col gap-2 ml-4">
                      {drinksSnacksItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="text-xl text-gray-600 hover:bg-slate-200 hover:text-blue-600 transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/sportarena"
                    className="text-4xl font-medium hover:text-blue-600 transition-colors flex items-center gap-2 text-black"
                    onClick={() => setOpen(false)}
                  >
                    <Image src={Bulleye} alt="" width={16} height={16} className="w-4 h-4" />
                    Sportarena
                  </Link>

                  <Link
                    href="/wohin"
                    className="text-4xl font-medium hover:text-blue-600 transition-colors flex items-center gap-2 text-black"
                    onClick={() => setOpen(false)}
                  >
                    <Image src={Bulleye} alt="" width={16} height={16} className="w-4 h-4" />
                    Wohin?
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
