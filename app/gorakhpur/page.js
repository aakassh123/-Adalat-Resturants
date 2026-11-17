import BranchPage from "../components/BranchPage";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
    title: "Adalat Restaurant Gorakhpur | Kunraghat, Near Ramgarh Taal",
    description: "Visit Adalat Restaurant at Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool, Gorakhpur. Open daily 10 AM – 12 AM for Handi Mutton, Handi Chicken and Biryani.",
    keywords: "Adalat Restaurant Gorakhpur address, restaurant near Ramgarh Taal Gorakhpur, Kunraghat restaurant, handi mutton Gorakhpur",
    alternates: { canonical: `${siteConfig.url}/gorakhpur` },
};

export default function GorakhpurBranch() {
    return (
        <BranchPage
            id="gorakhpur"
            heroImage="/hero_about.webp"
            intro="Our main branch at Kunraghat — traditional handi, biryani and North Indian flavours near Ramgarh Taal."
        />
    );
}
