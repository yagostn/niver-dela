import { Link } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';

const NossasMemorias = () => {
  // Aqui você pode adicionar mais fotos suas
  const memories = [
    {
      url: "https://cdn.discordapp.com/attachments/1331369087095537780/1331369318549553263/festa.jpeg?ex=67915dcd&is=67900c4d&hm=1611b2f5b21e7ac15c6cb84e2717549a40b0fb922cab541fb4ab970b525b6655&",
      title: "Nossa Primeira Festa Juntos 🕺",
      date: "14 Dezembro 2024",
      description: "Nossa primeira festa juntos, um momento especial que marca o início de muitas memórias inesquecíveis."
    },
    {
      url: "https://cdn.discordapp.com/attachments/1160661772819251301/1331368116969668698/bike.jpeg?ex=67915cae&is=67900b2e&hm=c33a440f0dde819261d8f7a8323b8b90dff8e34d9470efcbbbea33e0c5958edc&",
      title: "Primeira vez que vi o amor da minha vida 🥰",
      date: "15 Outubro 2024",
      description: "O dia em que vi você pela primeira vez foi como se o tempo parasse por um instante, e eu soube que minha vida nunca mais seria a mesma."
    },
    {
      url: "https://cdn.discordapp.com/attachments/1331369087095537780/1331369351659524187/agnt.jpeg?ex=67915dd5&is=67900c55&hm=8885552f8ba0b915f1a60dd2c040c4abbe1e8610b6e3a09d81f098570e32583f&",
      title: "Viagem A Casa De Praia 🏖️",
      date: "23 Dezembro 2024",
      description: "Nossa viagem para casa de praia, onde o som das ondas e o pôr do sol se tornam o cenário perfeito para celebrar nosso amor."
    },
    // Adicione mais memórias aqui
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para página inicial
        </Link>

        <div className="text-center mb-12">
          <Camera className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Nossas Memórias</h1>
          <p className="text-lg text-white">
            Cada foto conta uma história especial da nossa jornada juntos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={memory.url}
                alt={memory.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{memory.title}</h3>
                <p className="text-sm text-purple-600 mb-3">{memory.date}</p>
                <p className="text-gray-600">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NossasMemorias;