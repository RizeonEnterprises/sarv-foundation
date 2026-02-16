import PageHero from '../components/PageHero';
import { FaChild, FaFemale, FaUsers, FaOm } from 'react-icons/fa';

const Mission = () => {
    return (
        <>
            <PageHero
                title="Our Mission"
                subtitle="Every Dream Matters."
                backgroundImage="/assets/mission.JPG"
            />

            <section className="py-[80px] bg-soft-beige">
                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Mission 1 */}
                        <div className="bg-gold-accent/10 p-8 rounded-lg border-b-4 border-gold-accent text-center hover:shadow-lg transition-shadow">
                            <div className="w-[60px] h-[60px] mx-auto bg-gold-accent text-white rounded-full flex items-center justify-center text-2xl mb-4">
                                <FaChild />
                            </div>
                            <h3 className="font-bold text-xl text-primary-brown mb-2">Educate & Lead</h3>
                            <p className="text-gray-600">To ensure every girl child learns, dreams, and leads.</p>
                        </div>

                        {/* Mission 2 */}
                        <div className="bg-primary-brown/10 p-8 rounded-lg border-b-4 border-primary-brown text-center hover:shadow-lg transition-shadow">
                            <div className="w-[60px] h-[60px] mx-auto bg-primary-brown text-white rounded-full flex items-center justify-center text-2xl mb-4">
                                <FaFemale />
                            </div>
                            <h3 className="font-bold text-xl text-primary-brown mb-2">Independence</h3>
                            <p className="text-gray-600">To support women toward financial and emotional independence.</p>
                        </div>

                        {/* Mission 3 */}
                        <div className="bg-dark-brown/10 p-8 rounded-lg border-b-4 border-dark-brown text-center hover:shadow-lg transition-shadow">
                            <div className="w-[60px] h-[60px] mx-auto bg-dark-brown text-white rounded-full flex items-center justify-center text-2xl mb-4">
                                <FaUsers />
                            </div>
                            <h3 className="font-bold text-xl text-primary-brown mb-2">Community</h3>
                            <p className="text-gray-600">To promote community well-being through education and awareness.</p>
                        </div>

                        {/* Mission 4 */}
                        <div className="bg-white p-8 rounded-lg border-b-4 border-gray-300 text-center hover:shadow-lg transition-shadow">
                            <div className="w-[60px] h-[60px] mx-auto bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-2xl mb-4">
                                <FaOm />
                            </div>
                            <h3 className="font-bold text-xl text-primary-brown mb-2">Balanced Living</h3>
                            <p className="text-gray-600">To nurture mind-body-soul alignment for balanced living.</p>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <h3 className="font-heading italic text-3xl text-gold-accent">"Every dream matters. Every step counts."</h3>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Mission;
