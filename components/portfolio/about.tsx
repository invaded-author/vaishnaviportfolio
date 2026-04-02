"use client"

import { motion } from "framer-motion"
import { GradientBorderCard } from "./gradient-border-card"

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-primary mb-6">
            About
          </h2>
          <GradientBorderCard innerClassName="p-8 md:p-10">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              A data analyst with hands-on experience in{" "}
              <span className="text-primary font-medium">SQL</span>,{" "}
              <span className="text-primary font-medium">Python</span>, and{" "}
              <span className="text-primary font-medium">Power BI</span>. 
              Skilled in working with real-world datasets, performing exploratory analysis, 
              and building dashboards that support data-driven decisions.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              I&apos;m passionate about uncovering insights from data and translating complex findings 
              into actionable recommendations that drive business value. My approach combines 
              technical rigor with clear communication to deliver impactful results.
            </p>
          </GradientBorderCard>
        </motion.div>
      </div>
    </section>
  )
}
