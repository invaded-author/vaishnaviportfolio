"use client"

import { motion } from "framer-motion"
import { TrendingUp, AlertTriangle, PieChart, Target } from "lucide-react"
import { GradientBorderCard } from "./gradient-border-card"

const metrics = [
  {
    icon: TrendingUp,
    value: "₹265M+",
    label: "Revenue Analyzed",
    description: "ITC Hotels business analysis"
  },
  {
    icon: AlertTriangle,
    value: "₹17M+",
    label: "Loss Identified",
    description: "Cost optimization insights"
  },
  {
    icon: PieChart,
    value: "64%",
    label: "Risk Concentration",
    description: "Goldman Sachs risk patterns"
  },
  {
    icon: Target,
    value: "77%",
    label: "ML Model Recall",
    description: "Predictive model performance"
  }
]

export function Metrics() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title text-primary mb-4">
            Impact Metrics
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Key achievements from data analysis projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GradientBorderCard innerClassName="p-6 text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <metric.icon className="h-6 w-6" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {metric.value}
                </h3>
                <p className="font-medium text-foreground mb-1">
                  {metric.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </GradientBorderCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
