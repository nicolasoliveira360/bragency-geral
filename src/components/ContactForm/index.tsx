"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    cargo: '',
    empresa: '',
    website: '',
    email: '',
    telefone: '',
    funcionarios: '',
    investimento: '',
    servico: '',
    prazo: '',
    descricao: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://webhook.brautomacoes.com.br/webhook/bragency', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Formulário enviado com sucesso! Em breve entraremos em contato.'
      });

      // Limpa o formulário após envio bem-sucedido
      setFormData({
        nome: '',
        cargo: '',
        empresa: '',
        website: '',
        email: '',
        telefone: '',
        funcionarios: '',
        investimento: '',
        servico: '',
        prazo: '',
        descricao: ''
      });

    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[var(--color-bg-secondary)] rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <p className="text-[var(--color-text-secondary)] text-center">
            Para oferecermos a melhor solução para sua empresa, precisamos entender melhor o seu negócio e objetivos.
            <br />
            Quanto mais detalhes você fornecer, mais assertiva será nossa proposta.
          </p>
        </div>

        {submitStatus.type && (
          <div className={`mb-6 p-4 rounded-lg ${
            submitStatus.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            <p className="text-sm">{submitStatus.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Pessoais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Seu nome *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            {/* Cargo */}
            <div>
              <label htmlFor="cargo" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Seu cargo *
              </label>
              <select
                id="cargo"
                name="cargo"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.cargo}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="analista">Analista</option>
                <option value="gerente">Gerente / Coordenador(a)</option>
                <option value="diretor">Diretor(a)</option>
                <option value="ceo">Dono(a) / Sócio(a) / CEO</option>
                <option value="freelancer">Freelancer / Consultor</option>
                <option value="outros">Outros Cargos</option>
              </select>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                E-mail corporativo *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Seu telefone *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Informações da Empresa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Empresa */}
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Empresa *
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>

            {/* Website */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Informações do Negócio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Número de Funcionários */}
            <div>
              <label htmlFor="funcionarios" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Nº de funcionários *
              </label>
              <select
                id="funcionarios"
                name="funcionarios"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.funcionarios}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="individual">Individual</option>
                <option value="1-5">1 a 5 funcionários</option>
                <option value="6-10">6 a 10 funcionários</option>
                <option value="11-20">11 a 20 funcionários</option>
                <option value="21-50">21 a 50 funcionários</option>
                <option value="50+">Acima de 50 funcionários</option>
              </select>
            </div>

            {/* Investimento em Marketing */}
            <div>
              <label htmlFor="investimento" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Investimento em marketing *
              </label>
              <select
                id="investimento"
                name="investimento"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.investimento}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="abaixo-500">Abaixo de R$ 500</option>
                <option value="500-1000">R$ 500 a R$ 1.000</option>
                <option value="1001-2000">R$ 1.001 a R$ 2.000</option>
                <option value="2001-5000">R$ 2.001 a R$ 5.000</option>
                <option value="5001-10000">R$ 5.001 a R$ 10.000</option>
                <option value="10000+">Acima de R$ 10.000</option>
              </select>
            </div>
          </div>

          {/* Informações do Projeto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Serviço de Interesse */}
            <div>
              <label htmlFor="servico" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Serviço de interesse *
              </label>
              <select
                id="servico"
                name="servico"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.servico}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="trafego">Tráfego Pago</option>
                <option value="web-design">Web Design</option>
                <option value="automacao">Automação com IA</option>
              </select>
            </div>

            {/* Prazo */}
            <div>
              <label htmlFor="prazo" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Quando pensa em resolver o problema que está orçando? *
              </label>
              <select
                id="prazo"
                name="prazo"
                required
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)]"
                value={formData.prazo}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="imediato">Tenho urgência</option>
                <option value="30-dias">Nos próximos 30 dias</option>
                <option value="60-90-dias">Nos próximos 60 - 90 dias</option>
                <option value="sem-data">Não tenho uma data, estou apenas pesquisando</option>
              </select>
            </div>
          </div>

          {/* Descrição do Projeto */}
          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
              Descreva seu projeto ou desafio atual. Qual o seu setor de atuação? Quais são seus principais objetivos? *
            </label>
            <textarea
              id="descricao"
              name="descricao"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-tertiary)] border border-[var(--color-lines)] focus:outline-none focus:border-[var(--color-accent)] resize-y"
              value={formData.descricao}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full btn-primary flex items-center justify-center gap-2 ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Enviando...</span>
              </>
            ) : (
              <>
                Solicitar Orçamento
                <i className="fas fa-paper-plane text-sm"></i>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
} 