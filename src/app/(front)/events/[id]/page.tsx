import Image from "next/image";
import {formatDate} from "@/lib/utils";

interface Event {
    id: number;
    title: string;
    details: string;
    image: string;
    created_at: string;
}

export default async function Page({params}: {params: Promise<{id: number}>}) {
    const {id} = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/club/events/${id}/`);

    if (response.ok) {
        const {image, title, created_at, details} = await response.json() as Event;
        return (
            <div className="container mx-auto py-8 px-2 md:px-0">
                <Image
                    src={image}
                    alt={title}
                    width={1200}
                    height={720}
                    className="w-full max-h-96 object-cover rounded-t-lg"
                />

                <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-800">{title}</h1>

                <p className="text-sm text-gray-500 mb-6">
                    Posted on: {formatDate(created_at)}
                </p>

                <div dangerouslySetInnerHTML={{__html: details}}></div>
            </div>
        );
    }

    return (
        <div>Not found!</div>
    );
}