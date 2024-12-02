import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Code2, Palette, Server } from "lucide-react"

const skillsData = [
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "UI/UX Design",
    description: "Designing beautiful and intuitive user experiences",
    icon: Palette,
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
  },
  {
    title: "Backend Development",
    description: "Building scalable and secure server-side applications",
    icon: Server,
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => (
            <Card key={skill.title}>
              <CardHeader>
                <skill.icon className="mb-2 h-8 w-8" />
                <CardTitle>{skill.title}</CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  {skill.skills.map((item) => (
                    <li key={item} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}