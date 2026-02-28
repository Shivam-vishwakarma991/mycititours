import { useState } from 'react';
import { tourCategories } from '../data/mock';
import PackageModal from './PackageModal';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Packages({ openPopup }) {
    const [selectedPkg, setSelectedPkg] = useState(null);

    return (
        <section className="py-16 md:py-28 bg-gray-50 text-gray-800" id="packages">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-primary tracking-tight">
                        Our Recommended Tours
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body leading-relaxed">
                        Curated experiences across South India, ranging from local sightseeing to multi-day hillside escapades.
                    </p>
                </div>

                {tourCategories.map(categoryData => (
                    <div key={categoryData.id} className="mb-24 last:mb-0">
                        <div className="flex items-center gap-6 mb-12">
                            <h3 className="text-3xl md:text-4xl font-heading font-black text-gray-900 tracking-tight">
                                {categoryData.category}
                            </h3>
                            <div className="h-[2px] bg-primary/20 flex-grow rounded-full"></div>
                        </div>

                        <div className="flex flex-col gap-10">
                            {categoryData.packages.map((pkg, idx) => (
                                <div
                                    key={pkg.id}
                                    className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 flex flex-col md:flex-row overflow-hidden transition-all duration-300 w-full"
                                >
                                    {/* Image Section */}
                                    <div className="relative w-full md:w-5/12 h-64 md:h-auto min-h-[300px] overflow-hidden">
                                        <img
                                            src={pkg.image || "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070"}
                                            alt={pkg.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute top-6 left-6 flex gap-2">
                                            <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                                                <Clock size={14} /> {pkg.duration}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">

                                        <h4 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                                            {pkg.name}
                                        </h4>

                                        {pkg.itinerary && pkg.itinerary.length > 0 && (
                                            <p className="text-gray-600 font-body text-base md:text-lg mb-8 line-clamp-2 md:line-clamp-3 leading-relaxed">
                                                {pkg.itinerary[0].desc}
                                            </p>
                                        )}

                                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-auto pt-8 border-t border-gray-100">
                                            {pkg.price && (
                                                <div className="flex flex-col">
                                                    <span className="text-sm text-gray-500 uppercase font-bold tracking-widest mb-1">Starting Price</span>
                                                    <span className="text-3xl font-black text-accent">{pkg.price}</span>
                                                </div>
                                            )}

                                            <div className="flex-grow flex justify-end gap-4 ml-auto pt-2 w-full md:w-auto mt-4 md:mt-0">
                                                <button
                                                    onClick={() => setSelectedPkg({ ...pkg, category: categoryData.category })}
                                                    className="px-6 py-3.5 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold transition-colors w-full md:w-auto text-base text-center"
                                                >
                                                    View Details
                                                </button>
                                                <button
                                                    onClick={() => openPopup('Enquire Package', `Enquiring for: ${pkg.name} (${categoryData.category})`)}
                                                    className="px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-dark text-white font-bold transition-all w-full md:w-auto shadow-md shadow-accent/30 flex items-center justify-center gap-2 group/btn"
                                                >
                                                    Book Now
                                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <PackageModal
                pkg={selectedPkg}
                isOpen={!!selectedPkg}
                onClose={() => setSelectedPkg(null)}
                onEnquire={(pkg) => {
                    setSelectedPkg(null);
                    openPopup('Enquire Package', `Package: ${pkg.name} (${pkg.category})`);
                }}
            />
        </section>
    );
}
