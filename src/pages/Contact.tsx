import PageHero from '../components/PageHero';
import { FaMapMarkerAlt, FaEnvelopeOpenText, FaHandshake, FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF, FaLock, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <PageHero
                title="Contact SARV Foundation"
                subtitle="For Partnerships, Volunteer & CSR Queries"
                backgroundImage="/assets/FB_IMG_1583815239968.jpg" // Using a fallback image for now or the one from HTML
            />

            <section className="py-[60px] relative min-h-screen flex items-center justify-center">
                {/* Background Blur */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/FB_IMG_1583815239968.jpg')] bg-cover bg-center opacity-15 blur-sm z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <div className="w-[100px] h-[3px] bg-gold-accent mx-auto mb-6"></div>
                        <p className="max-w-[800px] mx-auto text-lg text-gray-600">
                            We welcome inquiries related to CSR partnerships, institutional collaborations, and general engagement to deliver women-centric social impact initiatives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 max-w-[1100px] mx-auto items-start">

                        {/* Contact Details Side */}
                        <div className="flex flex-col gap-6">
                            {/* Registered Office */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 border-l-[5px] border-gold-accent hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-[45px] h-[45px] bg-soft-beige rounded-full flex items-center justify-center text-primary-brown text-xl shrink-0 border border-gray-200">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg text-primary-brown mb-1">Registered Office</h4>
                                    <p className="text-gray-600 text-sm">Delhi NCR, India</p>
                                    <span className="text-xs text-gray-500">(For official correspondence)</span>
                                </div>
                            </div>

                            {/* General Inquiries */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 border-l-[5px] border-gold-accent hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-[45px] h-[45px] bg-soft-beige rounded-full flex items-center justify-center text-primary-brown text-xl shrink-0 border border-gray-200">
                                    <FaEnvelopeOpenText />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg text-primary-brown mb-1">General Inquiries</h4>
                                    <p><a href="mailto:sarv.team.foundation@gmail.com" className="text-gray-600 hover:text-gold-accent text-sm">sarv.team.foundation@gmail.com</a></p>
                                    <p><a href="tel:+919654800900" className="text-gray-600 hover:text-gold-accent text-sm">+91 96548 00900</a></p>
                                </div>
                            </div>

                            {/* Partnership */}
                            <div className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-4 border-l-[5px] border-gold-accent hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-[45px] h-[45px] bg-soft-beige rounded-full flex items-center justify-center text-primary-brown text-xl shrink-0 border border-gray-200">
                                    <FaHandshake />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-lg text-primary-brown mb-1">Partnership & CSR</h4>
                                    <p className="text-gray-600 text-sm mb-1">For CSR teams & collaboration opportunities.</p>
                                    <p><a href="mailto:sarv.team.foundation@gmail.com" className="text-gray-600 hover:text-gold-accent text-sm">sarv.team.foundation@gmail.com</a></p>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-[5px] border-primary-brown">
                                <h4 className="font-heading font-bold text-lg text-primary-brown mb-4">Follow Us @teamsarv</h4>
                                <div className="flex justify-center gap-4">
                                    <a href="#" className="w-[40px] h-[40px] bg-soft-beige text-primary-brown rounded-full flex items-center justify-center border border-gold-accent hover:bg-gold-accent hover:text-white transition-colors"><FaLinkedinIn /></a>
                                    <a href="#" className="w-[40px] h-[40px] bg-soft-beige text-primary-brown rounded-full flex items-center justify-center border border-gold-accent hover:bg-gold-accent hover:text-white transition-colors"><FaTwitter /></a>
                                    <a href="#" className="w-[40px] h-[40px] bg-soft-beige text-primary-brown rounded-full flex items-center justify-center border border-gold-accent hover:bg-gold-accent hover:text-white transition-colors"><FaInstagram /></a>
                                    <a href="#" className="w-[40px] h-[40px] bg-soft-beige text-primary-brown rounded-full flex items-center justify-center border border-gold-accent hover:bg-gold-accent hover:text-white transition-colors"><FaFacebookF /></a>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
                            <h3 className="font-heading font-bold text-2xl text-dark-brown mb-6">Send us a Message</h3>

                            <form action="https://formspree.io/f/mjgebzva" method="POST" className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-bold text-sm text-dark-brown">Name</label>
                                        <input type="text" name="name" placeholder="Your Name" required className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gold-accent focus:bg-white" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-bold text-sm text-dark-brown">Phone</label>
                                        <input type="tel" name="phone" placeholder="+91..." required className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gold-accent focus:bg-white" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-sm text-dark-brown">Email</label>
                                    <input type="email" name="email" placeholder="your@email.com" required className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gold-accent focus:bg-white" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-sm text-dark-brown">Purpose</label>
                                    <select name="purpose" className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gold-accent focus:bg-white">
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Partnership">Partnership & CSR</option>
                                        <option value="Media">Media & Press</option>
                                        <option value="Volunteer">Volunteering</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-bold text-sm text-dark-brown">Message</label>
                                    <textarea name="message" rows={4} placeholder="How can we help?" required className="p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:border-gold-accent focus:bg-white"></textarea>
                                </div>

                                <p className="text-xs text-gray-500 flex items-center gap-1 mt-2">
                                    <FaLock className="text-gold-accent" /> We respect your privacy.
                                </p>

                                <button type="submit" className="mt-4 bg-primary-brown text-white py-4 rounded-md font-bold uppercase tracking-wider hover:bg-gold-accent transition-colors duration-300 shadow-md">
                                    Send Message
                                </button>
                            </form>

                            <div className="mt-6 p-3 bg-green-50 text-green-700 text-sm font-semibold rounded text-center flex items-center justify-center gap-2">
                                <FaCheckCircle /> Typical response: 2–3 working days.
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 text-sm mb-2">SARV Foundation operates in alignment with applicable statutory and CSR compliance requirements.</p>
                        <p className="font-heading italic text-xl text-gold-accent">"Built on experience. Focused on impact."</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
