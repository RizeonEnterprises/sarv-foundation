import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaEnvelope, FaPhoneAlt, FaShieldAlt, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-brown text-[#d7ccc8] py-[70px] pb-[30px] mt-auto relative border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* 1. Brand Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="font-heading font-bold text-3xl mb-2 text-white tracking-tight">SARV</h2>
                        <p className="text-gold-accent font-bold text-[0.7rem] uppercase tracking-[3px] mb-6">One World | One Heart</p>
                        <p className="text-[#d7ccc8]/70 text-sm leading-relaxed text-center md:text-left">
                            Empowering lives through compassion, dignity, and inclusive growth. Built on experience, focused on impact.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-accent hover:text-dark-brown transition-all duration-300 border border-white/10">
                                <FaLinkedinIn className="text-xs" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-accent hover:text-dark-brown transition-all duration-300 border border-white/10">
                                <FaInstagram className="text-xs" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-accent hover:text-dark-brown transition-all duration-300 border border-white/10">
                                <FaFacebookF className="text-xs" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-widest text-xs">Navigation</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><Link to="/about" className="hover:text-gold-accent transition-colors flex items-center gap-2">About Us</Link></li>
                            <li><Link to="/initiatives" className="hover:text-gold-accent transition-colors flex items-center gap-2">Initiatives</Link></li>
                            <li><Link to="/impact" className="hover:text-gold-accent transition-colors flex items-center gap-2">Impact</Link></li>
                            <li><Link to="/contact" className="hover:text-gold-accent transition-colors flex items-center gap-2">Contact</Link></li>
                        </ul>
                    </div>

                    {/* 3. Legal & Compliance */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-widest text-xs">Legal & Compliance</h4>
                        <ul className="space-y-4 text-[0.8rem] text-[#d7ccc8]/80 font-semibold">
                            <li className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-md border border-white/5 w-full">
                                <FaShieldAlt className="text-gold-accent text-xs" /> 12A REGISTERED
                            </li>
                            <li className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-md border border-white/5 w-full">
                                <FaShieldAlt className="text-gold-accent text-xs" /> 80G CERTIFIED
                            </li>
                            <li className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-md border border-white/5 w-full">
                                <FaShieldAlt className="text-gold-accent text-xs" /> DARPAN REGISTERED
                            </li>
                            <li className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-md border border-white/5 w-full">
                                <FaShieldAlt className="text-gold-accent text-xs" /> CSR-COMPLIANT
                            </li>
                        </ul>
                    </div>

                    {/* 4. Get in Touch */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-heading font-bold text-lg mb-6 text-white uppercase tracking-widest text-xs">Reach Us</h4>
                        <div className="space-y-5 text-sm">
                            <div className="flex items-start gap-4">
                                <FaEnvelope className="text-gold-accent mt-1" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase text-[#d7ccc8]/50 mb-1">Email Support</span>
                                    <a href="mailto:sarv.team.foundation@gmail.com" className="hover:text-gold-accent transition-colors">sarv.team.foundation@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <FaPhoneAlt className="text-gold-accent mt-1" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase text-[#d7ccc8]/50 mb-1">Call Support</span>
                                    <a href="tel:+919654800900" className="hover:text-gold-accent transition-colors">+91 96548 00900</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Section */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[0.7rem] opacity-50 font-medium tracking-wide">
                        &copy; {new Date().getFullYear()} SARV FOUNDATION. ALL RIGHTS RESERVED.
                    </p>
                    
                    {/* Developer Credit Line */}
                    <div className="flex items-center gap-2 text-[0.7rem] font-bold tracking-wider">
                        <span className="opacity-40 uppercase">Developed by</span>
                        <a 
                            href="https://rizeon.in" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gold-accent hover:underline decoration-1 underline-offset-4 transition-all"
                        >
                            RIZEON ENTERPRISES
                        </a>
                    </div>

                    <div className="flex gap-6 text-[0.65rem] opacity-40 uppercase tracking-[2px] font-bold">
                        <span>Delhi NCR, India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
