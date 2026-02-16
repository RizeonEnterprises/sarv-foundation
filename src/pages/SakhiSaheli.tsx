import PageHero from '../components/PageHero';
import { FaQuoteLeft } from 'react-icons/fa';

const SakhiSaheli = () => {
    return (
        <>
            <PageHero
                title="Sakhi Saheli"
                subtitle="A Circle of Trust. A Journey of Self."
                backgroundImage="/assets/FB_IMG_1583815239968.jpg"
            />

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-dark-brown mb-6">Why Sakhi Saheli?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Women in many communities often prioritize their families over themselves, suppressing their own voices, dreams, and emotional needs. 'Sakhi Saheli' was born to break this silence.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                It is a safe, non-judgmental space where women come together to share their stories, find strength in sisterhood, and rediscover their individual identity beyond their roles as mothers, wives, or daughters.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gold-accent rounded-lg transform translate-x-4 translate-y-4"></div>
                            <img src="/assets/image_fc1e115a-1fc8-44fc-af3e-80932b33172320220706_114518.jpg" alt="Sakhi Saheli Session" className="relative rounded-lg shadow-xl w-full" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[80px] bg-soft-beige">
                <div className="container mx-auto px-4 text-center">
                    <FaQuoteLeft className="text-4xl text-gold-accent mx-auto mb-6" />
                    <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-brown italic max-w-4xl mx-auto leading-normal">
                        "When a woman shares her story, she doesn't just heal herself; she gives permission to other women to heal too."
                    </h2>
                </div>
            </section>

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="font-heading font-bold text-3xl text-dark-brown mb-10 text-center">Key Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Healing Circles</h4>
                            <p className="text-gray-600">Guided group sessions where women express their suppressed emotions and find validation.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Skill Workshops</h4>
                            <p className="text-gray-600">Learning new skills like art, craft, or financial literacy to build confidence.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Joyful Retreats</h4>
                            <p className="text-gray-600">Picnics, dance, and music sessions to bring back the joy of childhood.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SakhiSaheli;
