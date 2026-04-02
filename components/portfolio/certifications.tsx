"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { GradientBorderCard } from "./gradient-border-card"

const certifications = [
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank | 2025"
  },
  {
    title: "Data Analytics Job Simulation (Forage)",
    issuer: "Deloitte Australia | 2025"
  },
  {
    title: "Data Visualisation Job Simulation (Forage)",
    issuer: "Tata Group | 2025"
  },
  {
    title: "Power BI Dashboard Training",
    issuer: "WsCube Tech | 2025"
  },
  {
    title: "Responsible AI Workshop",
    issuer: "AI Manthan – GDG Cloud New Delhi | 2025"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title text-primary mb-6">
            Certifications
          </h2>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GradientBorderCard innerClassName="p-5 flex items-center gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
              </GradientBorderCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
