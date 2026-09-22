import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, MessageCircle, PackageCheck, Phone, Sparkles, User, Users, X } from 'lucide-react';
import { trackFormSubmission, trackConversion } from '../utils/tracking';
import { tourCategories } from '../data/mock';

const MotionDiv = motion.div;
const packageOptions = tourCategories.flatMap((category) =>
    category.packages.map((pkg) => ({
        id: pkg.id,
        label: `${pkg.name}${pkg.duration ? ` - ${pkg.duration}` : ''}`,
    }))
);

export default function LeadPopup({ isOpen, onClose, data }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const details = {
            name: formData.get('name')?.trim(),
            phone: formData.get('phone')?.trim(),
            preferredDestination: formData.get('destination')?.trim(),
            selectedPackage: formData.get('package')?.trim(),
            travelDate: formData.get('travel_date'),
            travelers: formData.get('travelers'),
            tripType: formData.get('trip_type'),
            notes: formData.get('notes')?.trim(),
            enquiryContext: data.context || 'General Enquiry'
        };

        // Track form submission
        trackFormSubmission('Lead Popup Enquiry', {
            lead_source: 'popup',
            enquiry_context: details.enquiryContext,
            preferred_destination: details.preferredDestination,
            selected_package: details.selectedPackage,
            trip_type: details.tripType,
        });

        // Track conversion (lead generation)
        trackConversion({
            value: 0,
            currency: 'INR',
            transaction_id: `lead_${Date.now()}`,
            event_label: details.enquiryContext,
            lead_source: 'popup',
        });

        const text = `Hi, I'm interested in planning a trip with mycititours - mycititours.com.
Please find my details below to assist :

Name: ${details.name}
Phone: ${details.phone}
Destination: ${details.preferredDestination || 'Need suggestions'}
Package: ${details.selectedPackage || 'Other / Custom itinerary'}
Travel Date: ${details.travelDate || 'Flexible'}
Travelers: ${details.travelers || 'Not sure'}
Trip Type: ${details.tripType}
Notes: ${details.notes || 'Please suggest the best package.'}
Enquiring for: ${details.enquiryContext}`;

        const url = `https://wa.me/918431352911?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        onClose('submitted');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-sm">
                    <MotionDiv
                        initial={{ opacity: 0, y: 34, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 22, scale: 0.96 }}
                        transition={{ duration: 0.28, ease: 'easeOut' }}
                        className="relative bg-white rounded-2xl sm:rounded-3xl w-full max-w-6xl shadow-2xl overflow-hidden max-h-[calc(100dvh-1rem)] sm:max-h-[94vh] flex flex-col md:grid md:grid-cols-[0.8fr_1.2fr]"
                    >
                        <button
                            onClick={() => onClose('dismissed')}
                            className="absolute right-3 top-3 sm:right-4 sm:top-4 z-30 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-lg backdrop-blur transition-colors hover:bg-white hover:text-gray-900 md:bg-gray-100 md:shadow-sm"
                            aria-label="Close enquiry form"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative shrink-0 bg-primary text-white p-5 sm:p-8 md:p-10 overflow-hidden max-h-[210px] sm:max-h-none">
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200"
                                    alt=""
                                    className="h-full w-full object-cover opacity-30"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80"></div>
                            </div>
                            <div className="relative z-10 flex h-full flex-col justify-between gap-4 sm:gap-8">
                                <div>
                                    <div className="mb-3 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-black uppercase text-white">
                                        <Sparkles size={13} />
                                        Free custom itinerary
                                    </div>
                                    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black leading-tight">
                                        Get the best South India package before you leave.
                                    </h2>
                                    <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-white/85">
                                        Share your plan and our team will send route, cab, hotel and pricing options directly on WhatsApp.
                                    </p>
                                </div>

                                <div className="hidden sm:grid grid-cols-3 gap-3 text-center">
                                    {['24x7 help', '100+ cabs', 'Local experts'].map((item) => (
                                        <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-3 text-xs font-bold uppercase text-white/90">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative flex min-h-0 flex-1 flex-col bg-white">
                            <form onSubmit={handleSubmit} className="min-h-0 overflow-y-auto p-5 pt-12 sm:p-8 sm:pt-16 md:p-10 md:pt-14">
                                <div className="mb-4 sm:mb-5">
                                    <p className="text-xs font-black uppercase text-accent">Quick enquiry</p>
                                    <h3 className="mt-1 font-heading text-xl sm:text-3xl font-black text-gray-950 leading-tight">
                                        {data.title || 'Plan My Trip'}
                                    </h3>
                                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-500">
                                        Most enquiries get a call-back within 10 minutes.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                    <label className="relative block col-span-2 sm:col-span-1">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                        <input required name="name" type="text" className="h-12 sm:h-14 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 pl-11 sm:pl-12 pr-4 text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" placeholder="Your name" />
                                    </label>

                                    <label className="relative block col-span-2 sm:col-span-1">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                        <input required name="phone" type="tel" inputMode="tel" pattern="[0-9+() -]{8,}" className="h-12 sm:h-14 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 pl-11 sm:pl-12 pr-4 text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" placeholder="WhatsApp number" />
                                    </label>

                                    <label className="relative block col-span-2 sm:col-span-1">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                        <input name="destination" type="text" className="h-12 sm:h-14 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 pl-11 sm:pl-12 pr-4 text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" placeholder="Destination" />
                                    </label>

                                    <label className="relative block col-span-2">
                                        <PackageCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                        <select name="package" defaultValue="" className="h-12 sm:h-14 w-full appearance-none rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 pl-11 sm:pl-12 pr-8 text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10">
                                            <option value="">Package or Other</option>
                                            {packageOptions.map((pkg) => (
                                                <option key={pkg.id} value={pkg.label}>
                                                    {pkg.label}
                                                </option>
                                            ))}
                                            <option value="Other / Custom itinerary">Other / Custom itinerary</option>
                                        </select>
                                    </label>

                                    <label className="relative block col-span-2 sm:col-span-1">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                        <input name="travel_date" type="date" className="h-12 sm:h-14 w-full rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 pl-11 sm:pl-12 pr-4 text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" />
                                    </label>

                                    <label className="relative block">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                        <select name="travelers" defaultValue="" className="h-12 sm:h-14 w-full appearance-none rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 pl-11 sm:pl-12 pr-8 text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10">
                                            <option value="">Travelers</option>
                                            <option value="1-2">1-2 travelers</option>
                                            <option value="3-5">3-5 travelers</option>
                                            <option value="6-10">6-10 travelers</option>
                                            <option value="10+">10+ travelers</option>
                                        </select>
                                    </label>

                                    <label className="relative block">
                                        <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                        <select name="trip_type" defaultValue="Family Tour" className="h-12 sm:h-14 w-full appearance-none rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 pl-11 sm:pl-12 pr-8 text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10">
                                            <option>Family Tour</option>
                                            <option>Couple Trip</option>
                                            <option>Corporate Travel</option>
                                            <option>Airport / Local Taxi</option>
                                            <option>Custom Itinerary</option>
                                        </select>
                                    </label>
                                </div>

                                <textarea name="notes" rows="2" className="mt-3 sm:mt-4 w-full resize-none rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 sm:py-4 text-sm sm:text-base font-semibold text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10" placeholder="Hotel, cab type, budget, pickup city..."></textarea>

                                <button type="submit" className="mt-4 sm:mt-5 flex h-12 sm:h-14 w-full items-center justify-center gap-3 rounded-xl sm:rounded-2xl bg-green-500 px-6 text-sm sm:text-base font-black uppercase text-white shadow-xl shadow-green-500/25 transition-all hover:-translate-y-0.5 hover:bg-green-600 active:translate-y-0">
                                    Send on WhatsApp
                                    <MessageCircle size={20} />
                                </button>

                                <p className="mt-2 sm:mt-3 text-center text-[11px] sm:text-xs font-semibold text-gray-400">
                                    No spam. Just itinerary, cab and price options.
                                </p>
                            </form>
                        </div>
                    </MotionDiv>
                </div>
            )}
        </AnimatePresence>
    );
}
