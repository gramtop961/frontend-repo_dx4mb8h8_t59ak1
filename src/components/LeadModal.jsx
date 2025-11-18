import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function LeadModal({ open, onClose, defaultPreference = 'trial', source = 'hero' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    portfolio_size: '',
    preference: defaultPreference,
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const preference = form.preference || defaultPreference
      const endpoint = preference === 'demo' ? '/api/demo-requests' : '/api/leads'
      const payload = { ...form, preference, source }
      const res = await fetch(`${API_BASE}${endpoint}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      )
      if (!res.ok) {
        const msg = await res.text()
        throw new Error(msg || 'Request failed')
      }
      const data = await res.json()
      setSuccess('Thanks! We\'ll be in touch shortly.')
      setForm({ name: '', email: '', company: '', portfolio_size: '', preference, message: '' })
    } catch (err) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 shadow-2xl"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Get Started</h3>
              <p className="mt-1 text-sm text-slate-600">Start a free trial or request a guided demo.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="jane@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="Acme Rentals" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Portfolio size</label>
                  <select name="portfolio_size" value={form.portfolio_size} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none">
                    <option value="">Select</option>
                    <option value="1-5">1-5</option>
                    <option value="6-20">6-20</option>
                    <option value="21-100">21-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700">I want to</label>
                  <select name="preference" value={form.preference} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none">
                    <option value="trial">Start a free trial</option>
                    <option value="demo">Request a demo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message (optional)</label>
                  <input name="message" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none" placeholder="What can we help with?" />
                </div>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}
              {success && <p className="text-sm text-green-700">{success}</p>}

              <div className="mt-2 flex items-center justify-end gap-3">
                <button type="button" onClick={onClose} className="rounded-lg px-4 py-2 text-slate-700 hover:bg-slate-100">Cancel</button>
                <button disabled={loading} type="submit" className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white shadow-md transition hover:bg-blue-700 disabled:opacity-60">
                  {loading ? 'Sending…' : 'Submit'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
