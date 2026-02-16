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
                        <img src="/assets/logo final.jpeg" alt="Sarv Foundation Logo" className="h-[60px]" />
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
                                INITIATIVES <FaCaretDown />
                            </button>
                            {isInitiativesDropdownOpen && (
                                <div className="absolute top-full left-0 bg-white min-w-[180px] shadow-lg border-t-2 border-gold-accent flex flex-col z-50">
                                    <Link to="/initiatives" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">ALL INITIATIVES</Link>
                                    <Link to="/sakhi-saheli" className="px-5 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 text-dark-brown">SAKHI SAHELI</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/impact" className={navLinkClasses('/impact')}>IMPACT IN MOTION</Link>
                        <Link to="/join-us" className={navLinkClasses('/join-us')}>JOIN US</Link>
                        <Link to="/contact" className={navLinkClasses('/contact')}>CONTACT US</Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={classNames(
                    "lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out z-50 pt-20 transform",
                    { "translate-x-0": isMobileMenuOpen, "translate-x-full": !isMobileMenuOpen }
                )}>
                    {/* Close Button inside Mobile Menu */}
                    <div className="absolute top-5 right-5 text-2xl cursor-pointer text-dark-brown" onClick={toggleMobileMenu}>
                        <FaTimes />
                    </div>

                    <div className="flex flex-col">
                        <Link to="/" className={mobileNavLinkClasses('/')} onClick={toggleMobileMenu}>HOME</Link>

                        {/* Mobile About Dropdown */}
                        <div className="">
                            <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                                className="w-full flex justify-between items-center py-4 px-6 border-b border-gray-100 font-bold text-sm uppercase hover:text-gold-accent bg-transparent">
                                <span>ABOUT US</span>
                                <FaCaretDown className={classNames("transition-transform", { "rotate-180": isAboutDropdownOpen })} />
                            </button>
                            {isAboutDropdownOpen && (
                                <div className="bg-gray-50 px-4">
                                    <Link to="/essence" className="block py-3 px-4 text-sm border-b border-gray-100" onClick={toggleMobileMenu}>OUR ESSENCE</Link>
                                    <Link to="/journey" className="block py-3 px-4 text-sm border-b border-gray-100" onClick={toggleMobileMenu}>OUR JOURNEY</Link>
                                    <Link to="/vision" className="block py-3 px-4 text-sm border-b border-gray-100" onClick={toggleMobileMenu}>OUR VISION</Link>
                                    <Link to="/mission" className="block py-3 px-4 text-sm border-b border-gray-100" onClick={toggleMobileMenu}>OUR MISSION</Link>
                                    <Link to="/values" className="block py-3 px-4 text-sm border-b border-gray-100" onClick={toggleMobileMenu}>OUR VALUES</Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Initiatives Dropdown */}
                        <div className="">
                            <button onClick={() => setIsInitiativesDropdownOpen(!isInitiativesDropdownOpen)}
                                className="w-full flex justify-between items-center py-4 px-6 border-b border-gray-100 font-bold text-sm uppercase hover:text-gold-accent bg-transparent">
                                <span>INITIATIVES</span>
                                <FaCaretDown className={classNames("transition-transform", { "rotate-180": isInitiativesDropdownOpen })} />
                            </button>
                            {isInitiativesDropdownOpen && (
                                <div className="bg-gray-50 px-4">
                                    <Link to="/initiatives" className="block py-3 px-4 text-sm border-b border-gray-100" onClick={toggleMobileMenu}>ALL INITIATIVES</Link>
                                    <Link to="/sakhi-saheli" className="block py-3 px-4 text-sm border-b border-gray-100" onClick={toggleMobileMenu}>SAKHI SAHELI</Link>
                                </div>
                            )}
                        </div>

                        <Link to="/impact" className={mobileNavLinkClasses('/impact')} onClick={toggleMobileMenu}>IMPACT IN MOTION</Link>
                        <Link to="/join-us" className={mobileNavLinkClasses('/join-us')} onClick={toggleMobileMenu}>JOIN US</Link>
                        <Link to="/contact" className={mobileNavLinkClasses('/contact')} onClick={toggleMobileMenu}>CONTACT US</Link>
                    </div>
                </div>

                {/* Overlay for mobile menu */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={toggleMobileMenu}></div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
