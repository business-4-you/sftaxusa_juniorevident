import { Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from './i18n/index';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

function LangRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/servicos/:slug" element={<ServiceDetailPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/servicios/:slug" element={<ServiceDetailPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sobre-nosotros" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/privacidade" element={<PrivacyPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/privacidad" element={<PrivacyPage />} />
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/terminos" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/pt" replace />} />
        <Route path="/:lang/*" element={<LangRoutes />} />
        <Route path="*" element={<Navigate to="/pt" replace />} />
      </Routes>
    </I18nProvider>
  );
}
