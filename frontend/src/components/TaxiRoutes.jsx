import { taxiRoutes } from '../data/mock';
import { ArrowRight, MapPin } from 'lucide-react';

export default function TaxiRoutes({ openPopup }) {
    return (
        <section className="py-12 md:py-24 bg-white text-gray-800 border-t border-gray-100" id="taxi">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
                        Popular Taxi Routes
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
                        Direct transfers from Bangalore Airport to Mysore, outstation packages from Mangalore, and local sightseeing cabs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
                    {taxiRoutes.map((route) => (
                        <div key={route.id} className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-4 text-accent-dark font-bold text-sm tracking-wider uppercase">
                                    <MapPin size={16} /> {route.type}
                                </div>
                                <h3 className="text-xl font-heading font-bold mb-2 text-gray-900 leading-tight">
                                    {route.from} <span className="text-primary mx-1">to</span> {route.to}
                                </h3>
                                <p className="text-gray-600 text-sm mb-6">{route.vehicle}</p>
                            </div>

                            <button
                                onClick={() => openPopup('Book Taxi', `Taxi from ${route.from} to ${route.to}`)}
                                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-primary/20"
                            >
                                Enquire Now <ArrowRight size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-20 bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center text-primary shadow-sm">
                    <h3 className="text-2xl font-bold mb-4">Looking for a custom route?</h3>
                    <p className="text-gray-700 mb-8 max-w-2xl mx-auto">We provide tailored cab services starting from Bangalore, Mysore and Mangalore to anywhere in South India. Our fleet includes Sedans, SUVs, and TTs for group travels.</p>
                    <button
                        onClick={() => openPopup('Custom Request', 'Custom Route Taxi Enquriy')}
                        className="bg-accent hover:bg-accent-dark text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-accent/30 text-lg transition-transform hover:-translate-y-1"
                    >
                        Request Custom Route
                    </button>
                </div>
            </div>
        </section>
    );
}
