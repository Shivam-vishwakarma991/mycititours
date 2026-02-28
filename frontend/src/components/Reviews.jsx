import { reviews } from '../data/mock';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
    return (
        <section className="bg-white text-gray-800 py-12 md:py-24" id="reviews">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
                        Don't just take our word for it. Unedited feedback from our recent guests.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
                    {reviews.map((review, i) => (
                        <div
                            key={review.id}
                            className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative"
                        >
                            <Quote className="absolute top-6 right-6 text-gray-200" size={48} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="font-body text-gray-700 italic mb-8 relative z-10 leading-relaxed flex-grow">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                                />
                                <div>
                                    <h4 className="font-heading font-bold text-lg text-gray-900 leading-none mb-1">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.location} • {review.tripDate}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Footer */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-blue-50 py-10 rounded-2xl border border-blue-100">
                    {[
                        { metric: '10,000+', label: 'Happy Travelers' },
                        { metric: '4.9/5', label: 'Average Rating' },
                        { metric: '15+ Years', label: 'Experience' },
                        { metric: '100%', label: 'Safety Record' }
                    ].map((stat, i) => (
                        <div key={stat.label} className="text-center">
                            <h4 className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">{stat.metric}</h4>
                            <p className="text-gray-600 font-semibold tracking-wide uppercase text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
