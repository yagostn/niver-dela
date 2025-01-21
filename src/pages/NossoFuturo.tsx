import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Stars, Home, Plane, BellRing as Ring, Baby } from 'lucide-react';

const NossoFuturo = () => {
  const dreams = [
    {
      icon: <Home className="w-8 h-8 text-purple-500" />,
      title: "Nossa Casa",
      description: "Um lugar só nosso, onde vamos construir memórias juntos, com um jardim cheio de flores e uma cozinha onde faremos receitas especiais."
    },
    {
      icon: <Plane className="w-8 h-8 text-blue-500" />,
      title: "Nossas Viagens",
      description: "Explorar o mundo juntos, conhecer lugares novos, culturas diferentes e criar memórias inesquecíveis em cada canto do planeta."
    },
    {
      icon: <Ring className="w-8 h-8 text-pink-500" />,
      title: "Nossa União",
      description: "Celebrar nosso amor com uma cerimônia especial, rodeados de pessoas que amamos, marcando o início de uma nova fase em nossas vidas."
    },
    {
      icon: <Baby className="w-8 h-8 text-yellow-500" />,
      title: "Nossa Família",
      description: "Construir uma família juntos, com muito amor, carinho e dedicação, criando pequenos momentos de felicidade todos os dias."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para página inicial
        </Link>

        <div className="text-center mb-12">
          <Stars className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Nosso Futuro</h1>
          <p className="text-lg text-white">
            Sonhos e planos que quero realizar ao seu lado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dreams.map((dream, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {dream.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{dream.title}</h3>
                <p className="text-gray-600">{dream.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Uma Carta para o Futuro</h2>
          <p className="text-gray-600 leading-relaxed">
            Amor, quando penso no futuro, só consigo imaginar você ao meu lado. Cada sonho, cada
            plano, cada momento que ainda está por vir, quero compartilhar com você. Nosso amor é como
            uma história que está sendo escrita todos os dias, e mal posso esperar para ver todos os
            capítulos maravilhosos que ainda vamos viver juntos. Te amo infinitamente! ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default NossoFuturo;