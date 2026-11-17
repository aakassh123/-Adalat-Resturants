import json
import re

items = [
    {
        "cat": "Adalat Mutton Special",
        "id": 1,
        "name": "Mutton Curry (Speciality)",
        "slug": "mutton-curry-speciality",
        "description": "Our house signature dish. Tender cuts of mutton simmered in a rich, robust gravy crafted from a secret blend of traditional spices.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Adalat%20Specia;.jpg"
    },
    {
        "cat": "Adalat Mutton Special",
        "id": 2,
        "name": "Special Handi Mutton",
        "slug": "special-handi-mutton",
        "description": "Slow-cooked in a sealed clay pot (handi) to preserve the natural aroma and juices, resulting in meat that falls off the bone.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Handi.jpg"
    },
    {
        "cat": "Adalat Mutton Special",
        "id": 3,
        "name": "Mutton Rogan Josh",
        "slug": "mutton-rogan-josh",
        "description": "A Kashmiri classic featuring tender mutton braised in a vibrant, aromatic gravy infused with dry ginger and fennel.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Rogan%20Josh.jpg"
    },
    {
        "cat": "Adalat Mutton Special",
        "id": 4,
        "name": "Bhuna Mutton Masala",
        "slug": "bhuna-mutton-masala",
        "description": "Succulent mutton pieces pan-seared with spices, onions, and tomatoes until the gravy is thick, rich, and intensely flavorful.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Bhuna%20gosht.jpg"
    },
    {
        "cat": "Adalat Chicken Special",
        "id": 5,
        "name": "Chicken Curry",
        "slug": "chicken-curry",
        "description": "A comforting, homestyle chicken curry cooked with fresh herbs and a balanced blend of spices.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Adalat%20Special.jpg"
    },
    {
        "cat": "Adalat Chicken Special",
        "id": 6,
        "name": "Special Handi Chicken",
        "slug": "special-handi-chicken",
        "description": "Chicken slow-cooked in a traditional earthen pot, allowing the spices to deeply penetrate the meat for an authentic taste.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Handi%20(1).jpg"
    },
    {
        "cat": "Adalat Chicken Special",
        "id": 7,
        "name": "Chicken Biryani",
        "slug": "chicken-biryani",
        "description": "Fragrant long-grain basmati rice layered with succulent chicken pieces, aromatic spices, and saffron, slow-cooked to perfection.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Biryani.jpg"
    },
    {
        "cat": "Adalat Chicken Special",
        "id": 8,
        "name": "Butter Chicken",
        "slug": "butter-chicken",
        "description": "Tandoori chicken simmered in a velvety, creamy tomato sauce finished with a dollop of fresh butter.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Butter%20Chicken.jpg"
    },
    {
        "cat": "Veg Special",
        "id": 9,
        "name": "Hara Bhara Kabab",
        "slug": "hara-bhara-kabab",
        "description": "Spinach and green pea patties spiced with aromatic herbs and pan-fried to perfection.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Hara%20Bhara%20Kebab.jpg"
    },
    {
        "cat": "Veg Special",
        "id": 10,
        "name": "Matar Paneer",
        "slug": "matar-paneer",
        "description": "Cottage cheese cubes and green peas simmered in a rich, spiced tomato and onion gravy.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Matar%20Paneer.jpg"
    },
    {
        "cat": "Veg Special",
        "id": 11,
        "name": "Mushroom Kaleji",
        "slug": "mushroom-kaleji",
        "description": "A vegetarian delight with mushrooms cooked in a thick, spicy gravy mimicking the texture and flavor of traditional kaleji.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mushroom%20Kaleji.jpg"
    },
    {
        "cat": "Veg Special",
        "id": 12,
        "name": "Paneer Kolhapuri",
        "slug": "paneer-kolhapuri",
        "description": "A spicy and flavorful Maharashtrian dish made with paneer and a special Kolhapuri spice blend.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Paneer%20Kolhapuri.jpg"
    },
    {
        "cat": "Non Veg Special",
        "id": 13,
        "name": "Chicken Kolhapuri",
        "slug": "chicken-kolhapuri",
        "description": "A fiery and flavorful chicken dish cooked with a special Kolhapuri spice blend and dried coconut.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Kolhapuri.jpg"
    },
    {
        "cat": "Non Veg Special",
        "id": 14,
        "name": "Chicken Seekh Kebab",
        "slug": "chicken-seekh-kebab",
        "description": "Minced chicken seasoned with fresh herbs and spices, skewered and grilled to juicy perfection.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Seekh%20Kebab.jpg"
    },
    {
        "cat": "Non Veg Special",
        "id": 15,
        "name": "Chicken Tikka Boneless",
        "slug": "chicken-tikka-boneless",
        "description": "Tender boneless chicken chunks marinated in yogurt and spices, roasted in a tandoor.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Tikka%20Boneless.jpg"
    },
    {
        "cat": "Non Veg Special",
        "id": 16,
        "name": "Mutton Galwati Kebab",
        "slug": "mutton-galwati-kebab",
        "description": "Melt-in-your-mouth minced mutton kebabs, finely ground with aromatic spices and pan-fried.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Mutton%20Galawati%20Kebab.jpg"
    },
    {
        "cat": "Combo Items",
        "id": 17,
        "name": "Chicken Handi Combo",
        "slug": "chicken-handi-combo",
        "description": "A complete meal featuring our signature handi chicken served with your choice of bread or rice.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Handi%20Combo.jpg"
    },
    {
        "cat": "Combo Items",
        "id": 18,
        "name": "Chicken Masala Combo",
        "slug": "chicken-masala-combo",
        "description": "Spicy chicken masala served with aromatic basmati rice or butter naan for a fulfilling experience.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chicken%20Masala%20Combo.jpg"
    },
    {
        "cat": "Combo Items",
        "id": 19,
        "name": "Chola Rice Combo",
        "slug": "chola-rice-combo",
        "description: "A classic North Indian comfort meal of spicy chickpea curry served over steaming hot rice.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Chola%20and%20Rice%20Combo.jpg"
    },
    {
        "cat": "Combo Items",
        "id": 20,
        "name": "Butter Chicken Combo",
        "slug": "butter-chicken-combo",
        "description": "Creamy butter chicken paired with naan or rice, a favorite combination for all ages.",
        "image": "https://raw.githubusercontent.com/codeandcanvas18/Adalat-Website-Images/main/Butter%20Chicken%20Combo.jpg"
    }
]

