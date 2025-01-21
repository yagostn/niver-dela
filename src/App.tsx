import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Heart, Gift, Camera, Music, Stars } from 'lucide-react';
import MomentosEspeciais from './pages/MomentosEspeciais.tsx';
import NossasMemorias from './pages/NossasMemorias.tsx';
import NossaMelodia from './pages/NossaMelodia.tsx';
import NossoFuturo from './pages/NossoFuturo.tsx';

function App() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const photos = [
    "/src/img/ela1.jpeg",
    "/src/img/ela2.jpeg",
    "/src/img/ela3.jpeg"
  ];

  const phrases = [
    "Feliz aniversário, amor! ❤️",
    "Cada momento ao seu lado é especial",
    "Você ilumina meus dias",
    "Te amo mais a cada dia que passa"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/momentos-especiais" element={<MomentosEspeciais />} />
        <Route path="/nossas-memorias" element={<NossasMemorias />} />
        <Route path="/nossa-melodia" element={<NossaMelodia />} />
        <Route path="/nosso-futuro" element={<NossoFuturo />} />
        <Route path="/" element={
          <div className="min-h-screen bg-black">
            <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Header */}
              <header className="text-center py-10 px-4">
                <div className="animate-bounce inline-block mb-4">
                  <Heart className="w-12 h-12 text-red-500" fill="currentColor" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-4">
                  Feliz Aniversário!
                </h1>
                <p className="text-xl md:text-2xl text-pink-400 mb-4">
                  Que Deus continue lhe abençoando e iluminando seu caminho. Eu te amo muito, Kethilly Lisboa!🤍
                </p>
              </header>

              {/* Main Content */}
              <main className="max-w-4xl mx-auto px-4 pb-20">
                {/* Photo Gallery */}
                <div className="relative h-80 md:h-96 mb-12 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={photos[currentPhotoIndex]}
                    alt="Momentos especiais"
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                    <p className="text-white text-lg text-center">
                      {phrases[currentPhotoIndex % phrases.length]}
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Link to="/momentos-especiais" className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <Gift className="w-8 h-8 text-pink-500 mb-4" />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Momentos Especiais</h2>
                    <p className="text-gray-600">
                      Cada momento ao seu lado é um presente que guardo com carinho no meu coração.
                    </p>
                  </Link>

                  <Link to="/nossas-memorias" className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <Camera className="w-8 h-8 text-purple-500 mb-4" />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Nossas Memórias</h2>
                    <p className="text-gray-600">
                      Cada foto conta uma história única da nossa jornada juntos.
                    </p>
                  </Link>

                  <Link to="/nossa-melodia" className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <Music className="w-8 h-8 text-indigo-500 mb-4" />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Nossa Melodia</h2>
                    <p className="text-gray-600">
                      Você é a música que faz meu coração bater mais forte.
                    </p>
                  </Link>

                  <Link to="/nosso-futuro" className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform">
                    <Stars className="w-8 h-8 text-yellow-500 mb-4" />
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Nosso Futuro</h2>
                    <p className="text-gray-600">
                      Que possamos compartilhar muitos mais aniversários juntos.
                    </p>
                  </Link>
                </div>
              </main>

              {/* Footer */}
              <footer className="text-center py-8 bg-white/80 backdrop-blur-sm">
                <p className="text-gray-700">
                  Feito pelo o amor da sua vida!❤️
                </p>
              </footer>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;