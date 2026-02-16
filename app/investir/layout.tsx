import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investidores - Carvero',
  description: 'Invista na frota da Carvero. Compre um veículo e deixe a Carvero gerir. Rentabilidade acima da poupança.',
};

export default function InvestirLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
