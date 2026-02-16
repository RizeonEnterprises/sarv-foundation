import PageHero from '../components/PageHero';
import { FaCheckCircle, FaShoppingBasket, FaCoins } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <PageHero
                title="About Sarv"
                subtitle="One World | One Heart"
                backgroundImage="/assets/FB_IMG_1579864171733.jpg"
            />

            <section className="py-[80px] bg-soft-beige">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div>
                        <h2 className="font-heading font-bold text-3xl text-dark-brown mb-6">Who We Are</h2>
                        <p className="text-xl text-primary-brown mb-6 leading-relaxed">
                            Sarv is a Delhi NCR–registered foundation working towards community welfare, with a focus on women, children, and vulnerable communities.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm w-[140px] flex items-center justify-center">
                                <img src="/assets/csr logo.jpg.jpeg" alt="CSR Compliance" className="w-full h-auto" />
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm flex-grow border-l-4 border-gold-accent">
                                <h3 className="font-bold text-lg text-primary-brown mb-4">Legal & Compliance</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                                    <p className="flex items-center text-gray-600 text-sm"><FaCheckCircle className="text-gold-accent mr-2" /> 12A Registered</p>
                                    <p className="flex items-center text-gray-600 text-sm"><FaCheckCircle className="text-gold-accent mr-2" /> 80G Certified</p>
                                    <p className="flex items-center text-gray-600 text-sm"><FaCheckCircle className="text-gold-accent mr-2" /> DARPAN Registered</p>
                                    <p className="flex items-center text-gray-600 text-sm"><FaCheckCircle className="text-gold-accent mr-2" /> CSR-Compliant</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Placeholder for image or just layout balance if no specific image in HTML here */}
                    </div>

                </div>
            </section>

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading font-bold text-3xl text-dark-brown">Promoter’s Prior Experience</h2>
                        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">The founder of Sarv brings hands-on experience in executing community and women-centric initiatives.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg">
                            <h3 className="font-bold text-lg text-primary-brown mb-2">Sherise × Govt. of UP</h3>
                            <span className="bg-gold-accent text-white px-3 py-1 text-xs rounded-full">Mission Shakti</span>
                            <p className="mt-4 text-gray-600 text-sm">Outreach programmes under <strong>Atmanirbhar Bharat</strong>, focusing on women empowerment, workplace dignity, and nutrition awareness.</p>
                        </div>
                        <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg">
                            <h3 className="font-bold text-lg text-primary-brown mb-2">Collaboration with IBHAS</h3>
                            <span className="bg-gold-accent text-white px-3 py-1 text-xs rounded-full">Gender Equality</span>
                            <p className="mt-4 text-gray-600 text-sm">Programmes centred on emotional well-being, dignity, and inclusion for vulnerable communities.</p>
                        </div>
                        <div className="p-8 bg-gray-50 border border-gray-100 rounded-lg">
                            <h3 className="font-bold text-lg text-primary-brown mb-2">WCD Engagements</h3>
                            <span className="bg-gold-accent text-white px-3 py-1 text-xs rounded-full">Inclusion</span>
                            <p className="mt-4 text-gray-600 text-sm">Initiatives on women empowerment, gender inclusion, and equality with Women & Child Development Departments.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[80px] bg-[#fcfbf9]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-gold-accent font-bold uppercase tracking-widest text-sm block mb-2">Current Pilot Initiative</span>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-brown">Poshan Saathi Food Drive</h2>
                        <p className="italic text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                            “Poshan Saathi is a focused CSR pilot supporting women workers in industrial areas through essential nutrition kits.”
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="font-bold text-xl text-primary-brown mb-4">Project Background & Need</h3>
                            <p className="text-gray-600 mb-4">Rising costs and economic vulnerability have impacted access to basic nutrition for underprivileged families in Faridabad, particularly women-led households and daily-wage earners.</p>
                            <p className="text-gray-600 mb-6">This pilot food drive aims to support such families through <strong>nutritious dry ration kits</strong>, delivered with dignity and care.</p>

                            <h4 className="font-bold text-gold-accent mb-2">Project Objectives</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center text-gray-600"><FaCheckCircle className="text-primary-brown mr-2" /> Support <strong>100 underprivileged families</strong> in Delhi/NCR.</li>
                                <li className="flex items-center text-gray-600"><FaCheckCircle className="text-primary-brown mr-2" /> Contribute to hunger relief & women welfare.</li>
                                <li className="flex items-center text-gray-600"><FaCheckCircle className="text-primary-brown mr-2" /> Execute a transparent, CSR-compliant pilot.</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="font-bold text-xl text-primary-brown border-b border-gray-100 pb-2 mb-4">Project Details</h3>
                            <ul className="space-y-3 leading-relaxed text-gray-600">
                                <li><strong>Location:</strong> Faridabad (Delhi NCR)</li>
                                <li><strong>Beneficiaries:</strong> Women & Children</li>
                                <li><strong>Coverage:</strong> 100 Families</li>
                                <li><strong>Mode:</strong> Dry Ration Distribution</li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h4 className="font-bold text-lg text-primary-brown mb-4 flex items-center"><FaShoppingBasket className="mr-2" /> Food Kit Contents</h4>
                            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                                <p>• Rice / Atta</p>
                                <p>• Dal / Pulses</p>
                                <p>• Cooking Oil</p>
                                <p>• Salt & Essentials</p>
                                <p>• Nutrition Biscuits</p>
                            </div>
                        </div>

                        <div className="bg-primary-brown p-8 rounded-lg shadow-sm text-white">
                            <h4 className="font-bold text-lg text-gold-accent mb-4 flex items-center"><FaCoins className="mr-2" /> Budget Summary</h4>
                            <div className="flex justify-between border-b border-white/20 pb-2 mb-2">
                                <span>Cost per Family</span>
                                <strong className="text-lg">₹1,000</strong>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Total Project Cost</span>
                                <strong className="text-2xl text-gold-accent">₹1,00,000</strong>
                            </div>
                            <p className="text-xs mt-4 opacity-80">*Flexible based on CSR partner preference</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;
