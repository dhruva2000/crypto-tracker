"use client"

import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Button } from "@/components/ui/button"
import { LogIn } from 'lucide-react'
import { ModeToggle } from '@/components/ui/mode-toggle'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { NavigationMenuLink, NavigationMenuList, NavigationMenu, NavigationMenuItem } from '@/components/ui/navigation-menu'



const Navbar = () => {
  return (
    <div className="rounded-div flex items-center justify-between h-30 mt-4">

      <Link href="/">
        <h1 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ml-6'>Cryptobase</h1>
      </Link>

      <div className="hidden md:flex  items-center justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/signin" legacyBehavior passHref>
                <Button variant="secondary" asChild>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <LogIn className="mr-2" />
                    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Sign In</h4>
                  </NavigationMenuLink>
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/signup" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Sign Up</h4>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div className="mr-4">
                <ModeToggle />
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>


      <div className="block md:hidden">
        <RxHamburgerMenu />
      </div>

      <div className="block md:hidden">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/">Account</Link>
          </li>

          <li>
            <ModeToggle />
          </li>

        </ul>
        <div>
          <Link href="/signin">
            <button>Sign In</button>
          </Link>
          <Link href="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Navbar
