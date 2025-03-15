import NoticeTable from "@/components/tables/notice-table";

export default function Page() {
    return (
        <div className={'container mx-auto py-8 px-2 md:px-0'}>
            <h1 className={'text-center text-4xl md:text-5xl mb-2'}>Notices</h1>
            <NoticeTable/>
        </div>
    )
}