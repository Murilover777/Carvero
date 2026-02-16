'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  VEHICLES,
  FLEET_CATEGORIES,
  FleetCategory,
  WHATSAPP_NUMBER,
} from '@/lib/data';
import FadeIn from '@/components/FadeIn';

export default function FrotaPage() {
  const [filter, setFilter] = useState<FleetCategory | 'all'>('all');

  const filteredVehicles =
    filter === 'all' ? VEHICLES : VEHICLES.filter((v) => v.category === filter);

  return (
    <section className="fleet" style={{ paddingTop: '140px' }}>
      <div className="container">
        <FadeIn>
          <h2 className="section-title">Nossa Frota</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="fleet-filters">
            <button
              type="button"
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Todos
            </button>
            {(Object.keys(FLEET_CATEGORIES) as FleetCategory[]).map((key) => (
              <button
                key={key}
                type="button"
                className={`filter-btn ${filter === key ? 'active' : ''}`}
                onClick={() => setFilter(key)}
              >
                <i className={`fas ${FLEET_CATEGORIES[key].icon}`} />{' '}
                {FLEET_CATEGORIES[key].label}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div
          className="fleet-grid"
          layout
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {filteredVehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`car-card ${vehicle.comingSoon ? 'vehicle-card-premium' : ''}`}
            >
              {vehicle.comingSoon && (
                <span className="badge-coming-soon">Em Breve</span>
              )}
              <div
                className="car-image"
                style={{
                  backgroundImage: `url(${encodeURI(vehicle.image)})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#ffffff',
                }}
              />
              <div className="car-info">
                <span className="vehicle-category">
                  {FLEET_CATEGORIES[vehicle.category].label}
                </span>
                <h4>{vehicle.name}</h4>
                <p>{vehicle.description}</p>
                {vehicle.comingSoon ? (
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre ${vehicle.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-fleet btn-cta-secondary"
                  >
                    Falar com Consultor
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de verificar disponibilidade do ${vehicle.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-fleet"
                  >
                    Ver Disponibilidade
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
