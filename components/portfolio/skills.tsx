"use client"

import { motion } from "framer-motion"
import { GradientBorderCard } from "./gradient-border-card"

const coreSkills = ["SQL", "Power BI", "Python", "Data Analysis", "Data Visualization"]
const secondarySkills = ["Pandas", "NumPy", "Excel", "EDA", "Data Cleaning"]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="section-title text-primary mb-6">
            Skills
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <GradientBorderCard innerClassName="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="skill-tag px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium text-sm hover:bg-primary/20 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GradientBorderCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GradientBorderCard innerClassName="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Secondary Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {secondarySkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="skill-tag px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium text-sm hover:bg-secondary/80 hover:scale-105 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GradientBorderCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
