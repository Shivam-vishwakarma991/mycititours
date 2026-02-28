import { ShieldCheck, Clock, MapPin, Users, HeartHandshake, ShieldAlert } from 'lucide-react';

const features = [
    {
        icon: ShieldCheck,
        title: 'Verified Partners',
        description: 'We only work with trusted, highly-rated hotels and travel partners who meet our strict quality standards.'
    },
    {
        icon: Clock,
        title: 'Punctual Service',
        description: 'Time is luxury. Our drivers are trained to prioritize punctuality so your itinerary runs smoothly.'
    },
    {
        icon: MapPin,
        title: 'Local Expertise',
        description: 'Drivers double as local guides providing context and hidden gems you will not find online.'
    },
    {
        icon: Users,
        title: 'Family Friendly',
        description: 'Vehicles equipped for multi-generational travel, ensuring comfort for both seniors and children.'
    },
    {
        icon: HeartHandshake,
        title: 'Transparent Pricing',
        description: 'No hidden toll charges, parking fees or driver allowances. What you see is what you pay.'
    },
    {
        icon: ShieldAlert,
        title: '24/7 Support',
        description: 'A dedicated trip manager is available round-the-clock during your journey for complete peace of mind.'
    }
];

const fleetFeatures = [
    { icon: "📶", text: "Free Wi-Fi" },
    { icon: "❄️", text: "AC Cabs" },
    { icon: "🧳", text: "Luggage Carrier" },
    { icon: "📺", text: "Entertainment" },
    { icon: "💧", text: "Water Bottles" },
    { icon: "📍", text: "GPS Tracking" },
];

export default function WhyChooseUs() {
    return (
        <section className="py-12 md:py-24 bg-gray-50 text-gray-800 border-t border-gray-100" id="why-us">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
                        Why Travel With <span className="text-accent">Us?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
                        Thousands of families have trusted Mycititours. Here is why we remain Karnataka's top choice.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
                    {features.map((feature, i) => (
                        <div
                            key={feature.title}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-primary mb-6">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 font-body leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Fleet Banner */}
                <div className="bg-primary rounded-3xl p-6 md:p-14 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none"></div>

                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 md:mb-10 text-center text-accent">Every Vehicle is Equipped With</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-10 relative z-10">
                        {fleetFeatures.map((ff, i) => (
                            <div
                                key={ff.text}
                                className="flex flex-col items-center justify-center text-center group"
                            >
                                <div className="text-4xl mb-3 bg-white/10 p-4 rounded-full group-hover:bg-white/20 transition-colors">
                                    {ff.icon}
                                </div>
                                <span className="font-heading font-bold tracking-wide text-blue-50">{ff.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
