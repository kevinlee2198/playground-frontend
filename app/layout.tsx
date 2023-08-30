import './globals.css';
import '@/styles/globals.css';
import { Providers } from './providers';
import Footer from '@/components/footer/Footer';
import PlaygroundNavbar from '@/components/navbar/Navbar';

export const metadata = {
  title: 'Playground',
  description: 'Stream your sports league',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <PlaygroundNavbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
