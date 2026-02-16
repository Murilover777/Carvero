'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '@/lib/data';
import { VEHICLES } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

export default function HomePage() {
  const fleetHighlights = VEHICLES.slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            Mobilidade Premium com a Carvero
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Alugue veículos certificados para Uber Black ou invista em uma frota
            gerenciada com rentabilidade acima da poupança.
          </motion.p>
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/frota" className="cta-button">
              Ver Disponibilidade
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-whatsapp"
            >
              <i className="fab fa-whatsapp" /> Falar com Consultor
            </a>
          </motion.div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Por que escolher a Carvero?</h2>
          </FadeIn>
          <div className="features-grid">
            {[
              {
                icon: 'fa-car',
                title: 'Frota Premium',
                desc: 'Veículos certificados para Uber Black, sempre em excelente estado.',
              },
              {
                icon: 'fa-shield-alt',
                title: 'Seguro Completo',
                desc: 'Seguro abrangente incluído na locação para total tranquilidade.',
              },
              {
                icon: 'fa-tools',
                title: 'Manutenção Incluída',
                desc: 'Manutenção preventiva e corretiva sem custos adicionais.',
              },
              {
                icon: 'fa-chart-line',
                title: 'Investimento Rentável',
                desc: 'Compre um veículo e deixe a Carvero gerir. Rentabilidade acima da poupança.',
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className={`fas ${item.icon}`} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="fleet">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">Destaques da Frota</h2>
          </FadeIn>
          <div className="fleet-grid">
            {fleetHighlights.map((vehicle, i) => (
              <FadeIn key={vehicle.id} delay={i * 0.1}>
                <div className="car-card">
                  <div
                    className="car-image"
                    style={{
                      backgroundImage: `url(${encodeURI(vehicle.image)})`,
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  <div className="car-info">
                    <span className="vehicle-category">
                      {vehicle.category === 'suv' ? 'SUVs' : 'Motos'}
                    </span>
                    <h4>{vehicle.name}</h4>
                    <p>{vehicle.description}</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de verificar disponibilidade do ${vehicle.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cta-fleet"
                    >
                      Ver Disponibilidade
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/frota" className="cta-button-secondary">
                Ver Frota Completa
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <FadeIn>
            <h2>Pronto para começar?</h2>
            <p>
              Verifique disponibilidade dos veículos ou fale com nosso consultor
              pelo WhatsApp
            </p>
            <div className="cta-section-buttons">
              <Link href="/frota" className="cta-button-secondary">
                Ver Disponibilidade
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
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
    </>
  );
}
