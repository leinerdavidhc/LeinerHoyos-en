import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeLanguage() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="link"
          style={{ border: "none", outline: "none" }}
          className="hover:text-secondary md:text-primary text-background"
        >
          <i className="bx bx-globe md:text-2xl text-3xl"></i>
          <span className="sr-only">Toggle Idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          
          className="flex gap-2 items-center"
        >
            <img src="/espana.png" alt="españa" className="w-[24px]"/>
          <span className="text-base">ES</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2 items-center"
        >
        <img src="/estados-unidos.png" alt="españa" className="w-[24px]"/>
          <span className="text-base">EN</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
