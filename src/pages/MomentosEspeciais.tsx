import { Link } from 'react-router-dom';
import { ArrowLeft, Gift } from 'lucide-react';

const MomentosEspeciais = () => {
  // Aqui você pode adicionar suas próprias fotos
  const photos = [
    {
      url: "https://cdn.discordapp.com/attachments/1331369087095537780/1331369320990638161/igreja.jpeg?ex=67915dcd&is=67900c4d&hm=35427a6f366a746bd82b4af86364ac6e0e2ec0e1d3dc52349ef737996689fde9&",
      description: "Nosso Primeiro Encontro🙏"
    },
    {
      url: "https://cdn.discordapp.com/attachments/1331369087095537780/1331369320529530903/nos.jpeg?ex=67915dcd&is=67900c4d&hm=9764098da6fdbfd366bacbacad19e92acb7d3f8d5b92c6a100525899b7d5aeb2&",
      description: "Pedido De Namoro💍"
    },
    {
      url: "https://cdn.discordapp.com/attachments/1331369087095537780/1331369319480692817/flor.jpeg?ex=67915dcd&is=67900c4d&hm=89077ffb9e1e055bbc449f616a74d52d95405ee15295bd29f860c885f3dcb523&",
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