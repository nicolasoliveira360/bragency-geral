"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function WebDesign() {
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
                Sites profissionais que convertem visitantes em clientes
              </h1>
              <p className="section-subtitle mb-8 body-text">
                Desenvolvimento de websites modernos e otimizados para uma experiência do usuário excepcional.
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
                Stack moderna para criar experiências digitais excepcionais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card text-center p-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="text-4xl gradient-text mb-4">
                  <i className="fab fa-react"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">Next.js</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Performance excepcional e SEO otimizado
                </p>
              </div>

              <div className="card text-center p-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <div className="text-4xl gradient-text mb-4">
                  <i className="fab fa-css3"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">Tailwind CSS</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Design responsivo e customizável
                </p>
              </div>

              <div className="card text-center p-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <div className="text-4xl gradient-text mb-4">
                  <i className="fab fa-wordpress"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">WordPress</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  CMS poderoso e fácil de gerenciar
                </p>
              </div>

              <div className="card text-center p-8 animate-slide-up" style={{ animationDelay: '800ms' }}>
                <div className="text-4xl gradient-text mb-4">
                  <i className="fas fa-pencil-ruler"></i>
                </div>
                <h3 className="text-xl font-light mb-4 heading-text">UI/UX Design</h3>
                <p className="text-[var(--color-text-secondary)] text-sm body-text">
                  Interfaces intuitivas e atraentes
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
                    <p className="text-[var(--color-text-secondary)] body-text">Taxa de Conversão</p>
                    <p className="text-[var(--color-accent)]">↑ 150%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Tempo no Site</p>
                    <p className="text-[var(--color-accent)]">↑ 85%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Mobile First</p>
                    <p className="text-[var(--color-accent)]">100%</p>
                  </div>
                </div>
              </div>

              <div className="card p-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                    <i className="fas fa-building text-2xl gradient-text"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-light heading-text">Construtora</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm body-text">Rio de Janeiro, RJ</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Leads Gerados</p>
                    <p className="text-[var(--color-accent)]">↑ 200%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Performance</p>
                    <p className="text-[var(--color-accent)]">98/100</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">SEO Score</p>
                    <p className="text-[var(--color-accent)]">95/100</p>
                  </div>
                </div>
              </div>

              <div className="card p-8 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-bg-tertiary)] flex items-center justify-center">
                    <i className="fas fa-utensils text-2xl gradient-text"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-light heading-text">Restaurante</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm body-text">Curitiba, PR</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Reservas Online</p>
                    <p className="text-[var(--color-accent)]">↑ 300%</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Satisfação</p>
                    <p className="text-[var(--color-accent)]">4.9/5</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[var(--color-text-secondary)] body-text">Retenção</p>
                    <p className="text-[var(--color-accent)]">85%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contato" className="btn-primary inline-flex items-center gap-2 group">
                Quero um Site Assim
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