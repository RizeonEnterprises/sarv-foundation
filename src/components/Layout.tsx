import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();

    return (
        /* bg-[#fdfdfd] ensures white theme and text-slate-700 gives professional look */
        <div className="min-h-screen flex flex-col font-body text-slate-700 bg-[#fdfdfd]">
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
