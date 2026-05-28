// ============================================================
// SF TAX USA — Site Configuration
// Update these values to change contact info across the site
// ============================================================

export const SITE_CONFIG = {
  whatsapp: {
    number: '13050000000', // Format: country code + number, no spaces or dashes
    message: {
      pt: 'Olá! Vim pelo site SF TAX USA e gostaria de saber mais sobre os serviços.',
      en: 'Hello! I found SF TAX USA website and would like to know more about the services.',
      es: 'Hola! Encontré el sitio de SF TAX USA y me gustaría saber más sobre los servicios.',
    },
  },
  contact: {
    phone: '+1 (305) 000-0000',
    email: 'contato@sftaxusa.com',
    address: 'Florida, United States',
    hours: {
      pt: 'Seg–Sex: 9h–18h (ET)',
      en: 'Mon–Fri: 9am–6pm (ET)',
      es: 'Lun–Vie: 9am–6pm (ET)',
    },
  },
  social: {
    instagram: 'https://instagram.com/sftaxusa',
    linkedin: 'https://linkedin.com/company/sftaxusa',
    facebook: 'https://facebook.com/sftaxusa',
  },
  seo: {
    baseUrl: 'https://sftaxusa.com',
    defaultImage: '/images/og-default.png',
  },
  gtm: {
    id: 'GTM-XXXXXXX', // Replace with your GTM ID
  },
};

export function getWhatsAppUrl(lang: 'pt' | 'en' | 'es' = 'pt', customMessage?: string) {
  const msg = customMessage || SITE_CONFIG.whatsapp.message[lang];
  const encoded = encodeURIComponent(msg);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encoded}`;
}

export function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event, ...params });
  }
}
