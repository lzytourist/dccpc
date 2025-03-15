'use client'

import Link from "next/link";
import Image from "next/image";
import Logo from "@/static/img/logo-cropped.png";
import {Button} from "@/components/ui/button";
import SideNav from "@/components/side-nav";
import {Fade} from "react-awesome-reveal";
import {ActivityIcon, CloudSunRainIcon, DockIcon, GalleryHorizontal, HandIcon, HomeIcon, UsersIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import { useEffect } from "react";

interface Link {
  url: string;
  name: string;
  icon?: JSX.Element,
  isActive?: boolean
}

const links: Link[] = [
  {name: "Home", url: "/", icon: <HomeIcon className={'group-hover:text-gray-400'}/>},
  {name: "Notice", url: "/notices", icon: <DockIcon className={'group-hover:text-gray-400'}/>},
  {name: "Events", url: "/events", icon: <ActivityIcon  className={'group-hover:text-gray-400'}/>},
  {name: "Gallery", url: "/gallery", icon: <GalleryHorizontal className={'group-hover:text-gray-400'}/>},
  {name: "Panel", url: "/panel", icon: <UsersIcon className={'group-hover:text-gray-400'}/>},
  {name: "About", url: "/about", icon: <CloudSunRainIcon className={'group-hover:text-gray-400'}/>},
  {name: "Contact", url: "/contact", icon: <HandIcon className={'group-hover:text-gray-400'}/>},
];

export default function Header() {
  const path = usePathname();

  useEffect(() => {
    for (let i: number = 0; i < links.length; ++i) {
      if (links[i].url === path) {
        links[i].isActive = true;
      }
    }
  }, [path])

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
            <Fade damping={0.1} cascade>
              {links.map((link, index) => (
                <Link
                  href={link.url}
                  className={'ml-4 hover:text-primary/80 hover:drop-shadow-sm'}
                  key={index}>{link.name}</Link>
              ))}
            </Fade>

          </nav>
        </div>
        <Button asChild size={'lg'} className={'shadow-lg'}>
          <Link href={'/join'}>Join Club</Link>
        </Button>
      </div>
    </header>
  );
}