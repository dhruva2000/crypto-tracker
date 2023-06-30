"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { LogIn, Home, Menu } from 'lucide-react'
import { ModeToggle, ModeToggleMobile } from '@/components/ui/mode-toggle'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { NavigationMenuLink, NavigationMenuList, NavigationMenu, NavigationMenuItem } from '@/components/ui/navigation-menu'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'



const Navbar = () => {
  return (
    <div className="supports-[background-blur]: sticky border-b flex items-center justify-between h-36 ">

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


      <div className="table md:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className='mr-5'>
              <Menu size={26} />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className='text-2xl font-semibold pb-4 border-b'>Menu</SheetTitle>
            </SheetHeader>
            <div className=" items-center flex flex-col space-y-3 mt-5">
              <ul className='w-full space-y-5'>
                <li className='border-b pb-4 flex flex-col'>
                  <SheetClose asChild>
                    <Button variant="ghost" asChild>
                      <Link href="/">
                        <h3 className="text-lg tracking-tight">Home</h3>
                      </Link>
                    </Button>
                  </SheetClose>
                </li>
                <li className='border-b pb-4 flex flex-col'>
                  <Button className='flex-grow' variant="ghost" asChild>
                    <Link href="/">
                      <h3 className="text-lg tracking-tight">Account</h3>
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
            <div className="pt-[150px] pb-4 flex items-center justify-center">
              <Button className='flex-grow' variant="outline" asChild>
                <Link href="/signin">
                  <h3 className="px-3 text-muted-foreground text-lg font-medium tracking-tight">Sign In</h3>
                </Link>
              </Button>
              <Button className='flex-grow' variant="outline" asChild>
                <Link href="/signup">
                  <h3 className="px-3 text-muted-foreground text-lg font-medium tracking-tight">Sign Up</h3>
                </Link>
              </Button>
            </div>
            <div className='items-center p-2 flex flex-col'>
              <ModeToggleMobile />
            </div>
          </SheetContent>
        </Sheet>
      </div>


      {/* <div className="md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[80%] bg-secondary ease-in duration-300"> */}
      {/*   <NavigationMenu orientation='vertical' > */}
      {/*     <NavigationMenuList> */}
      {/*       <NavigationMenuItem> */}
      {/*         <Link href="/" legacyBehavior passHref> */}
      {/*           <Button variant="default" asChild> */}
      {/*             <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
      {/*               <Home size='20' className='mr-2' /> */}
      {/*               <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Home</h4> */}
      {/*             </NavigationMenuLink> */}
      {/*           </Button> */}
      {/*         </Link> */}
      {/*       </NavigationMenuItem> */}
      {/*       <NavigationMenuItem> */}
      {/*         <Link href="/" legacyBehavior passHref> */}
      {/*           <NavigationMenuLink className={navigationMenuTriggerStyle()}> */}
      {/*             <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Account</h4> */}
      {/*           </NavigationMenuLink> */}
      {/*         </Link> */}
      {/*       </NavigationMenuItem> */}
      {/*       <NavigationMenuItem> */}
      {/*         <div className="mr-4"> */}
      {/*           <ModeToggleMobile /> */}
      {/*         </div> */}
      {/*       </NavigationMenuItem> */}
      {/*     </NavigationMenuList> */}
      {/*   </NavigationMenu> */}
      {/* </div> */}

      {/* <div className="md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[80%] bg-secondary ease-in duration-300"> */}
      {/*   <ul> */}
      {/*     <li> */}
      {/*       <Link href="/">Home</Link> */}
      {/*     </li> */}
      {/**/}
      {/*     <li> */}
      {/*       <Button> */}
      {/*         <Link href="/" > */}
      {/*           <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">Account</h4> */}
      {/*         </Link> */}
      {/*       </Button> */}
      {/*     </li> */}
      {/**/}
      {/*     <li> */}
      {/*       <ModeToggleMobile /> */}
      {/*     </li> */}
      {/**/}
      {/*   </ul> */}
      {/*   <div> */}
      {/*     <Link href="/signin"> */}
      {/*       <button>Sign In</button> */}
      {/*     </Link> */}
      {/*     <Link href="/signup"> */}
      {/*       <button>Sign Up</button> */}
      {/*     </Link> */}
      {/*   </div> */}
      {/* </div> */}
    </div >

  )
}

export default Navbar
