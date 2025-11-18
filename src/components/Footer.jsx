import React from 'react'

function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">Company</h4>
            <ul className="mt-3 space-y-2 text-blue-100/90">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">Legal</h4>
            <ul className="mt-3 space-y-2 text-blue-100/90">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-200">Support</h4>
            <ul className="mt-3 space-y-2 text-blue-100/90">
              <li><a href="#" className="hover:text-white">Help Centre</a></li>
              <li><a href="#" className="hover:text-white">Status</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-blue-200/80 sm:flex-row">
          <p>© {new Date().getFullYear()} LandlordLink. All rights reserved.</p>
          <p className="text-blue-200/60">Made for UK landlords & property managers.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
