import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: "Adalat Restaurant Menu | Famous Handi Mutton, Chicken & Biryani in Gorakhpur & Lucknow",
  description: "Explore the complete authentic non-vegetarian menu of Adalat Restaurant. Renowned for Champaran Handi Mutton, Handi Chicken, Awadhi Dum Biryani, and Charcoal Tandoori specialities in Gorakhpur and Lucknow.",
  keywords: "Adalat Restaurant menu, Handi Mutton price Gorakhpur, Handi Chicken Lucknow, Biryani menu Gorakhpur, best non veg restaurant menu UP, Champaran meat Gorakhpur, non veg food prices Gorakhpur Lucknow",
  alternates: {
    canonical: `${siteConfig.url}/menu`,
  },
  openGraph: {
    title: "Adalat Restaurant Menu | Authentic North Indian & Handi Delicacies",
    description: "Famous for traditional slow-cooked Handi Mutton, Handi Chicken, and Awadhi Biryani in Gorakhpur & Lucknow.",
    url: `${siteConfig.url}/menu`,
    siteName: siteConfig.name,
    type: "website",
    images: [{ url: `${siteConfig.url}/handi_meat.webp`, alt: "Adalat Restaurant Specialities Menu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adalat Restaurant Menu | Best Handi Mutton & Chicken in UP",
    description: "Explore authentic North Indian & Awadhi dishes at Adalat Restaurant in Gorakhpur & Lucknow.",
    images: [`${siteConfig.url}/handi_meat.webp`],
  },
};

export default function MenuLayout({ children }) {
  const menuJsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${siteConfig.url}/menu#menu`,
    name: "Adalat Restaurant Official Menu",
    description: "Authentic North Indian, Awadhi, and Handi non-vegetarian dishes in Gorakhpur & Lucknow.",
    url: `${siteConfig.url}/menu`,
    inLanguage: "en",
    hasMenuItem: [
      {
        "@type": "MenuItem",
        name: "Gorakhpur Special Handi Meat",
        description: "Clay pot slow-cooked mutton on woodfire embers with whole garlic bulbs and mustard oil.",
        suitableForDiet: "https://schema.org/HalalDiet",
      },
      {
        "@type": "MenuItem",
        name: "Special Champaran Handi Chicken",
        description: "Fresh chicken slow-steamed in traditional clay pot with crushed whole spices.",
        suitableForDiet: "https://schema.org/HalalDiet",
      },
      {
        "@type": "MenuItem",
        name: "Royal Awadhi Mutton Dum Biryani",
        description: "Aged long-grain basmati rice layered with spiced tender mutton and saffron.",
        suitableForDiet: "https://schema.org/HalalDiet",
      },
      {
        "@type": "MenuItem",
        name: "Charcoal Roasted Tandoori Chicken",
        description: "Marinated in hung curd and Kashmiri spices, roasted over red charcoal.",
        suitableForDiet: "https://schema.org/HalalDiet",
      },
      {
        "@type": "MenuItem",
        name: "Adalat Royal Butter Chicken",
        description: "Tandoori chicken simmered in rich cashew tomato gravy with butter and cream.",
        suitableForDiet: "https://schema.org/HalalDiet",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      {children}
    </>
  );
}
