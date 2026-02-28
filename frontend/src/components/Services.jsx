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

export default function Services({ openPopup }) {
    return (
        <section className="py-12 md:py-24 bg-white text-gray-800" id="services">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Our Core <span className="text-accent">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
                        Professional travel solutions tailored to make every journey comfortable, safe, and memorable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-gray-100"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 font-body mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <button
                                onClick={() => openPopup('Book Service', `Service: ${service.title}`)}
                                className="flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors"
                            >
                                Enquire Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom Banner */}
                <div className="bg-primary rounded-2xl py-6 px-12 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg shadow-primary/20">
                    <div className="flex flex-col text-center">
                        <span className="font-heading text-xl font-bold text-accent">24x7</span>
                        <span className="text-sm opacity-90 uppercase tracking-widest text-blue-100">Available Anytime</span>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-blue-400"></div>
                    <div className="flex flex-col text-center">
                        <span className="font-heading text-xl font-bold text-accent">100+</span>
                        <span className="text-sm opacity-90 uppercase tracking-widest text-blue-100">Modern Vehicles</span>
                    </div>
                    <div className="hidden md:block w-px h-12 bg-blue-400"></div>
                    <div className="flex flex-col text-center">
                        <span className="font-heading text-xl font-bold text-accent">GPS</span>
                        <span className="text-sm opacity-90 uppercase tracking-widest text-blue-100">Tracked & Insured</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
