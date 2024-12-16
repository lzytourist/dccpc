'use client'

import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table";
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
import {useEffect, useState} from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext, PaginationPrevious
} from "@/components/ui/pagination";
import {useSearchParams} from "next/navigation";
import {DialogBody} from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";

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

function formatDate(date: string) {
    return Intl.DateTimeFormat("en-BD", {
        year: "numeric",
        month: "short",
        day: "2-digit",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit"
    }).format(new Date(date));
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
    const [totalPage, setTotalPage] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const params = useSearchParams();

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/club/events/?page=${params.get('page') ?? 1}`)
            .then((res) => res.json())
            .then((data) => {
                const res = data as Result;
                setData(res);
                setTotalPage(Math.floor((res.count + 14) / 15));
            })
            .catch((error) => console.log(error));
        setCurrentPage(parseInt(params.get('page') ?? '1'));
    }, [params]);

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
                <Pagination>
                    <PaginationContent>
                        {
                            currentPage <= 1 ?
                                <PaginationPrevious href="#"/> :
                                <PaginationPrevious href={'?page=' + (currentPage - 1)}/>
                        }
                        {Array.from({length: totalPage}).map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink isActive={currentPage == i + 1} href={'?page=' + (i + 1)}>{i + 1}</PaginationLink>
                            </PaginationItem>
                        ))}
                        {
                            currentPage >= totalPage ?
                                <PaginationNext href="#"/> :
                                <PaginationNext href={'?page=' + currentPage + 1}/>
                        }
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}