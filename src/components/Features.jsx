import React from 'react'
import { Home, Users2, PoundSterling, CreditCard, Wrench, Hammer, BarChart3, PieChart, ShieldCheck, FileText, KeyRound } from 'lucide-react'

const features = [
  {
    title: 'Property Management',
    desc: 'Keep all property details in one place. See occupancy and status at a glance. Track key dates, certificates, and tasks per property.',
    Icon: Home,
  },
  {
    title: 'Tenant Management',
    desc: 'Centralised tenant profiles and communication logs. Send updates and notices in a few clicks. Invite tenants to a self‑service portal.',
    Icon: Users2,
  },
  {
    title: 'Rent Payments',
    desc: 'Secure online payments via Stripe or GoCardless. Handle partial payments and automated overdue reminders. Real‑time reconciliation.',
    Icon: PoundSterling,
  },
  {
    title: 'Repairs & Maintenance',
    desc: 'Tenants submit requests with photos. Assign contractors and track progress to resolution. Full audit trail for compliance and disputes.',
    Icon: Wrench,
  },
  {
    title: 'Financial Tracking & Reports',
    desc: 'Track income and expenses by property and portfolio. Export statements for accountants and HMRC. Clear cash‑flow visibility.',
    Icon: BarChart3,
  },
  {
    title: 'Compliance & Documents',
    desc: 'Manage gas safety, EPC, EICR with automated reminders. Store agreements and generate templates securely. Audit‑ready.',
    Icon: ShieldCheck,
  },
  {
    title: 'User Roles',
    desc: 'Landlord/manager views for full control. Tenant view for payments, repairs, and documents. Clear permissions to protect data.',
    Icon: KeyRound,
  },
]

function Features() {
  return (
    <section className="relative bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold">Key Features</h2>
        <p className="mt-2 text-blue-200/80">Built for UK landlords and property managers.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, Icon }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-xl bg-blue-500/15 p-3 ring-1 ring-blue-400/20">
                <Icon className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-blue-100/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
