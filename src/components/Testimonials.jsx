import React from 'react'

function Testimonials() {
  const items = [
    {
      q: 'LandlordLink cut our rent arrears by 40% in three months. Everything’s tracked and nothing slips.',
      a: 'Sarah M., Portfolio Landlord, Manchester',
    },
    {
      q: 'Repairs used to be chaos. Now we assign, track, and close jobs with full visibility.',
      a: 'James R., Property Manager, London',
    },
    {
      q: 'The compliance reminders alone pay for the service. Peace of mind, finally.',
      a: 'Priya S., Landlord, Birmingham',
    },
  ]

  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Trusted by UK landlords</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <blockquote key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-blue-100/90">“{t.q}”</p>
              <footer className="mt-4 text-sm text-blue-200/80">— {t.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
