'use client'

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Fade} from "react-awesome-reveal";

export default function MissionVision() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-6 text-center">
        <Fade triggerOnce={true}>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Our <span className="text-primary">Mission</span> &{" "}
            <span className="text-primary">Vision</span>
          </h2>
        </Fade>

        <Fade triggerOnce={true}>
          <p className="text-gray-600 text-lg mb-12">
            Guiding our community with purpose and inspiration.
          </p>
        </Fade>

        <Fade direction={'up'} triggerOnce={true}>
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="bg-white shadow-lg p-6 border-0">
              <CardHeader>
                <CardTitle className={'text-2xl font-bold'}>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To create a thriving programming community where students can
                  enhance their skills, collaborate on innovative projects, and
                  prepare for global challenges in the tech world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg p-6 border-0">
              <CardHeader>
                <CardTitle className={'text-2xl font-bold'}>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To become a leading hub for fostering programming talent,
                  promoting innovation, and inspiring the next generation of tech leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </Fade>
      </div>
    </section>
  );
}