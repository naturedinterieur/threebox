import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import RSESection from './components/RSESection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductSection />
      <RSESection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
