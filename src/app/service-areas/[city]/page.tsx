import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const cityMap: { [key: string]: string } = {
    'costa-mesa': 'Costa Mesa',
    'anaheim': 'Anaheim',
    'huntington-beach': 'Huntington Beach',
    'laguna-niguel': 'Laguna Niguel',
    'villa-park': 'Villa Park',
    'tustin': 'Tustin',
    'yorba-linda': 'Yorba Linda',
    'chino-hills': 'Chino Hills',
    'corona': 'Corona'
};

interface Props {
    params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city: citySlug } = await params;
    const cityName = cityMap[citySlug];

    if (!cityName) {
        return {
            title: "Page Not Found",
        };
    }

    return {
        title: `Concrete Driveway Contractor in ${cityName}, CA | New Installation & Replacement`,
        description: `Looking to hire the best concrete driveway contractor in ${cityName}? We specialize in affordable driveway replacement, stamped concrete, and patio installation in ${cityName} and surrounding areas.`,
        keywords: `concrete driveway ${cityName}, concrete replacement ${cityName}, stamped concrete ${cityName}, concrete contractor ${cityName}, driveway cost ${cityName}`,
    };
}

export async function generateStaticParams() {
    return Object.keys(cityMap).map((city) => ({
        city,
    }));
}

export default async function CityPage({ params }: Props) {
    const { city: citySlug } = await params;
    const cityName = cityMap[citySlug];

    if (!cityName) {
        notFound();
    }

    return (
        <div className="flex flex-col items-center min-h-screen">
            {/* Hero Section */}
            <section className="w-full bg-slate-900 text-white py-20 px-6 text-center">
                <div className="section-container">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                        Expert Concrete Services in {cityName}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Top-Rated Concrete Driveway <br /> Contractor in {cityName}
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-slate-300 mb-10 leading-relaxed">
                        Enhance your {cityName} home with a durable, premium concrete driveway.
                        From custom stamped patterns to professional replacement, we deliver
                        excellence with over 20 years of local experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Get Your Free ${cityName} Quote
                        </Link>
                        <Link href="tel:9097872400" className="btn-outline border-white text-white hover:bg-white hover:text-slate-900">
                            Call (909) 787-2400
                        </Link>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-container py-24 px-6 md:px-0">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why Choose Us for Your {cityName} Project?</h2>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            When it comes to concrete work in {cityName}, experience and quality matter.
                            Our team understands the local soil conditions and environmental factors that affect
                            concrete longevity in Southern California. We don't just pour concrete;
                            we build foundations that last.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Licensed, Bonded, and Insured",
                                "Free Accurate On-Site Estimates",
                                "High-Strength Concrete Mixes",
                                "Modern Stamped & Decorative Finishes",
                                "Locally Owned & Operated Near You"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center space-x-3 text-slate-700 font-medium">
                                    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-slate-100 rounded-3xl p-10 shadow-inner">
                        <h3 className="text-2xl font-bold mb-4 italic text-primary">Serving the Heart of {cityName}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            We have been the go-to concrete contractor in {cityName} for years,
                            helping homeowners increase their property value with high-quality driveway installations.
                            Whether you're near the city center or in the surrounding neighborhoods,
                            our crew is ready to handle your concrete needs.
                        </p>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                            <p className="font-bold text-slate-900 mb-2">Service Highlights:</p>
                            <div className="grid grid-cols-2 gap-4 text-sm text-slate-500">
                                <div>• Driveway Removal</div>
                                <div>• Precise Grading</div>
                                <div>• Rebar Reinforcement</div>
                                <div>• Seal Coating</div>
                                <div>• Stamped Patterns</div>
                                <div>• Custom Colors</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="w-full bg-slate-50 py-24">
                <div className="section-container px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Concrete Services We Offer in {cityName}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                            <div className="text-4xl mb-4">🏗️</div>
                            <h3 className="text-xl font-bold mb-3">New Driveways</h3>
                            <p className="text-slate-500">Full installation of high-strength concrete driveways designed for the specific needs of {cityName} homes.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="text-xl font-bold mb-3">Stamped Concrete</h3>
                            <p className="text-slate-500">Get the look of brick, stone, or slate with our premium decorative stamped concrete solutions.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
                            <div className="text-4xl mb-4">🧱</div>
                            <h3 className="text-xl font-bold mb-3">Patio & Pavers</h3>
                            <p className="text-slate-500">Extend your outdoor living space with custom concrete patios and beautiful paver walkways.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-container py-24 px-6 text-center">
                <div className="bg-primary rounded-3xl p-12 text-white">
                    <h2 className="text-4xl font-black mb-6">Ready to Start Your {cityName} Project?</h2>
                    <p className="text-xl mb-10 opacity-90">Contact the #1 concrete contractor in {cityName} today for a free on-site consultation.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/contact" className="bg-white text-primary font-bold py-4 px-10 rounded-xl hover:bg-slate-100 transition-all shadow-xl">
                            Get My Estimate
                        </Link>
                        <span className="text-2xl font-bold">OR</span>
                        <Link href="tel:9097872400" className="text-3xl font-black hover:underline underline-offset-8">
                            (909) 787-2400
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
