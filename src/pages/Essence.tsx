import PageHero from '../components/PageHero';
import { FaQuoteLeft } from 'react-icons/fa';

const Essence = () => {
    return (
        <>
            <PageHero
                title="Our Essence"
                subtitle="The Heart of Sarv"
                backgroundImage="/assets/essence img.webp"
            />

            <section className="py-[80px] bg-soft-beige">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="font-heading font-bold text-3xl text-dark-brown mb-6">The Spirit of Sarv</h2>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Sarv Foundation is born from the belief that every small act of kindness carries the power to transform lives.
                        </p>

                        <p className="mb-4 text-gray-600">
                            <strong>‘Sarv’</strong> means all, complete, whole—a vision where no one is invisible, unheard, or left behind.
                        </p>

                        <p className="mb-6 text-gray-600">
                            Sarv stands on decades of on-ground experience in education, women empowerment, community kitchens, and dignity-based service.
                        </p>

                        <blockquote className="border-l-4 border-gold-accent pl-6 italic text-primary-brown text-lg mt-8 relative">
                            <FaQuoteLeft className="absolute -top-4 -left-2 text-gold-accent opacity-30 text-2xl" />
                            "Every initiative started with one simple intention, to touch a life with love and purpose."
                        </blockquote>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <img src="/assets/DSC_7257.JPG" alt="Sarv Essence 1" className="rounded-lg shadow-md transform md:translate-y-4 w-full h-auto object-cover" />
                        <img src="/assets/DSC_7565.JPG" alt="Sarv Essence 2" className="rounded-lg shadow-md w-full h-auto object-cover" />
                        <img src="/assets/img.png" alt="Sarv Essence 3" className="rounded-lg shadow-md transform md:-translate-y-4 w-full h-auto object-cover" />
                        <img src="/assets/DSC_7081.JPG" alt="Sarv Essence 4" className="rounded-lg shadow-md w-full h-auto object-cover" />
                    </div>

                </div>
            </section>
        </>
    );
};

export default Essence;
