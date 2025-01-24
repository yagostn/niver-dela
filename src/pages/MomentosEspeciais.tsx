import { Link } from 'react-router-dom';
import { ArrowLeft, Gift } from 'lucide-react';

const MomentosEspeciais = () => {
  // Aqui você pode adicionar suas próprias fotos
  const photos = [
    {
      url: "https://photos.fife.usercontent.google.com/pw/AP1GczN2xib2DBmxRdvEie-DiL1WjDqXtZCjlbQhFbOcjcHEhvm8WFCbbNhS=w804-h926-s-no-gm?authuser=0",
      description: "Nosso Primeiro Encontro🙏"
    },
    {
      url: "https://photos.fife.usercontent.google.com/pw/AP1GczOh9dCKJLxhE3j127tWxscvM_Qz8lO3P2QqK_upEF6w0M5ri9VfFd7v=w695-h926-s-no-gm?authuser=0",
      description: "Pedido De Namoro💍"
    },
    {
      url: "https://photos.fife.usercontent.google.com/pw/AP1GczO7XDfjsXRBKfIeEsYerBPB-DK5hI_c_xoAgeGvvmJq-n11jSP92kj7=w902-h926-s-no-gm?authuser=0",
      description: "Demonstração De Amor❤️‍🩹"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para página inicial
        </Link>

        <div className="text-center mb-12">
          <Gift className="w-12 h-12 text-pink-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Momentos Especiais</h1>
          <p className="text-lg text-white">
            Aqui estão alguns dos nossos momentos mais preciosos juntos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <img
                src={photo.url}
                alt={photo.description}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-700 text-center">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MomentosEspeciais;