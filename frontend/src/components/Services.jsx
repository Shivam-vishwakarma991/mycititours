import { motion } from 'framer-motion';
import { MapPin, Building, Plane, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: MapPin,
        title: 'Outstation Tours',
        description: 'Multi-day packages to popular South India destinations with comfortable stays.',
    },
    {
        icon: Building,
        title: 'Local City Tours',
        description: '8-hour and full-day packages for sightseeing within cities.',
    },
    {
        icon: Plane,
        title: 'Airport Transfers',
        description: 'Reliable pickup and drop services to/from airports.',
    }
];

export default function Services() {
    return (
        <section className="py-12 md:py-24 bg-sand text-charcoal" id="services">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-4"
                    >
                        Our Core <span className="text-terracotta">Services</span>
                    </motion.h2>
                    <p className="text-lg text-forest/70 max-w-2xl mx-auto font-body">
                        Professional travel solutions tailored to make every journey comfortable, safe, and memorable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-forest/10"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-forest to-terracotta transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            <div className="w-16 h-16 rounded-full bg-forest/5 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-sand transition-colors duration-500 mb-6">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
                            <p className="text-charcoal/70 font-body mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <a
                                href={`https://wa.me/918269794013?text=${encodeURIComponent(`Hi, I'm interested in planning a trip with mycititours - mycititours.com.\nPlease find my details below to assist :\n\nName: \nNumber of Travelers:\nTravel Date:\nDuration: \nDestination: ${service.title}`)}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-forest font-semibold group-hover:text-terracotta transition-colors w-max"
                            >
                                Book Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-forest rounded-2xl py-6 px-12 text-sand flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <div className="flex flex-col text-center">
                        <span className="font-heading text-xl font-bold">24x7</span>
                        <span className="text-sm opacity-80 uppercase tracking-widest">Available Anytime</span>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-sand/20"></div>
                    <div className="flex flex-col text-center">
                        <span className="font-heading text-xl font-bold">100+</span>
                        <span className="text-sm opacity-80 uppercase tracking-widest">Modern Vehicles</span>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-sand/20"></div>
                    <div className="flex flex-col text-center">
                        <span className="font-heading text-xl font-bold">GPS</span>
                        <span className="text-sm opacity-80 uppercase tracking-widest">Tracked & Insured</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
