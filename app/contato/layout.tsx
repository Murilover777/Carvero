import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - Carvero',
  description: 'Entre em contato com a Carvero. WhatsApp, formulário e informações de contato.',
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
