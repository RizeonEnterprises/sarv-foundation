import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import classNames from 'classnames';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Close dropdowns when toggling menu
        setIsAboutDropdownOpen(false);
        setIsInitiativesDropdownOpen(false);
    };

    const isActive = (path: string) => location.pathname === path;

    const navLinkClasses = (path: string) => classNames(
        "font-bold text-sm uppercase px-1 py-2 transition-colors duration-300 hover:text-gold-accent",
        { "text-gold-accent": isActive(path) }
    );

    const mobileNavLinkClasses = (path: string) => classNames(
        "block w-full text-left py-4 px-6 border-b border-gray-100 font-bold text-sm uppercase hover:text-gold-accent",
        { "text-gold-accent": isActive(path) }
    );

    return (
        <nav className="bg-white sticky top-0 z-50 shadow-md border-t-4 border-gold-accent">
            <div className="container mx-auto px-4 py-2">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                    {/* Brand */}
                    <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src="/assets/logo final.png" alt="Sarv Foundation Logo" className="h-[60px]" />
                        <div className="flex flex-col">
                            <h2 className="font-heading font-bold text-2xl text-dark-brown m-0 group-hover:text-primary-brown transition-colors">SARV</h2>
                            <span className="text-[0.7rem] tracking-[2px] text-gold-accent font-semibold uppercase">ONE WORLD | ONE HEART</span>
                        </div>
                    </Link>

                    {/* Hamburger */}
                    <div className="lg:hidden text-2xl cursor-pointer text-dark-brown" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 mt-2">
                        <Link to="/" className={navLinkClasses('/')}>HOME</Link>

                        {/* About Dropdown */}
                        <div className="relative group"
                            onMouseEnter={() => setIsAboutDropdownOpen(true)}
                            onMouseLeave={() => setIsAboutDropdownOpen(false)}>
                            <Link to="/about" className="flex items-center gap-1 font-bold text-sm uppercase px-1 py-2 hover:text-gold-accent bg-transparent border-none cursor-pointer decoration-none text-gray-800">
                                ABOUT US <FaCaretDown />
                            </Link>
                            {isAboutDropdownOpen && (
                                <div className="absolute top-full left-0 bg-white min-w-[180px] shadow-lg border-t-2 border-gold-accent flex flex-col z-50">
                                    <Link to="/essence" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">OUR ESSENCE</Link>
                                    <Link to="/journey" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">OUR JOURNEY</Link>
                                    <Link to="/vision" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">OUR VISION</Link>
                                    <Link to="/mission" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">OUR MISSION</Link>
                                    <Link to="/values" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">OUR VALUES</Link>
                                </div>
                            )}
                        </div>

                        {/* Initiatives Dropdown */}
                        <div className="relative group"
                            onMouseEnter={() => setIsInitiativesDropdownOpen(true)}
                            onMouseLeave={() => setIsInitiativesDropdownOpen(false)}>
                            <button className="flex items-center gap-1 font-bold text-sm uppercase px-1 py-2 hover:text-gold-accent bg-transparent border-none cursor-pointer">
                            <Link to="/initiatives" className="flex items-center gap-1 font-bold text-sm uppercase px-1 py-2 hover:text-gold-accent bg-transparent border-none cursor-pointer decoration-none text-gray-800">
                            INITIATIVES <FaCaretDown /></Link>
                            </button>
                            {isInitiativesDropdownOpen && (
                                <div className="absolute top-full left-0 bg-white min-w-[180px] shadow-lg border-t-2 border-gold-accent flex flex-col z-50">
                                    <Link to="/sakhi-saheli" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">SAKHI SAHELI</Link>
                                    <Link to="/SarvShiksha" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">SARV SHIKSHA</Link>
                                    <Link to="/SakshamShakti" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">SAKSHAM SHAKTI SAHELI</Link>
                                    <Link to="/SarvSaanjh" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">SARV SAANJH</Link>
                                    <Link to="/Sarvsahayata" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">SARV SAHAYATA</Link>
                                    <Link to="/SarvVatika" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">SARV VATIKA</Link>
                                    <Link to="/SarvSwasthya" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">SARV SWASTHYA</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/impact" className={navLinkClasses('/impact')}>IMPACT IN MOTION</Link>
                        <Link to="/join-us" className={navLinkClasses('/join-us')}>JOIN US</Link>
                        <Link to="/contact" className={navLinkClasses('/contact')}>CONTACT US</Link>
                    </div>
                </div>

{/* --- MOBILE SIDEBAR WITH DROPDOWNS --- */}
                <div className={classNames(
                    "lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 overflow-y-auto transform",
                    { "translate-x-0": isMobileMenuOpen, "translate-x-full": !isMobileMenuOpen }
                )}>
                    <div className="flex justify-between items-center p-6 border-b border-slate-100">
                        <span className="font-bold text-[#1a365d]">MENU</span>
                        <FaTimes className="text-2xl cursor-pointer text-[#1a365d]" onClick={toggleMobileMenu} />
                    </div>

                    <div className="flex flex-col">
                        <Link to="/" className={mobileNavLinkClasses('/')} onClick={toggleMobileMenu}>HOME</Link>

                        {/* 1. Mobile ABOUT US Dropdown */}
                        <div className="border-b border-slate-100">
                            <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                                className="w-full flex justify-between items-center py-4 px-6 font-bold text-sm uppercase text-[#1a365d] bg-transparent">
                            <Link to="/about" className="block py-3 px-10 text-sm border-b border-white text-[#1a365d] font-bold" onClick={toggleMobileMenu}>ABOUT US</Link>
                                <FaCaretDown className={classNames("transition-transform duration-300", { "rotate-180 text-[#f38b27]": isAboutDropdownOpen })} />
                            </button>
                            <div className={classNames("bg-slate-50 overflow-hidden transition-all duration-300", 
                                isAboutDropdownOpen ? "max-h-[500px]" : "max-h-0")}>
                                <Link to="/essence" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>OUR ESSENCE</Link>
                                <Link to="/journey" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>OUR JOURNEY</Link>
                                <Link to="/vision" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>OUR VISION</Link>
                                <Link to="/mission" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>OUR MISSION</Link>
                                <Link to="/values" className="block py-3 px-10 text-sm text-slate-600" onClick={toggleMobileMenu}>OUR VALUES</Link>
                            </div>
                        </div>

                        {/* 2. Mobile INITIATIVES Dropdown */}
                        <div className="border-b border-slate-100">
                            <button onClick={() => setIsInitiativesDropdownOpen(!isInitiativesDropdownOpen)}
                                className="w-full flex justify-between items-center py-4 px-6 font-bold text-sm uppercase text-[#1a365d] bg-transparent">
                                <span><Link to="/initiatives" className="block py-3 px-10 text-sm border-b border-white text-[#1a365d] font-bold" onClick={toggleMobileMenu}>INITIATIVES</Link></span>
                                <FaCaretDown className={classNames("transition-transform duration-300", { "rotate-180 text-[#f38b27]": isInitiativesDropdownOpen })} />
                            </button>
                            <div className={classNames("bg-slate-50 overflow-hidden transition-all duration-300", 
                                isInitiativesDropdownOpen ? "max-h-[800px]" : "max-h-0")}>
                                <Link to="/sakhi-saheli" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>SAKHI SAHELI</Link>
                                <Link to="/SarvShiksha" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>SARV SHIKSHA</Link>
                                <Link to="/SakshamShakti" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>SAKSHAM SHAKTI</Link>
                                <Link to="/SarvSaanjh" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>SARV SAANJH</Link>
                                <Link to="/Sarvsahayata" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>SARV SAHAYATA</Link>
                                <Link to="/SarvVatika" className="block py-3 px-10 text-sm border-b border-white text-slate-600" onClick={toggleMobileMenu}>SARV VATIKA</Link>
                                <Link to="/SarvSwasthya" className="block py-3 px-10 text-sm text-slate-600" onClick={toggleMobileMenu}>SARV SWASTHYA</Link>
                            </div>
                        </div>

                        <Link to="/impact" className={mobileNavLinkClasses('/impact')} onClick={toggleMobileMenu}>IMPACT</Link>
                        <Link to="/join-us" className={mobileNavLinkClasses('/join-us')} onClick={toggleMobileMenu}>JOIN US</Link>
                        <Link to="/contact" className={mobileNavLinkClasses('/contact')} onClick={toggleMobileMenu}>CONTACT US</Link>
                    </div>
                </div>

                {/* Mobile Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-[#1a365d]/40 z-40 lg:hidden transition-opacity" onClick={toggleMobileMenu}></div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
