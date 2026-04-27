import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteProvider } from "@/context/QuoteContext";
import { Toaster } from "react-hot-toast";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://nextshopretail.ro"),

  title: {
    default:
      "Rafturi metalice, vitrine frigorifice și mobilier comercial | NextShop",
    template: "%s | NextShop",
  },

  description:
    "NextShop oferă rafturi metalice, gondole, vitrine frigorifice, tejghele, case de marcat și mobilier comercial pentru magazine, supermarketuri și spații retail în Craiova și în toată România.",

  keywords: [
    "rafturi metalice",
    "rafturi magazine",
    "rafturi Craiova",
    "vitrine frigorifice",
    "vitrine frigorifice Craiova",
    "mobilier comercial",
    "mobilier magazin",
    "gondole magazin",
    "tejghele magazin",
    "case de marcat",
    "amenajare magazin",
    "echipamente retail",
    "NextShop",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Rafturi metalice, vitrine frigorifice și mobilier comercial",
    description:
      "Soluții complete pentru magazine: rafturi metalice, gondole, vitrine frigorifice, tejghele, case de marcat și mobilier comercial în Craiova și România.",
    url: "https://nextshopretail.ro",
    siteName: "NextShop",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextShop - rafturi metalice, vitrine frigorifice și mobilier comercial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rafturi metalice, vitrine frigorifice și mobilier comercial",
    description:
      "NextShop oferă soluții complete pentru magazine: rafturi, vitrine frigorifice, gondole, tejghele și mobilier comercial.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://nextshopretail.ro",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NextShop",
  url: "https://nextshopretail.ro",
  image: "https://nextshopretail.ro/og-image.jpg",
  description:
    "Rafturi metalice, vitrine frigorifice, gondole, tejghele, case de marcat și mobilier comercial pentru magazine.",
  areaServed: ["Craiova", "Dolj", "România"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Craiova",
    addressRegion: "Dolj",
    addressCountry: "RO",
  },
  telephone: "+40771753423",
  email: "nextshopretail@yahoo.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <QuoteProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </QuoteProvider>

        <Toaster position="bottom-right" />

        <GoogleAnalytics gaId="G-V84XLNG7YS" />

        <Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-364165560"
  strategy="afterInteractive"
/>

<Script id="google-ads-tag" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-364165560');
  `}
</Script>
      </body>
    </html>
  );
}