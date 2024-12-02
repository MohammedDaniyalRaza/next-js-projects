import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 leading-relaxed text-muted-foreground">
              I&apos;m a passionate developer with a keen eye for detail and a love for creating
              beautiful, functional web applications. With expertise in modern web
              technologies like React, Next.js, and TypeScript, I strive to build
              seamless user experiences that make a difference.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with the
              developer community.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}