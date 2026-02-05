import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'SaaS Starter Kit',
    template: '%s | SaaS Starter Kit',
  },
  description: 'A production-ready SaaS starter kit built with Next.js 14, Supabase, and TypeScript',
  keywords: ['SaaS', 'starter kit', 'Next.js', 'Supabase', 'TypeScript'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'SaaS Starter Kit',
    title: 'SaaS Starter Kit',
    description:
      'A production-ready SaaS starter kit built with Next.js 14, Supabase, and TypeScript',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Starter Kit',
    description:
      'A production-ready SaaS starter kit built with Next.js 14, Supabase, and TypeScript',
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
