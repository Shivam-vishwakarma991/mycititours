import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Plane, Search, ChevronDown, ShieldCheck, Clock, Zap, Calendar } from 'lucide-react';

const taxiOptions = {
    cities: ["Bangalore City", "Bangalore Airport", "Madikeri", "Mangalore", "Mangalore Airport", "Mysore"],
    localCities: ["Bangalore", "Madikeri", "Mangalore", "Mysore"],
    localPackages: ["8Hrs 80Km", "Full Day 300km"],
    airports: ["Bangalore Airport", "Mangalore Airport"],
    times: Array.from({ length: 24 * 4 }, (_, i) => {
        const h = Math.floor(i / 4);
        const m = (i % 4) * 15;
        const period = h < 12 ? 'AM' : 'PM';
        const displayH = h % 12 || 12;
        return `${displayH.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${period}`;
    })
};

export default function TaxiRoutes() {
    const [activeTab, setActiveTab] = useState('OUTSTATION');

    const handleSearch = (e, type) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        let message = `Hi Mycititours, I want to book a taxi.\n\n*Type:* ${type}\n`;

        Object.entries(data).forEach(([key, value]) => {
            if (value) {
                const label = key.replace(/_/g, ' ').toUpperCase();
                message += `*${label}:* ${value}\n`;
            }
        });

        const waUrl = `https://wa.me/918269794013?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
    };

    const tabs = [
        { id: 'OUTSTATION', icon: <Navigation size={18} />, label: 'OUTSTATION' },
        { id: 'LOCAL', icon: <MapPin size={18} />, label: 'LOCAL' },
        { id: 'AIRPORT', icon: <Plane size={18} />, label: 'AIRPORT' }
    ];

    return (
        <section className="py-16 md:py-28 bg-white text-gray-800 relative overflow-hidden" id="taxi">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-50/50 rounded-full blur-3xl -ml-20 -mb-20"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-12 md:mb-16 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-black mb-3 uppercase tracking-widest text-sm"
                    >
                        Professional Fleet
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-heading font-black mb-6 text-primary tracking-tight"
                    >
                        Reliable Taxi Booking
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="inline-block bg-red-50 px-6 py-3 rounded-2xl border border-red-100 shadow-sm"
                    >
                        <p className="text-red-600 font-bold text-lg md:text-xl flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            Immediate booking? Call +91-8884467467
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Tabs Header */}
                    <div className="flex flex-wrap md:flex-nowrap gap-1 md:gap-3 mb-0 relative z-10 px-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-center gap-2 flex-1 min-w-[100px] sm:min-w-[140px] px-4 md:px-10 py-4 md:py-6 rounded-t-2xl md:rounded-t-3xl font-black text-xs sm:text-base md:text-lg tracking-wide transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-primary text-white shadow-[0_-8px_30px_rgba(0,0,0,0.15)] translate-y-[-2px] md:translate-y-[-4px]'
                                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border-b border-gray-200'
                                    }`}
                            >
                                <span className="hidden xs:inline">{tab.icon}</span> {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Form Container */}
                    <motion.div
                        layout
                        className="bg-primary p-6 sm:p-10 md:p-12 lg:p-14 rounded-b-2xl sm:rounded-b-[2.5rem] rounded-tr-2xl sm:rounded-tr-[2.5rem] md:rounded-tr-none shadow-[0_20px_50px_rgba(30,64,175,0.3)] relative overflow-hidden"
                    >
                        {/* Decorative background icon */}
                        <div className="absolute -bottom-10 -right-10 text-white/5 opacity-20 pointer-events-none transform -rotate-12 translate-x-1/4 translate-y-1/4">
                            {activeTab === 'AIRPORT' ? <Plane size={300} /> : <Navigation size={300} />}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                {activeTab === 'OUTSTATION' && (
                                    <form onSubmit={(e) => handleSearch(e, 'Outstation')} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6">
                                        <div className="sm:col-span-2 lg:col-span-5 relative group">
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1 flex items-center gap-2">
                                                <MapPin size={14} /> Pickup City
                                            </label>
                                            <div className="relative">
                                                <select name="pickup_city" required className="w-full h-14 md:h-16 pl-5 pr-12 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 appearance-none shadow-xl transition-all cursor-pointer hover:bg-gray-50">
                                                    <option value="">Select City</option>
                                                    {taxiOptions.cities.map(c => <option key={c} value={c}>{c}</option>)}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/5 p-1.5 rounded-lg pointer-events-none">
                                                    <ChevronDown className="text-primary" size={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 lg:col-span-7">
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1 flex items-center gap-2">
                                                <Navigation size={14} /> Destination
                                            </label>
                                            <input name="destination" required type="text" placeholder="Enter Destination" className="w-full h-14 md:h-16 px-6 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 shadow-xl placeholder:text-gray-300 transition-all" />
                                        </div>
                                        <div className="lg:col-span-3">
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1 flex items-center gap-2">
                                                <Calendar size={14} /> Start Date
                                            </label>
                                            <input name="start_date" required type="date" className="w-full h-14 md:h-16 px-5 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 shadow-xl transition-all" />
                                        </div>
                                        <div className="lg:col-span-3">
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1 flex items-center gap-2">
                                                <Calendar size={14} /> Return Date
                                            </label>
                                            <input name="return_date" type="date" className="w-full h-14 md:h-16 px-5 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 shadow-xl transition-all" />
                                        </div>
                                        <div className="relative lg:col-span-3">
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1 flex items-center gap-2">
                                                <Clock size={14} /> Pickup Time
                                            </label>
                                            <div className="relative">
                                                <select name="pickup_time" required className="w-full h-14 md:h-16 pl-5 pr-12 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 appearance-none shadow-xl transition-all cursor-pointer">
                                                    <option value="">Time</option>
                                                    {taxiOptions.times.map(t => <option key={t} value={t}>{t}</option>)}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/5 p-1.5 rounded-lg pointer-events-none">
                                                    <ChevronDown className="text-primary" size={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 lg:col-span-3 flex items-end">
                                            <button type="submit" className="w-full h-14 md:h-16 bg-accent hover:bg-white hover:text-accent text-white font-black text-base md:text-lg rounded-xl md:rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group/btn active:scale-95">
                                                <Search size={22} strokeWidth={4} className="group-hover/btn:scale-110 transition-transform" /> SEARCH
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {activeTab === 'LOCAL' && (
                                    <form onSubmit={(e) => handleSearch(e, 'Local')} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                                        <div className="relative">
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1">Select City</label>
                                            <div className="relative">
                                                <select name="city" required className="w-full h-14 md:h-16 pl-5 pr-12 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 appearance-none shadow-xl cursor-pointer">
                                                    <option value="">Select City</option>
                                                    {taxiOptions.localCities.map(c => <option key={c} value={c}>{c}</option>)}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/5 p-1.5 rounded-lg pointer-events-none">
                                                    <ChevronDown className="text-primary" size={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1">Choose Package</label>
                                            <div className="relative">
                                                <select name="package" required className="w-full h-14 md:h-16 pl-5 pr-12 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 appearance-none shadow-xl cursor-pointer">
                                                    <option value="">Select Package</option>
                                                    {taxiOptions.localPackages.map(p => <option key={p} value={p}>{p}</option>)}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/5 p-1.5 rounded-lg pointer-events-none">
                                                    <ChevronDown className="text-primary" size={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1">Trip Date</label>
                                            <input name="date" required type="date" className="w-full h-14 md:h-16 px-5 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 shadow-xl" />
                                        </div>
                                        <div className="flex items-end">
                                            <button type="submit" className="w-full h-14 md:h-16 bg-accent hover:bg-white hover:text-accent text-white font-black text-base md:text-lg rounded-xl md:rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 active:scale-95">
                                                <Search size={22} strokeWidth={4} /> SEARCH
                                            </button>
                                        </div>
                                    </form>
                                )}

                                {activeTab === 'AIRPORT' && (
                                    <form onSubmit={(e) => handleSearch(e, 'Airport')} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                                        <div className="relative">
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1">Airport</label>
                                            <div className="relative">
                                                <select name="airport" required className="w-full h-14 md:h-16 pl-5 pr-12 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 appearance-none shadow-xl cursor-pointer">
                                                    <option value="">Select Airport</option>
                                                    {taxiOptions.airports.map(a => <option key={a} value={a}>{a}</option>)}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/5 p-1.5 rounded-lg pointer-events-none">
                                                    <ChevronDown className="text-primary" size={18} />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1">Area / Location</label>
                                            <input name="location" required type="text" placeholder="E.g. Indiranagar..." className="w-full h-14 md:h-16 px-6 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 shadow-xl" />
                                        </div>
                                        <div>
                                            <label className="block text-white/80 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-2 ml-1">Date</label>
                                            <input name="date" required type="date" className="w-full h-14 md:h-16 px-5 bg-white rounded-xl md:rounded-2xl border-0 text-gray-900 font-bold text-sm md:text-base focus:ring-4 focus:ring-accent/30 shadow-xl" />
                                        </div>
                                        <div className="flex flex-col justify-center items-center text-white text-[10px] font-black uppercase tracking-widest gap-3 bg-white/10 rounded-xl md:rounded-2xl px-6 border-2 border-white/10">
                                            <div className="flex gap-6 py-4">
                                                <label className="flex items-center gap-2 cursor-pointer group/radio">
                                                    <input type="radio" name="trip_type" value="To Airport" defaultChecked className="w-4 h-4 text-accent focus:ring-accent border-0 bg-white/20" />
                                                    <span className="group-hover/radio:text-accent transition-all text-xs">To Airport</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer group/radio">
                                                    <input type="radio" name="trip_type" value="From Airport" className="w-4 h-4 text-accent focus:ring-accent border-0 bg-white/20" />
                                                    <span className="group-hover/radio:text-accent transition-all text-xs">To City</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 lg:col-span-4 flex justify-center mt-4">
                                            <button type="submit" className="w-full sm:w-2/3 md:w-1/2 h-14 md:h-16 bg-accent hover:bg-white hover:text-accent text-white font-black text-base md:text-lg rounded-xl md:rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 active:scale-95">
                                                <Search size={22} strokeWidth={4} /> SEARCH
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Trust Badges */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest"
                        >
                            <ShieldCheck size={24} className="text-accent" />
                            <span>Verified Drivers</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-3 text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest"
                        >
                            <Clock size={24} className="text-accent" />
                            <span>On-Time Pickup</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-3 text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest"
                        >
                            <Zap size={24} className="text-accent" />
                            <span>Instant Booking</span>
                        </motion.div>
                    </div>
                </div>
            </div >
        </section >
    );
}
