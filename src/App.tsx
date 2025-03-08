import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Plane, Star, ChevronDown, PlayCircle, Apple, Instagram, Facebook, Twitter } from 'lucide-react';
import SalesPage from './SalesPage';

// Components
const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Plane className="h-8 w-8 text-[#0259FF]" />
        <span className="text-2xl font-medium">ViagemBR</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#destinations" className="hover:text-[#0259FF]">Destinos</a>
        <a href="#promotions" className="hover:text-[#0259FF]">Promoções</a>
        <a href="#testimonials" className="hover:text-[#0259FF]">Depoimentos</a>
        <a href="#faq" className="hover:text-[#0259FF]">Dúvidas</a>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section 
    className="min-h-screen pt-20 bg-cover bg-center flex items-center"
    style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&q=80")'
    }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">O Melhor App de Viagens do Brasil</h1>
        <p className="text-xl mb-8">Descubra destinos incríveis e reserve sua próxima aventura com facilidade.</p>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            <PlayCircle className="h-6 w-6" />
            Google Play
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
            <Apple className="h-6 w-6" />
            App Store
          </button>
        </div>
      </div>
    </div>
  </section>
);

const DestinationCard = ({ image, city, nights, price, date }) => {
  const destination = {
    image,
    city,
    nights,
    price,
    date,
    description: `Descubra a magia de ${city}! Este pacote de ${nights} noites inclui hospedagem de luxo, passeios guiados e experiências inesquecíveis. Perfeito para quem busca relaxamento e aventura.`
  };

  const encodedData = encodeURIComponent(JSON.stringify(destination));

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={city} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-medium mb-2">{city}</h3>
        <p className="text-gray-600 mb-2">{date}</p>
        <p className="text-gray-600 mb-4">{nights} noites</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#0259FF]">R$ {price}</span>
          <a 
            href={`/book/${encodedData}`}
            className="bg-[#0259FF] text-white px-4 py-2 rounded-lg hover:bg-[#1732E5] transition"
          >
            Reservar
          </a>
        </div>
      </div>
    </div>
  );
};

const Promotions = () => (
  <section id="promotions" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Promoções</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <DestinationCard
          image="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80"
          city="Rio de Janeiro"
          date="15 Mar - 20 Mar"
          nights="5"
          price="3.999"
        />
        <DestinationCard
          image="https://images.unsplash.com/photo-1564519819067-8592aef4eb91?auto=format&fit=crop&q=80"
          city="Salvador"
          date="1 Abr - 5 Abr"
          nights="4"
          price="2.999"
        />
        <DestinationCard
          image="https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&q=80"
          city="Florianópolis"
          date="10 Mai - 15 Mai"
          nights="5"
          price="3.499"
        />
      </div>
    </div>
  </section>
);

const InternationalDestination = ({ image, city, nights, price }) => (
  <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={city} className="w-32 h-32 object-cover" />
    <div className="p-4">
      <h3 className="font-medium mb-2">{city}</h3>
      <p className="text-gray-600 mb-2">{nights} noites</p>
      <p className="text-xl font-bold text-[#0259FF]">R$ {price}</p>
    </div>
  </div>
);

const International = () => (
  <section id="destinations" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Internacional</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InternationalDestination
          image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80"
          city="Paris"
          nights="7"
          price="6.499"
        />
        <InternationalDestination
          image="https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&q=80"
          city="Tóquio"
          nights="10"
          price="8.999"
        />
        <InternationalDestination
          image="https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&q=80"
          city="Nova York"
          nights="6"
          price="5.499"
        />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ image, name, comment, rating }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4" />
    <h3 className="font-medium mb-2">{name}</h3>
    <p className="text-gray-600 mb-4">{comment}</p>
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
  </div>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Depoimentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TestimonialCard
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
          name="Ana Silva"
          comment="Serviço incrível! O app tornou super fácil reservar minha viagem para o Rio."
          rating={5}
        />
        <TestimonialCard
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
          name="João Santos"
          comment="Melhores preços que já encontrei. Economizei muito na minha viagem internacional."
          rating={4}
        />
        <TestimonialCard
          image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
          name="Maria Costa"
          comment="O atendimento ao cliente é excepcional. Me ajudaram a planejar tudo!"
          rating={5}
        />
        <TestimonialCard
          image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
          name="Pedro Lima"
          comment="App super fácil de usar. Com certeza vou usar novamente na próxima viagem."
          rating={4}
        />
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openItem, setOpenItem] = React.useState(null);

  const faqItems = [
    {
      question: "Como faço para reservar um voo ou hotel?",
      answer: "Basta pesquisar seu destino e datas desejadas, comparar as opções e reservar diretamente pelo nosso app. Oferecemos métodos de pagamento seguros e confirmação instantânea."
    },
    {
      question: "Existe um programa de fidelidade?",
      answer: "Sim! Nosso programa ViagemBR Rewards permite que você acumule pontos em cada reserva. Os pontos podem ser trocados por descontos em futuras viagens ou benefícios exclusivos."
    },
    {
      question: "Qual é a política de cancelamento?",
      answer: "As políticas de cancelamento variam por reserva. A maioria dos voos e hotéis oferece cancelamento gratuito até 24-48 horas antes do check-in. Os detalhes específicos são mostrados antes de você concluir sua reserva."
    },
    {
      question: "Vocês oferecem seguro viagem?",
      answer: "Sim, temos parceria com as principais seguradoras para oferecer cobertura completa de viagem. Você pode adicionar o seguro durante o processo de reserva."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Dúvidas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="font-medium">{item.question}</span>
                <ChevronDown className={`transform transition-transform ${openItem === index ? 'rotate-180' : ''}`} />
              </button>
              {openItem === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Plane className="h-8 w-8" />
            <span className="text-2xl font-medium">ViagemBR</span>
          </div>
          <p className="text-gray-400">
            Av. Paulista, 1000<br />
            São Paulo - SP<br />
            Brasil
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4">Baixe Nosso App</h3>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              <PlayCircle className="h-6 w-6" />
              Google Play
            </button>
            <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              <Apple className="h-6 w-6" />
              App Store
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4">Siga-nos</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#0259FF] transition">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-[#0259FF] transition">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-[#0259FF] transition">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 ViagemBR. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Promotions />
    <International />
    <Testimonials />
    <FAQ />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:data" element={<SalesPage />} />
      </Routes>
    </Router>
  );
}

export default App;