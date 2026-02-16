export type FleetCategory = 'suv' | 'motos';

export interface Vehicle {
  id: string;
  name: string;
  description: string;
  category: FleetCategory;
  image: string;
  comingSoon?: boolean;
}

export const FLEET_CATEGORIES = {
  suv: { label: 'SUVs', icon: 'fa-car' },
  motos: { label: 'Motos', icon: 'fa-motorcycle' },
} as const;

// Imagens em public/images/ - use os arquivos que você tem
export const VEHICLES: Vehicle[] = [
  // SUVs
  {
    id: 'nissan-kicks',
    name: 'Nissan Kicks',
    description: 'SUV compacto com design urbano e tecnologia',
    category: 'suv',
    image: '/images/Kicks.png',
  },
  {
    id: 'vw-nivus',
    name: 'VW Nivus',
    description: 'Elegância e performance em SUV sofisticado',
    category: 'suv',
    image: '/images/Nivus.png',
  },
  {
    id: 'vw-tcross',
    name: 'VW T-Cross',
    description: 'Versatilidade e espaço em veículo premium',
    category: 'suv',
    image: '/images/T-cross.png',
  },
  {
    id: 'corolla-cross',
    name: 'Toyota Corolla Cross',
    description: 'Confiabilidade Toyota em SUV compacto',
    category: 'suv',
    image: '/images/Corolla Cross.png',
  },
  {
    id: 'citroen-cactus',
    name: 'Citroën C4 Cactus',
    description: 'Design diferenciado e conforto para Uber Black',
    category: 'suv',
    image: '/images/Cactus.png',
  },
  // Motos
  {
    id: 'triumph-tiger',
    name: 'Triumph Tiger 900',
    description: 'Moto premium para aventuras e viagens',
    category: 'motos',
    image: '/images/Tiger900.png',
  },
  {
    id: 'honda-fan',
    name: 'Honda Fan 160',
    description: 'Eficiência e praticidade urbana',
    category: 'motos',
    image: '/images/Fan 160.png',
  },
  {
    id: 'honda-bros',
    name: 'Honda Bros 160',
    description: 'Versatilidade para entregas e mobilidade',
    category: 'motos',
    image: '/images/Bros 160.png',
  },
  {
    id: 'sahara-300',
    name: 'Sahara 300',
    description: 'Potência e conforto para viagens e uso urbano',
    category: 'motos',
    image: '/images/Sahara 300.png',
  },
];

export const WHATSAPP_NUMBER = '5531998843420';
export const WHATSAPP_NUMBER_ALT = '5531996245049';
