import { Play, CheckCircle2, Clock, X } from 'lucide-react';

export default function PackageModal({ pkg, isOpen, onClose, onEnquire }) {
    if (!isOpen || !pkg) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div
                className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative max-h-[90vh]"
                style={{ animation: 'slideUp 0.3s ease-out forwards' }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white md:text-gray-400 bg-black/50 md:bg-gray-100 hover:bg-black/70 md:hover:bg-gray-200 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm"
                >
                    <X size={20} />
                </button>

                {/* Left: Image & Quick Details */}
                <div className="w-full md:w-5/12 relative bg-gray-100 flex-shrink-0">
                    <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-56 md:h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 inline-block">
                            {pkg.duration}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight drop-shadow-md">
                            {pkg.name}
                        </h3>
                        {pkg.price && (
                            <div className="mt-4 flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-accent drop-shadow-sm">{pkg.price}</span>
                                <span className="text-sm text-gray-200 uppercase font-bold tracking-wide">Starting from</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Detailed Info */}
                <div className="w-full md:w-7/12 flex flex-col bg-white overflow-y-auto">
                    <div className="p-6 md:p-8 flex-grow">
                        {pkg.inclusions && pkg.inclusions.length > 0 && (
                            <div className="mb-8">
                                <h4 className="text-xl font-heading font-bold text-gray-900 border-b border-gray-200 pb-3 mb-4">
                                    Package Inclusions
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {pkg.inclusions.map((inc, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-700">
                                            <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                            <span className="font-medium text-sm md:text-base leading-snug">{inc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {pkg.itinerary && pkg.itinerary.length > 0 && (
                            <div>
                                <h4 className="text-xl font-heading font-bold text-gray-900 border-b border-gray-200 pb-3 mb-5">
                                    Tour Itinerary
                                </h4>
                                <div className="space-y-6">
                                    {pkg.itinerary.map((day, i) => (
                                        <div key={i} className="relative pl-6 md:pl-8 border-l-2 border-primary/20 last:border-l-transparent">
                                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white"></div>
                                            <h5 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                                                <span className="text-primary mr-2 uppercase tracking-wide text-sm">Day {i + 1}</span>
                                                <br />{day.title}
                                            </h5>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                {day.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(!pkg.itinerary || pkg.itinerary.length === 0) && (
                            <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                A perfectly curated itinerary awaits you! Drop an enquiry to receive the full day-by-day travel plan and pricing details instantly on your WhatsApp.
                            </p>
                        )}
                    </div>

                    {/* Fixed Bottom Action */}
                    <div className="p-6 bg-gray-50 border-t border-gray-100 flex-shrink-0">
                        <button
                            onClick={() => onEnquire(pkg)}
                            className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-lg"
                        >
                            <Play size={20} className="fill-current" />
                            Send Enquiry on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
