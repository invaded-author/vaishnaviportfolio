"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientBorderCard } from "./gradient-border-card"

const projects = [
  {
    title: "Goldman Sachs Risk Analysis",
    description: "Identified risk patterns and built predictive model achieving 77% recall for risk classification",
    tech: ["SQL", "Python", "Power BI"],
    link: "https://github.com/vaishnavi-394/WsCubeTech_Projects/tree/main/GoldMan_Sachs_Capstone_Project"
  },
  {
    title: "ITC Hotels Dashboard",
    description: "Analyzed ₹265M+ revenue and identified ₹17M+ losses through comprehensive business intelligence",
    tech: ["Power BI"],
    link: "https://github.com/vaishnavi-394/WsCubeTech_Projects/tree/main/POWER-BI"
  },
  {
    title: "Swiggy Data Analysis",
    description: "Analyzed customer trends, ordering patterns, and behavior to drive strategic insights",
    tech: ["Python"],
    link: "https://github.com/vaishnavi-394/WsCubeTech_Projects/tree/main/SQL/swiggy%20analysis"
  },
  {
    title: "Spotify SQL Analysis",
    description: "Extracted actionable insights on artist popularity and track performance trends",
    tech: ["SQL"],
    link: "https://github.com/vaishnavi-394/spotify-top50-analysis-Project"
  },
  {
    title: "Amazon Sentiment Analysis",
    description: "Built NLP model for sentiment classification of product reviews with high accuracy",
    tech: ["Python", "NLP"],
    link: "https://github.com/vaishnavi-394/CodeAlpha_Internship"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title text-primary mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Featured work showcasing data analysis and business impact
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GradientBorderCard innerClassName="p-6 flex flex-col h-full group">
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-fit text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-auto"
                  asChild
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </GradientBorderCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
