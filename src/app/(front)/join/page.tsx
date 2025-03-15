import MembershipForm from "@/components/forms/membership-form";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import FAQ from "@/components/faq";

export default function Page() {
  return (
    <div className={'container mx-auto my-8 px-2 lg:px-0'}>
      <h1 className={'text-primary font-light text-4xl'}>Join the DCC Programming Club Today!</h1>
      <blockquote className={'italic font-bold text-sm text-gray-700'}>Empower your coding skills, collaborate with
        like-minded peers, and excel in competitive programming
        with DCC Programming Club. Be a part of our growing community!
      </blockquote>

      <div className={'grid md:grid-cols-2 gap-6 mt-8'}>
        <Card className={'bg-primary text-primary-foreground'}>
          <CardHeader>
            <CardTitle>
              <h2 className={'text-3xl font-light'}>Why Should You Join?</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={'list-disc list-inside'}>
              <li>
                <strong>Skill Development:</strong> Learn and improve programming, problem-solving, and algorithmic
                skills.
              </li>
              <li>
                <strong>Competitive Opportunities:</strong> Participate in ICPC, NCPC, IUPC, and other prestigious
                contests.
              </li>
              <li>
                <strong>Workshops & Training:</strong> Hands-on sessions to strengthen your technical abilities.
              </li>
              <li>
                <strong>Collaborative Environment:</strong> Work with experienced mentors and peers.
              </li>
              <li>
                <strong>Career Advancement:</strong> Build a strong profile for future internships and job
                opportunities.
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className={'bg-primary-foreground text-primary'}>
          <CardHeader>
            <CardTitle>
              <h2 className={'text-3xl font-light'}>What Do We Expect?</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className={'list-disc list-inside'}>
              <li>Passion for programming, dedication to improve yourself and collaboration with the community.</li>
              <li>Basic knowledge of any programming language (preferred but not mandatory).</li>
              <li>Willingness to participate in club activities and contests.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className={'my-8 p-8 rounded-md shadow'}>
        <h2 className={'text-3xl font-light'}>Fill-up this form to apply for membership.</h2>
        <MembershipForm/>
      </div>

      <div className={'my-8 bg-primary text-primary-foreground p-8 rounded-md shadow'}>
        <h2 className={'text-4xl font-light'}>FAQs</h2>
        <FAQ/>
      </div>
    </div>
  )
}