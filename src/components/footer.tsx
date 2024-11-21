import Image from "next/image";
import Logo from "@/static/img/logo.png";

export default function Footer() {
  return (
    <footer className={'bg-primary-foreground text-primary py-8'}>
      <div className={'container'}>
        <div className={'flex flex-col justify-center items-center'}>
          <Image
            src={Logo}
            className={'w-[100px] md:w-[120px]'}
            alt={'Logo'}/>
          <h2 className={'font-extrabold text-4xl'}>DCC Programming Club</h2>
          <p>&copy; {new Date().getFullYear()}, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}