def generate_seo_content(name, desc):
    return [
        {
            "heading": f"Experience the Authentic {name} in Gorakhpur",
            "paragraphs": [
                f"At Adalat Restaurant, we take immense pride in our {name}. {desc} It's not just a meal; it's a culinary journey that brings the rich, authentic flavors of North India straight to your table.",
                f"Our chefs use closely guarded recipes passed down through generations, ensuring that every bite of our {name} resonates with the traditional taste you crave. We source only the freshest, highest-quality local ingredients in Gorakhpur to maintain the unmatched flavor profile our guests have come to love."
            ]
        },
        {
            "heading": f"Why Our {name} Stands Out",
            "paragraphs": [
                f"What makes the {name} at Adalat Restaurant special is our dedication to the cooking process. We don't rush perfection. By allowing the spices to naturally meld with the core ingredients, the aromatic profile is elevated, creating a dish that is deeply comforting and intensely flavorful.",
                f"Whether you are dining in with family or ordering for a special occasion, this dish guarantees a memorable experience. Pair it with our freshly baked breads or aromatic basmati rice for a complete and satisfying meal."
            ]
        }
    ]

categories = {}
for item in items:
    cat = item["cat"]
    if cat not in categories:
        categories[cat] = []
    
    del item["cat"]
    item["seoContent"] = generate_seo_content(item["name"], item["description"])
    categories[cat].append(item)

output_js = "export const menuData = " + json.dumps(categories, indent=4) + ";"
output_js = output_js.replace('"id":', 'id:').replace('"name":', 'name:').replace('"slug":', 'slug:').replace('"description":', 'description:').replace('"image":', 'image:').replace('"seoContent":', 'seoContent:').replace('"heading":', 'heading:').replace('"paragraphs":', 'paragraphs:')

with open("c:/Users/akchh/Downloads/adalat-restaurant-source/app/data/menuData.js", "w", encoding="utf-8") as f:
    f.write(output_js)
