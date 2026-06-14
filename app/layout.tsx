import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from './components/Navbar';
import WhatsAppCTA from './components/WhatsAppCTA';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, GTM_ID, CONTACT } from './site.config';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Digital Growth Partners`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'digital marketing agency',
    'SEO',
    'paid ads',
    'marketing automation',
    'web development',
    'Next.js development',
    'e-commerce',
    'Shopify',
    'WooCommerce',
    'growth agency',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Digital Growth Partners`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Digital Growth Partners`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Favicon is auto-wired from app/icon.png
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08080a',
};

// Organization structured data (JSON-LD) for richer search results.
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  sameAs: [CONTACT.linkedin, CONTACT.facebook, CONTACT.instagram],
  areaServed: 'Worldwide',
  serviceType: [
    'Digital Marketing',
    'Marketing Automation',
    'Web Development',
    'E-Commerce Development',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-body">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Cinematic base — sits behind content; shows through transparent sections */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_0%,transparent_45%,#050506_100%)]" />
          <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        </div>

        <div className="relative z-10 min-h-screen bg-transparent text-vedixx-text font-body selection:bg-vedixx-primary selection:text-white flex flex-col overflow-x-hidden">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <WhatsAppCTA />

          {/* Footer */}
          <footer className="py-8 text-center text-vedixx-muted text-sm border-t border-white/5 bg-vedixx-bgDeep">
            <div className="max-w-7xl mx-auto px-4">
              <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.</p>
            </div>
          </footer>
        </div>

        {/* Film-grain + soft vignette overlay — sits above sections so the texture reads everywhere */}
        <div className="pointer-events-none fixed inset-0 z-[55]" aria-hidden="true">
          <div className="grain absolute inset-0 opacity-[0.045] mix-blend-soft-light" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_-10%,transparent_58%,rgba(5,5,6,0.5)_100%)]" />
        </div>
      </body>
    </html>
  );
}
