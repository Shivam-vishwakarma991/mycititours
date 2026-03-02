import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function LeadPopup({ isOpen, onClose, data }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const details = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            date: formData.get('date'),
            travelers: formData.get('travelers'),
            destination: data.context || 'General Enquiry'
        };

        const text = `Hi, I'm interested in planning a trip with mycititours - mycititours.com.
Please find my details below to assist :

Name: ${details.name}
Phone: ${details.phone}
Travel Date: ${details.date}
Number of Travelers: ${details.travelers}
Destination: ${details.destination}`;

        const url = `https://wa.me/919353273108?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
                    >
                        <div className="bg-primary p-6 relative text-white text-center">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <h2 className="text-2xl font-bold mb-1">{data.title || "Get a Free Quote"}</h2>
                            <p className="text-white/80 text-sm">Fill details below and we will contact you on WhatsApp instantly.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-gray-800">
                            {data.context && (
                                <div className="bg-orange-50 text-accent-dark text-sm p-3 rounded-lg border border-orange-100 font-medium">
                                    Enquiring for: {data.context}
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">Your Name *</label>
                                <input required name="name" type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="Enter Full Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1 text-gray-700">Phone / WhatsApp Number *</label>
                                <input required name="phone" type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="+91 XXXXX XXXXX" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Travel Date</label>
                                    <input required name="date" type="date" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1 text-gray-700">Travelers</label>
                                    <input required name="travelers" type="number" min="1" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" placeholder="E.g. 2" />
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-4 rounded-lg mt-4 transition-colors shadow-lg shadow-accent/30 text-lg">
                                Send Enquiry on WhatsApp
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
