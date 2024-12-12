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

interface Event {
  id: number;
  title: string;
  detail: string;
  created_at: string;
}

function EventDetails({event}: {event: Event}) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={'icon'} variant={'secondary'}>
          <ViewIcon/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription>{event.detail}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

const events: Event[] = [
  {id: 1, title: 'Hello Word 1!', detail: 'Details', created_at: '12 Dec, 2024 10:11 PM'},
  {id: 1, title: 'Hello Word 2!', detail: 'Details', created_at: '12 Dec, 2024 10:11 PM'},
  {id: 1, title: 'Hello Word 3!', detail: 'Details', created_at: '12 Dec, 2024 10:11 PM'},
  {id: 1, title: 'Hello Word 4!', detail: 'Details', created_at: '12 Dec, 2024 10:11 PM'},
  {id: 1, title: 'Hello Word 5!', detail: 'Details', created_at: '12 Dec, 2024 10:11 PM'},
];

export default function Page() {
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
            events.map((event, i) => (
              <TableRow key={i}>
                <TableCell>{event.id}</TableCell>
                <TableCell>{event.title}</TableCell>
                <TableCell className={'text-right'}>{event.created_at}</TableCell>
                <TableCell>
                  <EventDetails event={event}/>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}