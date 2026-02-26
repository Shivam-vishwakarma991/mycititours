import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden">
            {/* Background Image & Overlay */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
                    alt="Kerala Backwaters"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/40 to-transparent"></div>
            </motion.div>

            {/* Floating Circles */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-softgold/20 rounded-full blur-[100px] z-0"
            ></motion.div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start pt-24 text-sand">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="bg-sand/10 backdrop-blur-md px-6 py-2 rounded-full border border-sand/20 mb-8"
                >
                    <span className="text-sm font-semibold tracking-wide uppercase text-softgold">
                        Karnataka's Most Trusted Travel Service
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 max-w-3xl"
                >
                    Discover the Magic of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-softgold via-terracotta to-sand font-bold">
                        South India
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="text-lg md:text-xl font-body text-sand/90 max-w-2xl mb-12 leading-relaxed"
                >
                    All-inclusive cab tours with 100+ modern vehicles, professional drivers, and 24x7 support across Karnataka, Kerala & Tamil Nadu.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 items-center"
                >
                    <a
                        href="#packages"
                        className="group relative bg-terracotta text-sand px-8 py-4 rounded-full font-body font-semibold flex items-center gap-3 overflow-hidden transition-transform hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">Start Your Journey</span>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" size={20} />
                        <div className="absolute inset-0 bg-gradient-to-r from-terracotta to-softgold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>

                    <a
                        href="tel:+918269794013"
                        className="flex flex-col items-start bg-sand/10 border border-sand/20 backdrop-blur-md px-8 py-3 rounded-full hover:bg-sand/20 transition-colors"
                    >
                        <span className="text-xs uppercase tracking-widest text-sand/80">For Immediate Booking</span>
                        <span className="font-heading text-xl font-semibold flex items-center gap-2">
                            <Phone size={18} className="text-softgold" /> +91 8269794013
                        </span>
                    </a>
                </motion.div>
            </div>

            {/* Floating Action Icons */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
                <a href="tel:+918269794013" className="w-14 h-14 bg-forest/90 backdrop-blur text-sand rounded-full flex items-center justify-center hover:bg-forest transition-colors shadow-lg shadow-forest/20 hover:scale-110 active:scale-95">
                    <Phone size={24} />
                </a>
                <a href="https://wa.me/918269794013?text=Hi! I want to plan a South India trip" target="_blank" rel="noreferrer" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 hover:scale-110 active:scale-95">
                    <MessageCircle size={24} />
                </a>
            </div>
        </section>
    );
}
