import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteProvider } from "@/context/QuoteContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://nextshopretail.ro"),

  title: {
    default: "NextShop | Mobilier profesional pentru retail",
    template: "%s | NextShop",
  },

  description:
    "Mobilier profesional pentru magazine retail: rafturi, vitrine, tejghele și soluții complete pentru spații comerciale.",

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
    title: "NextShop",
    description: "Mobilier profesional pentru magazine retail.",
    url: "https://nextshopretail.ro",
    siteName: "NextShop",
    locale: "ro_RO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>

        <QuoteProvider>

          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

        </QuoteProvider>

        <Toaster position="bottom-right" />

      </body>
    </html>
  );
}