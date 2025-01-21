import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, Heart } from 'lucide-react';

const NossaMelodia = () => {
  const playlist = [
    {
      title: "Duas Vidas",
      artist: "Henrique e Juliano",
      reason: "Só pelo fato de te amar me sinto uma pessoa melhor, na certeza que você existe, na tua ausência não me sinto só."
    },
    {
      title: "Sou Dono",
      artist: "Henry Freitas",
      reason: "E pode passar um, dois, três Dez anos ou mais, do seu coração, eu sou dono Oh, oh, oh, dono Oh, oh, oh, dono."
    },
    {
      title: "Lisboa",
      artist: "Kiko Chicabana",
      reason: "Diga pra mim que é real, que eu te prometo meu melhor, fala pra mim o que eu quero ouvir, que tu sentiu o que eu senti."
    },
    {
      title: "Os Anjos Cantam",
      artist: "Jorge & Mateus",
      reason: "É que nos meus sonhos você era linda, pessoalmente é mais linda ainda, nosso amor veio de outras vidas, eu vou te amar nas outras vidas que virão."
    },
    {
      title: "Seu Astral",
      artist: "Jorge & Mateus",
      reason: "Dizendo pra mim que é sobrenatural, esse amor fora do normal, dizendo pra mim que eu sou o seu astral, que esse amor que está em mim é tão real."
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
          <Music className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white mb-4">Nossa Melodia</h1>
          <p className="text-lg text-white">
            Músicas que me fazem pensar em você e no nosso amor
          </p>
        </div>

        <div className="space-y-6">
          {playlist.map((song, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{song.title}</h3>
                  <p className="text-indigo-600 mb-3">{song.artist}</p>
                  <p className="text-gray-600 italic">"{song.reason}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white">
            Desde o momento que você chegou, todas as músicas lembram você ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default NossaMelodia;