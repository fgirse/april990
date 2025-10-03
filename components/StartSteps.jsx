import styles from '../styles';

// Removed invalid function signature declaration

import { useState } from "react"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { MenuIcon, ChevronDown } from "lucide-react"
import { cn } from "../lib/utils"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react"
import { Fragment } from "react"

const navigationItems = [
  {
    name: "Home",
    href: "/",
    image: "/home-porthole-comic-style-house-icon.jpg",
  },
  {
    name: "About",
    href: "/about",
    image: "/about-porthole-comic-style-info-icon.jpg",
    dropdown: [
      { name: "Our Story", href: "/about/story" },
      { name: "Mission", href: "/about/mission" },
      { name: "History", href: "/about/history" },
      { name: "Contact", href: "/about/contact" },
    ],
  },
  {
    name: "Drinks & Snacks",
    href: "/drinks-snacks",
    image: "/drinks-snacks-porthole-comic-style-food-beverage-i.jpg",
    dropdown: [
      { name: "Hot Drinks", href: "/drinks-snacks/hot-drinks" },
      { name: "Cold Drinks", href: "/drinks-snacks/cold-drinks" },
      { name: "Healthy Snacks", href: "/drinks-snacks/healthy-snacks" },
      { name: "Energy Bars", href: "/drinks-snacks/energy-bars" },
    ],
  },
  {
    name: "Features",
    href: "/features",
    image: "/features-porthole-comic-style-star-icon.jpg",
    dropdown: [
      { name: "Training Programs", href: "/features/training" },
      { name: "Equipment", href: "/features/equipment" },
      { name: "Facilities", href: "/features/facilities" },
      { name: "Membership", href: "/features/membership" },
    ],
  },
  {
    name: "Sportarena",
    href: "/sportarena",
    image: "/sportarena-porthole-comic-style-stadium-icon.jpg",
  },
  {
    name: "Team",
    href: "/team",
    image: "/team-porthole-comic-style-people-group-icon.jpg",
  },
  {
    name: "Wohin",
    href: "/wohin",
    image: "/wohin-porthole-comic-style-direction-arrow-icon.jpg",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
              SportHub
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <Menu as="div" className="relative">
                    <MenuButton
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                        "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        "ui-open:text-foreground ui-open:bg-accent/10",
                      )}
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-accent/30 overflow-hidden bg-accent/5 flex items-center justify-center">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={`${item.name} icon`}
                          className="w-6 h-6 object-cover"
                        />
                      </div>
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 ui-open:rotate-180 transition-transform" />
                    </MenuButton>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-md shadow-lg py-1 z-50 focus:outline-none">
                        {item.dropdown.map((dropdownItem) => (
                          <MenuItem key={dropdownItem.name}>
                            {({ focus }) => (
                              <a
                                href={dropdownItem.href}
                                className={cn(
                                  "block px-4 py-2 text-sm transition-colors",
                                  focus
                                    ? "text-foreground bg-accent/10"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                                )}
                              >
                                {dropdownItem.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Transition>
                  </Menu>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                      "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    )}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-accent/30 overflow-hidden bg-accent/5 flex items-center justify-center">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.name} icon`}
                        className="w-6 h-6 object-cover"
                      />
                    </div>
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent/10">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-semibold text-foreground">Menu</span>
                  </div>
                  {navigationItems.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                          "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        )}
                      >
                        <div className="w-8 h-8 rounded-full border-2 border-accent/30 overflow-hidden bg-accent/5 flex items-center justify-center flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={`${item.name} icon`}
                            className="w-6 h-6 object-cover"
                          />
                        </div>
                        {item.name}
                      </a>

                      {item.dropdown && (
                        <div className="ml-11 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/5 rounded-md transition-colors"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

const StartStep = ({ text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[]`}
    >
      <p className="font-bold text-[3rem] text-white">
        {"🎈"}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartStep;
