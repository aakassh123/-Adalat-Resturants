import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import HandiSection from "./components/HandiSection";
import MediaSection from "./components/MediaSection";
import Testimonials from "./components/Testimonials";
import MenuSection from "./components/MenuSection";
import LocationSection from "./components/LocationSection";
import CTASection from "./components/CTASection";
import { siteConfig } from "./lib/siteConfig";

export const metadata = {
  title: "Adalat Restaurant | Best Handi Mutton, Chicken & Biryani in Gorakhpur & Lucknow",
  description: "Welcome to Adalat Restaurant. Renowned for authentic slow-cooked Champaran Handi Mutton, Handi Chicken, and royal Awadhi Biryani in Gorakhpur & Lucknow.",
  keywords: [
    "Adalat Restaurant",
    "Adalat Restaurant Gorakhpur",
    "Adalat Restaurant Lucknow",
    "Best Handi Mutton in Gorakhpur",
    "Best Biryani in Gorakhpur",
    "Best Non Veg Restaurant Gorakhpur",
    "Handi Meat Kunraghat",
    "Champaran Meat Gorakhpur",
    "Best Chicken Handi Lucknow",
  ],
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Adalat Restaurant | Best Handi Mutton, Chicken & Biryani",
    description: "Authentic North Indian & Mughlai dining in Gorakhpur & Lucknow. Famous for clay-pot Handi cooking and mouthwatering Biryani.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
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
        alt: "Adalat Restaurant Ambiance & Food",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          tall
          showLogo={true}
          title={
            <>
              Adalat Restaurant <br />
              <span style={{ color: '#fff' }}>Authentic Flavours,</span><br />
              <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Served with Tradition</span>
            </>
          }
          subtitle="Adalat is a non-vegetarian restaurant in Gorakhpur & Lucknow offering rich North Indian dishes, prepared with time-honoured techniques and bold, comforting flavours."
          ctaText="Explore Menu"
          ctaLink="/menu"
          backgroundImage="/home_hero_new.webp"
          blur={true}
        />

        <Marquee />

        <Features />

        <HandiSection />

        <MediaSection />

        <MenuSection />

        <Testimonials />

        <LocationSection />

        <CTASection />
      </main>

      <Footer />
    </>
  );
}
