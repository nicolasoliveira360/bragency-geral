"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AutomacaoIA() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen overflow-x-hidden pt-24">
        {/* Hero Section */}
        <section className="section relative overflow-x-hidden">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <div className="line-detail mx-auto"></div>
              <h1 className="section-title mb-6 heading-text">
                Automatize processos e escale seu negócio com Inteligência Artificial
              </h1>
              <p className="section-subtitle mb-8 body-text">
                Soluções personalizadas de automação que reduzem custos operacionais e aumentam a produtividade da sua empresa.
              </p>
              <Link href="/contato" className="btn-primary inline-flex items-center gap-2 group">
                Solicitar Orçamento
                <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Tecnologias Section */}
        <section className="section bg-[var(--color-bg-secondary)] overflow-x-hidden">
          <div className="container">
            <div className="text-center mb-16">
              <div className="line-detail mx-auto"></div>
              <h2 className="section-title mb-6 heading-text">Tecnologias que Utilizamos</h2>
              <p className="section-subtitle body-text">
                Ferramentas avançadas para automação inteligente
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card text-center p-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl gradient-text mb-4">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">Machine Learning</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Modelos preditivos e análise de dados
                </p>
              </div>

              <div className="card text-center p-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl gradient-text mb-4">
                  <i className="fas fa-robot"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">RPA</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Automação robótica de processos
                </p>
              </div>

              <div className="card text-center p-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <div className="text-4xl gradient-text mb-4">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">NLP</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Processamento de linguagem natural
                </p>
              </div>

              <div className="card text-center p-8 animate-slide-up" style={{ animationDelay: '800ms' }}>
                <div className="text-4xl gradient-text mb-4">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">Data Analytics</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Análise avançada de dados
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="section overflow-x-hidden">
          <div className="container">
            <div className="text-center mb-16">
              <div className="line-detail mx-auto"></div>
              <h2 className="section-title mb-6 heading-text">Cases de Sucesso</h2>
              <p className="section-subtitle body-text">
                Resultados reais que alcançamos para nossos clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                    <i className="fas fa-building text-2xl gradient-text"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-light heading-text">Imobiliária</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm body-text">São Paulo, SP</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Atendimentos/dia</p>
                    <p className="text-[var(--color-accent)]">+500</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Tempo de Resposta</p>
                    <p className="text-[var(--color-accent)]">↓ 90%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Conversão</p>
                    <p className="text-[var(--color-accent)]">↑ 65%</p>
                  </div>
                </div>
              </div>

              <div className="card p-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                    <i className="fas fa-store text-2xl gradient-text"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-light heading-text">E-commerce</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm body-text">Rio de Janeiro, RJ</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Mensagens/mês</p>
                    <p className="text-[var(--color-accent)]">50k</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Taxa de Abertura</p>
                    <p className="text-[var(--color-accent)]">85%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">ROI</p>
                    <p className="text-[var(--color-accent)]">4.8x</p>
                  </div>
                </div>
              </div>

              <div className="card p-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                    <i className="fas fa-graduation-cap text-2xl gradient-text"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-light heading-text">Escola de Cursos</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm body-text">Curitiba, PR</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Análise de Sentimento</p>
                    <p className="text-[var(--color-accent)]">98%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Retenção</p>
                    <p className="text-[var(--color-accent)]">↑ 75%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Matrículas/mês</p>
                    <p className="text-[var(--color-accent)]">+300</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contato" className="btn-primary inline-flex items-center gap-2 group">
                Quero Automatizar Meu Negócio
                <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 