import PageHero from '../components/PageHero';

const SarvVatika = () => {
    return (
        <>
            <PageHero
                title="Sarv Vatika"
                subtitle="Environmental drives and sustainable living."
                backgroundImage="/assets/hero-sarv-vatika.jpg" 
            />

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-dark-brown mb-6">Why Sarv Vatika?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Protecting the environment is the need of the hour. 'Sarv Vatika' is dedicated to tree plantation and promoting a sustainable lifestyle for a greener tomorrow.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We don't just plant trees; we take the responsibility to nurture them. Our mission is to make the Earth cleaner, greener, and more livable for future generations.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gold-accent rounded-lg transform translate-x-4 translate-y-4"></div>
                            <img 
                                src="/assets/plantation-drive.jpg" 
                                alt="Tree Plantation" 
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
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Tree Plantation</h4>
                            <p className="text-gray-600">Mass plantation drives in urban and rural areas to restore local biodiversity.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Waste Management</h4>
                            <p className="text-gray-600">Educating communities on reducing plastic use and effective waste segregation techniques.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Environmental Education</h4>
                            <p className="text-gray-600">Raising awareness in schools and colleges about the importance of conservation and nature.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SarvVatika;