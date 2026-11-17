import { Playfair_Display, Lato, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import FloatingActions from "./components/FloatingActions";
import { siteConfig, branchList, restaurantSchema } from "./lib/siteConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
  display: "swap",
});

// Hindi (Devanagari) text in the media section now renders in a proper font
const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600", "700"],
  variable: "--font-hindi",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Adalat Restaurant - Authentic North Indian Flavours in Lucknow",
  description: "Experience the rich taste of Handi Mutton and traditional North Indian flavors at Adalat Restaurant in Lucknow.",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    url: siteConfig.url,
    title: "Adalat Restaurant - Authentic North Indian Flavours",
    description: "Handi Mutton, Handi Chicken and traditional North Indian flavours in Gorakhpur & Lucknow.",
    images: [{ url: siteConfig.logo, alt: "Adalat Restaurant" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adalat Restaurant - Authentic North Indian Flavours",
    description: "Handi Mutton, Handi Chicken and traditional North Indian flavours in Gorakhpur & Lucknow.",
    images: [siteConfig.logo],
  },
  verification: {
    google: "LofuNFmxT7JGUqnaP1CD9OWlAefImWDrerYVV4eVsCA",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16110d",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": branchList.map(restaurantSchema),
  };

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} ${devanagari.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* If JavaScript is off, reveal animations must not hide content */}
        <noscript>
          <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <ScrollProgress />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
