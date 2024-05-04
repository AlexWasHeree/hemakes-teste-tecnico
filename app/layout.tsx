import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hemakes - Technical test',
  description:
    'This project is a technical test for the selection process of the company HeMakes - IT Happens, developed by Victor Alexandre.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen ">
          <Header />
          <div className="container mx-auto flex-grow pt-20">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
