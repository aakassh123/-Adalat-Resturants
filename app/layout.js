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
  title: {
    default: "Adalat Restaurant | Best Handi Mutton, Chicken & Biryani in Gorakhpur & Lucknow",
    template: "%s | Adalat Restaurant",
  },
  description: "Experience authentic slow-cooked Handi Mutton, Handi Chicken, Champaran Ahuna Meat, and Awadhi Biryani at Adalat Restaurant. Renowned family non-veg restaurant in Gorakhpur & Lucknow.",
  keywords: [
    "Adalat Restaurant",
    "Adalat Restaurant Gorakhpur",
    "Adalat Restaurant Lucknow",
    "Best Handi Mutton in Gorakhpur",
    "Best Handi Chicken Gorakhpur",
    "Best Biryani in Gorakhpur",
    "Best Non Veg Restaurant Gorakhpur",
    "Best Non Veg Restaurant Lucknow",
    "Champaran Meat Gorakhpur",
    "Handi Meat Kunraghat Gorakhpur",
    "Mughlai Restaurant Gorakhpur",
    "Family Restaurant Gorakhpur",
    "Ramgarh Taal Restaurants",
    "Adalat Menu and Prices",
  ],
  authors: [{ name: "Adalat Restaurant", url: siteConfig.url }],
  creator: "Adalat Restaurant",
  publisher: "Adalat Restaurant",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/logo.png", sizes: "1088x641", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_IN",
    url: siteConfig.url,
    title: "Adalat Restaurant | Authentic Handi Flavours & Biryani",
    description: "Famous for traditional slow-cooked Handi Mutton, Handi Chicken, and Awadhi Biryani in Gorakhpur & Lucknow.",
    images: [
      {
        url: "/logo.png",
        width: 1088,
        height: 641,
        alt: "Adalat Restaurant Official Logo",
      },
      {
        url: "/home_hero_new.webp",
        width: 1200,
        height: 630,
        alt: "Adalat Restaurant Ambiance & Dishes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adalat Restaurant | Authentic Handi Flavours & Biryani",
    description: "Famous for traditional slow-cooked Handi Mutton, Handi Chicken, and Awadhi Biryani in Gorakhpur & Lucknow.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "LofuNFmxT7JGUqnaP1CD9OWlAefImWDrerYVV4eVsCA",
  },
  category: "restaurant",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16110d",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: siteConfig.logoAbsolute,
          width: 1088,
          height: 641,
          caption: "Adalat Restaurant Official Logo",
        },
        image: siteConfig.logoAbsolute,
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.instagram,
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["Hindi", "English"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: "Official website of Adalat Restaurant - Famous Handi Mutton, Chicken & Biryani in Gorakhpur and Lucknow.",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
      ...branchList.map(restaurantSchema),
    ],
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
