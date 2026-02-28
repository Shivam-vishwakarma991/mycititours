import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

export default function Hero({ openPopup }) {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-primary">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
                    alt="Kerala Backwaters"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start pt-16 md:pt-24 text-white">
                <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 mb-8">
                    <span className="text-sm font-semibold tracking-wide uppercase text-accent">
                        Karnataka's Most Trusted Travel Service
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 max-w-3xl text-white">
                    Discover the Magic of <br />
                    <span className="text-accent">
                        South India
                    </span>
                </h1>

                <p className="text-lg md:text-xl font-body text-white/90 max-w-2xl mb-8 md:mb-12 leading-relaxed">
                    All-inclusive cab tours with 100+ modern vehicles, professional drivers, and 24x7 support across Karnataka, Kerala & Tamil Nadu.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <button
                        onClick={() => openPopup('Get a Free Quote', 'General Enquiry')}
                        className="group relative bg-accent text-white px-8 py-4 rounded-full font-body font-bold text-lg flex items-center gap-3 overflow-hidden shadow-lg shadow-accent/40"
                    >
                        <span className="relative z-10">Start Your Journey</span>
                        <ArrowRight className="relative z-10" size={20} />
                    </button>

                    <a
                        href="tel:+918269794013"
                        className="flex flex-col items-start bg-white/10 border border-white/20 backdrop-blur-md px-8 py-3 rounded-full hover:bg-white/20 transition-colors"
                    >
                        <span className="text-xs uppercase tracking-widest text-white/80">For Immediate Booking</span>
                        <span className="font-heading text-xl font-semibold flex items-center gap-2">
                            <Phone size={18} className="text-accent" /> +91 8269794013
                        </span>
                    </a>
                </div>
            </div>

            {/* Floating Action Icons */}
            <div className="fixed right-6 bottom-6 md:top-1/2 md:-translate-y-1/2 flex flex-col gap-4 z-50">
                <a href="tel:+918269794013" className="w-14 h-14 bg-primary backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors shadow-lg border border-white/10">
                    <Phone size={24} />
                </a>
                <a href={`https://wa.me/918269794013?text=${encodeURIComponent(`Hi, I'm interested in planning a trip with mycititours - mycititours.com.\nPlease find my details below to assist :\n\nName: \nNumber of Travelers:\nTravel Date:\nDuration: \nDestination: `)}`} target="_blank" rel="noreferrer" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors shadow-lg">
                    <MessageCircle size={24} />
                </a>
            </div>
        </section>
    );
}
