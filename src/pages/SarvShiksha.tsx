import PageHero from '../components/PageHero';

const SarvShiksha = () => {
    return (
        <>
            <PageHero
                title="Sarv Shiksha"
                subtitle="Empowering every child through the gift of education."
                backgroundImage="/assets/FB_IMG_1580443822070.jpg" 
            />

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-heading font-bold text-3xl text-dark-brown mb-6">Why Sarv Shiksha?</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                We believe that education is the most powerful weapon which you can use to change the world. 'Sarv Shiksha' was established to ensure that no child is left behind due to a lack of resources.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                By providing a holistic support system, we aim to encourage children from underprivileged backgrounds to stay in school, perform better, and build a brighter future for themselves and their communities.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-0 left-0 w-full h-full bg-gold-accent rounded-lg transform translate-x-4 translate-y-4"></div>
                            <img 
                                src="/assets/FB_IMG_1580443822070.jpg" 
                                alt="Children's Education" 
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
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Scholarships</h4>
                            <p className="text-gray-600">Providing financial assistance to deserving students to cover fees and educational expenses.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">Learning Materials</h4>
                            <p className="text-gray-600">Distributing books, stationery, and uniforms to ensure children have the tools they need to learn.</p>
                        </div>
                        <div className="p-6 bg-white border border-gray-100 shadow-md rounded-lg">
                            <h4 className="font-bold text-xl text-primary-brown mb-3">After-School Support</h4>
                            <p className="text-gray-600">Offering tutoring and mentorship to help students overcome academic challenges.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SarvShiksha;