import React from 'react'

function ProblemSolution() {
  return (
    <section id="learn-more" className="relative bg-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">The problem</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-blue-100/90">
              <li>Spreadsheets everywhere. Emails lost. Missed certificates.</li>
              <li>Chasing late rent and tracking partial payments is a headache.</li>
              <li>Repairs drag on without clear visibility.</li>
              <li>Year‑end tax prep is stressful and time-consuming.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-blue-500/10 p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold">The solution</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-blue-100/90">
              <li>LandlordLink centralises properties, tenants, payments, repairs, documents, and compliance.</li>
              <li>Automated reminders, secure online payments, and real‑time dashboards.</li>
              <li>Built for UK regulations and best practices.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
