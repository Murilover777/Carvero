'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/data';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/frota', label: 'Frota' },
  { href: '/investir', label: 'Investidores' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <Link href="/" className="logo">
          Carvero
        </Link>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-header"
          aria-label="WhatsApp"
        >
          <i className="fab fa-whatsapp" />
        </a>
        <button
          type="button"
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
