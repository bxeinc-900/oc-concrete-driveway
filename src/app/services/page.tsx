import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        title: "Concrete Driveways",
        description: "Our signature service. We provide full-service driveway replacement, including demolition, excavation, grading, and pouring of high-strength concrete tailored for heavy vehicles.",
        features: ["Steel-Reinforced Foundations", "Multiple Finish Options", "Rapid Completion Time"],
        image: "/hero_driveway_1772576798204.png"
    },
    {
        title: "Stamped Concrete",
        description: "Transform plain concrete into a work of art. We offer dozens of patterns and colors that mimic natural stone, European slate, cobblestone, or brick at a fraction of the cost.",
        features: ["UV-Resistant Coloring", "Slate & Stone Textures", "Custom Border Designs"],
        image: "/stamped_concrete_detail_1772576812583.png"
    },
    {
        title: "Paver Installation",
        description: "Interlocking concrete pavers offer unparalleled durability and aesthetic flexibility. Perfect for patios, pathways, and designer driveways that need to withstand movement.",
        features: ["Permeable Solutions", "Lifetime Structural Integrity", "Designer Pattern Layouts"],
        image: "/concrete_pavers_modern_1772576832304.png"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-slate-900 py-24 text-white">
                <div className="section-container px-4">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">Our Services</h1>
                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                        From heavy-duty industrial foundations to decorative residential patios, OC Concrete Driveway delivers precision and quality.
                    </p>
                </div>
            </section>

            {/* Service List */}
            <section className="py-24">
                <div className="section-container px-4 space-y-24">
                    {services.map((service, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                            <div className="flex-1 relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">{service.title}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="grid grid-cols-1 gap-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center space-x-3 text-slate-900 font-bold">
                                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <Link href="/contact" className="btn-primary inline-block">Request Quote for {service.title}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Simple */}
            <section className="py-24 bg-slate-50">
                <div className="section-container px-4">
                    <h2 className="text-3xl font-black text-center mb-16 uppercase">Service FAQ</h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-2 underline decoration-primary decoration-4">How long does a new driveway take?</h4>
                            <p className="text-slate-600">Most residential driveways take 3-5 days from demolition to the final finish. You can usually drive on it after 7 days.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="text-xl font-bold text-slate-900 mb-2 underline decoration-primary decoration-4">Do you offer warranties?</h4>
                            <p className="text-slate-600">Yes, we provide a 2-year structural warranty on all new concrete installations to cover any major cracking or settling issues.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
