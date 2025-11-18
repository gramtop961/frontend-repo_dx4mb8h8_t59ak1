import React from 'react'
import { motion } from 'framer-motion'

const faqs = [
  { q: 'Is LandlordLink suitable for single‑property landlords and portfolios?', a: 'Yes. It scales from one flat to large portfolios with multi‑user access.' },
  { q: 'How do online payments work?', a: 'Connect Stripe or GoCardless to accept rent by card or Direct Debit. Payments sync automatically and support partial payments and arrears workflows.' },
  { q: 'Is my data secure?', a: 'We use bank‑grade encryption, role‑based access, and UK/EU data compliance standards.' },
  { q: 'Can tenants submit repairs and view documents?', a: 'Tenants can log repairs, track progress, view agreements, and pay rent through their portal.' },
  { q: 'What about tax and reporting?', a: 'Export income/expense statements, filter by property, and share with your accountant. Built for UK rental reporting.' },
  { q: 'How fast is onboarding?', a: 'Most users get set up in under 30 minutes with guided import tools and sample templates.' },
]

function FAQ() {
  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              className="p-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
            >
              <h3 className="text-lg font-semibold">{f.q}</h3>
              <p className="mt-2 text-blue-100/90">{f.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
