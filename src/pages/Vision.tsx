import PageHero from '../components/PageHero';
import { FaEye } from 'react-icons/fa';

const Vision = () => {
    return (
        <>
            <PageHero
                title="Our Vision"
                subtitle="Every Dream Matters."
                backgroundImage="/assets/vision.jpg"
            />

            <section className="py-[100px] bg-soft-beige">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <div className="bg-white p-12 rounded-xl shadow-lg border-t-8 border-gold-accent">
                        <FaEye className="text-6xl text-gold-accent mx-auto mb-8" />
                        <h2 className="font-heading font-bold text-2xl md:text-3xl text-dark-brown leading-relaxed mb-8">
                            "To build a self-sustained, compassionate ecosystem where education, awareness, and wellness uplift every life, especially women and children."
                        </h2>

                        <div className="w-[150px] h-[2px] bg-gray-200 mx-auto mb-8"></div>

                        <div className="text-lg text-gray-600 space-y-2">
                            <p>A world where every girl learns.</p>
                            <p>Every woman stands strong.</p>
                            <p>Every community grows together.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Vision;
