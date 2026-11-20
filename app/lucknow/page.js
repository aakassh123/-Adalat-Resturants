import BranchPage from "../components/BranchPage";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
    title: "Best Handi Mutton & Non Veg Restaurant in Lucknow | Adalat Restaurant Ashiyana",
    description: "Looking for authentic Champaran Handi Mutton in Lucknow? Visit Adalat Restaurant at Kanpur Road, LDA Colony, Ashiyana, Lucknow. Famous for clay-pot slow-cooked Handi Meat, Handi Chicken & Awadhi Biryani.",
    keywords: [
        "Best Handi Mutton in Lucknow",
        "Best Handi Meat in Lucknow",
        "Champaran Meat Lucknow",
        "Ahuna Mutton Lucknow",
        "Best Non Veg Restaurant in Lucknow",
        "Non Veg Restaurant Ashiyana Lucknow",
        "Best Biryani in Lucknow",
        "Best Handi Chicken in Lucknow",
        "Kanpur Road Restaurants Lucknow",
        "Adalat Restaurant Lucknow address contact",
    ],
    alternates: { canonical: `${siteConfig.url}/lucknow` },
    openGraph: {
        title: "Best Handi Mutton in Lucknow | Adalat Restaurant Ashiyana",
        description: "Taste authentic slow-cooked claypot Handi Mutton and Awadhi non-veg food on Kanpur Road, Ashiyana, Lucknow.",
        url: `${siteConfig.url}/lucknow`,
        siteName: siteConfig.name,
        type: "website",
        images: [{ url: `${siteConfig.url}/home_hero_new.webp`, alt: "Adalat Restaurant Lucknow Branch" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Non Veg & Handi Meat in Lucknow | Adalat Restaurant",
        description: "Authentic Champaran style Handi Meat and Awadhi non-veg in Ashiyana, Lucknow.",
        images: [`${siteConfig.url}/home_hero_new.webp`],
    },
};

export default function LucknowBranch() {
    return (
        <BranchPage
            id="lucknow"
            heroImage="/home_hero_new.webp"
            intro="Our Ashiyana branch on Kanpur Road — authentic claypot Handi Mutton, succulent Handi Chicken, and North Indian delicacies."
        />
    );
}
