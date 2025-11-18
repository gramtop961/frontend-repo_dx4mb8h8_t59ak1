import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { n: '1', t: 'Add Properties', d: 'Import or add properties with certificates, key dates, and notes.' },
  { n: '2', t: 'Invite Tenants', d: 'Create tenant profiles and send portal invites.' },
  { n: '3', t: 'Connect Payments', d: 'Enable Stripe or GoCardless for seamless rent collection.' },
  { n: '4', t: 'Manage & Track', d: 'Monitor rent, repairs, documents, and compliance from one dashboard.' },
  { n: '5', t: 'Report & Optimise', d: 'Export financials, view insights, and maximise returns.' },
]

function Workflow() {
  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="mt-2 text-blue-200/80"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Get up and running in minutes.
        </motion.p>
        <ol className="mt-10 grid gap-6 md:grid-cols-5">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-blue-100/90">{s.d}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Workflow
