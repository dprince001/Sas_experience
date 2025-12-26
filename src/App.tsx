
import Hero from './components/Hero';
import Portraits from './components/Potraits';
import About from './components/About';
import Visuals from './components/Visuals';
import Gallery from './components/Gallery';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Hero />
      <Portraits />
      <About />
      <Visuals />
      <Gallery />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App;
