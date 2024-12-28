'use client'

import Link from "next/link";
import ContactForm from "@/components/forms/contact-form";
import {MailIcon, MapPin, PhoneCall} from "lucide-react";
import {Fade} from "react-awesome-reveal";

export default function Contact() {
    return (
        <section className={'py-12'}>
            <div className={'container mx-auto'}>
                <Fade direction={'up'} triggerOnce={true}>
                    <h2 className={'text-primary text-4xl lg:text-6xl'}>Have a question?</h2>
                    <p className={'mb-8'}>Contact us whenever you have any questions. We are always here for you!</p>
                </Fade>

                <div className={'grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2'}>
                    <div className={'space-y-6'}>
                        <div className={''}>
                            <Link href="mailto:dccpc@gmail.com" className={'flex items-center gap-2'}><MailIcon
                                className={'text-primary'}/> dccpc@gmail.com</Link>
                        </div>
                        <div className={''}>
                            <Link href="tel:+011010101" className={'flex items-center gap-1'}><PhoneCall
                                className={'text-primary'}/> +880011010101</Link>
                        </div>
                        <div className={''}>
                            <Link
                                href="https://maps.app.goo.gl/XJavgL632KaBvnUx9"
                                className={'flex items-center gap-2'}
                                target={'_blank'}>
                                <MapPin className={'text-primary'}/>
                                Dhaka City College Campus - 2,60 Rd 3A, Dhaka 1205</Link>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774.1576501603796!2d90.3744814056433!3d23.739682486009166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf000f67f37d%3A0x9b20a8691ad3d551!2sDhaka%20City%20College%20Campus-2!5e0!3m2!1sen!2sbd!4v1735328861651!5m2!1sen!2sbd"
                                allowFullScreen={true} loading="lazy"
                                className={'w-full h-[300px] mt-6'}
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className={'border-2 border-white p-8'}>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}