import { packagesData } from '../data/mock';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

export default function Packages() {
    return (
        <section className="py-12 md:py-24 bg-forest text-sand relative overflow-hidden" id="packages">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-terracotta/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-10 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-softgold"
                    >
                        Curated Touring Packages
                    </motion.h2>
                    <p className="text-lg text-sand/80 max-w-2xl mx-auto font-body">
                        All-inclusive itineraries thoughtfully designed to give you the ultimate South Indian experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packagesData.map((pkg, i) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className={`relative bg-sand text-charcoal rounded-3xl flex flex-col shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden ${pkg.popular ? 'border-2 border-terracotta transform md:-translate-y-4' : 'border border-forest/10 mt-0 md:mt-4'
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-terracotta to-softgold text-sand px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-20">
                                    <Star size={14} fill="currentColor" /> POPULAR
                                </div>
                            )}

                            <div className="w-full h-48 relative overflow-hidden">
                                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-sand via-transparent to-transparent"></div>
                            </div>

                            <div className="px-6 md:px-8 pt-4 pb-8 flex-grow flex flex-col">
                                <div className="mb-6">
                                    <span className="text-forest text-sm font-bold uppercase tracking-widest block mb-2">{pkg.duration}</span>
                                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{pkg.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-3xl md:text-4xl font-bold text-terracotta">{pkg.price}</span>
                                        <span className="text-sm text-charcoal/60 lowercase">{pkg.pricePerPerson}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {pkg.destinations.map(d => (
                                            <span key={d} className="bg-forest/5 text-forest px-3 py-1 rounded-md text-xs font-semibold">
                                                {d}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <ul className="space-y-4 mb-8">
                                        {pkg.inclusions.map(inc => (
                                            <li key={inc} className="flex items-start gap-3">
                                                <CheckCircle2 size={20} className="text-forest shrink-0 mt-0.5" />
                                                <span className="font-body text-charcoal/80 leading-snug">{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 rounded-xl font-bold transition-colors shadow-md flex justify-center items-center gap-2 mt-auto ${pkg.popular
                                            ? 'bg-gradient-to-r from-terracotta to-softgold text-sand hover:opacity-90'
                                            : 'bg-forest text-sand hover:bg-forest/90'
                                        }`}
                                >
                                    Book This Package
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Custom Package CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-gradient-to-r from-sand via-[#f7f3ea] to-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-xl text-charcoal"
                >
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-heading font-bold mb-2">Need a Custom Package?</h3>
                        <p className="text-charcoal/70 font-body max-w-lg">
                            Let our travel experts craft the perfect itinerary exactly matched to your schedule, interests, and budget.
                        </p>
                    </div>
                    <a
                        href="https://wa.me/918269794013?text=I want to create a custom South India tour package"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-forest text-sand px-8 py-4 rounded-full font-bold whitespace-nowrap hover:bg-terracotta transition-colors shadow-lg"
                    >
                        Request Custom Package
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
