import { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';

export default function Navbar({ openPopup }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Taxi Routes', href: '#taxi' },
        { name: 'Packages', href: '#packages' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Reviews', href: '#reviews' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                        src="logo.png"
                        alt="Mycititours Logo"
                        className={`transition-all duration-300 ${scrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'} w-auto`}
                    />
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-body text-sm uppercase tracking-wider font-bold hover:text-accent transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => openPopup('Plan Your Trip', 'General Enquiry')}
                        className="bg-primary text-white px-6 py-3 rounded-full font-body font-bold text-sm tracking-wide shadow-md hover:bg-primary-light transition-colors duration-300"
                    >
                        Plan Your Trip
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden p-2 rounded-full ${scrolled ? 'text-primary' : 'text-white bg-black/20 backdrop-blur-sm'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Content */}
            {mobileMenuOpen && (
                <div className="fixed top-0 left-0 w-full bg-primary text-white flex flex-col items-center justify-center gap-8 -z-10 h-screen">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-heading text-4xl font-semibold hover:text-accent transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            openPopup('Plan Your Trip', 'General Enquiry');
                        }}
                        className="mt-8 bg-accent text-white px-8 py-4 rounded-full font-body font-bold text-lg shadow-lg"
                    >
                        Plan Your Trip
                    </button>
                </div>
            )}
        </nav>
    );
}
