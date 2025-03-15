import {
  Sheet, SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {MenuIcon} from "lucide-react";
import Link from "next/link";

interface Link {
  url: string;
  name: string;
  icon?: JSX.Element;
  isActive?: boolean;
}

export default function SideNav({links}: { links: Link[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild className={'md:hidden'}>
        <Button size={'icon'} variant={'ghost'}>
          <MenuIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className={'bg-primary text-primary-foreground'}>
        <SheetHeader>
          <SheetTitle className={'font-bold text-center text-2xl text-primary-foreground'}>DCC Programming Club</SheetTitle>
        </SheetHeader>
        <nav>
          {links.map((link, i) => (
            <SheetClose key={i} asChild>
              <Link
                className={'flex gap-x-8 py-4 group'}
                href={link.url}
              >
                {link.icon ? link.icon : ''}
                <span className={''}>{link.name}</span>
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}