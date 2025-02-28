"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TrafegoPago() {
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
                Atraia leads qualificados com estratégias comprovadas
              </h1>
              <p className="section-subtitle mb-8 body-text">
                Campanhas personalizadas que otimizam seu investimento e geram resultados consistentes para seu negócio.
              </p>
              <Link href="/contato" className="btn-primary inline-flex items-center gap-2 group">
                Solicitar Orçamento
                <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section className="section bg-[var(--color-bg-secondary)] overflow-x-hidden">
          <div className="container">
            <div className="text-center mb-16">
              <div className="line-detail mx-auto"></div>
              <h2 className="section-title mb-6 heading-text">Por que investir em Tráfego Pago?</h2>
              <p className="section-subtitle body-text">
                Descubra como nossas estratégias podem impulsionar seu negócio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="card p-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl gradient-text mb-6">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">Público Direcionado</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Alcance exatamente quem está procurando por seus produtos ou serviços.
                </p>
              </div>

              <div className="card p-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl gradient-text mb-6">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">Resultados Mensuráveis</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Acompanhe em tempo real o desempenho de suas campanhas e o retorno sobre investimento.
                </p>
              </div>

              <div className="card p-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <div className="text-4xl gradient-text mb-6">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">Crescimento Rápido</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Acelere o crescimento do seu negócio com campanhas otimizadas e escaláveis.
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
                    <i className="fas fa-store text-2xl gradient-text"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-light heading-text">E-commerce</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm body-text">São Paulo, SP</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">ROI</p>
                    <p className="text-[var(--color-accent)]">4.8x</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Conversão</p>
                    <p className="text-[var(--color-accent)]">↑ 85%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Custo por Lead</p>
                    <p className="text-[var(--color-accent)]">↓ 45%</p>
                  </div>
                </div>
              </div>

              <div className="card p-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                    <i className="fas fa-clinic-medical text-2xl gradient-text"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-light heading-text">Clínica Médica</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm body-text">Rio de Janeiro, RJ</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Agendamentos</p>
                    <p className="text-[var(--color-accent)]">↑ 150%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Custo por Agendamento</p>
                    <p className="text-[var(--color-accent)]">↓ 60%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Taxa de Ocupação</p>
                    <p className="text-[var(--color-accent)]">95%</p>
                  </div>
                </div>
              </div>

              <div className="card p-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                    <i className="fas fa-building text-2xl gradient-text"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-light heading-text">Construtora</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm body-text">Curitiba, PR</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Leads Qualificados</p>
                    <p className="text-[var(--color-accent)]">↑ 200%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Taxa de Fechamento</p>
                    <p className="text-[var(--color-accent)]">35%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">ROI</p>
                    <p className="text-[var(--color-accent)]">6.2x</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contato" className="btn-primary inline-flex items-center gap-2 group">
                Quero Resultados Assim
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