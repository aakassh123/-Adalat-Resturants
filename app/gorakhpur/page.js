import BranchPage from "../components/BranchPage";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
    title: "Best Non Veg Restaurant in Gorakhpur | Famous Handi Mutton | Adalat Restaurant",
    description: "Craving authentic Handi Mutton and Champaran Meat in Gorakhpur? Visit Adalat Restaurant at Kunraghat, Near Ramgarh Taal Pool. Open daily 10 AM – 12 AM for delicious Handi Chicken, Mutton Curry, and Awadhi Biryani.",
    keywords: [
        "Best Handi Mutton in Gorakhpur",
        "Best Handi Meat Gorakhpur",
        "Champaran Meat Gorakhpur",
        "Ahuna Mutton Gorakhpur",
        "Best Non Veg Restaurant in Gorakhpur",
        "Kunraghat Restaurant Gorakhpur",
        "Restaurant near Ramgarh Taal Gorakhpur",
        "Best Biryani in Gorakhpur",
        "Adalat Restaurant Gorakhpur address contact",
    ],
    alternates: { canonical: `${siteConfig.url}/gorakhpur` },
    openGraph: {
        title: "Best Non Veg Restaurant in Gorakhpur | Adalat Restaurant Kunraghat",
        description: "Authentic slow-cooked Handi Mutton & Biryani near Ramgarh Taal, Gorakhpur. Dine-in, Takeaway & Home Delivery.",
        url: `${siteConfig.url}/gorakhpur`,
        siteName: siteConfig.name,
        type: "website",
        images: [{ url: `${siteConfig.url}/handi_meat.webp`, alt: "Adalat Restaurant Gorakhpur Handi Meat" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Handi Mutton & Non Veg in Gorakhpur | Adalat Restaurant",
        description: "Authentic clay pot woodfire Handi Mutton in Gorakhpur at Kunraghat.",
        images: [`${siteConfig.url}/handi_meat.webp`],
    },
};

export default function GorakhpurBranch() {
    return (
        <BranchPage
            id="gorakhpur"
            heroImage="/hero_about.webp"
            intro="Our flagship branch at Kunraghat near Ramgarh Taal — legendary woodfire Handi Meat, Dum Biryani, and authentic North Indian flavours."
        />
    );
}
