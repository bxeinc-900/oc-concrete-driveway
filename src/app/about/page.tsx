import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            <section className="bg-slate-900 py-24 text-white">
                <div className="section-container px-4">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">About Us</h1>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        Established specialists in residential and commercial concrete for over two decades.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="section-container px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black text-slate-900 uppercase">Our Story</h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full" />
                        <p className="text-lg text-slate-600 leading-relaxed">
                            OC Concrete Driveway started over 20 years ago with a simple mission: to provide the homeowners of Orange County and Riverside with durable hardscaping that enhances property value.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Today, we are a fully licensed, bonded, and insured team known for our reliability and artisanal approach to concrete stamping and masonry. We handle everything from the initial demolition of your old driveway to the final protective seal.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-4xl font-black text-primary tracking-tighter italic">20+</p>
                                <p className="text-slate-500 font-bold uppercase text-sm">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-primary tracking-tighter italic">1000+</p>
                                <p className="text-slate-500 font-bold uppercase text-sm">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                        <Image
                            src="/hero_driveway_1772576798204.png"
                            alt="Our Work"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-50">
                <div className="section-container px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="text-center space-y-4">
                        <div className="text-4xl">🏆</div>
                        <h3 className="text-xl font-bold uppercase">Quality Materials</h3>
                        <p className="text-slate-600">We use only high-PSI concrete and premium chemical agents for stamping and coloring.</p>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="text-4xl">🤝</div>
                        <h3 className="text-xl font-bold uppercase">Family Owned</h3>
                        <p className="text-slate-600">Support a local business that treats every project like it's their own neighborhood.</p>
                    </div>
                    <div className="text-center space-y-4">
                        <div className="text-4xl">✅</div>
                        <h3 className="text-xl font-bold uppercase">Licensed Experts</h3>
                        <p className="text-slate-600">Fully compliant with California state regulations and safety protocols.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
