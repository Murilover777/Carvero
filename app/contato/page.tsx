'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { WHATSAPP_NUMBER } from '@/lib/data';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.nome}. ${formData.mensagem || 'Gostaria de mais informações sobre os serviços da Carvero.'} - Email: ${formData.email} - Tel: ${formData.telefone}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="contact-section">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Contato</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="contact-subtitle">
            Entre em contato conosco. Estamos prontos para atender você.
          </p>
        </FadeIn>

        <div className="contact-grid">
          <FadeIn delay={0.2}>
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nome">Nome *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="telefone">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    placeholder="(31) 99999-9999"
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    value={formData.mensagem}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="cta-button cta-whatsapp">
                  <i className="fab fa-whatsapp" /> Enviar via WhatsApp
                </button>
              </form>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="contact-direct">
              <h3>Contato Direto</h3>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp-card"
              >
                <i className="fab fa-whatsapp" />
                <div>
                  <strong>+55 31 9 9884-3420</strong>
                  <span>Clique para abrir no WhatsApp</span>
                </div>
              </a>
              <div className="contact-info">
                <p><i className="fas fa-building" /> CNPJ: 65.090.605/0001-66</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
