'use client'

import {useEffect, useState} from "react";
import {formatDate} from "@/lib/utils";
import {Image as ImageType, Result} from "@/lib/types";
import ImageCard from "@/components/image-card";
import {Fade} from "react-awesome-reveal";

export default function Page() {
    const [images, setImages] = useState<ImageType[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/club/gallery/`)
            .then(res => res.json())
            .then(data => {
                const result = data as Result;
                setImages(result.results);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={'py-8'}>
            <div className={'container mx-auto px-2 md:px-0'}>
                <h1 className={'text-4xl md:text-5xl text-center mb-2'}>Gallery</h1>

                <Fade direction={'up'} triggerOnce={true}>
                    <div className={'grid grid-cols-1 grid-cols-4'}>
                        {
                            images.map((image, index) => (
                                <ImageCard
                                    key={index}
                                    src={image.image}
                                    title={image.title}
                                    description={formatDate(image.created_at)}/>
                            ))
                        }
                    </div>
                </Fade>
            </div>
        </div>
    )
}