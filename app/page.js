import { Philosophy, Wohin, Event, Drinks, Team, Sportarena } from '../sections';
import ScrollToTop from '../components/BackToTop/ScrollToTop.js';
import Navigation from '../components/navigation';
import InfoBar from '../components/InfoBar';
import {Hero} from '../sections';
import {About} from '../sections';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <div className="bg-primary-black overflow-hidden flex-col">
      <Navigation />
      <InfoBar />
      <div className='flex-grow'>
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0"></div>
          <Philosophy />
        </div>
        <div className="relative">
          <Drinks />
          <ScrollToTop />
          <div className="gradient-04 z-0"></div>
          <Event />
        </div>
        <Sportarena />
        <div className="relative">
          <Team />
          <div className="gradient-04 z-0"></div>
          <Wohin />
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
}