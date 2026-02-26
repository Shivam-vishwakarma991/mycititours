import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { reviews } from '../data/mock';

export default function Reviews() {
    return (
        <section className="bg-sand text-charcoal py-12 md:py-24" id="reviews">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-4"
                    >
                        Memories We've <span className="text-terracotta">Crafted</span>
                    </motion.h2>
                    <p className="text-lg text-charcoal/70 max-w-2xl mx-auto font-body">
                        Our commitment is reflected in the smiles and stories of thousands of satisfied travelers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col relative"
                        >
                            <div className="absolute top-8 right-8 bg-forest/5 p-3 rounded-full text-forest">
                                <Quote size={20} className="fill-current" />
                            </div>

                            <div className="flex gap-1 text-softgold mb-6">
                                {[...Array(review.rating)].map((_, index) => (
                                    <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                    </svg>
                                ))}
                            </div>

                            <p className="font-body text-charcoal/80 mb-8 leading-relaxed flex-grow italic">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-forest/10 pt-6 mt-auto">
                                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-forest/20" />
                                <div>
                                    <h4 className="font-heading font-bold text-forest">{review.name}</h4>
                                    <span className="text-xs text-charcoal/50 uppercase tracking-widest">{review.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Footer */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { metric: '10,000+', label: 'Happy Travelers' },
                        { metric: '4.9/5', label: 'Average Rating' },
                        { metric: '98%', label: 'Customer Satisfaction' },
                        { metric: '50+', label: 'Destinations covered' }
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center"
                        >
                            <h4 className="font-heading text-4xl font-bold mb-2 text-forest">{stat.metric}</h4>
                            <p className="font-body text-charcoal/60 text-sm tracking-wide uppercase">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
