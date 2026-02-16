'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { WHATSAPP_NUMBER } from '@/lib/data';

export default function InvestirPage() {
  return (
    <section
      className="invest-section"
      style={{ paddingTop: '140px', minHeight: '100vh' }}
    >
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Invista com a Carvero</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="invest-subtitle">
            Compre um veículo (carro ou moto) e deixe a Carvero gerir.
            Rentabilidade, segurança e tranquilidade em uma só solução.
          </p>
        </FadeIn>

        <div className="invest-pillars">
          {[
            {
              icon: 'fa-cogs',
              title: 'Gestão Completa',
              desc: 'Nós cuidamos de toda a operação: documentação, manutenção, seguros e alocação para motoristas qualificados.',
            },
            {
              icon: 'fa-satellite-dish',
              title: 'Segurança com Rastreador',
              desc: 'Seu veículo monitorado 24h com rastreador de ponta, garantindo proteção total do seu investimento.',
            },
            {
              icon: 'fa-chart-line',
              title: 'Rentabilidade Acima da Poupança',
              desc: 'Receba rendimentos mensais superiores à poupança, com previsibilidade e transparência total.',
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="invest-pillar">
                <div className="invest-pillar-icon">
                  <i className={`fas ${item.icon}`} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="invest-details">
            <h3>Como funciona o modelo de investimento</h3>
            <div className="invest-steps">
              <div className="invest-step">
                <span className="step-number">1</span>
                <h4>Você compra o veículo</h4>
                <p>Adquira um carro SUV ou moto dentro dos modelos da nossa frota.</p>
              </div>
              <div className="invest-step">
                <span className="step-number">2</span>
                <h4>A Carvero assume a gestão</h4>
                <p>Documentação, seguro, manutenção e alocação para motoristas parceiros.</p>
              </div>
              <div className="invest-step">
                <span className="step-number">3</span>
                <h4>Você recebe mensalmente</h4>
                <p>Rendimentos previsíveis, superiores à poupança, com transparência.</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="invest-cta">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre investir na frota da Carvero`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-whatsapp"
            >
              <i className="fab fa-whatsapp" /> Falar com Consultor
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
