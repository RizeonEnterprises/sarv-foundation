
interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
    return (
        <section
            className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#3e2723]/70 to-[#3e2723]/50 z-10"></div>

            <div className="relative z-20 text-center text-white px-4">
                <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4 drop-shadow-md">{title}</h1>
                {subtitle && <h2 className="font-heading text-xl md:text-3xl text-soft-beige">{subtitle}</h2>}
            </div>
        </section>
    );
};

export default PageHero;
