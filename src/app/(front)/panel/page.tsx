'use client'

import ImageCard from "@/components/image-card";
import {useEffect, useState} from "react";
import {Fade} from "react-awesome-reveal";
import {CardFooter} from "@/components/ui/card";
import {Facebook, GithubIcon, Linkedin} from "lucide-react";
import Link from "next/link";

interface Member {
    name: string;
    image: string;
    designation: string;
    linkedin: string | null;
    github: string | null;
    facebook: string | null;
    created_at: string;
    updated_at: string;
    ordering: number;
}

interface Result {
    next: string | null;
    previous: string | null;
    results: Member[];
    count: number;
}

export default function Page() {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/club/panel-members/`)
            .then(res => res.json())
            .then(data => {
                const result = data as Result;
                setMembers(result.results);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={'py-8'}>
            <div className={'container mx-auto px-2 md:px-0'}>
                <h1 className={'text-4xl md:text-5xl text-center mb-2'}>Panel Members</h1>
                <p className={'italic font-bold text-center text-gray-700'}>Get to know the exceptional individuals
                    driving our panel to success!</p>

                <Fade direction={'up'} triggerOnce={true}>
                    <div className={'my-6 grid grid-cols-1 grid-cols-4'}>
                        {
                            members.map((member, index) => (
                                <ImageCard
                                    key={index}
                                    src={member.image}
                                    title={member.name}
                                    description={member.designation}>
                                    <CardFooter>
                                        <div className={'flex items-center gap-2'}>
                                            <Link href={member.linkedin ?? '#'}>
                                                <Linkedin/>
                                            </Link>
                                            <Link href={member.github ?? '#'}>
                                                <GithubIcon/>
                                            </Link>
                                            <Link href={member.facebook ?? '#'}>
                                                <Facebook/>
                                            </Link>
                                        </div>
                                    </CardFooter>
                                </ImageCard>
                            ))
                        }
                    </div>
                </Fade>
            </div>
        </div>
    )
}