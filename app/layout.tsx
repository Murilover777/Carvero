import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import './globals.css';

export const metadata: Metadata = {
  title: 'Carvero - Mobilidade Premium & Investimento em Frota',
  description:
    'Alugue veículos certificados para Uber Black ou invista em uma frota gerenciada com rentabilidade acima da poupança.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollProgress />
      </body>
    </html>
  );
}
