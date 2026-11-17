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
  title: "Best Biryani & Handi in Gorakhpur | Adalat Restaurant India!",
  description: "Authentic Mughlai and North Indian food with rich taste and quality ingredients. A great spot for family dining with comfortable seating and ambience.",
  keywords: "Adalat Restaurant Gorakhpur, best restaurant in Gorakhpur, Mughlai restaurant Gorakhpur, family restaurant Gorakhpur",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: "Best Biryani & Handi in Gorakhpur | Adalat Restaurant",
    description: "Authentic Mughlai and North Indian food with rich taste and quality ingredients.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: siteConfig.logo, alt: "Adalat Restaurant" }],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          tall
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
