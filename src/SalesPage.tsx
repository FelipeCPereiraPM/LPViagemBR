import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CreditCard, Wallet } from 'lucide-react';

const SalesPage = () => {
  const navigate = useNavigate();
  const { data } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '1',
    paymentMethod: 'credit-card'
  });

  if (!data) {
    return <div>Dados do destino inválidos</div>;
  }

  const destination = JSON.parse(decodeURIComponent(data));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Reserva confirmada! Obrigado por escolher a ViagemBR.');
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-[#0259FF] transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar para Home
          </button>
        </div>
      </header>

      {/* Destination Banner */}
      <div 
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${destination.image})` }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h1 className="text-3xl font-bold mb-4">{destination.city}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <span className="text-gray-600">Data</span>
                <p className="font-medium">{destination.date}</p>
              </div>
              <div>
                <span className="text-gray-600">Duração</span>
                <p className="font-medium">{destination.nights} noites</p>
              </div>
              <div>
                <span className="text-gray-600">Preço</span>
                <p className="font-medium text-[#0259FF]">R$ {destination.price}</p>
              </div>
            </div>
            <p className="text-gray-600">{destination.description}</p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Complete sua Reserva</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0259FF] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0259FF] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0259FF] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Viajantes
                </label>
                <select
                  id="travelers"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0259FF] focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'pessoa' : 'pessoas'}</option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700 mb-2">
                  Forma de Pagamento
                </span>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleInputChange}
                      className="text-[#0259FF] focus:ring-[#0259FF]"
                    />
                    <CreditCard className="h-5 w-5" />
                    <span>Cartão de Crédito</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="digital-wallet"
                      checked={formData.paymentMethod === 'digital-wallet'}
                      onChange={handleInputChange}
                      className="text-[#0259FF] focus:ring-[#0259FF]"
                    />
                    <Wallet className="h-5 w-5" />
                    <span>Carteira Digital</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-[#0259FF] text-white py-3 rounded-lg hover:bg-[#1732E5] transition"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;