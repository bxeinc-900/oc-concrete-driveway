export default function PortfolioPage() {
    const projects = [
        { name: "Modern Estate Driveway", location: "Yorba Linda", img: "/hero_driveway_1772576798204.png", category: "Driveway" },
        { name: "Rustic Stamped Patio", location: "Anaheim Hills", img: "/stamped_concrete_detail_1772576812583.png", category: "Stamped" },
        { name: "Designer Paver Walkway", location: "Irvine", img: "/concrete_pavers_modern_1772576832304.png", category: "Pavers" },
        { name: "Commercial Slab Project", location: "Riverside", img: "/hero_driveway_1772576798204.png", category: "Commercial" },
        { name: "Slate Textured Pool Deck", location: "Tustin", img: "/stamped_concrete_detail_1772576812583.png", category: "Stamped" },
        { name: "Interlocking Driveway", location: "Orange", img: "/concrete_pavers_modern_1772576832304.png", category: "Pavers" },
    ];

    return (
        <div className="bg-white min-h-screen">
            <section className="bg-slate-900 py-24 text-white">
                <div className="section-container px-4">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Our Portfolio</h1>
                    <p className="text-xl text-slate-400 max-w-2xl">
                        A showcase of our recent transformations across Orange County and Riverside.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="section-container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative rounded-3xl overflow-hidden shadow-lg aspect-square">
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-0 left-0 p-8 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block tracking-widest">{project.category}</span>
                                    <h3 className="text-2xl font-black uppercase mb-1">{project.name}</h3>
                                    <p className="text-slate-300 font-semibold">{project.location}, CA</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Quote */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="section-container px-4 text-center">
                    <h2 className="text-3xl font-black text-slate-900 uppercase mb-8">Ready to be our next showcase?</h2>
                    <a href="/contact" className="btn-primary inline-block">Get Your Free Estimate</a>
                </div>
            </section>
        </div>
    );
}
