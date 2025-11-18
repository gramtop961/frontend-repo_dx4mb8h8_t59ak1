import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero({ onOpenLead }) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-36">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100 ring-1 ring-white/20 backdrop-blur">
            LandlordLink — UK Property Management, Simplified
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Simplify Your Property Management. <span className="text-blue-300">Maximise Your Returns.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-blue-100/90">
            The all‑in‑one platform for UK landlords and property managers to manage properties, tenants, rent, repairs, and compliance—securely and effortlessly.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => onOpenLead?.('trial')} className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600">
              Start Your Free Trial
            </button>
            <button onClick={() => onOpenLead?.('demo')} className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 text-white ring-1 ring-white/20 transition hover:bg-white/20">
              Request a Demo
            </button>
          </div>

          <p className="mt-6 text-xs text-blue-100/70">
            Keywords: property management software UK, landlord software, rental management, tenant management, rent collection, compliance management.
          </p>
        </motion.div>
      </div>

      {/* Floating scroll cue */}
      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-blue-200/70"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-blue-300/60" />
      </motion.div>
    </section>
  )
}

export default Hero
