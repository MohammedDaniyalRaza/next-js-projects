import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
          Hi, I&apos;m Daniyal
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          A passionate developer crafting beautiful web experiences
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <a href="#projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}