import React from 'react'

function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-br from-blue-600 to-indigo-700 py-16 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-bold">Ready to streamline your rentals?</h2>
        <p className="mt-2 text-blue-50/90">Start your free trial or request a demo with a product specialist.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-blue-700 shadow-lg transition hover:opacity-90">
            Start Your Free Trial
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-lg bg-blue-500/20 px-6 py-3 text-white ring-1 ring-white/30 transition hover:bg-white/10">
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
