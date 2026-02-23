import PageHero from '../components/PageHero';

const SarvSwasthya = () => {
    return (
        <>
            <PageHero
                title="Sarv Swasthya"
                subtitle="Health camps and hygiene awareness."
                backgroundImage="/assets/hero-sarv-swasthya.jpg" 
            />

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-dark-brown mb-6">Why Sarv Swasthya?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Health is the foundation of a prosperous life. 'Sarv Swasthya' organizes health camps to bring essential medical facilities to underserved and rural communities.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Our goal is to promote preventative healthcare and raise awareness about hygiene, ensuring that even the most remote populations have access to medical advice.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gold-accent rounded-lg transform translate-x-4 translate-y-4"></div>
                            <img 
                                src="/assets/health-camp.jpg" 
                                alt="Health Camp" 
                                className="relative z-10 rounded-lg shadow-xl w-full h-[400px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="font-heading font-bold text-3xl text-dark-brown mb-10 text-center">Key Activities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Medical Camps</h4>
                            <p className="text-gray-600">Free health check-ups and medicine distribution with the help of expert doctors.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Hygiene Awareness</h4>
                            <p className="text-gray-600">Workshops on personal hygiene, sanitation, and clean water practices to prevent illness.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Child & Maternal Care</h4>
                            <p className="text-gray-600">Specialized camps focusing on the health and nutrition of mothers and children.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SarvSwasthya;