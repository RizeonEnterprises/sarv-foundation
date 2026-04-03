import { useState } from 'react';
import PageHero from '../components/PageHero';
import { FaTimes } from 'react-icons/fa';

const galleryImages = [
    '/assets/2006-SARV-Img-40.webp',
    '/assets/2006-SARV-Img-03.webp',
    '/assets/2006-SARV-Img-05.webp',
    '/assets/2006-SARV-Img-06.webp',
    '/assets/2006-SARV-Img-07.webp',
    '/assets/2006-SARV-Img-08.webp',
    '/assets/2006-SARV-Img-09.webp',
    '/assets/2006-SARV-Img-12.webp',
    '/assets/2006-SARV-Img-11.webp',
    '/assets/2006-SARV-Img-13.webp',
    '/assets/2006-SARV-Img-14.webp',
    '/assets/2006-SARV-Img-15.webp',
    '/assets/2006-SARV-Img-16.webp',
    '/assets/2006-SARV-Img-17.webp',
    '/assets/2006-SARV-Img-18.webp',
    '/assets/2006-SARV-Img-19.webp',
    '/assets/2006-SARV-Img-20.webp',
    '/assets/2006-SARV-Img-21.webp',
    '/assets/2006-SARV-Img-22.webp',
    '/assets/2006-SARV-Img-24.webp',
    '/assets/2006-SARV-Img-26.webp',
    '/assets/2006-SARV-Img-27.webp',
    '/assets/2006-SARV-Img-28.webp',
    '/assets/2006-SARV-Img-30.webp',
    '/assets/2006-SARV-Img-31.webp',
    '/assets/2006-SARV-Img-32.webp',
    '/assets/2006-SARV-Img-33.webp',
    '/assets/2006-SARV-Img-34.webp',
    '/assets/2006-SARV-Img-35.webp',
    '/assets/2006-SARV-Img-36.webp',
    '/assets/2006-SARV-Img-37.webp',
    '/assets/2006-SARV-Img-38.webp',
    '/assets/2006-SARV-Img-39.webp',
    '/assets/2006-SARV-Img-41.webp',
    '/assets/2006-SARV-Img-42.webp',
    '/assets/2006-SARV-Img-43.webp',
    '/assets/2006-SARV-Img-44.webp',
    '/assets/2006-SARV-Img-45.webp',
    '/assets/2006-SARV-Img-46.webp',
    '/assets/2006-SARV-Img-51.webp',
    '/assets/2006-SARV-Img-53.webp',
    '/assets/2006-SARV-Img-54.webp',
    '/assets/2006-SARV-Img-56.webp',
    '/assets/2006-SARV-Img-57.webp',
    '/assets/2006-SARV-Img-58.webp',
    '/assets/2006-SARV-Img-59.webp',
    '/assets/2006-SARV-Img-67.webp',
    '/assets/2006-SARV-Img-01.webp',
    '/assets/2006-SARV-Img-02.webp'
];

const Impact = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openLightbox = (image: string) => {
        setCurrentImage(image);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setCurrentImage('');
    };

    return (
        <>
            <PageHero
                title="Impact in Motion"
                subtitle="Small steps. Big Impact."
                backgroundImage="/assets/2006-SARV-Img-12.webp"
            />

            <section className="py-[80px] bg-soft-beige">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-brown">Our Gallery</h2>
                        <div className="w-[100px] h-[3px] bg-gold-accent mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-[200px] group border-4 border-white"
                                onClick={() => openLightbox(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-bold uppercase tracking-wider text-sm">View</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4" onClick={closeLightbox}>
                    <button className="absolute top-8 right-8 text-white text-4xl hover:text-gold-accent transition-colors">
                        <FaTimes />
                    </button>
                    <img src={currentImage} alt="Fullscreen" className="max-w-full max-h-[90vh] object-contain border-4 border-white rounded-sm" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </>
    );
};

export default Impact;
