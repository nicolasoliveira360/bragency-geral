import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 bg-[var(--color-bg-tertiary)] border-t border-[var(--color-lines)] overflow-x-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Coluna Principal */}
          <div className="md:col-span-5">
            <div className="flex items-center space-x-5 group mb-8">
              <div className="relative w-16 h-16 border border-[#D4B98C] flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-[2px] before:border before:border-[#D4B98C]/20">
                <span className="text-2xl font-extralight tracking-wider text-[#D4B98C] relative z-10 logo-text">BR</span>
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4B98C] to-[#A38E6A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                <span className="absolute text-2xl font-extralight tracking-wider text-[#111111] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 z-20 logo-text">BR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extralight tracking-wider text-white logo-text">BR</span>
                <span className="text-base font-light tracking-[0.2em] text-[#D4B98C] logo-text">AGENCY</span>
              </div>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-8 text-lg body-text">
              Transformando ideias em resultados digitais através de estratégias inovadoras e tecnologia de ponta.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:scale-110 transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:scale-110 transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:scale-110 transition-all duration-300">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="md:col-span-3">
            <h4 className="text-xl font-light mb-6 heading-text">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="/#inicio" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 flex items-center gap-2 body-text">
                <i className="fas fa-chevron-right text-xs"></i>Início
              </Link></li>
              <li><Link href="/#servicos" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 flex items-center gap-2 body-text">
                <i className="fas fa-chevron-right text-xs"></i>Serviços
              </Link></li>
              <li><Link href="/#portfolio" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 flex items-center gap-2 body-text">
                <i className="fas fa-chevron-right text-xs"></i>Portfólio
              </Link></li>
              <li><Link href="/#sobre" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 flex items-center gap-2 body-text">
                <i className="fas fa-chevron-right text-xs"></i>Sobre
              </Link></li>
              <li><Link href="/contato" className="text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300 flex items-center gap-2 body-text">
                <i className="fas fa-chevron-right text-xs"></i>Contato
              </Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-4">
            <h4 className="text-xl font-light mb-6 heading-text">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-[var(--color-accent)] text-xl mt-1">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <Link href="mailto:contato@bragency.com.br" className="text-[var(--color-text-primary)] body-text">contato@bragency.com.br</Link>
                  <p className="text-[var(--color-text-secondary)] text-sm body-text">Resposta em até 24h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[var(--color-accent)] text-xl mt-1">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <Link href="tel:+5543996096047" className="text-[var(--color-text-primary)] body-text">+55 (43) 99609-6047</Link>
                  <p className="text-[var(--color-text-secondary)] text-sm body-text">Seg - Sex, 9h às 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[var(--color-accent)] text-xl mt-1">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-[var(--color-text-primary)] body-text">Arapongas, PR</p>
                  <p className="text-[var(--color-text-secondary)] text-sm body-text">Atendimento Remoto</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-lines)] pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-tertiary)] text-sm body-text">
            &copy; {new Date().getFullYear()} BR Agency. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[var(--color-text-tertiary)] text-sm hover:text-[var(--color-accent)] transition-colors duration-300 body-text">Termos de Uso</Link>
            <Link href="#" className="text-[var(--color-text-tertiary)] text-sm hover:text-[var(--color-accent)] transition-colors duration-300 body-text">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 