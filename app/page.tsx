import { Navigation } from "@/components/portfolio/navigation"
import { Hero } from "@/components/portfolio/hero"
import { Metrics } from "@/components/portfolio/metrics"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Experience } from "@/components/portfolio/experience"
import { Certifications } from "@/components/portfolio/certifications"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { CursorZoom } from "@/components/portfolio/cursor-zoom"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <CursorZoom />
      <Navigation />
      <Hero />
      <Metrics />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
