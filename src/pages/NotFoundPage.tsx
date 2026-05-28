import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/index';
import { Home, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

const content = {
  pt: { title: 'Página não encontrada', sub: 'A página que você está procurando não existe ou foi movida.', home: 'Voltar ao início', whatsapp: 'Falar pelo WhatsApp' },
  en: { title: 'Page not found', sub: 'The page you are looking for does not exist or has been moved.', home: 'Back to home', whatsapp: 'Chat on WhatsApp' },
  es: { title: 'Página no encontrada', sub: 'La página que está buscando no existe o ha sido movida.', home: 'Volver al inicio', whatsapp: 'Chatear por WhatsApp' },
};

export default function NotFoundPage() {
  const { lang } = useI18n();
  const c = content[lang];

  return (
    <section className="min-h-screen bg-gradient-to-br from-navy to-petrol flex items-center justify-center px-4 pt-24">
      <div className="text-center">
        <div className="text-8xl font-serif font-bold text-gold mb-6">404</div>
        <h1 className="text-3xl font-serif font-bold text-white mb-4">{c.title}</h1>
        <p className="text-slate-300 text-lg mb-10 max-w-md mx-auto">{c.sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`/${lang}`}
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy font-bold px-7 py-3 rounded-xl transition-all"
          >
            <Home className="w-5 h-5" />
            {c.home}
          </Link>
          <a
            href={getWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3 rounded-xl transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            {c.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
