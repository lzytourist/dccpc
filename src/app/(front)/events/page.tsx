'use client'

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {ViewIcon} from "lucide-react";
import {useState} from "react";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import {formatDate} from "@/lib/utils";
import Paginator from "@/components/paginator";

interface Event {
    id: number;
    title: string;
    details: string;
    created_at: string;
}

interface Result {
    count: number;
    next: string | null;
    previous: string | null;
    results: Event[]
}

function EventDetails({event}: { event: Event }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={'icon'} variant={'secondary'}>
                    <ViewIcon/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{event.title}</DialogTitle>
                    <DialogDescription>{formatDate(event.created_at)}</DialogDescription>
                    <DialogBody>{event.details}</DialogBody>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default function Page() {
    const [data, setData] = useState<Result>({
        count: 0,
        previous: null,
        next: null,
        results: []
    });

    const getEvents = (page: number = 1) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/club/events/?page=${page ?? 1}`)
            .then((res) => res.json())
            .then((data) => {
                const res = data as Result;
                setData(res);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className={'container mx-auto py-8 px-2 md:px-0'}>
            <h1 className={'text-center text-4xl md:text-5xl mb-2'}>Events</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead className={'text-center'}>Title</TableHead>
                        <TableHead className={'text-right'}>Date</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data.results && data.results.map((event, i) => (
                            <TableRow key={i}>
                                <TableCell>{event.id}</TableCell>
                                <TableCell>{event.title}</TableCell>
                                <TableCell className={'text-right'}>{formatDate(event.created_at)}</TableCell>
                                <TableCell>
                                    <EventDetails event={event}/>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <div>
                <Paginator
                    callback={getEvents}
                    dataCount={data.count}
                    url={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/events/`}/>
            </div>
        </div>
    )
}