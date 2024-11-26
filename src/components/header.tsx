import Link from "next/link";
import Image from "next/image";
import Logo from "@/static/img/logo-cropped.png";
import {Button} from "@/components/ui/button";
import SideNav from "@/components/side-nav";

const links = [
  {name: "Home", url: "/"},
  {name: "Events", url: "/events"},
  {name: "Gallery", url: "/gallery"},
  {name: "Panel", url: "/members"},
  {name: "About", url: "/about"},
  {name: "Contact", url: "/contact"},
];

export default function Header() {
  return (
    <header className={'border-b w-full border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-50'}>
      <div className={'container mx-auto flex items-center justify-between py-1'}>
        <div className={'flex items-center justify-between text-primary'}>
          <SideNav links={links}/>
          <Link href={'/'}>
            <Image
              src={Logo}
              width={60}
              alt={'Logo'}/>
          </Link>

          <nav className={'hidden md:flex'}>
            {links.map((link, index) => (
              <Link
                href={link.url}
                className={'ml-4 hover:text-primary/80 hover:drop-shadow-sm'}
                key={index}>{link.name}</Link>
            ))}
          </nav>
        </div>
        <Button asChild size={'lg'} className={'shadow-lg'}>
          <Link href={'/join'}>Join Club</Link>
        </Button>
      </div>
    </header>
  );
}