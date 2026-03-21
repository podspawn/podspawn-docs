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
    default: 'podspawn — Ephemeral SSH Dev Containers',
    template: '%s | podspawn',
  },
  description:
    'Persistent dev environments and ephemeral sandboxes over native SSH. Two lines of sshd_config. Sub-second startup. Every SSH feature works.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://podspawn.dev',
    siteName: 'podspawn',
    title: 'podspawn — Ephemeral SSH Dev Containers',
    description:
      'Persistent dev environments and ephemeral sandboxes over native SSH. Two lines of sshd_config. Sub-second startup.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'podspawn — Ephemeral SSH Dev Containers',
    description:
      'Persistent dev environments and ephemeral sandboxes over native SSH. Two lines of sshd_config. Sub-second startup.',
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
