
import { Routes, Route } from "react-router-dom";
import Home from '../routes/Home';
import AboutUs from '../routes/AboutUs';
import Mission from '../routes/Mission';
import Vision from '../routes/Vision';
import Services from '../routes/Services';
import SundayService from '../routes/SundayService';
import TuesdayTeachingService from '../routes/TuesdayTeachingService';
import FridayPrayerService from '../routes/FridayPrayerService';
import OtherServiceActivity from '../routes/OtherServiceActivity';
import Layout from './Layout';
import PhotoGallery from '../routes/PhotoGallery';
import ChurchOfficials from '../routes/ChurchOfficials';
import ChurchMembers from '../routes/ChurchMembers';
import Videos from '../routes/Videos';
import ContactUs from '../routes/ContactUs';


import Blank from '../routes/Blank';
import Started from '../routes/Started';


const App = () => {
  return (
    <>
	
      <Routes>
	  
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
		  <Route path="about-us" element={<AboutUs />} />
		  <Route path="mission" element={<Mission />} />
		  <Route path="vision" element={<Vision />} />
          <Route path="services" element={<Services />} />
		  <Route path="sunday-service" element={<SundayService />} />
		  <Route path="tuesday-teaching-service" element={<TuesdayTeachingService />} />
		  <Route path="friday-prayer-service" element={<FridayPrayerService />} />
		  <Route path="other-service-activity" element={<OtherServiceActivity />} />
		  <Route path="photo-gallery" element={<PhotoGallery />} />
		  <Route path="church-officials" element={<ChurchOfficials />} />
		  <Route path="church-members" element={<ChurchMembers />} />
		  <Route path="videos" element={<Videos />} />
		  <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<p>Not found!</p>} />
		  <Route path='/started' element={<Started />} />
          <Route path='/calendar' element={<Blank />} />
          <Route path='/user' element={<Blank />} />
          <Route path='/order' element={<Blank />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
