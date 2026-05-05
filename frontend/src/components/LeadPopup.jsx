import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function LeadPopup({ isOpen, onClose, data }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const details = {
            name: formData.get('name'),
            city: formData.get('city'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            message: formData.get('message'),
            destination: data.context || 'General Enquiry'
        };

        const text = `Hi, I'm interested in planning a trip with mycititours - mycititours.com.
Please find my details below to assist :

Name: ${details.name}
City: ${details.city}
Phone: ${details.phone}
Email: ${details.email}
Message: ${details.message}
Enquiring for: ${details.destination}`;

        const url = `https://wa.me/918431352911?text=${encodeURIComponent(text)}`;
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
                        <div className="bg-[#f8f8f8] p-6 relative text-gray-600 text-left pt-10">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <h2 className="text-xl font-bold mb-2 text-gray-500 uppercase tracking-wide leading-tight">PLEASE FILL THE FORM & WE WILL GET BACK TO YOU SOON!</h2>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 pt-0 space-y-4 text-gray-800 bg-[#f8f8f8]">
                            {data.context && (
                                <div className="bg-white text-gray-600 text-sm p-3 border border-gray-200 font-medium mb-4">
                                    Enquiring for: {data.context}
                                </div>
                            )}
                            <div>
                                <input required name="name" type="text" className="w-full bg-transparent border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-500" placeholder="Your Name*" />
                            </div>
                            <div>
                                <input required name="city" type="text" className="w-full bg-transparent border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-500" placeholder="Your City*" />
                            </div>
                            <div>
                                <input required name="phone" type="tel" className="w-full bg-transparent border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-500" placeholder="Your Phone*" />
                            </div>
                            <div>
                                <input required name="email" type="email" className="w-full bg-transparent border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-500" placeholder="Your Email*" />
                            </div>
                            <div>
                                <textarea required name="message" rows="4" className="w-full bg-transparent border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all placeholder-gray-500 resize-none" placeholder="Your Message*"></textarea>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button type="submit" className="bg-[#C1D53A] hover:bg-[#aebd29] text-white font-bold py-3 px-8 transition-colors shadow-sm text-lg uppercase">
                                    Send Now
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
