import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Packages from './components/Packages';
import TaxiRoutes from './components/TaxiRoutes';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import { trackPageView, trackButtonClick } from './utils/tracking';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({ title: '', context: '' });

  // Track page view on app mount
  useEffect(() => {
    trackPageView('MyCliTours - Home', '/');
  }, []);

  const openPopup = (title = 'Enquire Now', context = '') => {
    trackButtonClick(`Enquire Now - ${context || title}`);
    setPopupData({ title, context });
    setIsPopupOpen(true);
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
        onClose={() => setIsPopupOpen(false)}
        data={popupData}
      />
    </div>
  );
}

export default App;
