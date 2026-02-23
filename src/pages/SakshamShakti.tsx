import PageHero from '../components/PageHero';

const SakshamShakti = () => {
    return (
        <>
            <PageHero
                title="Saksham Shakti"
                subtitle="Skill development for financial independence."
                backgroundImage="/assets/hero-saksham-shakti.jpg" 
            />

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-dark-brown mb-6">Why Saksham Shakti?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Empowerment begins with self-reliance. 'Saksham Shakti' provides women with the skills and vocational training they need to become financially independent.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                When a woman earns, her entire family progresses. We focus on bridging the gap between talent and opportunity by providing training for modern job markets.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gold-accent rounded-lg transform translate-x-4 translate-y-4"></div>
                            <img 
                                src="/assets/vocational-training.jpg" 
                                alt="Vocational Training" 
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
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Vocational Training</h4>
                            <p className="text-gray-600">Training in sewing, handicrafts, and computer basics to open new avenues of employment.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Financial Literacy</h4>
                            <p className="text-gray-600">Teaching essential skills like budgeting, savings, and basic banking for independent management.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Entrepreneurship</h4>
                            <p className="text-gray-600">Supporting women in starting their own small businesses through mentorship and resources.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SakshamShakti;