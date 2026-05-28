import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloat from '../ui/WhatsAppFloat';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      <Header />
      <main style={{ flex: 1, width: '100%' }}>
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
