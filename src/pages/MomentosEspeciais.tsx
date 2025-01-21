import { Link } from 'react-router-dom';
import { ArrowLeft, Gift } from 'lucide-react';

const MomentosEspeciais = () => {
  // Aqui você pode adicionar suas próprias fotos
  const photos = [
    {
      url: "/src/img/igreja.jpeg",
      description: "Nosso Primeiro Encontro🙏"
    },
    {
      url: "/src/img/nos.jpeg",
      description: "Pedido De Namoro💍"
    },
    {
      url: "/src/img/flor.jpeg",
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