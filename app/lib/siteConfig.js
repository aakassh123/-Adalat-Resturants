// Single source of truth for contact info, hours, branches and links.
// Edit here once — Navbar, Footer, Contact, Schema, Branch pages all read from this file.

export const siteConfig = {
  name: "Adalat Restaurant",
  url: "https://adalatrestaurant.com",
  email: "adalatrestaurant@gmail.com",
  phone: "+919936407733",
  phoneDisplay: "+91 9936407733",
  logo: "https://res.cloudinary.com/dil74qcsx/image/upload/v1784267882/adalat_btw9os.png",
  hours: {
    days: "Mon - Sun",
    display: "10:00 AM - 12:00 AM",
    opens: "10:00",
    closes: "00:00",
  },
  social: {
    facebook: "https://www.facebook.com/p/Adalat-Restaurant-Lucknow-61573065210195/",
    instagram: "https://www.instagram.com/adalat_restaurant_gorakhpur?igsh=NTBqZHRzZGw3cXln",
  },
  menuPdf: "https://drive.google.com/file/d/1T-BVR8i3A3Eks-WmRCNXmOIQtxy_36NH/view?usp=sharing",
  lastUpdated: "2026-11-14",
  branches: {
    gorakhpur: {
      id: "gorakhpur",
      label: "Gorakhpur (Main Branch)",
      city: "Gorakhpur",
      street: "Peepal Dada, Kunraghat, Shri Ganga Tiraha, Near Ramgarh Taal Pool",
      region: "UP",
      postalCode: "273008",
      displayLines: ["Peepal Dada, Kunraghat, Gorakhpur (UP)", "Shri Ganga Tiraha, Near Ramgarh Taal Pool"],
      phones: ["9125866811", "9151144479", "9151144472"],
    },
    lucknow: {
      id: "lucknow",
      label: "Lucknow Branch",
      city: "Lucknow",
      street: "B/MIG-19, Kanpur Road, Sec-L, LDA Colony, Bangla Bazar Police Chowki, Ashiyana",
      region: "UP",
      postalCode: "226012",
      displayLines: ["B/MIG-19, Kanpur Road, Sec-L, LDA Colony,", "Bangla Bazar Police Chowki, Ashiyana, Lucknow"],
      phones: ["8429397733", "9506549333"],
    },
  },
};

export const branchList = Object.values(siteConfig.branches);

export const fullAddress = (b) => `${b.street}, ${b.city}, ${b.region} ${b.postalCode}`;
export const mapsLink = (b) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Adalat Restaurant ${fullAddress(b)}`)}`;
export const mapsEmbed = (b) =>
  `https://www.google.com/maps?q=${encodeURIComponent(fullAddress(b))}&output=embed`;
export const telHref = (n) => `tel:+91${String(n).replace(/\D/g, "").slice(-10)}`;
export const waLink = (text) =>
  `https://wa.me/${siteConfig.phone.replace("+", "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const restaurantSchema = (b) => ({
  "@type": "Restaurant",
  "@id": `${siteConfig.url}/${b.id}#restaurant`,
  name: `${siteConfig.name} ${b.city}`,
  image: siteConfig.logo,
  url: `${siteConfig.url}/${b.id}`,
  telephone: telHref(b.phones[0]).replace("tel:", ""),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: b.street,
    addressLocality: b.city,
    addressRegion: b.region,
    postalCode: b.postalCode,
    addressCountry: "IN",
  },
  hasMap: mapsLink(b),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: siteConfig.hours.opens,
    closes: siteConfig.hours.closes,
  },
  servesCuisine: ["North Indian", "Mughlai", "Non-Vegetarian"],
  priceRange: "$$",
  hasMenu: `${siteConfig.url}/menu`,
});
