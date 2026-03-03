import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import News from './components/News';
import Community from './components/Community';
import Contact from './components/Contact';

const navLinks = [
  { name: 'Programos', href: '#paslaugos' },
  { name: 'Aktualijos', href: '#sklaida' },
  { name: 'Bendruomenė', href: '#bendruomene' }
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 pt-4 sm:pt-8 px-4 sm:px-8`}
    >
      <div className={`max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 ${scrolled ? 'glass-panel shadow-2xl py-1 px-6' : 'bg-transparent py-1 px-2'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group cursor-pointer relative w-48 sm:w-64">
            <a href="#">
              <img src="/1.png" alt="Sveikatingumo Akademija Logo" className="absolute top-1/2 left-0 -translate-y-1/2 h-16 sm:h-20 lg:h-24 w-auto object-contain scale-[1.8] sm:scale-[2] origin-left transform group-hover:scale-[1.9] sm:group-hover:scale-[2.1] transition-transform duration-500" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center bg-white/50 backdrop-blur-md rounded-full px-2 py-1 border border-white/60 shadow-sm">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="px-5 py-2 text-sm font-bold text-gray-800 hover:text-primary transition-colors rounded-full hover:bg-white/80">
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#kontaktai"
              className="bg-gray-900 text-white hover:bg-primary px-8 py-3 rounded-full text-sm font-bold shadow-xl transition-colors relative overflow-hidden group block"
            >
              <span className="relative z-10">Susisiekti</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 bg-white/50 backdrop-blur-md p-3 rounded-full border border-white/60 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 glass-panel rounded-[2rem] p-6 shadow-2xl origin-top"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.href}
                  className="text-2xl font-heading font-extrabold text-gray-900 border-b border-gray-200/50 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="#kontaktai"
                className="bg-primary text-white text-xl px-6 py-4 rounded-full font-bold text-center mt-4 w-full shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Susisiekti dabar
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-32 pb-12 relative overflow-hidden rounded-t-[3rem] sm:rounded-t-[5rem] mt-20">
      <div className="absolute inset-0 noise-overlay"></div>

      {/* Abstract Footer Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2 flex flex-col items-start relative pb-8 mt-12">
            <div className="absolute top-0 left-0 -translate-y-1/2 -mt-4 -ml-4">
              <img src="/1.png" alt="Sveikatingumo Akademija" className="h-24 sm:h-32 lg:h-40 w-auto object-contain scale-[2] origin-left brightness-0 invert opacity-90" />
            </div>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed mt-20">
              Meno ir judesio sintezė. Kuriame erdvę, kurioje vaikai ne tik sportuoja, bet ir atranda save per estetiką, žaidimą bei profesionalią priežiūrą.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-white uppercase tracking-widest text-sm">Navigacija</h4>
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-6 text-white uppercase tracking-widest text-sm">Susisiekti</h4>
            <div className="flex flex-col space-y-4">
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">Vilnius, Lietuva</p>
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">+370 600 00000</p>
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer border-b border-primary inline-block self-start pb-1">info@sveikatingumoakademija.lt</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Sveikatingumo Akademija. Unikalaus dizaino vizija.
          </p>
          <div className="flex space-x-6">
            <span className="text-gray-500 hover:text-white cursor-pointer transition-colors text-sm">Instagram</span>
            <span className="text-gray-500 hover:text-white cursor-pointer transition-colors text-sm">Facebook</span>
          </div>
        </div>
      </div>

      {/* Massive subtle background text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex justify-center translate-y-1/2 hidden md:flex opacity-5 pointer-events-none select-none">
        <span className="text-[15vw] font-heading font-black text-white whitespace-nowrap">J U D Ė K I M</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background-warm selection:bg-primary selection:text-white relative">
      <div className="fixed inset-0 noise-overlay z-50"></div>
      <Navigation />

      <main className="flex-grow pt-8 sm:pt-20">
        <div className="mb-20 sm:mb-32">
          <Hero />
        </div>
        <Services />
        <Gallery />
        <News />
        <Community />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
