import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frota - Carvero',
  description: 'Conheça nossa frota de carros SUV e motos. Filtre por categoria e verifique disponibilidade.',
};

export default function FrotaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
