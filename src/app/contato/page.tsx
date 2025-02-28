"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contato() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen overflow-x-hidden pt-24">
        {/* Hero Section */}
        <section className="section relative overflow-x-hidden">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="line-detail mx-auto"></div>
              <h1 className="section-title mb-6 heading-text">
                Vamos Transformar Seu Negócio Digital
              </h1>
              <p className="section-subtitle body-text">
                Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar resultados extraordinários.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="animate-slide-up">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
} 