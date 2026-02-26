import { motion } from 'framer-motion';
import { MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1c] text-sand py-20 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] bg-forest/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div>
                    <a href="#" className="flex items-center gap-2 mb-6 cursor-pointer">
                        <div className="bg-terracotta p-2 rounded-full text-sand">
                            <MapPin size={24} />
                        </div>
                        <span className="font-heading text-2xl font-bold tracking-tight text-sand">
                            Mycititours
                        </span>
                    </a>
                    <p className="font-body text-sand/60 mb-6 leading-relaxed">
                        Creating unforgettable South India travel experiences for over 15 years. Safe, comfortable, and magical.
                    </p>
                    <div className="flex items-center gap-4">
                        {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                            <a key={index} href="#" className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center hover:bg-terracotta transition-colors duration-300">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-heading font-bold text-lg mb-6 text-softgold">Quick Links</h4>
                    <ul className="space-y-4">
                        {['Home', 'Destinations', 'Packages', 'Why Us', 'Reviews'].map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="font-body text-sand/60 hover:text-terracotta transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold text-lg mb-6 text-softgold">Popular Locations</h4>
                    <ul className="space-y-4 text-sand/60 font-body">
                        <li>Kerala</li>
                        <li>Coorg</li>
                        <li>Ooty & Coonoor</li>
                        <li>Mysore</li>
                        <li>Pondicherry</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-bold text-lg mb-6 text-softgold">Contact Us</h4>
                    <ul className="space-y-4 text-sand/60 font-body mb-8">
                        <li>
                            <a href="tel:+918269794013" className="hover:text-terracotta hover:underline">+91 8269794013</a>
                            <span className="block text-xs uppercase opacity-70 mt-1">Mon-Sun, 9AM-9PM</span>
                        </li>
                        <li>
                            <a href="mailto:info@Mycititours.com" className="hover:text-terracotta hover:underline">info@Mycititours.com</a>
                            <span className="block text-xs uppercase opacity-70 mt-1">Reply within 24hrs</span>
                        </li>
                        <li>
                            Bangalore, Karnataka
                            <span className="block text-xs uppercase opacity-70 mt-1">Serving all South India</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 border-t border-sand/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-sand/40 font-body">
                <p>© 2024 Mycititours. All rights reserved.</p>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-sand/80">Privacy Policy</a>
                    <a href="#" className="hover:text-sand/80">Terms of Service</a>
                    <a href="#" className="hover:text-sand/80">Cancellation Policy</a>
                </div>
            </div>
        </footer>
    );
}
