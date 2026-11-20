import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: "Food Gallery & Ambiance Photos | Adalat Restaurant Gorakhpur & Lucknow",
  description: "Browse high-definition photos of authentic Champaran Handi Mutton, Handi Chicken, Awadhi Dum Biryani, and traditional clay pot cooking at Adalat Restaurant in Gorakhpur and Lucknow.",
  keywords: "Adalat Restaurant photos, Handi Mutton photos Gorakhpur, Biryani images Lucknow, restaurant ambience Gorakhpur Ramgarh Taal, non veg food pictures UP, Adalat gallery",
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
  openGraph: {
    title: "Food Gallery & Ambiance | Adalat Restaurant Gorakhpur & Lucknow",
    description: "Authentic slow-cooked Handi dishes, Biryani, and cozy dining ambience in Gorakhpur & Lucknow.",
    url: `${siteConfig.url}/gallery`,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: `${siteConfig.url}/gallery/mutton-handi.webp`, alt: "Adalat Restaurant Mutton Handi Photo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adalat Restaurant Food Gallery | Best Handi Mutton & Chicken in UP",
    description: "Browse authentic food photos from Adalat Restaurant in Gorakhpur & Lucknow.",
    images: [`${siteConfig.url}/gallery/mutton-handi.webp`],
  },
};

export default function GalleryLayout({ children }) {
  return children;
}
