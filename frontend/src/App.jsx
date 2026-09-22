import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import TaxiRoutes from './components/TaxiRoutes';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import { trackPageView } from './utils/tracking';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({ title: 'Get Your Trip Quote', context: 'Landing Page Lead' });
  const popupTimerRef = useRef(null);

  // Track page view on app mount
  useEffect(() => {
    trackPageView('MyCliTours - Home', '/');

    popupTimerRef.current = window.setTimeout(() => {
      setIsPopupOpen(true);
    }, 1200);

    return () => {
      window.clearTimeout(popupTimerRef.current);
    };
  }, []);

  const openPopup = (title = 'Enquire Now', context = '') => {
    window.clearTimeout(popupTimerRef.current);
    setPopupData({ title, context });
    setIsPopupOpen(true);
  };

  const closePopup = (reason = 'dismissed') => {
    setIsPopupOpen(false);
    window.clearTimeout(popupTimerRef.current);

    if (reason !== 'submitted') {
      popupTimerRef.current = window.setTimeout(() => {
        setPopupData({ title: 'Get Your Trip Quote', context: '' });
        setIsPopupOpen(true);
      }, 10000);
    }
  };

  return (
    <div className="bg-gray-50 font-body text-gray-800">
      <Navbar openPopup={openPopup} />
      <main>
        <Hero openPopup={openPopup} />
        <Services openPopup={openPopup} />
        <TaxiRoutes openPopup={openPopup} />
        <Packages openPopup={openPopup} />
        <WhyChooseUs />
        <Reviews />
      </main>
      <Footer />
      <LeadPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        data={popupData}
      />
    </div>
  );
}

export default App;
