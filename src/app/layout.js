// app/layout.tsx
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://acbdealer.com'),
  title: 'ACBDealer.com | India’s No.1 Air Circuit Breaker Dealer',
  description:
    'Buy Air Circuit Breakers (ACBs) from India’s #1 dealer. Find ACBs from L&T, Siemens, Schneider, and more at Gupta Switchgears.',
  keywords: [
    'ACB Dealer India',
    'Air Circuit Breaker',
    'L&T ACB',
    'Schneider ACB',
    'Siemens ACB',
    'Laurnz Kudsen ACB',
    'Gupta Switchgears',
    'acbdealer.com',
  ],
  openGraph: {
    title: 'ACBDealer.com | India’s No.1 ACB Dealer',
    description:
      'India’s top dealer for Air Circuit Breakers. Explore ACBs from brands like L&T, Siemens, Schneider and more.',
    url: 'https://acbdealer.com',
    siteName: 'ACBDealer.com',
    images: [
      {
        url: 'https://www.acbdealer.com/category-1.png',
        width: 1200,
        height: 630,
        alt: 'ACBDealer.com by Gupta Switchgears',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACBDealer.com | No.1 ACB Dealer in India',
    description:
      'Trusted ACB distributor offering top brands like L&T, Siemens, Schneider and more. Powered by Gupta Switchgears.',
    site: '@guptaswitchgears',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}
) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Gupta Switchgears" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://acbdealer.com" />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
