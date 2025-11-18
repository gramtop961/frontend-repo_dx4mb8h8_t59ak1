import React from 'react'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <ProblemSolution />
      <Features />
      <Workflow />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
