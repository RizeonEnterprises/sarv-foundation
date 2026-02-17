import { useState } from 'react';
import PageHero from '../components/PageHero';
import { FaTimes } from 'react-icons/fa';

const galleryImages = [
    '/assets/image_7956e10f-fd3d-4494-bdec-4e8af0c79f7a20230507_115656.jpg',
    '/assets/image_fc1e115a-1fc8-44fc-af3e-80932b33172320220706_114518.jpg',
    '/assets/1552279651742 - Copy.jpg',
    '/assets/1552279478729.jpg',
    '/assets/1547727656317.jpg',
    '/assets/FB_IMG_1579545923480.jpg',
    '/assets/FB_IMG_1580443822070.jpg',
    '/assets/DSC_7081.JPG',
    '/assets/Deepa mallik.JPG',
    '/assets/DSC_7084.JPG',
    '/assets/DSC_7846.JPG',
    '/assets/FB_IMG_1583815239968.jpg'
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
                backgroundImage="/assets/1552279651742 - Copy.jpg"
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
