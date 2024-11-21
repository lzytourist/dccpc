import Link from "next/link";
import ContactForm from "@/components/forms/contact-form";

export default function Contact() {
  return (
    <section className={'py-12'}>
      <div className={'container mx-auto'}>
        <h1 className={''}>Contacts</h1>
        <h2 className={'text-primary text-4xl lg:text-6xl'}>Have a question?</h2>
        <p className={'mb-8'}>Contact us whenever you have any questions. We are always here for you!</p>

        <div className={'grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2'}>
          <div className={'space-y-6'}>
            <div className={''}>
              <h3 className={'text-primary text-2xl'}>Email</h3>
              <Link href="mailto:dccpc@gmail.com">dccpc@gmail.com</Link>
            </div>
            <div className={''}>
              <h3 className={'text-primary text-2xl'}>Phone</h3>
              <Link href="tel:+011010101">+880011010101</Link>
            </div>
            <div className={''}>
              <h3 className={'text-primary text-2xl'}>Address</h3>
              <Link href="https://maps.app.goo.gl/s4zgDN6nE3SzaJgB9" target={'_blank'}>Dhaka City College, Dhanmondi 2, Dhaka</Link>
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