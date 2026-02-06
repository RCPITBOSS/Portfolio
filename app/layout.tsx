import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Brian Greenbaum | Full-Stack Developer',
    template: '%s | Brian Greenbaum',
  },
  description:
    'Full-stack developer building modern web applications with Next.js, TypeScript, and Supabase.',
  keywords: ['developer', 'portfolio', 'Next.js', 'TypeScript', 'React', 'full-stack'],
  authors: [{ name: 'Brian Greenbaum' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Brian Greenbaum',
    title: 'Brian Greenbaum | Full-Stack Developer',
    description:
      'Full-stack developer building modern web applications with Next.js, TypeScript, and Supabase.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brian Greenbaum | Full-Stack Developer',
    description:
      'Full-stack developer building modern web applications with Next.js, TypeScript, and Supabase.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
