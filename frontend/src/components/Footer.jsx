import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 md:py-20 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
                <div>
                    <a href="#" className="flex items-center gap-2 mb-6 cursor-pointer">
                        <div className="bg-accent p-2 rounded-full text-white">
                            <MapPin size={24} />
                        </div>
                        <span className="font-heading text-2xl font-bold tracking-wider">mycititours.</span>
                    </a>
                    <p className="text-gray-400 font-body leading-relaxed mb-6">
                        Crafting unforgettable South Indian journeys with comfort, premium cab services, and expert guidance.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                            <Instagram size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-heading text-xl font-bold mb-6 text-accent">Quick Links</h4>
                    <ul className="space-y-4 font-body">
                        <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
                        <li><a href="#taxi" className="text-gray-400 hover:text-white transition-colors">Taxi Routes</a></li>
                        <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors">Tour Packages</a></li>
                        <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading text-xl font-bold mb-6 text-accent">Contact Info</h4>
                    <ul className="space-y-4 font-body">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-primary mt-1 shrink-0" size={18} />
                            <span className="text-gray-400">#45, Travel Hub Building, MG Road, Bangalore 560001</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-primary shrink-0" size={18} />
                            <a href="tel:+918269794013" className="text-gray-400 hover:text-white transition-colors">+91 82697 94013</a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-primary shrink-0" size={18} />
                            <a href="mailto:info@mycititours.com" className="text-gray-400 hover:text-white transition-colors">info@mycititours.com</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading text-xl font-bold mb-6 text-accent">Newsletter</h4>
                    <p className="text-gray-400 font-body mb-4">Subscribe for exclusive travel deals.</p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-body focus:outline-none focus:border-primary transition-colors text-white"
                        />
                        <button type="submit" className="bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-lg transition-colors font-body shadow-lg">
                            Subscribe Needs
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-body">
                <p>&copy; {new Date().getFullYear()} Mycititours. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
