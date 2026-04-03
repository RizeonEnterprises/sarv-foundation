import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = '',
}) => {
  return (
    <section className={`relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden ${className}`}>
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Blue Gradient Overlay (Home page banner style) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1a365d]/80 via-[#1a365d]/50 to-transparent" aria-hidden="true" />

      {/* Content - Exactly Centered */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fadeIn">
        
        {/* Title - Pure White like "SARV" */}
        <h1 className="font-heading font-bold text-4xl md:text-7xl mb-4 drop-shadow-2xl uppercase tracking-wider text-white">
          {title}
        </h1>
        
        {/* Subtitle - Green + Orange Combination */}
        {subtitle && (
          <p className="font-heading text-xl md:text-3xl font-bold drop-shadow-lg italic">
            <span className="text-[#f38b27]">{subtitle.split(' ')[0]}</span>{' '}
            <span className="text-[#f38b27]">{subtitle.split(' ').slice(1).join(' ')}</span>
          </p>
        )}
        
        {/* Logo Orange Accent Line */}
        <div className="mx-auto w-24 h-1.5 bg-[#f38b27] mt-6 rounded-full shadow-lg"></div>
      </div>
    </section>
  );
};

export default PageHero;
