import PageHero from '../components/PageHero';
import { FaBullhorn, FaHandHoldingHeart, FaFemale, FaUsers } from 'react-icons/fa';

const Journey = () => {
    return (
        <>
            <PageHero
                title="Our Journey"
                subtitle="A Legacy of Grassroots Change"
                backgroundImage="/assets/journey.jpg"
            />

            <section className="py-[80px] relative">
                {/* Background overlay if needed, similar to HTML 'journey-bg' */}
                <div className="absolute inset-0 bg-white/90 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">

                    <div className="text-center max-w-[900px] mx-auto mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-brown mb-6">From VoiceItOut to SARV</h2>

                        <p className="text-xl leading-relaxed text-primary-brown mb-6 font-medium">
                            "SARV Foundation has led and supported multiple women-centric initiatives aligned with national priorities such as <strong>Mission Shakti</strong> and <strong>Atmanirbhar Bharat</strong>."
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Formerly known as <strong>VoiceItOut</strong>, the organisation has worked at the grassroots in collaboration with <strong>IBHAAS</strong> and the <strong>Department of Women & Child Development (WCD)</strong> through One Stop Centres, strengthening access to support and awareness for women.
                        </p>

                        <div>
                            <span className="font-heading italic font-bold text-2xl text-gold-accent">This is not an organization. It is a journey of hearts.</span>
                        </div>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline Line */}
                        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-gray-200 transform md:-translate-x-1/2"></div>

                        {/* Timeline Item 1 */}
                        <div className="relative mb-12 flex flex-col md:flex-row items-center w-full">
                            <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-16 md:pl-0 text-left w-full">
                                <h4 className="font-bold text-xl text-primary-brown">VoiceItOut</h4>
                                <p className="text-gray-600">Early grassroots work & advocacy.</p>
                            </div>
                            <div className="absolute left-[2px] md:left-1/2 w-[40px] h-[40px] bg-gold-accent rounded-full border-4 border-white flex items-center justify-center transform md:-translate-x-1/2 z-10 text-white order-1 ml-0">
                                <FaBullhorn />
                            </div>
                            <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="relative mb-12 flex flex-col md:flex-row items-center w-full">
                            <div className="md:w-1/2 md:pr-12 order-3 md:order-1 hidden md:block"></div>
                            <div className="absolute left-[2px] md:left-1/2 w-[40px] h-[40px] bg-primary-brown rounded-full border-4 border-white flex items-center justify-center transform md:-translate-x-1/2 z-10 text-white order-1 ml-0">
                                <FaHandHoldingHeart />
                            </div>
                            <div className="md:w-1/2 md:pl-12 md:text-left order-2 pl-16 md:pl-0 text-left w-full">
                                <h4 className="font-bold text-xl text-primary-brown">WCD Collaboration</h4>
                                <p className="text-gray-600">One Stop Centres & IBHAAS partnership.</p>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="relative mb-12 flex flex-col md:flex-row items-center w-full">
                            <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-16 md:pl-0 text-left w-full">
                                <h4 className="font-bold text-xl text-primary-brown">Mission Shakti</h4>
                                <p className="text-gray-600">Aligning with national women-centric goals.</p>
                            </div>
                            <div className="absolute left-[2px] md:left-1/2 w-[40px] h-[40px] bg-gold-accent rounded-full border-4 border-white flex items-center justify-center transform md:-translate-x-1/2 z-10 text-white order-1 ml-0">
                                <FaFemale />
                            </div>
                            <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
                        </div>

                        {/* Timeline Item 4 */}
                        <div className="relative flex flex-col md:flex-row items-center w-full">
                            <div className="md:w-1/2 md:pr-12 order-3 md:order-1 hidden md:block"></div>
                            <div className="absolute left-[2px] md:left-1/2 w-[40px] h-[40px] bg-primary-brown rounded-full border-4 border-white flex items-center justify-center transform md:-translate-x-1/2 z-10 text-white order-1 ml-0">
                                <FaUsers />
                            </div>
                            <div className="md:w-1/2 md:pl-12 md:text-left order-2 pl-16 md:pl-0 text-left w-full">
                                <h4 className="font-bold text-xl text-primary-brown">SARV Foundation</h4>
                                <p className="text-gray-600">Evolving into a holistic movement.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Journey;
