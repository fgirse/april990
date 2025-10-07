"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils"
import LogoNeu from '../public/LogoNeu.png'
const navigationItems = [
   {
    title: "Home",
    href: "/",
  },
  {
    title: "Über uns",
    href: "/about",
    items: [
      {
        title: "Unser Team",
        href: "/about/team",
        description: "Unser",
      },
      {
        title: "Geschichte",
        href: "/about/history",
        description: "Die Geschichte des Rettungsankers",
      },
     
    ],
  },
  {
    title: "Getränke & Speisen",
    href: "/menu",
    items: [
      {
        title: "Biere",
        href: "/menu/biere",
        description: "A collection of links for navigating websites",
      },
      {
        title: "Wein",
        href: "/menu/weine",
        description: "Displays a button or a component that looks like a button",
      },
      {
        title: "Cpcktails Longdrinks & Kurze",
        href: "/menu/cocktails",
        description: "Displays a card with header, content, and footer",
      },
       {
        title: "SoftDrinks",
        href: "/menu/softdrinks",
        description: "Displays a card with header, content, and footer",
      },
      {
        title: "Snacks",
        href: "/menu/snacks",
        description: "A collection of links for navigating websites",
      },
    ],
  },
  {
    title: "Sportarena",
    href: "/sportarena",
  },
  {
    title: "Wohin ?",
    href: "/wohin",
  },
]

export default function ResponsiveNav() {
  const isMobile = useIsMobile()
  const [open, setOpen] = React.useState(false)

  if (isMobile) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-wood">
        <div className="container flex h-36 items-center justify-between">bg
      
          <Image src={LogoNeu}  width={120} height={80} alt="Logo" className="font-bold"/>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="default" size="icon" className="md:hidden">
                <MenuIcon className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                {navigationItems.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    {item.items ? (
                      <>
                        <h4 className="font-medium text-2xl text-muted-foreground px-2">{item.title}</h4>
                        <div className="flex flex-col gap-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setOpen(false)}
                              className="flex flex-col gap-1 rounded-md p-3 hover:bg-accent transition-colors"
                            >
                              <span className="font-medium text-sm">{subItem.title}</span>
                              <span className="text-xs text-muted-foreground">{subItem.description}</span>
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-md p-3 font-medium text-sm hover:bg-accent transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-wood">
      <div className="container flex h-36 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image src={LogoNeu} width={120} height={80} alt="Logo" className="font-bold" />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navigationItems.map((item) =>
              item.items ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] bg-orange-200 text-white gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <ListItem key={subItem.title} title={subItem.title} href={subItem.href}>
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm uppercase font-medium leading-none mb-1">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
