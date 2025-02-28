"use client";

import Image from "next/image";
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="section flex items-center min-h-screen relative overflow-x-hidden">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <div className="line-detail mx-auto"></div>
            <h1 className="section-title mb-6 heading-text">
              Transforme seu negócio em uma <span className="gradient-text animate-pulse-grow">máquina</span> de 
              <span className="gradient-text"> aquisição de clientes</span>
            </h1>
            <p className="section-subtitle mb-8 body-text">
              Estratégias personalizadas de marketing digital que já geraram mais de 10.000 leads qualificados para nossos clientes nos últimos 12 meses.
            </p>
            <Link href="/contato" className="btn-primary inline-flex items-center gap-2 group">
              Solicitar Orçamento
              <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="section bg-[var(--color-bg-secondary)] overflow-x-hidden">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <div className="line-detail mx-auto"></div>
            <h2 className="section-title heading-text">Nossos Serviços</h2>
            <p className="section-subtitle body-text">
              Soluções digitais inovadoras que combinam tecnologia de ponta com estratégias comprovadas para impulsionar seu negócio.
            </p>
          </div>

          <div className="grid-architectural">
            {/* Tráfego Pago */}
            <div className="card relative overflow-hidden group animate-slide-up hover-lift" style={{ animationDelay: '200ms' }}>
              <div className="absolute top-4 right-4 text-3xl gradient-text">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-2xl font-light mb-4 heading-text">Tráfego Pago</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 body-text">
                Campanhas estratégicas em Google Ads, Meta Ads e outras plataformas para maximizar seu ROI e alcançar o público certo no momento certo.
              </p>
              <div className="line-detail"></div>
              <Link href="/servicos/trafego-pago" className="text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)] flex items-center gap-2 transition-all duration-300 body-text">
                Saiba mais <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>

            {/* Web Design */}
            <div className="card relative overflow-hidden group animate-slide-up hover-lift" style={{ animationDelay: '400ms' }}>
              <div className="absolute top-4 right-4 text-3xl gradient-text">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="text-2xl font-light mb-4 heading-text">Web Design</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 body-text">
                Websites modernos, responsivos e otimizados para conversão, combinando design elegante com a melhor experiência do usuário.
              </p>
              <div className="line-detail"></div>
              <Link href="/servicos/web-design" className="text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)] flex items-center gap-2 transition-all duration-300 body-text">
                Saiba mais <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>

            {/* Automações com IA */}
            <div className="card relative overflow-hidden group animate-slide-up hover-lift" style={{ animationDelay: '600ms' }}>
              <div className="absolute top-4 right-4 text-3xl gradient-text">
                <i className="fas fa-robot"></i>
              </div>
              <h3 className="text-2xl font-light mb-4 heading-text">Automações com IA</h3>
              <p className="text-[var(--color-text-secondary)] mb-6 body-text">
                Soluções inteligentes de automação utilizando IA para otimizar processos, aumentar produtividade e melhorar o atendimento ao cliente.
              </p>
              <div className="line-detail"></div>
              <Link href="/servicos/automacao-ia" className="text-[var(--color-accent)] group-hover:text-[var(--color-accent-hover)] flex items-center gap-2 transition-all duration-300 body-text">
                Saiba mais <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section overflow-x-hidden">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <div className="line-detail mx-auto"></div>
            <h2 className="section-title heading-text">Nosso Portfólio</h2>
            <p className="section-subtitle body-text">
              Resultados reais que geramos para nossos clientes através de estratégias digitais inovadoras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto de Tráfego Pago */}
            <div className="group relative overflow-hidden animate-slide-up rounded-xl" style={{ animationDelay: '200ms' }}>
              <div className="relative h-[400px] w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070" 
                  alt="Projeto de Tráfego Pago para Clínica de Estética" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-chart-line text-sm gradient-text"></i>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-medium body-text">Tráfego Pago</span>
                </div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-text-primary)] heading-text">Meta Ads para Clínica de Estética</h3>
                <p className="text-[var(--color-text-primary)] text-sm mb-4 opacity-90 body-text">
                  Aumento de 180% no faturamento mensal com agenda lotada para os próximos 3 meses através de campanhas segmentadas no Meta Ads
                </p>
              </div>
            </div>

            {/* Projeto de Web Design */}
            <div className="group relative overflow-hidden animate-slide-up rounded-xl" style={{ animationDelay: '400ms' }}>
              <div className="relative h-[400px] w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072" 
                  alt="Projeto de Web Design para Empresa de Energia Solar" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-laptop-code text-sm gradient-text"></i>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-medium body-text">Web Design</span>
                </div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-text-primary)] heading-text">Site Completo para Energia Solar</h3>
                <p className="text-[var(--color-text-primary)] text-sm mb-4 opacity-90 body-text">
                  Site institucional com calculadora de economia que aumentou leads qualificados em 2x e elevou o tempo médio de permanência no site
                </p>
              </div>
            </div>

            {/* Projeto de Automação com IA */}
            <div className="group relative overflow-hidden animate-slide-up rounded-xl" style={{ animationDelay: '600ms' }}>
              <div className="relative h-[400px] w-full">
                <Image 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073" 
                  alt="Projeto de Automação com IA para Imobiliária" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fas fa-robot text-sm gradient-text"></i>
                  <span className="text-xs uppercase tracking-wider text-[var(--color-accent)] font-medium body-text">Automação com IA</span>
                </div>
                <h3 className="text-2xl font-light mb-3 text-[var(--color-text-primary)] heading-text">Imobiliária Digital</h3>
                <p className="text-[var(--color-text-primary)] text-sm mb-4 opacity-90 body-text">
                  Sistema de atendimento com IA que reduziu o tempo de resposta em 85%, qualificou leads automaticamente e aumentou em 75% as visitas aos imóveis
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contato" className="btn-secondary inline-flex items-center gap-2 group">
              Inicie Seu Projeto
              <i className="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="section bg-[var(--color-bg-secondary)] overflow-x-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative animate-slide-in-right">
              <div className="relative h-[500px] w-full flex items-center justify-center px-4">
                <div className="relative w-72 h-72 md:w-96 md:h-96 border border-[#D4B98C] flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-[2px] before:border before:border-[#D4B98C]/20 group">
                  <span className="text-6xl md:text-[8rem] font-extralight tracking-wider text-[#D4B98C] relative z-10 logo-text">BR</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4B98C] to-[#A38E6A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                  <span className="absolute text-6xl md:text-[8rem] font-extralight tracking-wider text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 z-20 logo-text">BR</span>
                </div>
              </div>
              <div className="absolute -bottom-8 right-0 md:-right-8 p-6 bg-[var(--color-bg-primary)] border border-[var(--color-lines)] animate-bounce-rotate hover-glow">
                <p className="text-4xl font-light text-[var(--color-accent)]">5+</p>
                <p className="text-sm text-[var(--color-text-secondary)] body-text">Anos transformando negócios</p>
              </div>
            </div>
            <div>
              <div className="line-detail"></div>
              <h2 className="section-title mb-6">Sobre a BR Agency</h2>
              <p className="text-[var(--color-text-secondary)] mb-6">
                A BR Agency nasceu da minha paixão por resultados digitais e da vontade de fazer diferente. Como fundador, trago uma perspectiva única: a dedicação de quem é pai de família e entende o valor de cada investimento feito por nossos clientes.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Desde 2020, desenvolvemos estratégias que realmente funcionam, combinando dados, criatividade e tecnologia. Nossa abordagem é direta: focamos em ações que geram retorno mensurável, tratando o investimento do cliente como se fosse nosso próprio negócio.
              </p>
              <p className="text-[var(--color-text-secondary)] mb-8">
                O que nos diferencia? Somos uma agência que une o melhor dos dois mundos: o atendimento próximo e personalizado de quem realmente se importa, com a eficiência e escalabilidade das mais avançadas tecnologias de IA. Cada projeto recebe atenção individual, com estratégias sob medida para seus objetivos.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-handshake gradient-text"></i>
                    <p className="font-medium body-text">Compromisso Total</p>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-lightbulb gradient-text"></i>
                    <p className="font-medium body-text">Soluções Criativas</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-chart-line gradient-text"></i>
                    <p className="font-medium body-text">Foco em Resultados</p>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <i className="fas fa-robot gradient-text"></i>
                    <p className="font-medium body-text">Tecnologia de Ponta</p>
                  </div>
                </div>
              </div>
              <Link href="/contato" className="btn-primary">
                Vamos Conversar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
