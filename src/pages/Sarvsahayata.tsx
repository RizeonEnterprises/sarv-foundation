import PageHero from '../components/PageHero';

const SarvSahayata = () => {
    return (
        <>
            <PageHero
                title="Sarv Sahayata"
                subtitle="Emergency relief and rehabilitation support."
                backgroundImage="/assets/sarv-sahayata-hero.jpg" 
            />

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-dark-brown mb-6">Why Sarv Sahayata?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                In the face of unexpected crises and natural calamities, families often lose their livelihoods and stability overnight. 'Sarv Sahayata' was established to provide a rapid response and a steady hand during these challenging times.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We focus on immediate relief and long-term rehabilitation, ensuring that vulnerable communities have the support they need to rebuild their lives with dignity and hope.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gold-accent rounded-lg transform translate-x-4 translate-y-4"></div>
                            <img 
                                src="/assets/sarv-sahayata-main.jpg" 
                                alt="Emergency Relief Work" 
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
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Emergency Relief</h4>
                            <p className="text-gray-600">Rapid distribution of essential supplies including food, water, and medicine during natural calamities.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Rehabilitation</h4>
                            <p className="text-gray-600">Long-term support programs designed to help families recover and gain social and financial stability after a crisis.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Crisis Management</h4>
                            <p className="text-gray-600">Building community resilience through awareness and preparedness training for future emergencies.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SarvSahayata;