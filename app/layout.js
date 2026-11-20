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
    "Best Handi Mutton in Lucknow",
    "Best Handi Meat in Gorakhpur",
    "Best Handi Meat in Lucknow",
    "Best Handi Chicken Gorakhpur",
    "Best Handi Chicken Lucknow",
    "Best Biryani in Gorakhpur",
    "Best Biryani in Lucknow",
    "Best Non Veg Restaurant Gorakhpur",
    "Best Non Veg Restaurant Lucknow",
    "Champaran Meat Gorakhpur",
    "Champaran Handi Mutton Lucknow",
    "Ahuna Meat Gorakhpur",
    "Handi Meat Kunraghat Gorakhpur",
    "Ashiyana Lucknow Restaurants",
    "Ramgarh Taal Restaurants Gorakhpur",
    "Awadhi Food Uttar Pradesh",
    "Top Non Veg Family Restaurant UP",
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
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is the best restaurant for Handi Mutton in Gorakhpur and Lucknow?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adalat Restaurant is widely acclaimed as the #1 destination for authentic Handi Mutton in Gorakhpur (Kunraghat near Ramgarh Taal) and Lucknow (Ashiyana, Kanpur Road). Cooked in dough-sealed earthen clay pots over live woodfire embers for 4+ hours with whole garlic bulbs and mustard oil.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Adalat Restaurant located in Gorakhpur and Lucknow?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Adalat Restaurant operates two landmark locations: 1. Gorakhpur Branch: Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool, Gorakhpur (UP) 273008. 2. Lucknow Branch: B/MIG-19, Kanpur Road, Sec-L, LDA Colony, Bangla Bazar Police Chowki, Ashiyana, Lucknow (UP) 226012.",
            },
          },
          {
            "@type": "Question",
            name: "Is non-vegetarian food at Adalat Restaurant 100% halal certified?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, all chicken, mutton, and biryani preparations at Adalat Restaurant are 100% halal certified and prepared fresh daily without frozen meats or artificial tenderizers.",
            },
          },
          {
            "@type": "Question",
            name: "What are the most famous signature dishes at Adalat Restaurant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our most popular signature dishes include Gorakhpur Special Handi Meat, Champaran Handi Chicken, Royal Awadhi Mutton Dum Biryani, and Charcoal Roasted Tandoori Chicken.",
            },
          },
          {
            "@type": "Question",
            name: "How can I book a table or order food from Adalat Restaurant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can book a table or place a takeaway/delivery order by calling +91 9936407733 or chatting with our team directly on WhatsApp via our official website adalatrestaurant.com.",
            },
          },
        ],
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
