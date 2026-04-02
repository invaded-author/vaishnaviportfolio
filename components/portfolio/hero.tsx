"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl relative z-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20"
        >
          <div className="absolute inset-0">
            <img
              src="/images/profile.jpg"
              alt="Vaishnavi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Glow ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse pointer-events-none" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-medium mb-4 tracking-wide"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white"
        >
          Vaishnavi Chakraborty
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-4 font-medium"
        >
          Aspiring Data Analyst | SQL | Python | Power BI
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Transforming raw data into actionable business insights through analysis and visualization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-5"
          >
            <a href="https://github.com/vaishnavi-394" target="_blank" rel="noopener noreferrer">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
            variant="outline"
            className="border-border hover:bg-secondary px-6 py-5"
            asChild
          >
            <a href="/resume/Vaishnavi_resume.pdf" download="Vaishnavi_resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>

          <Button
            variant="outline"
            className="border-border hover:bg-secondary px-6 py-5"
            asChild
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
