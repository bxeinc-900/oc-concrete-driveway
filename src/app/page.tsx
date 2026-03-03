import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-slate-50 text-slate-900">
      {/* Header / Nav */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tighter text-blue-700">OC Concrete Driveway</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#services" className="text-slate-600 hover:text-blue-600 transition font-medium">Services</Link>
              <Link href="#about" className="text-slate-600 hover:text-blue-600 transition font-medium">About</Link>
              <Link href="#areas" className="text-slate-600 hover:text-blue-600 transition font-medium">Areas We Serve</Link>
              <Link href="tel:9097872400" className="text-slate-600 hover:text-blue-600 transition font-medium">Contact</Link>
            </nav>
            <div className="hidden md:flex items-center">
              <Link href="tel:9097872400" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
                (909) 787-2400
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622781864-b3338bf3bbf5?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Top-Rated Concrete Driveway Contractors in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Orange County</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            From new concrete driveway installation to full replacement and repairs, we provide premium quality concrete services across Orange County and Riverside.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="tel:9097872400" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-xl shadow-blue-600/30 transform hover:-translate-y-1">
              Get a Free Quote
            </Link>
            <Link href="#services" className="bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition transform hover:-translate-y-1">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-slate-500 font-semibold text-sm uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Licensed & Bonded
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              20+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Free Estimates
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Expert Concrete Services</h2>
            <p className="text-lg text-slate-600">
              As local concrete driveway contractors in Orange County, we design and install premium driveways, patios, and walkways for homeowners and businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Concrete Driveway Installation</h3>
              <p className="text-slate-600 leading-relaxed">
                Transform your home's curb appeal with a durable, long-lasting concrete driveway. Affordable concrete driveway installation in Orange County tailored to your property.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Concrete Repair & Replacement</h3>
              <p className="text-slate-600 leading-relaxed">
                Say goodbye to cracked, dangerous driveways. We specialize in residential concrete driveway repair and full replacement to restore safety and beauty.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Decorative & Stamped Concrete</h3>
              <p className="text-slate-600 leading-relaxed">
                Upgrade to a premium look with stamped concrete patios, pavers, and walkways. We offer competitive stamped concrete driveway costs in Orange County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section / SEO Optimized Text */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Replace Your Broken Concrete Driveway?</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Old, cracked concrete driveways can be a major headache. Not only are they unsightly, but they can also be dangerous, leading to trips and falls. When it comes to <strong>concrete driveway replacement in Orange County</strong>, OC Concrete Driveway & Patio provides reliable, top-tier service.
                </p>
                <p>
                  As a leading <strong>local concrete driveway contractor</strong>, we use the best materials and equipment. From preparing the base to pouring and polishing for a smooth finish, our team ensures your new driveway handles heavy use and lasts for decades.
                </p>
                <ul className="space-y-3 font-medium text-slate-800">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Boost your property's curb appeal and value.
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Eliminate trip hazards and liability risks.
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Custom designs: traditional, stamped, or pavers.
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=2574&auto=format&fit=crop"
                alt="New Concrete Driveway Installation"
                className="relative rounded-2xl shadow-xl border border-white"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex gap-4 items-center border border-slate-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  $
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase">Pricing</p>
                  <p className="font-bold text-slate-900">Affordable Rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="areas" className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute w-full h-full">
            <polygon fill="white" points="0,100 100,0 100,100" />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to Upgrade Your Driveway?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We are the top-rated concrete driveway contractors near you. Serving all of Orange County and Riverside with over 20 years of experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="tel:9097872400" className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition shadow-xl transform hover:-translate-y-1">
              Call Now: (909) 787-2400
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          <div>
            <span className="font-bold text-2xl tracking-tighter text-white mb-4 block">OC Concrete Driveway</span>
            <p className="text-sm leading-relaxed mb-4">
              Your best choice for concrete driveway contractors. Specializing in new installations, replacements, and patios across Orange County and Riverside, CA.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Concrete Driveway Installation</li>
              <li>Concrete Replacement</li>
              <li>Stamped Concrete</li>
              <li>Patios & Pavers</li>
              <li>Block Walls & Masonry</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Serving Orange County & Riverside</li>
              <li>Phone: (909) 787-2400</li>
              <li>Licensed, Bonded, Insured</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
          &copy; {new Date().getFullYear()} OC Concrete Driveway. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
