"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8 px-6 border-t border-border"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vaishnavi Chakraborty. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
