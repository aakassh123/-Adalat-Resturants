import BranchPage from "../components/BranchPage";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
    title: "Adalat Restaurant Lucknow | Ashiyana, Kanpur Road",
    description: "Visit Adalat Restaurant at B/MIG-19, Kanpur Road, Sec-L, LDA Colony, Ashiyana, Lucknow. Open daily 10 AM – 12 AM for authentic North Indian non-veg food.",
    keywords: "Adalat Restaurant Lucknow address, non veg restaurant Ashiyana Lucknow, handi meat Lucknow",
    alternates: { canonical: `${siteConfig.url}/lucknow` },
};

export default function LucknowBranch() {
    return (
        <BranchPage
            id="lucknow"
            heroImage="/home_hero_new.webp"
            intro="Our Ashiyana branch on Kanpur Road — authentic North Indian non-vegetarian food, cooked the traditional way."
        />
    );
}
