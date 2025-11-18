import React from 'react'

const steps = [
  {
    n: '1',
    t: 'Add Properties',
    d: 'Import or add properties with certificates, key dates, and notes.'
  },
  {
    n: '2',
    t: 'Invite Tenants',
    d: 'Create tenant profiles and send portal invites.'
  },
  {
    n: '3',
    t: 'Connect Payments',
    d: 'Enable Stripe or GoCardless for seamless rent collection.'
  },
  {
    n: '4',
    t: 'Manage & Track',
    d: 'Monitor rent, repairs, documents, and compliance from one dashboard.'
  },
  {
    n: '5',
    t: 'Report & Optimise',
    d: 'Export financials, view insights, and maximise returns.'
  },
]

function Workflow() {
  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="mt-2 text-blue-200/80">Get up and running in minutes.</p>
        <ol className="mt-10 grid gap-6 md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-blue-100/90">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Workflow
