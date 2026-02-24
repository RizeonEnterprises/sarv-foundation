import PageHero from '../components/PageHero';
import { 
    FaFemale, FaUtensils, FaHandsHelping, 
    FaTree, FaHeartbeat, FaBookReader, FaPowerOff 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Initiatives = () => {
    const initiativesData = [
        {
            id: "Sakhi-Saheli",
            title: "Sakhi Saheli",
            icon: <FaFemale className="text-5xl text-gold-accent mb-4" />,
            description: "Creating safe spaces for women to share, heal, and grow. A community circle for emotional and social empowerment."
        },
        {
            id: "Sarv-Shiksha",
            title: "Sarv Shiksha",
            icon: <FaBookReader className="text-5xl text-gold-accent mb-4" />,
            description: "Empowering every child through the gift of education. We provide scholarships, learning materials, and after-school support."
        },
        {
            id: "Saksham-Shakti",
            title: "Saksham Shakti",
            icon: <FaPowerOff className="text-5xl text-gold-accent mb-4" />,
            description: "Skill development and vocational training programs designed to make women financially independent and self-reliant."
        },
        {
            id: "Sarv-Saanjh",
            title: "Sarv Saanjh",
            icon: <FaUtensils className="text-5xl text-gold-accent mb-4" />,
            description: "Community kitchen initiatives providing nutritious meals to the homeless and needy in urban slums."
        },
        {
            id: "Sarv-sahayata",
            title: "Sarv Sahayata",
            icon: <FaHandsHelping className="text-5xl text-gold-accent mb-4" />,
            description: "Emergency relief and rehabilitation support during natural calamities and crises."
        },
        {
            id: "Sarv-Vatika",
            title: "Sarv Vatika",
            icon: <FaTree className="text-5xl text-gold-accent mb-4" />,
            description: "Environmental drives, tree plantations, and promoting sustainable living practices properly."
        },
        {
            id: "Sarv-Swasthya",
            title: "Sarv Swasthya",
            icon: <FaHeartbeat className="text-5xl text-gold-accent mb-4" />,
            description: "Organizing health camps, eye checkups, and hygiene awareness workshops for women and children."
        }
    ];

    return (
        <>
            <PageHero
                title="Our Initiatives"
                subtitle="Small steps. Big Impact."
                backgroundImage="/assets/FB_IMG_1580443822070.jpg"
            />

            <section className="py-[80px]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-dark-brown">Programs that Transform</h2>
                        <div className="w-[100px] h-[3px] bg-gold-accent mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {initiativesData.map((item) => (
                            <div key={item.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                                {item.icon}
                                <h3 className="font-heading font-bold text-2xl text-dark-brown mb-2">{item.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    {item.description}
                                </p>
                                <Link 
                                    to={`/initiative/${item.id}`} 
                                    className="px-6 py-2 border border-gold-accent text-primary-brown rounded-full font-bold text-sm uppercase hover:bg-gold-accent hover:text-white transition-colors"
                                >
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Initiatives;
