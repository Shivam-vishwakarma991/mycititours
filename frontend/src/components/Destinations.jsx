import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { destinations } from '../data/mock';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Destinations() {
    const containerRef = useRef(null);
    const destinationsRef = useRef(null);
    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray('.destination-card');

            if (sections.length > 0) {
                const scrollTween = gsap.to(destinationsRef.current, {
                    x: () => -(destinationsRef.current.scrollWidth - window.innerWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        pin: true,
                        scrub: 1,
                        // Adjusted speed to be 20% faster than previous 1.5 multiplier
                        end: () => "+=" + (destinationsRef.current.scrollWidth * 1.25),
                        invalidateOnRefresh: true,
                    }
                });

                // Image Parallax tied to Horizontal Scroll
                gsap.utils.toArray('.img-parallax').forEach(img => {
                    gsap.fromTo(img,
                        { y: "-15%" },
                        {
                            y: "15%",
                            ease: "none",
                            scrollTrigger: {
                                trigger: img.closest('.destination-card'),
                                containerAnimation: scrollTween,
                                start: "left right",
                                end: "right left",
                                scrub: true
                            }
                        }
                    );
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="bg-sand text-charcoal py-12 md:py-24 overflow-hidden" id="destinations">
            <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    Explore <span className="text-forest">Top Destinations</span>
                </h2>
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-body">
                    Scroll to discover the mesmerizing beauty of South India, from peaceful backwaters to mist-covered hills.
                </p>
            </div>

            {/* Horizontal Scroll Trigger Container */}
            <div ref={containerRef} className="relative h-[80vh] md:h-screen w-full overflow-hidden flex flex-col justify-center">
                {/* Horizontal Moving Track */}
                <div ref={destinationsRef} className="flex gap-4 md:gap-8 px-6 md:px-12 w-max pr-[10vw] md:pr-[30vw] items-center">
                    {destinations.map((dest) => (
                        <div
                            key={dest.id}
                            className="destination-card w-[80vw] sm:w-[45vw] md:w-[30vw] h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden relative group shrink-0 cursor-pointer"
                            data-cursor="view"
                            onClick={() => setActiveModal(dest)}
                        >
                            {/* Image Container with Parallax */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl">
                                <motion.div
                                    whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full h-[130%] -top-[15%] relative"
                                >
                                    <img
                                        src={dest.image}
                                        alt={dest.name}
                                        className="img-parallax w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 top-[40%] bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 pointer-events-none transition-all duration-300 group-hover:from-forest/90 group-hover:via-forest/40">
                                <div className="mb-2">
                                    <span className="text-softgold text-sm uppercase tracking-widest font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">{dest.duration}</span>
                                </div>
                                <h3 className="text-3xl font-heading font-bold text-sand mb-2 group-hover:text-softgold transition-colors">{dest.name}</h3>
                                <p className="text-sand/80 font-body mb-4 line-clamp-2 md:line-clamp-none">{dest.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {dest.highlights.map(h => (
                                        <span key={h} className="text-xs bg-sand/10 border border-sand/20 text-sand px-3 py-1 rounded-full backdrop-blur-sm">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12 md:mt-24">
                <a href={`https://wa.me/918269794013?text=${encodeURIComponent(`Hi, I'm interested in planning a trip with mycititours - mycititours.com.\nPlease find my details below to assist :\n\nName: \nNumber of Travelers:\nTravel Date:\nDuration: \nDestination: `)}`} target="_blank" rel="noreferrer" className="inline-block bg-transparent border-2 border-forest text-forest px-8 md:px-10 py-3 md:py-4 rounded-full font-body font-semibold uppercase tracking-wider hover:bg-forest hover:text-sand transition-colors duration-300">
                    Customize Your Itinerary
                </a>
            </div>

            <AnimatePresence>
                {activeModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-sand p-8 rounded-3xl w-full max-w-2xl text-charcoal shadow-2xl relative overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 p-2 bg-charcoal/5 rounded-full text-charcoal/50 hover:bg-charcoal hover:text-sand border border-transparent hover:border-charcoal/10 transition-colors z-10 cursor-pointer">
                                <X size={20} />
                            </button>

                            <div className="h-64 -mx-8 -mt-8 mb-6 relative">
                                <img src={activeModal.image} alt={activeModal.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-sand via-transparent to-transparent"></div>
                            </div>

                            <div className="mb-2">
                                <span className="text-forest text-xs uppercase tracking-widest font-semibold bg-forest/10 px-3 py-1 rounded-full">{activeModal.duration}</span>
                            </div>
                            <h3 className="text-3xl font-heading font-bold mb-4">{activeModal.name}</h3>
                            <p className="font-body text-lg text-charcoal/70 mb-8 leading-relaxed">{activeModal.description}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {activeModal.highlights.map(h => (
                                    <span key={h} className="bg-charcoal/5 text-charcoal px-4 py-2 rounded-full font-semibold border border-charcoal/10 text-sm">
                                        {h}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="#packages"
                                onClick={() => setActiveModal(null)}
                                className="block w-full text-center bg-forest text-sand py-4 rounded-xl font-bold tracking-wide hover:bg-terracotta transition-colors shadow-lg shadow-forest/20"
                            >
                                View Applicable Packages
                            </a>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
