import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Initiatives from './pages/Initiatives';
import SakhiSaheli from './pages/SakhiSaheli';
import Impact from './pages/Impact';
import JoinUs from './pages/JoinUs';
import Essence from './pages/Essence';
import Journey from './pages/Journey';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Values from './pages/Values';
import About from './pages/About';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/sakhi-saheli" element={<SakhiSaheli />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/essence" element={<Essence />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/values" element={<Values />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="text-center p-20">Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
