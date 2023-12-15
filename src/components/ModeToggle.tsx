import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="link" 
        style={{border:"none",outline: "none"}}
        className="hover:text-secondary md:text-primary text-background">
          <Sun className="md:h-[1.5rem] md:w-[1.5rem] h-[2.25rem] w-[2.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute md:h-[1.5rem] md:w-[1.5rem] h-[2.25rem] w-[2.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState("theme-light")} className="flex gap-2 items-center">
            <i className='bx bxs-sun text-base'></i> <span className="text-base">Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")} className="flex gap-2 items-center">
            <i className='bx bxs-moon text-base'></i> <span className="text-base">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")} className="flex gap-2 items-center">
            <i className='bx bx-desktop text-base' ></i> <span className="text-base">System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
