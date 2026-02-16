import PageHero from '../components/PageHero';
import { FaGraduationCap, FaFemale, FaUtensils, FaHandsHelping, FaTree, FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Initiatives = () => {
    return (
        <>
            <PageHero
                title="Our Initiatives"
                subtitle="Small steps. Big Impact."
                backgroundImage="/assets/FB_IMG_1580443822070.jpg"
            />

            <section className="py-[80px]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-brown">Programs that Transform</h2>
                        <div className="w-[100px] h-[3px] bg-gold-accent mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Sakhi Saheli - Featured */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <FaFemale className="text-5xl text-gold-accent mb-4" />
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">Sakhi Saheli</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Creating safe spaces for women to share, heal, and grow. A community circle for emotional and social empowerment.
                            </p>
                            <Link to="/sakhi-saheli" className="px-6 py-2 border border-gold-accent text-primary-brown rounded-full font-bold text-sm uppercase hover:bg-gold-accent hover:text-white transition-colors">
                                Learn More
                            </Link>
                        </div>

                        {/* Sarv Shikha */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <FaGraduationCap className="text-5xl text-gold-accent mb-4" />
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">Sarv Shikha</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Ensuring no girl child is left behind. Sponsoring education fees, books, and uniforms for underprivileged girls.
                            </p>
                        </div>

                        {/* Serve Saanjh */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <FaUtensils className="text-5xl text-gold-accent mb-4" />
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">Serve Saanjh</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Community kitchen initiatives providing nutritious meals to the homeless and needy in urban slums.
                            </p>
                        </div>

                        {/* Additional Initiatives */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <FaHandsHelping className="text-5xl text-gold-accent mb-4" />
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">Sarv Sahayata</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Emergency relief and rehabilitation support during natural calamities and crises.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <FaTree className="text-5xl text-gold-accent mb-4" />
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">Sarv Vatika</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Environmental drives, tree plantations, and promoting sustainable living practices properly.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                            <FaHeartbeat className="text-5xl text-gold-accent mb-4" />
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">Sarv Swasthya</h3>
                            <p className="text-gray-600 mb-6 flex-grow">
                                Organizing health camps, eye checkups, and hygiene awareness workshops for women and children.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Initiatives;
