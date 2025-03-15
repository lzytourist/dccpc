'use client'

import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {formatDate} from "@/lib/utils";
import Link from "next/link";
import {RefreshCw} from "lucide-react";
import Image from "next/image";

interface Event {
    id: number;
    title: string;
    details: string;
    image: string;
    created_at: string;
}

interface Result {
    count: number;
    next: string | null;
    previous: string | null;
    results: Event[]
}

export default function Page() {
    const [data, setData] = useState<Event[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const pageSize = 15;

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/club/events/?page=${page}`);

            if (res.ok) {
                const result = await res.json() as Result;

                setData(result.results);
                setTotal(result.count);
            }
        };

        fetchData().finally(() => setLoading(false));
    }, [page]);

    return (
        <div className={'container mx-auto py-8 px-2 md:px-0'}>
            <h1 className={'text-center text-4xl md:text-5xl mb-2'}>Events</h1>

            {loading && <div className={'flex justify-center'}>
                <RefreshCw className={'animate-spin'}/>
            </div>}

            {data.length ? <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
                {data.map((event, index) => (
                    <Card key={index} className={'rounded-md'}>
                        <Image
                            src={event.image}
                            width={1920}
                            height={720}
                            className={'rounded-t-md'}
                            alt={event.title}/>
                        <CardHeader>
                            <p className={'text-sm text-gray-500'}>{formatDate(event.created_at)}</p>
                            <CardTitle>{event.title}</CardTitle>
                        </CardHeader>
                        <CardFooter>
                            <Button variant={'link'} asChild={true}>
                                <Link href={`/events/${event.id}`}>
                                    Read More...
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div> : <div className={'text-center text-gray-500'}>No events yet!</div>}

            {(total > 0) && <div className="mt-2 flex items-center justify-end space-x-2 py-4">
                <Button variant={'outline'} onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
                    Previous
                </Button>
                <span>Page {page} of {Math.ceil(total / pageSize)}</span>
                <Button variant={'outline'} onClick={() => setPage((p) => (p < Math.ceil(total / pageSize) ? p + 1 : p))}
                        disabled={page * pageSize >= total}>
                    Next
                </Button>
            </div>}
        </div>
    )
}