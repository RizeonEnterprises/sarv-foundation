import { FaLinkedinIn, FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-brown py-[70px] pb-[30px] mt-auto relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* 1. Brand Section */}
                    <div className="flex flex-col items-center md:items-start">
                        {/* Title in White like SARV on Home Page */}
                        <h2 className="font-heading font-bold text-3xl mb-2 text-white tracking-tight uppercase">SARV</h2>
                        {/* Tagline in Logo Green */}
                        <p className="text-[#73b745] font-bold text-[0.7rem] uppercase tracking-[3px] mb-6 font-body">One World | One Heart</p>
                        {/* Body Text in soft White/Grey for readability */}
                        <p className="text-white/70 text-sm leading-relaxed text-center md:text-left font-body">
                            Empowering lives through compassion, dignity, and inclusive growth. Built on experience, focused on impact.
                        </p>
                        <div className="flex gap-4 mt-6">
                            {/* Icons background Orange like CTA buttons */}
                            <a href="#" className="w-9 h-9 rounded-full bg-[#f38b27] text-white flex items-center justify-center hover:bg-white hover:text-[#1a365d] transition-all duration-300 shadow-md">
                                <FaLinkedinIn className="text-xs" />
                            </a>
                            <a href="https://www.instagram.com/teamsarv/" className="w-9 h-9 rounded-full bg-[#f38b27] text-white flex items-center justify-center hover:bg-white hover:text-[#1a365d] transition-all duration-300 shadow-md">
                                <FaInstagram className="text-xs" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-[#f38b27] text-white flex items-center justify-center hover:bg-white hover:text-[#1a365d] transition-all duration-300 shadow-md">
                                <FaFacebookF className="text-xs" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Navigation Links */}
                    <div className="flex flex-col items-center md:items-start">
                        {/* Heading in White */}
                        <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-widest text-xs border-b border-[#f38b27] pb-1">Navigation</h4>
                        <ul className="space-y-4 text-sm font-medium font-body">
                            <li><Link to="/about" className="text-white/80 hover:text-[#f38b27] transition-colors">About Us</Link></li>
                            <li><Link to="/initiatives" className="text-white/80 hover:text-[#f38b27] transition-colors">Initiatives</Link></li>
                            <li><Link to="/impact" className="text-white/80 hover:text-[#f38b27] transition-colors">Impact</Link></li>
                            <li><Link to="/contact" className="text-white/80 hover:text-[#f38b27] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* 3. Legal & Compliance */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-widest text-xs border-b border-[#f38b27] pb-1">Legal & Compliance</h4>
                        <ul className="space-y-4 text-[0.8rem] font-bold font-body">
                            {/* Icons and text in Green/White for authority */}
                            <li className="flex items-center gap-2 text-white/90">
                                <FaShieldAlt className="text-[#73b745] text-xs" /> 12A REGISTERED
                            </li>
                            <li className="flex items-center gap-2 text-white/90">
                                <FaShieldAlt className="text-[#73b745] text-xs" /> 80G CERTIFIED
                            </li>
                            <li className="flex items-center gap-2 text-white/90">
                                <FaShieldAlt className="text-[#73b745] text-xs" /> DARPAN REGISTERED
                            </li>
                            <li className="flex items-center gap-2 text-white/90">
                                <FaShieldAlt className="text-[#73b745] text-xs" /> CSR-COMPLIANT
                            </li>
                        </ul>
                    </div>

                    {/* 4. Reach Us */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-widest text-xs border-b border-[#f38b27] pb-1">Reach Us</h4>
                        <div className="space-y-5 text-sm font-body">
                            <div className="flex items-start gap-4">
                                <FaEnvelope className="text-[#f38b27] mt-1" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase text-[#73b745] font-bold mb-1">Email Support</span>
                                    <a href="mailto:sarv.team.foundation@gmail.com" className="text-white hover:text-[#f38b27] transition-colors">sarv.team.foundation@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaPhoneAlt className="text-[#f38b27] mt-1" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase text-[#73b745] font-bold mb-1">Call Support</span>
                                    <a href="tel:+919654800900" className="text-white hover:text-[#f38b27] transition-colors">+91 96548 00900</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-body">
                    <p className="text-[0.7rem] text-white/50 font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} SARV FOUNDATION. ALL RIGHTS RESERVED.
                    </p>
                    
                    <div className="flex items-center gap-2 text-[0.7rem] font-bold tracking-wider">
                        <span className="text-white/40 uppercase">Developed by</span>
                        <a 
                            href="https://rizeon.in" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#f38b27] hover:text-[#73b745] transition-all"
                        >
                            RIZEON ENTERPRISES
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
