import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/lib/data';

const CNPJ = '65.090.605/0001-66';
const WHATSAPP_DISPLAY = '+55 31 9 9884-3420';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Carvero</h3>
            <p>Sua parceira de confiança para locação de veículos premium para Uber Black.</p>
            <p className="footer-cnpj"><strong>CNPJ:</strong> {CNPJ}</p>
          </div>
          <div className="footer-section">
            <h3>Contato</h3>
            <p className="footer-whatsapp">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp" /> WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </p>
          </div>
          <div className="footer-section">
            <h3>Serviços</h3>
            <Link href="/frota">Nossa Frota</Link>
            <Link href="/investir">Investir</Link>
            <Link href="/contato">Contato</Link>
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" /> Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /> Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /> LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Carvero. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
