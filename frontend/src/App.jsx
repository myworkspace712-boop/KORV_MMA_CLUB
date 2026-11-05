import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import AboutUs from './components/AboutUs';
import Sports from './pages/Sports';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import VerifyEmail from './pages/VerifyEmail';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

// Homepage with Hero Carousel followed by About Us section
const Home = () => (
  <div className="home-layout">
    <ImageCarousel />
    <AboutUs />
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/mma" element={<Sports />} />
        <Route path="/contact" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/verify" element={<VerifyEmail />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
