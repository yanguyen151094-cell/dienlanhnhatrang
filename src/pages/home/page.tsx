import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Stats from './components/Stats';
import SimpleBanner from './components/SimpleBanner';
import SimpleContent from './components/SimpleContent';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ZaloChatButton from './components/ZaloChatButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <Stats />
        <HowItWorks />
        <SimpleBanner />
        <SimpleContent />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ZaloChatButton />
    </div>
  );
}