import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://podspawn.dev'),
  title: {
    default: 'podspawn — One command. Full dev environment.',
    template: '%s | podspawn',
  },
  description:
    'Clone a repo, run podspawn dev, get packages, services, and a shell. Locally or over SSH. Open source.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://podspawn.dev',
    siteName: 'podspawn',
    title: 'podspawn — One command. Full dev environment.',
    description:
      'Clone a repo, run podspawn dev, get packages, services, and a shell. Locally or over SSH. Open source.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'podspawn — One command. Full dev environment.',
    description:
      'Clone a repo, run podspawn dev, get packages, services, and a shell. Locally or over SSH.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://podspawn.dev',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
