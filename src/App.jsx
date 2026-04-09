import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products.jsx';
import WhyUs from './components/Whyus.jsx';
import About from './components/About';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      className="bg-[#faf8f3] text-gray-900"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <WhyUs />
      <About />
      <CTABanner />
      <Footer />
    </div>
  );
}
