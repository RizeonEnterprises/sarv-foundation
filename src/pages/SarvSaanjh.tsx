import PageHero from '../components/PageHero';

const SarvSaanjh = () => {
    return (
        <>
            <PageHero
                title="Sarv Saanjh"
                subtitle="Community kitchen initiatives for the needy."
                backgroundImage="/assets/hero-Sarv-saanjh.jpg" 
            />

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-dark-brown mb-6">Why Sarv Saanjh?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                In urban slums, many individuals go to bed hungry every day. 'Sarv Saanjh' is a community kitchen initiative dedicated to providing nutritious meals to the homeless and needy.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We believe that access to healthy food is a fundamental human right. Our mission is to eliminate hunger in our local communities through collective effort and compassion.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gold-accent rounded-lg transform translate-x-4 translate-y-4"></div>
                            <img 
                                src="/assets/community-kitchen.jpg" 
                                alt="Community Kitchen" 
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
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Nutritious Meals</h4>
                            <p className="text-gray-600">Preparing and serving fresh, balanced, and hygienic meals to those in need every day.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Slum Outreach</h4>
                            <p className="text-gray-600">Reaching out to remote urban slums to ensure food reaches the most vulnerable populations.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Community Dining</h4>
                            <p className="text-gray-600">Creating spaces where people can eat with dignity and feel a sense of belonging.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SarvSaanjh;