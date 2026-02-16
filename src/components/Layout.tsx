import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col font-body text-primary-brown bg-soft-beige">
            <Navbar />
            <main className="flex-grow">
                <div key={location.pathname} className="animate-fadeIn">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
