import { useEffect } from 'react';
import { SITE_CONFIG } from '../../data/config';

interface SEOHeadProps {
  title: string;
  description: string;
  slug?: string;
  lang?: string;
  ogImage?: string;
}

export default function SEOHead({ title, description, slug = '', lang = 'pt', ogImage }: SEOHeadProps) {
  const canonicalUrl = `${SITE_CONFIG.seo.baseUrl}/${lang}${slug ? '/' + slug : ''}`;
  const image = ogImage || SITE_CONFIG.seo.defaultImage;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', image, true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, canonicalUrl, image]);

  return null;
}
