import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <Image
          src="/hero_driveway_1772576798204.png"
          alt="Modern Concrete Driveway Orange County"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
        <div className="section-container relative z-10">
          <div className="max-w-2xl text-white space-y-8 px-4">
            <div className="inline-block bg-primary px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-lg">
              #1 Concrete Contractor in OC & Riverside
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white drop-shadow-2xl">
              BUILDING <span className="text-primary italic">DURABLE</span> <br />
              BEAUTY FOR YOUR HOME
            </h1>
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed drop-shadow-md">
              Expert concrete driveway installation, stamped concrete designs, and professional masonry. Transform your curb appeal with 20+ years of local expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" className="btn-primary text-center">
                Request Free Estimate
              </Link>
              <Link href="/portfolio" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold py-3 px-6 rounded-lg transition-all text-center border border-white/30">
                View Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Trust Badge */}
        <div className="absolute bottom-8 right-8 hidden md:block">
          <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 flex items-center space-x-4 animate-bounce-slow">
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <p className="font-black text-2xl text-slate-900 leading-none">4.9/5</p>
              <p className="text-slate-500 text-sm font-semibold">Google Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="section-container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">PREMIUM CONCRETE SERVICES</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
            <p className="text-lg text-slate-600">
              From classic gray driveways to custom decorative patterns, we deliver craftsmanship that lasts a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">DRIVEWAYS</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Standard and custom driveway replacement with reinforced foundations for heavy use.
              </p>
              <Link href="/services" className="text-primary font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="3" /></svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">STAMPED CONCRETE</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Mimic the look of natural stone, slate, or brick with our beautiful stamped finishes.
              </p>
              <Link href="/services" className="text-primary font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>Explore Patterns</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="3" /></svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">BLOCK WALLS</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Structural and ornamental block walls, retaining walls, and custom masonry projects.
              </p>
              <Link href="/services" className="text-primary font-bold flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                <span>See Masonry</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="section-container flex flex-col md:flex-row items-center gap-16 px-4">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-black text-slate-900 leading-tight uppercase">
              WHY ORANGE COUNTY <br />
              <span className="text-primary tracking-tight">CHOOSES US</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Licensed & Insured</h4>
                  <p className="text-slate-600">Total peace of mind with fully bonded and insured operations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">20+ Years Experience</h4>
                  <p className="text-slate-600">Established local expertise in Southern California hardscaping.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg text-primary mt-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">On-Time Completion</h4>
                  <p className="text-slate-600">Projects delivered exactly when promised, no excuses.</p>
                </div>
              </div>
            </div>
            <Link href="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="/stamped_concrete_detail_1772576812583.png"
                alt="Concrete Craftsmanship"
                width={600}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Testimonial Section Preview */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 pointer-events-none" />
        <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-white leading-tight uppercase tracking-tight">
              DON'T JUST TAKE <br />
              OUR WORD FOR IT
            </h2>
            <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20">
              <p className="text-xl italic text-slate-200 mb-6 leading-relaxed">
                "OC Concrete replaced our 30-year-old driveway in just 3 days. The finish is beautiful and the team was incredibly professional. Best investment we've made this year!"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-lg text-white shadow-xl">
                  JD
                </div>
                <div>
                  <p className="font-bold">John D.</p>
                  <p className="text-slate-400 text-sm">Yorba Linda Resident</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/concrete_pavers_modern_1772576832304.png"
              alt="Modern Patio"
              width={800}
              height={600}
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <span className="text-white font-bold text-lg">Modern interlocking paver patio, 2024 Project</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary shadow-inner">
        <div className="section-container text-center text-white space-y-8 px-4">
          <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase drop-shadow-lg">READY FOR A NEW LOOK?</h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto font-medium">
            Get a fast, professional estimate for your driveway or patio project today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <a href="tel:9097872400" className="bg-slate-900 hover:bg-slate-800 text-white font-black py-5 px-10 rounded-2xl text-xl shadow-2xl transition-all transform hover:-translate-y-1 block w-full sm:w-auto">
              CALL (909) 787-2400
            </a>
            <p className="font-black text-xl text-white/50 hidden sm:block">OR</p>
            <Link href="/contact" className="bg-white text-primary hover:bg-slate-50 font-black py-5 px-10 rounded-2xl text-xl shadow-2xl transition-all transform hover:-translate-y-1 block w-full sm:w-auto">
              GET AN ONLINE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
