import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className={'py-8'}>
      <div className={'container mx-auto px-2 md:px-0'}>
        <h1 className={'text-4xl md:text-5xl text-center mb-2'}>About Us</h1>
        <p>At DCC Programming Club, we believe that programming is more than just writing code — it’s a gateway to
          innovation, problem-solving, and collaboration. Established with a vision to create a thriving programming
          community, our club serves as a platform for students of all levels to enhance their technical skills, explore
          new technologies, and connect with like-minded peers.</p>

        <h2 className={'text-xl text-primary font-bold mb-1 mt-4'}>Our Mission</h2>
        <p>Our mission is to foster a community where students can:</p>
        <ul className={'list-disc list-inside'}>
          <li><span className={'font-bold'}>Learn:</span> Develop strong foundational and advanced programming skills
            through workshops,
            training sessions,
            and mentoring.
          </li>
          <li><span className={'font-bold'}>Collaborate:</span> Work together on projects, hackathons, and
            problem-solving challenges to tackle
            real-world
            problems.
          </li>
          <li><span className={'font-bold'}>Innovate:</span> Inspire creativity and innovation by encouraging members to
            build impactful
            projects.
          </li>
        </ul>

        <h2 className={'text-xl text-primary font-bold mb-1 mt-4'}>Our Vision</h2>
        <p>We aim to:</p>
        <ul className={'list-disc list-inside'}>
          <li>Build a culture of continuous learning and skill-sharing.</li>
          <li>Establish our club as a leader in promoting programming excellence at the collegiate level.</li>
          <li>Empower our members to excel in national and international programming contests and create meaningful
            contributions to the tech world.
          </li>
        </ul>

        <h2 className={'text-xl text-primary font-bold mb-1 mt-4'}>Membership Benefits</h2>
        <p>When you join the DCC Programming Club, you unlock:</p>
        <ul className={'list-disc list-inside'}>
          <li>Access to exclusive training sessions and resources.</li>
          <li>Opportunities to participate in regional and global contests.</li>
          <li>A supportive community to help you grow and achieve your goals.</li>
          <li>Networking opportunities with industry professionals and alumni.</li>
        </ul>

        <div className={'shadow-xl text-center mt-8 mb-4 bg-primary text-primary-foreground py-8 px-2'}>
          <h3 className={'text-5xl md:text-7xl font-light mb-4'}>Get Involved!</h3>
          <Button asChild variant={'outline'} size={'lg'} className={'text-primary'}>
            <Link href={'/join'}>Join Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}