"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export function ModeToggleMobile() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="cursor-pointer" variant="outline" size="default" asChild>
          {theme === "dark" ? (
            <div>
              <Moon className="rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 mr-2 ml-[-0.2rem]" />
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mr-[-0.1rem]">Dark</h4>
            </div>
          ) : (
            <div>
              <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mr-2 ml-[-0.2rem]" />
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight mr-[-0.1rem]">Light</h4>
            </div>
          )
          }
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='center' className="min-w-[102px]" >{ /*className="min-w-[335px]"*/}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

