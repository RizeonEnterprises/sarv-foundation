import PageHero from '../components/PageHero';
import { FaHandHoldingHeart, FaCheckDouble, FaUserShield, FaPrayingHands } from 'react-icons/fa';

const Values = () => {
    return (
        <>
            <PageHero
                title="Our Core Values"
                subtitle="The Principles That Guide Us"
                backgroundImage="/assets/values.JPG"
            />

            <section className="py-[80px] bg-soft-beige">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-[80px] h-[80px] mx-auto rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#2e7d32] text-3xl mb-6">
                                <FaHandHoldingHeart />
                            </div>
                            <h3 className="font-bold text-xl text-primary-brown mb-3">Compassion</h3>
                            <div className="w-[40px] h-[2px] bg-gold-accent mx-auto mb-3"></div>
                            <p className="text-gray-600">Kindness must create empowerment.</p>
                        </div>

                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-[80px] h-[80px] mx-auto rounded-full bg-[#fff8e1] flex items-center justify-center text-[#fbc02d] text-3xl mb-6">
                                <FaCheckDouble />
                            </div>
                            <h3 className="font-bold text-xl text-primary-brown mb-3">Transparency</h3>
                            <div className="w-[40px] h-[2px] bg-gold-accent mx-auto mb-3"></div>
                            <p className="text-gray-600">Every rupee reaches the right place.</p>
                        </div>

                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-[80px] h-[80px] mx-auto rounded-full bg-[#e3f2fd] flex items-center justify-center text-[#1565c0] text-3xl mb-6">
                                <FaUserShield />
                            </div>
                            <h3 className="font-bold text-xl text-primary-brown mb-3">Dignity</h3>
                            <div className="w-[40px] h-[2px] bg-gold-accent mx-auto mb-3"></div>
                            <p className="text-gray-600">Every life deserves respect.</p>
                        </div>

                        <div className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-[80px] h-[80px] mx-auto rounded-full bg-[#f3e5f5] flex items-center justify-center text-[#7b1fa2] text-3xl mb-6">
                                <FaPrayingHands />
                            </div>
                            <h3 className="font-bold text-xl text-primary-brown mb-3">Service</h3>
                            <div className="w-[40px] h-[2px] bg-gold-accent mx-auto mb-3"></div>
                            <p className="text-gray-600">Seva from the heart.</p>
                        </div>

                    </div>

                    <div className="text-center mt-16">
                        <p className="font-heading font-bold text-2xl text-primary-brown">"These values are not principles. They are our promise."</p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Values;
