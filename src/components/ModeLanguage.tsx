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
        <DropdownMenuItem>
          <a className="text-base p-1 flex items-center gap-2 w-full" href="https://leinerhoyos.netlify.app/"><img src="/espana.png" alt="españa" className="w-[24px]"/>ES</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a className="text-base p-1 flex items-center gap-2 w-full" href="https://leinerhoyos-en.netlify.app/"><img src="/estados-unidos.png" alt="españa" className="w-[24px]"/>EN</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
