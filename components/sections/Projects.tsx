import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with Next.js and TypeScript",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with a beautiful user interface",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Project Three",
    description: "A real-time dashboard for data visualization",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-video w-full rounded-lg object-cover"
                />
                <CardTitle className="mt-4">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}