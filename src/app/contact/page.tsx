export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-slate-900 py-24 text-white">
                <div className="section-container px-4">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight italic text-primary">Get a Quote</h1>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        Ready to transform your driveway? Leave your details below or call us directly.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="section-container px-4 grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 uppercase mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <a href="tel:9097872400" className="flex items-center space-x-6 group">
                                    <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 font-bold uppercase text-sm">Call or Text</p>
                                        <p className="text-2xl font-black text-slate-900 tracking-tight">(909) 787-2400</p>
                                    </div>
                                </a>

                                <div className="flex items-center space-x-6">
                                    <div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center rounded-2xl">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 font-bold uppercase text-sm">Service Area</p>
                                        <p className="text-2xl font-black text-slate-900 tracking-tight">OC & Riverside County</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                            <h3 className="text-xl font-black mb-4 uppercase">Business Hours</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between font-bold text-slate-700"><span>Mon - Fri:</span> <span>7:00 AM - 6:00 PM</span></li>
                                <li className="flex justify-between font-bold text-slate-700"><span>Sat:</span> <span>8:00 AM - 4:00 PM</span></li>
                                <li className="flex justify-between font-bold text-slate-700"><span>Sun:</span> <span className="text-primary">Closed</span></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
                            <h2 className="text-3xl font-black text-slate-900 uppercase mb-8 leading-tight">Fast Online Estimate</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none font-semibold text-slate-700" />
                                    <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none font-semibold text-slate-700" />
                                </div>
                                <input type="text" placeholder="Property Address / City" className="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none font-semibold text-slate-700" />
                                <select className="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none font-semibold text-slate-700">
                                    <option>Select Service</option>
                                    <option>Driveway Replacement</option>
                                    <option>Stamped Concrete</option>
                                    <option>Paver Installation</option>
                                    <option>Other / Masonry</option>
                                </select>
                                <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none font-semibold text-slate-700"></textarea>
                                <button type="submit" className="w-full btn-primary !text-xl py-5 !rounded-2xl uppercase tracking-widest italic">Send Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
