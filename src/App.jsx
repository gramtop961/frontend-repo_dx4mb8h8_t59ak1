import React, { useState } from 'react'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LeadModal from './components/LeadModal'

function App() {
  const [leadOpen, setLeadOpen] = useState(false)
  const [defaultPreference, setDefaultPreference] = useState('trial')
  const [source, setSource] = useState('hero')

  const openLead = (pref = 'trial', src = 'hero') => {
    setDefaultPreference(pref)
    setSource(src)
    setLeadOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onOpenLead={(pref) => openLead(pref, 'hero')} />
      <ProblemSolution />
      <Features />
      <Workflow />
      <Testimonials />
      <CTA onOpenLead={(pref) => openLead(pref, 'mid-cta')} />
      <FAQ />
      <Footer />

      <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} defaultPreference={defaultPreference} source={source} />
    </div>
  )
}

export default App
