
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const slides = [
  '/assets/2006-SARV-Img-40.webp',
  '/assets/2006-SARV-Img-34.webp',
  '/assets/2006-SARV-Img-10.webp',
  '/assets/2006-SARV-Img-14.webp',
  '/assets/2006-SARV-Img-33.webp',
  '/assets/2006-SARV-Img-45.webp',
  '/assets/2006-SARV-Img-37.webp',
  '/assets/2006-SARV-Img-35.webp'
];

function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden flex items-center bg-white text-white">
      {slides.map((slide, index) => (
        <div key={slide} className={classNames("absolute inset-0 w-full h-full transition-opacity duration-1000", { "opacity-100 z-10": index === currentSlide, "opacity-0 z-0": index !== currentSlide })}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide}')` }} />
        </div>
      ))}

      {/* Modern Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/90 via-[#1a365d]/40 to-transparent z-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 z-30 text-center relative">
        <h1 className="font-heading font-bold text-5xl md:text-8xl mb-4 drop-shadow-2xl text-white uppercase">
          SARV <span className="text-white">Foundation</span>
        </h1>
        
        <h2 className="font-heading text-2xl md:text-4xl text-[#73b745] mb-6 font-semibold">
          One World. <span className="text-[#f38b27]">One Heart.</span>
        </h2>

        <div className="mx-auto w-32 h-1.5 bg-[#f38b27] my-8 rounded-full"></div>

        <p className="font-body text-lg md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white drop-shadow-md">
          A movement of compassion, dignity, and inclusive growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link 
            to="/initiatives" 
            className="w-full sm:w-auto px-12 py-4 rounded-full font-bold uppercase text-sm tracking-widest bg-[#f38b27] text-white hover:scale-105 transition-all shadow-xl"
          >
            Our Initiatives
          </Link>
          <Link 
            to="/join-us" 
            className="w-full sm:w-auto px-12 py-4 rounded-full font-bold uppercase text-sm tracking-widest border-2 border-white text-white hover:bg-white hover:text-[#1a365d] hover:scale-105 transition-all"
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeroSlideshow;
