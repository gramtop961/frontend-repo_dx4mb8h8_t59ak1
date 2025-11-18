import React from 'react'
import { motion } from 'framer-motion'

function CTA({ onOpenLead }) {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-16 text-white">
      <motion.div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),transparent_60%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to streamline your rentals?
        </motion.h2>
        <motion.p
          className="mt-2 text-blue-50/90"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Start your free trial or request a demo with a product specialist.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <button onClick={() => onOpenLead?.('trial')} className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-blue-700 shadow-lg transition hover:opacity-90">
            Start Your Free Trial
          </button>
          <button onClick={() => onOpenLead?.('demo')} className="inline-flex items-center justify-center rounded-lg bg-blue-500/20 px-6 py-3 text-white ring-1 ring-white/30 transition hover:bg-white/10">
            Request a Demo
          </button>
        </motion.div>
      </div>
      {/* Glow effects */}
      <motion.div
        className="pointer-events-none absolute -bottom-20 right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </section>
  )
}

export default CTA
