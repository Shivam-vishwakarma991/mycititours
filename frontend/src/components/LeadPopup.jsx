import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Clock, MessageCircle, Phone, X } from 'lucide-react';
import { tourCategories } from '../data/mock';
import { trackFormSubmission, trackConversion } from '../utils/tracking';

const MotionDiv = motion.div;
const packages = tourCategories.flatMap((category) => category.packages);
const customPackage = { id: 'custom', name: 'Other / Custom itinerary' };

function QuickEnquiry({ onClose, data = {} }) {
    const context = data.context || 'General Enquiry';
    const hasSpecificEnquiry = !['General Enquiry', 'Landing Page Lead'].includes(context);
    const [selectedId, setSelectedId] = useState(() =>
        packages.find((pkg) => context.includes(pkg.name))?.id
        || (hasSpecificEnquiry ? customPackage.id : packages[0]?.id || customPackage.id)
    );
    const selectedPackage = packages.find((pkg) => pkg.id === selectedId) || customPackage;
    const dialogRef = useRef(null);
    const closeRef = useRef(null);
    const contactStarted = useRef(false);
    const isCustom = selectedPackage.id === customPackage.id;

    useEffect(() => {
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        closeRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose('dismissed');
            if (event.key !== 'Tab') return;
            const controls = dialogRef.current?.querySelectorAll('button, a[href]');
            if (!controls?.length) return;
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
            previousFocus?.focus();
        };
    }, [onClose]);

    const handleContact = (channel) => {
        if (contactStarted.current) return;
        contactStarted.current = true;
        const leadDetails = {
            lead_source: 'popup',
            enquiry_context: context,
            preferred_destination: selectedPackage.name,
            selected_package: selectedPackage.name,
            trip_type: isCustom ? 'Custom Itinerary' : 'Tour Package',
            contact_method: channel,
        };
        trackFormSubmission('Lead Popup Enquiry', leadDetails);
        trackConversion({
            value: 0,
            currency: 'INR',
            transaction_id: `lead_${Date.now()}`,
            event_label: context,
            ...leadDetails,
        });
        onClose('submitted');
    };

    const message = `Hi Mycititours, I'd like to enquire about ${selectedPackage.name}.${selectedPackage.duration ? `\nDuration: ${selectedPackage.duration}` : ''}\nEnquiring for: ${context}\n\nPlease share availability and pricing. I'll share my travel dates and group details here.`;
    const focusStyle = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

    return (
        <MotionDiv
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-popup-title"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="flex max-h-[calc(100dvh-1rem)] w-full max-w-[540px] flex-col overflow-hidden rounded-[28px] bg-white text-slate-900 shadow-2xl sm:max-h-[calc(100dvh-3rem)]"
        >
            <header className="relative shrink-0 bg-blue-50/60 px-5 pb-5 pt-5 sm:px-6 sm:pt-6">
                <p className="mb-2 pr-10 text-[11px] font-black uppercase tracking-[0.16em] text-accent">Myciti tours · Quick enquiry</p>
                <h2 id="lead-popup-title" className="pr-10 text-2xl font-black leading-tight text-primary sm:text-[28px]">
                    Your next trip starts here.
                </h2>
                <p className="mt-2 pr-5 text-sm leading-relaxed text-slate-600">Pick a package. Get availability and a quote directly from our team.</p>
                <button ref={closeRef} type="button" onClick={() => onClose('dismissed')} aria-label="Close enquiry" className={`absolute right-4 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-800 transition hover:bg-gray-100 ${focusStyle}`}>
                    <X size={18} />
                </button>
            </header>

            <div className="min-h-0 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6">
                <p id="lead-packages-label" className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-gray-500">Which trip are you planning?</p>
                <div role="group" aria-labelledby="lead-packages-label" className="space-y-2.5">
                    {[...packages, customPackage].map((pkg) => {
                        const selected = selectedPackage.id === pkg.id;
                        return (
                            <button key={pkg.id} type="button" aria-pressed={selected} onClick={() => setSelectedId(pkg.id)} className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition ${focusStyle} ${selected ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50'}`}>
                                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected ? 'border-primary bg-primary text-white' : 'border-gray-300'}`}>
                                    {selected && <Check size={13} aria-hidden="true" />}
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className={`block text-sm font-extrabold leading-snug ${selected ? 'text-primary' : 'text-slate-800'}`}>{pkg.name}</span>
                                    {pkg.duration && <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600"><span className="inline-flex items-center gap-1"><Clock size={12} aria-hidden="true" />{pkg.duration}</span>{pkg.price && <span className="font-bold">{pkg.price}</span>}</span>}
                                    {pkg.id === customPackage.id && <span className="mt-1 block text-xs text-slate-500">Need a different plan? Let's discuss it.</span>}
                                </span>
                            </button>
                        );
                    })}
                </div>
                {hasSpecificEnquiry && <p className="mt-4 rounded-xl bg-blue-50 px-3 py-2 text-xs leading-relaxed text-primary">{context}</p>}
                <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">No forms to fill. Share your dates and travel details on WhatsApp or over a call.</p>
            </div>

            <footer className="shrink-0 space-y-2.5 border-t border-gray-100 bg-white px-4 py-3 sm:px-5 sm:py-4">
                <a href="tel:+919353273108" onClick={() => handleContact('phone')} className={`flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-primary px-4 py-3 text-center text-white transition hover:bg-blue-900 ${focusStyle}`}>
                    <Phone size={19} className="shrink-0" aria-hidden="true" />
                    <span className="min-w-0"><span className="block text-[13px] font-extrabold">Call for a trip quote</span><span className="mt-0.5 block text-[11px] text-blue-100">+91 93532 73108</span></span>
                </a>
                <a href={`https://wa.me/918431352911?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" onClick={() => handleContact('whatsapp')} className={`flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-green-600 px-4 py-3 text-center text-white transition hover:bg-green-700 ${focusStyle}`}>
                    <MessageCircle size={20} className="shrink-0" aria-hidden="true" />
                    <span className="min-w-0"><span className="block text-[13px] font-extrabold">Enquire on WhatsApp</span><span className="mt-0.5 block text-[11px] text-green-50">Send your selected package</span></span>
                </a>
            </footer>
        </MotionDiv>
    );
}

export default function LeadPopup({ isOpen, onClose, data }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-2 backdrop-blur-sm sm:p-6">
                    <QuickEnquiry onClose={onClose} data={data} />
                </div>
            )}
        </AnimatePresence>
    );
}
