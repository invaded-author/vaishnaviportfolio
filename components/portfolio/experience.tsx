"use client"

import { motion } from "framer-motion"
import { GradientBorderCard } from "./gradient-border-card"

const experiences = [
  {
    company: "Deloitte",
    role: "Data Analyst Intern",
    description: "Built interactive dashboards and analyzed complex datasets to drive business decisions"
  },
  {
    company: "Extion Infotech",
    role: "Analyst",
    description: "Performed data analysis and modeling to extract actionable business insights"
  },
  {
    company: "CodSoft",
    role: "Python Intern",
    description: "Developed Python-based solutions for data processing and automation tasks"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title text-primary mb-6">
            Experience
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-2 w-3 h-3 rounded-full bg-primary border-4 border-background md:left-auto md:right-0 md:-mr-[6.5px] md:translate-x-1/2" 
                  style={index % 2 === 0 ? { right: 0, marginRight: '-6.5px' } : { left: 0, marginLeft: '-6.5px' }}
                />
                
                <GradientBorderCard innerClassName="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {exp.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </GradientBorderCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
