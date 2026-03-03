"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 w-full bg-white border-b border-slate-200 transition-all duration-300 ${scrolled ? "py-2 shadow-lg" : "py-4"}`}>
            <div className="section-container flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/OC-Concrete-driveway_official-300x86.png"
                        alt="OC Concrete Driveway Logo"
                        width={300}
                        height={86}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="font-semibold text-slate-600 hover:text-primary transition-colors">Home</Link>
                    <Link href="/services" className="font-semibold text-slate-600 hover:text-primary transition-colors">Services</Link>
                    <Link href="/portfolio" className="font-semibold text-slate-600 hover:text-primary transition-colors">Portfolio</Link>
                    <Link href="/about" className="font-semibold text-slate-600 hover:text-primary transition-colors">About</Link>
                    <Link href="/contact" className="btn-primary">Get a Quote</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-secondary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 animate-in slide-in-from-top duration-300">
                    <Link href="/" onClick={() => setIsOpen(false)} className="block font-semibold text-slate-600">Home</Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="block font-semibold text-slate-600">Services</Link>
                    <Link href="/portfolio" onClick={() => setIsOpen(false)} className="block font-semibold text-slate-600">Portfolio</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="block font-semibold text-slate-600">About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="block btn-primary text-center">Get a Quote</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
