import PageHero from '../components/PageHero';
import { FaGraduationCap, FaHandsHelping, FaHandshake, FaGift, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JoinUs = () => {
    return (
        <>
            <PageHero
                title="Join Our Movement"
                subtitle="Be the change you wish to see."
                backgroundImage="/assets/sakhi saheli flyer.jpeg"
            />

            <section className="py-[80px] bg-soft-beige">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-brown">How You Can Help</h2>
                        <p className="font-heading italic text-xl text-primary-brown mt-4">"When you give even a little… someone receives a world."</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                            <div className="w-[80px] h-[80px] rounded-full bg-[#fce4ec] flex items-center justify-center text-[#d81b60] text-3xl mb-6">
                                <FaGraduationCap />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-dark-brown mb-3">Sponsor a Dream</h3>
                            <p className="text-gray-600 mb-6 flex-grow">Support a girl’s education. Cover school fees, uniforms, and learning materials to ensure she stays in school.</p>
                            <Link to="/contact" className="text-primary-brown font-bold hover:text-gold-accent transition-colors">Sponsor Now &rarr;</Link>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                            <div className="w-[80px] h-[80px] rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#43a047] text-3xl mb-6">
                                <FaHandsHelping />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-dark-brown mb-3">Volunteer</h3>
                            <p className="text-gray-600 mb-6 flex-grow">Teach, guide, or conduct workshops. Share your skills in digital literacy, art, or basic education.</p>
                            <Link to="/contact" className="text-primary-brown font-bold hover:text-gold-accent transition-colors">Apply to Volunteer &rarr;</Link>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                            <div className="w-[80px] h-[80px] rounded-full bg-[#e3f2fd] flex items-center justify-center text-[#1e88e5] text-3xl mb-6">
                                <FaHandshake />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-dark-brown mb-3">Partner With Purpose</h3>
                            <p className="text-gray-600 mb-6 flex-grow">CSR collaborations for large-scale impact. Partner with us for initiatives like Poshan Saathi or Sakhi Saheli.</p>
                            <Link to="/contact" className="text-primary-brown font-bold hover:text-gold-accent transition-colors">CSR Inquiry &rarr;</Link>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                            <div className="w-[80px] h-[80px] rounded-full bg-[#fff3e0] flex items-center justify-center text-[#fb8c00] text-3xl mb-6">
                                <FaGift />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-dark-brown mb-3">Donate in Kind</h3>
                            <p className="text-gray-600 mb-6 flex-grow">Contribute books, sanitary pads, digital tools, stationery, or simply your valuable time.</p>
                            <Link to="/contact" className="text-primary-brown font-bold hover:text-gold-accent transition-colors">Donate Items &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-[80px] bg-white text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="border-2 border-gold-accent p-10 rounded-lg">
                        <h3 className="font-heading font-bold text-2xl text-primary-brown mb-4">Ready to Contribute?</h3>
                        <p className="text-lg mb-6">Reach out to us to start your journey of giving.</p>

                        <div className="flex flex-col gap-3 text-lg items-center">
                            <p className="flex items-center gap-2">
                                <FaEnvelope className="text-gold-accent" /> sarv.team.foundation@gmail.com
                            </p>
                            <p className="flex items-center gap-2">
                                <FaPhoneAlt className="text-gold-accent" /> +91 9654800900
                            </p>
                        </div>

                        <hr className="my-8 border-t border-gray-100" />

                        <p className="font-heading italic text-gray-500">"Sarv is not just an initiative. Sarv is humanity... woven together in love."</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JoinUs;
