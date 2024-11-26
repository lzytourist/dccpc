import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HeaderImage from "@/static/img/header.jpg";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className={'container mx-auto overflow-hidden'}>
        <div className={'flex flex-col-reverse gap-6 md:flex-row py-12'}>
          <div className="text-center md:text-left flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Welcome to the <br/>
              <span className="text-primary">DCC Programming Club</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              A thriving community for coding enthusiasts. Join us to improve your
              skills, participate in contests, and connect with like-minded
              programmers.
            </p>
            <div className="mt-6 flex flex-col md:flex-row md:space-x-4">
              <Button asChild size={'lg'} className={'shadow-lg'}>
                <Link href={"/join"}>
                  Join Club
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src={HeaderImage}
            alt="DCC Programming Club"
            className="rounded-t-lg md:rounded-lg shadow-md lg:w-3/4"
          />
        </div>
      </div>
    </section>
  )
}