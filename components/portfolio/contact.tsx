"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientBorderCard } from "./gradient-border-card"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="section-title text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Let&apos;s Connect
          </p>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            I&apos;m always open to discussing data analytics opportunities, 
            collaborations, or just having a chat about data.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 hover:scale-105 transition-transform"
              asChild
            >
              <a href="https://www.linkedin.com/in/vaishnavi-chakraborty/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="border-border hover:bg-secondary px-6 hover:scale-105 transition-transform"
              asChild
            >
              <a href="https://github.com/vaishnavi-394" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View GitHub
              </a>
            </Button>
            
            <Button
              variant="outline"
              className="border-border hover:bg-secondary px-6 hover:scale-105 transition-transform"
              asChild
            >
              <a href="mailto:vaishnavichakraborty0309@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </a>
            </Button>
          </div>
          
          <div className="inline-block">
            <GradientBorderCard innerClassName="p-8">
              <div className="flex items-center justify-center gap-8 text-muted-foreground">
                <a
                  href="https://github.com/vaishnavi-394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:scale-110 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaishnavi-chakraborty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:scale-110 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:vaishnavichakraborty0309@gmail.com"
                  className="hover:text-primary hover:scale-110 transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </GradientBorderCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
