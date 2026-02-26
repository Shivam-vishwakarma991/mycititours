import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Menu, X } from 'lucide-react';

export default function Navbar() {
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
        { name: 'Destinations', href: '#destinations' },
        { name: 'Packages', href: '#packages' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Reviews', href: '#reviews' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-sand/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="bg-terracotta p-2 rounded-full text-sand group-hover:bg-forest transition-colors duration-300">
                        <MapPin size={24} />
                    </div>
                    <span className={`font-heading text-2xl font-bold tracking-tight ${scrolled ? 'text-forest' : 'text-sand'}`}>
                        Mycititours
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-body text-sm uppercase tracking-wider font-medium hover:text-terracotta transition-colors ${scrolled ? 'text-charcoal' : 'text-sand/90'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <motion.a
                        href="#packages"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-forest text-sand px-6 py-3 rounded-full font-body font-medium flex items-center gap-2 hover:bg-terracotta transition-colors duration-300"
                    >
                        Plan Your Trip
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-forest bg-sand/80 backdrop-blur-sm p-2 rounded-full"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-0 left-0 w-full bg-forest text-sand flex flex-col items-center justify-center gap-8 -z-10"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 + 0.2 }}
                                onClick={() => setMobileMenuOpen(false)}
                                className="font-heading text-4xl font-semibold hover:text-terracotta transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <motion.a
                            href="#packages"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-8 bg-terracotta text-sand px-8 py-4 rounded-full font-body font-medium text-lg"
                        >
                            Plan Your Trip
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
