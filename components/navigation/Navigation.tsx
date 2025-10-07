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
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
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
          <span className="text-xs bg-yellow-200 px-2 py-1 rounded">
            {open ? "OPEN" : "CLOSED"}
          </span>
          
          {/* Manual trigger button for testing */}
          <Button
            variant="outline"
            size="icon"
            className="bg-red-500 text-white border-2 border-red-600 hover:bg-red-600 z-50"
            onClick={() => {
              console.log("Manual button clicked! Current state:", open);
              setOpen(!open);
            }}
          >
            <Menu className="h-6 w-6" />
          </Button>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-white border-2 border-gray-300 hover:bg-gray-100 z-50"
                onClick={() => console.log("Sheet trigger clicked!")}
              >
                <Menu className="h-6 w-6 text-black" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="/"
                className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Image src="/icons/bullseye.svg" alt="" width={16} height={16} className="w-4 h-4" />
                Home
              </Link>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-medium flex items-center gap-2">
                  <Image src={Bulleye} alt="" width={16} height={16} className="w-4 h-4" />
                  About
                </span>
                <div className="flex flex-col gap-2 ml-4">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-medium flex items-center gap-2">
                  <Image src={Bulleye} alt="" width={16} height={16} className="w-4 h-4" />
                  Drinks & Snacks
                </span>
                <div className="flex flex-col gap-2 ml-4">
                  {drinksSnacksItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/sportarena"
                className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Image src={Bulleye} alt="" width={16} height={16} className="w-4 h-4" />
                Sportarena
              </Link>

              <Link
                href="/wohin"
                className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <Image src={Bulleye} alt="" width={16} height={16} className="w-4 h-4" />
                Wohin?
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
