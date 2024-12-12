'use client'

import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Fade} from "react-awesome-reveal";

const images = [
  {url: '/header.jpg', altText: 'Alt'},
  {url: '/header.jpg', altText: 'Alt'},
  {url: '/header.jpg', altText: 'Alt'},
  {url: '/header.jpg', altText: 'Alt'},
  {url: '/header.jpg', altText: 'Alt'},
  {url: '/header.jpg', altText: 'Alt'},
  {url: '/header.jpg', altText: 'Alt'},
];

export default function Gallery() {
  return (
    <section className={''}>
      <div className={'bg-white py-12'}>
        <div className={'container mx-auto'}>
          <Fade direction={'up'} triggerOnce>
            <h2 className={'text-center text-primary text-4xl lg:text-6xl'}>Unlock Your Potential with Our Coding
              Community</h2>
          </Fade>
        </div>
      </div>
      <div className={'bg-background py-12'}>
        <div className={'container mx-auto'}>
          <Fade triggerOnce direction={'up'}>
            <h3 className={'text-primary font-light text-6xl text-center mb-8'}>Gallery</h3>
          </Fade>

          <div className={'grid gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-4'}>
            <Fade cascade damping={0.2}>
              {images.map((image, i) => (
                <Image
                  className={'w-full shadow-sm rounded-sm'}
                  src={image.url}
                  width={500}
                  height={500}
                  alt={image.altText}
                  key={i}/>
              ))}
            </Fade>
          </div>

          <div className={'mt-8 text-center'}>
            <Fade triggerOnce delay={8 * 200}>
              <Button asChild size={'lg'} variant={'outline'}>
                <Link href={'/gallery'}>View More</Link>
              </Button>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}