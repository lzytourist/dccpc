import {
  Sheet, SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {MenuIcon, type LucideIcon} from "lucide-react";
import Link from "next/link";

interface Link {
  url: string;
  name: string;
  icon?: LucideIcon,
  isActive?: boolean
}

export default function SideNav({links}: { links: Link[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild className={'md:hidden'}>
        <Button size={'icon'} variant={'ghost'}>
          <MenuIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>DCCPC</SheetTitle>
        </SheetHeader>
        <nav>
          {links.map((link, i) => (
            <SheetClose key={i} asChild>
              <Link
                className={'block'}
                href={link.url}
              >
                {link.icon && <link.icon/>}
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}