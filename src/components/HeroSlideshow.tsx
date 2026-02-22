import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const slides = [
    '/assets/FB_IMG_1583815239968.jpg',
    '/assets/FB_IMG_1580443822070.jpg',
    '/assets/image_fc1e115a-1fc8-44fc-af3e-80932b33172320220706_114518.jpg',
    '/assets/image4.jpeg',
    '/assets/image5.jpeg',
    '/assets/image6.jpeg'
];

const HeroSlideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="relative h-[50vh] sm:h-[70vh] md:h-[85vh] overflow-hidden flex items-center justify-center bg-dark-brown text-white">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={classNames(
                        "absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000",
                        { "opacity-100 animate-[zoomEffect_20s_infinite_linear]": index === currentSlide, "opacity-0": index !== currentSlide }
                    )}
                    style={{ backgroundImage: `url('${slide}')` }}
                />
            ))}

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary-brown/60 z-10"></div>

            {/* Content */}
            <div className="container mx-auto px-4 z-20 text-center relative">
                <h1 className="font-heading font-bold text-5xl md:text-6xl mb-4 drop-shadow-lg text-white">Sarv Foundation</h1>
                <h2 className="font-heading text-2xl md:text-3xl text-soft-beige mb-6">Empowering Lives. Nurturing Humanity.</h2>

                <div className="mx-auto w-[100px] h-[3px] bg-gold-accent my-8"></div>

                <p className="font-body text-lg md:text-xl mb-10 max-w-2xl mx-auto">A movement of compassion, dignity, and inclusive growth.</p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/initiatives" className="inline-block px-8 py-3 rounded-full font-bold uppercase text-sm bg-gold-accent text-dark-brown hover:bg-white hover:text-dark-brown hover:-translate-y-1 transition-all duration-300">
                        Our Initiatives
                    </Link>
                    <Link to="/join-us" className="inline-block px-8 py-3 rounded-full font-bold uppercase text-sm border-2 border-white text-white hover:bg-white hover:text-dark-brown hover:-translate-y-1 transition-all duration-300">
                        Join the Movement
                    </Link>
                </div>
            </div>

            {/* CSS Animation defined in global or config */}
        </header>
    );
};

export default HeroSlideshow;
