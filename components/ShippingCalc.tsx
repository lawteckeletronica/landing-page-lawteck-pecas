import React, { useState } from 'react';
import { Truck, Search, Loader2 } from 'lucide-react';

interface FreteResult {
  prazoMin: number;
  prazoMax: number;
  servico: string;
  localidade: string;
  uf: string;
}

const formatCep = (value: string): string => {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length > 5) {
    return `${digits.slice(0, 5)}-${digits.slice(5)}`;
  }
  return digits;
};

export const ShippingCalc: React.FC = () => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FreteResult | null>(null);
  const [error, setError] = useState('');

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(formatCep(e.target.value));
    setResult(null);
    setError('');
  };

  const handleCalc = async () => {
    const digits = cep.replace(/\D/g, '');
    if (digits.length !== 8) {
      setError('Informe um CEP válido com 8 dígitos');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch(`/api/frete?cep=${digits}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Erro ao consultar prazo');
        return;
      }

      setResult(data);
    } catch {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCalc();
  };

  return (
    <section id="shipping" className="py-16 bg-brand-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Truck size={28} className="text-brand-blue-600" />
            <h2 className="text-2xl sm:text-3xl font-black text-brand-blue-900 uppercase">
              Calcule o Prazo de Entrega
            </h2>
          </div>
          <p className="text-gray-600 font-medium mb-8">
            Digite seu CEP para saber quando sua placa chega
          </p>

          <div className="flex gap-3">
            <input
              type="text"
              inputMode="numeric"
              placeholder="00000-000"
              value={cep}
              onChange={handleCepChange}
              onKeyDown={handleKeyDown}
              maxLength={9}
              className="flex-1 px-4 py-3 rounded-lg border-2 border-brand-blue-200 focus:border-brand-blue-600 focus:outline-none text-lg font-bold text-center tracking-widest transition-colors"
            />
            <button
              onClick={handleCalc}
              disabled={loading || cep.replace(/\D/g, '').length !== 8}
              className="bg-brand-blue-600 hover:bg-brand-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold px-6 py-3 rounded-lg uppercase text-sm transition-all active:scale-95 flex items-center gap-2"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Search size={18} />
              )}
              Calcular
            </button>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-bold text-sm">{error}</p>
            </div>
          )}

          {result && (
            <div className="mt-6 p-6 bg-white rounded-xl shadow-lg border border-brand-blue-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Truck size={22} className="text-brand-blue-600" />
                <span className="text-sm font-bold text-brand-blue-600 uppercase">
                  {result.servico}
                </span>
              </div>
              <p className="text-2xl font-black text-brand-blue-900">
                {result.prazoMin === result.prazoMax
                  ? `${result.prazoMin} dia${result.prazoMin > 1 ? 's' : ''} útil${result.prazoMin > 1 ? '' : ''}`
                  : `${result.prazoMin} a ${result.prazoMax} dias úteis`}
              </p>
              <p className="text-sm text-gray-600 font-medium mt-2">
                {result.localidade} - {result.uf}
              </p>
              <p className="text-xs text-gray-400 font-medium mt-1">
                *Prazo estimado após postagem
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
