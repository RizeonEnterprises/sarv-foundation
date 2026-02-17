import { Link } from 'react-router-dom';
import HeroSlideshow from '../components/HeroSlideshow';
import { FaGraduationCap, FaFemale, FaUtensils } from 'react-icons/fa';

const Home = () => {
    return (
        <>
            <HeroSlideshow />

            {/* One World Section */}
            <section className="py-[80px] bg-warm">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-brown mb-6">One World. One Heart.</h2>
                    <p className="max-w-[700px] mx-auto text-lg text-[#555] mb-8">
                        Sarv Foundation is born from the belief that every small act of kindness carries the power to transform lives.
                        ‘Sarv’ means all, complete, whole—a vision where no one is invisible, unheard, or left behind.
                    </p>
                    <Link to="/essence" className="inline-block text-primary-brown font-semibold hover:text-gold-accent transition-colors">
                        Read Our Essence &rarr;
                    </Link>
                </div>
            </section>

            {/* Key Initiatives Section */}
            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-brown">Our Key Initiatives</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="text-center p-8 border border-gray-100 rounded-lg shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <FaGraduationCap className="text-5xl text-gold-accent mx-auto mb-4" />
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">Sarv Shikha</h3>
                            <p className="text-gray-600">Sponsoring girl child education.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="text-center p-8 border border-gray-100 rounded-lg shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <FaFemale className="text-5xl text-gold-accent mx-auto mb-4" />
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">Sarv Saheli</h3>
                            <p className="text-gray-600">Women empowerment circles.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="text-center p-8 border border-gray-100 rounded-lg shadow-sm hover:-translate-y-2 transition-transform duration-300">
                            <FaUtensils className="text-5xl text-gold-accent mx-auto mb-4" />
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">Sarv Saanjh</h3>
                            <p className="text-gray-600">Community kitchen & food drives.</p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/initiatives" className="inline-block px-8 py-3 rounded-full font-bold uppercase text-sm bg-gold-accent text-dark-brown hover:bg-dark-brown hover:text-gold-accent transition-all duration-300">
                            View All Initiatives
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
