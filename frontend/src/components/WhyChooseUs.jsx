import { motion } from 'framer-motion';
import { Shield, ShieldCheck, FileCheck, Settings, Heart, Satellite, Car, UserCheck, MapPin, Clock, Building } from 'lucide-react';

const features = [
    { icon: Car, title: 'Fleet of 100+ Vehicles', detail: 'Regular servicing at authorized centers' },
    { icon: UserCheck, title: 'Trained Professional Drivers', detail: 'COVID-19 vaccinated & First-aid trained' },
    { icon: MapPin, title: 'GPS & Insurance Coverage', detail: 'Real-time tracking available' },
    { icon: Clock, title: '24x7 Availability', detail: 'Never feel stranded' },
    { icon: Building, title: 'Multi-City Presence', detail: 'Local expertise everywhere' },
    { icon: Heart, title: 'WE CARE Philosophy', detail: 'Highest service standards' },
];

const fleetFeatures = [
    { icon: Shield, text: 'Seat Belts for All Seats' },
    { icon: Satellite, text: 'GPS Vehicle Tracking' },
    { icon: FileCheck, text: 'Fully Insured Vehicles' },
    { icon: Settings, text: 'Regular Maintenance' },
    { icon: Heart, text: 'First Aid Equipped' },
    { icon: ShieldCheck, text: 'COVID Safety Measures' },
];

export default function WhyChooseUs() {
    return (
        <section className="py-12 md:py-24 bg-[#fdfaf6] text-charcoal border-t border-forest/5" id="why-us">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-4"
                    >
                        South India's Most <span className="text-terracotta">Trusted</span>
                    </motion.h2>
                    <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-body">
                        15 years of excellence with 100+ modern vehicles and professional drivers across Karnataka, Kerala & Tamil Nadu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                            className="bg-white rounded-3xl p-8 border border-forest/5 flex flex-col items-start shadow-sm transition-all"
                        >
                            <div className="bg-gradient-to-br from-forest/10 to-transparent p-4 rounded-2xl mb-6 text-forest">
                                <feature.icon size={32} />
                            </div>
                            <h3 className="font-heading text-xl font-bold mb-2 text-forest">{feature.title}</h3>
                            <p className="text-charcoal/60 font-body text-sm">{feature.detail}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Fleet Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-forest to-[#1a2f19] rounded-3xl p-6 md:p-14 text-sand shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>

                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 md:mb-10 text-center text-softgold">Every Vehicle is Equipped With</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10 relative z-10">
                        {fleetFeatures.map((ff, i) => (
                            <motion.div
                                key={ff.text}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="bg-sand/10 p-4 rounded-full mb-4 group-hover:bg-terracotta/90 transition-colors duration-300">
                                    <ff.icon size={28} className="text-softgold group-hover:text-sand transition-colors" />
                                </div>
                                <span className="font-body text-sm font-semibold tracking-wide">{ff.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
