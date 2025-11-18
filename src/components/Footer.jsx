import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { title: 'Company', links: ['About', 'Careers', 'Contact'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookies'] },
            { title: 'Support', links: ['Help Centre', 'Status', 'Security'] },
          ].map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">{col.title}</h4>
              <ul className="mt-3 space-y-2 text-blue-100/90">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-blue-200/80 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>© {new Date().getFullYear()} LandlordLink. All rights reserved.</p>
          <p className="text-blue-200/60">Made for UK landlords & property managers.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
