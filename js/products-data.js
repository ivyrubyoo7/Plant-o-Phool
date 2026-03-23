// ============================================================
//  Plantify – Products Data
// ============================================================

const PRODUCTS = [
  {
    id: 1,
    name: "Snake Plant",
    latin: "Sansevieria trifasciata",
    price: 24.99,
    oldPrice: 32.00,
    category: "indoor",
    tags: ["Indoor", "Low Maintenance", "Air Purifying"],
    badge: "Best Seller",
    rating: 4.8,
    reviews: 312,
    description: "The Snake Plant is one of the most resilient houseplants you can find. Its striking upright leaves bring a modern sculptural quality to any room while quietly purifying your air of toxins like formaldehyde and benzene.",
    care: { light: "Low to Bright Indirect", water: "Every 2-3 weeks", humidity: "Low", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80",
      "https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?w=600&q=80",
      "https://images.unsplash.com/photo-1466692476655-ab0c26c69cbf?w=600&q=80"
    ]
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    latin: "Monstera deliciosa",
    price: 39.99,
    oldPrice: 52.00,
    category: "indoor",
    tags: ["Indoor", "Tropical", "Statement"],
    badge: "Trending",
    rating: 4.9,
    reviews: 541,
    description: "The iconic Swiss Cheese Plant with its dramatic split leaves is the undisputed king of Instagram-worthy houseplants. Fast-growing and easy to care for, it adds instant tropical vibes to any space.",
    care: { light: "Bright Indirect", water: "Weekly", humidity: "Medium-High", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
      "https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=600&q=80",
      "https://images.unsplash.com/photo-1572204097183-e1ab140342ed?w=600&q=80"
    ]
  },
  {
    id: 3,
    name: "Peace Lily",
    latin: "Spathiphyllum wallisii",
    price: 19.99,
    oldPrice: null,
    category: "indoor",
    tags: ["Indoor", "Air Purifying", "Flowering"],
    badge: null,
    rating: 4.7,
    reviews: 228,
    description: "Elegant white blooms and glossy leaves make the Peace Lily one of the most beloved houseplants. A NASA-certified air purifier, it thrives in low light and will droop dramatically to let you know it needs water.",
    care: { light: "Low to Medium", water: "Weekly", humidity: "Medium", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1612965110667-4175024b0dcc?w=600&q=80",
      "https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?w=600&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
    ]
  },
  {
    id: 4,
    name: "Aloe Vera",
    latin: "Aloe barbadensis miller",
    price: 14.99,
    oldPrice: 18.00,
    category: "succulent",
    tags: ["Succulent", "Medicinal", "Low Maintenance"],
    badge: null,
    rating: 4.6,
    reviews: 415,
    description: "Beyond its famous skin-soothing gel, Aloe Vera is a striking architectural succulent with silvery-green fleshy leaves. Nearly indestructible and incredibly useful to have around the home.",
    care: { light: "Bright Direct", water: "Every 3 weeks", humidity: "Low", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80",
      "https://images.unsplash.com/photo-1596796892835-9bee1d2dbdab?w=600&q=80",
      "https://images.unsplash.com/photo-1611404913091-3aa5de6d5e9a?w=600&q=80"
    ]
  },
  {
    id: 5,
    name: "Fiddle Leaf Fig",
    latin: "Ficus lyrata",
    price: 54.99,
    oldPrice: 68.00,
    category: "indoor",
    tags: ["Indoor", "Statement", "Trending"],
    badge: "Premium",
    rating: 4.5,
    reviews: 189,
    description: "The Fiddle Leaf Fig is interior design royalty. Its enormous, violin-shaped leaves create a bold architectural statement. Requires consistent care but rewards you with breathtaking beauty.",
    care: { light: "Bright Indirect", water: "Weekly", humidity: "Medium", difficulty: "Intermediate" },
    images: [
      "https://images.unsplash.com/photo-1545165375-d8546f7b6d08?w=600&q=80",
      "https://images.unsplash.com/photo-1586280268958-9483002d016a?w=600&q=80",
      "https://images.unsplash.com/photo-1520901592504-6eb9e0a54fc3?w=600&q=80"
    ]
  },
  {
    id: 6,
    name: "Calathea Orbifolia",
    latin: "Calathea orbifolia",
    price: 34.99,
    oldPrice: null,
    category: "indoor",
    tags: ["Indoor", "Pet-Friendly", "Patterned"],
    badge: "New",
    rating: 4.7,
    reviews: 156,
    description: "With its sweeping silver-green striped leaves that fold up at night, the Calathea Orbifolia is nature's living artwork. Pet-friendly and a stunning focal point in any bright living space.",
    care: { light: "Medium Indirect", water: "Twice weekly", humidity: "High", difficulty: "Intermediate" },
    images: [
      "https://images.unsplash.com/photo-1622205313162-be1d5712a43f?w=600&q=80",
      "https://images.unsplash.com/photo-1574689211132-2ae9c7fae77a?w=600&q=80",
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600&q=80"
    ]
  },
  {
    id: 7,
    name: "String of Pearls",
    latin: "Senecio rowleyanus",
    price: 17.99,
    oldPrice: 22.00,
    category: "succulent",
    tags: ["Succulent", "Hanging", "Unique"],
    badge: null,
    rating: 4.8,
    reviews: 203,
    description: "This whimsical trailing succulent with bead-like leaves cascading from hanging baskets is utterly magical. Drought-tolerant and fast-growing, it spills beautifully over shelf edges.",
    care: { light: "Bright Indirect", water: "Every 2 weeks", humidity: "Low", difficulty: "Intermediate" },
    images: [
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=600&q=80",
      "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=600&q=80",
      "https://images.unsplash.com/photo-1521488741235-d35fc4c6c3bb?w=600&q=80"
    ]
  },
  {
    id: 8,
    name: "Bird of Paradise",
    latin: "Strelitzia reginae",
    price: 64.99,
    oldPrice: 80.00,
    category: "indoor",
    tags: ["Indoor", "Tropical", "Statement"],
    badge: "Premium",
    rating: 4.9,
    reviews: 97,
    description: "Bold, theatrical, and impossibly glamorous — the Bird of Paradise turns any room into a tropical paradise. Its giant paddle-shaped leaves split naturally as they mature to create a stunning sculptural display.",
    care: { light: "Bright Direct", water: "Weekly", humidity: "Medium", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&q=80",
      "https://images.unsplash.com/photo-1567331751270-b38aefbf5826?w=600&q=80",
      "https://images.unsplash.com/photo-1584702148650-5b3d9fcf5efc?w=600&q=80"
    ]
  },
  {
    id: 9,
    name: "Lavender",
    latin: "Lavandula angustifolia",
    price: 12.99,
    oldPrice: null,
    category: "outdoor",
    tags: ["Outdoor", "Fragrant", "Medicinal"],
    badge: null,
    rating: 4.8,
    reviews: 334,
    description: "The quintessential cottage garden plant, lavender fills the air with its intoxicating fragrance while attracting pollinators. Drought-tolerant once established and endlessly versatile.",
    care: { light: "Full Sun", water: "Every 2 weeks", humidity: "Low", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&q=80",
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80"
    ]
  },
  {
    id: 10,
    name: "ZZ Plant",
    latin: "Zamioculcas zamiifolia",
    price: 28.99,
    oldPrice: 36.00,
    category: "indoor",
    tags: ["Indoor", "Low Maintenance", "Air Purifying"],
    badge: null,
    rating: 4.7,
    reviews: 278,
    description: "The ultimate low-maintenance plant. The ZZ Plant's waxy, dark green leaves stay beautiful with almost no effort. It tolerates low light, infrequent watering, and general neglect like a champion.",
    care: { light: "Low to Bright Indirect", water: "Monthly", humidity: "Low", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80",
      "https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=600&q=80",
      "https://images.unsplash.com/photo-1518336975706-1ca23a60eddc?w=600&q=80"
    ]
  },
  {
    id: 11,
    name: "Echeveria",
    latin: "Echeveria elegans",
    price: 8.99,
    oldPrice: null,
    category: "succulent",
    tags: ["Succulent", "Compact", "Low Maintenance"],
    badge: null,
    rating: 4.6,
    reviews: 189,
    description: "These rosette-shaped succulents are jewels in miniature. Available in dozens of pastel shades from dusty rose to silver-blue, they're perfect for terrariums, windowsills, and succulent arrangements.",
    care: { light: "Bright Direct", water: "Every 2-3 weeks", humidity: "Low", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80",
      "https://images.unsplash.com/photo-1510505751526-76254053e571?w=600&q=80",
      "https://images.unsplash.com/photo-1521488741235-d35fc4c6c3bb?w=600&q=80"
    ]
  },
  {
    id: 12,
    name: "Pothos",
    latin: "Epipremnum aureum",
    price: 11.99,
    oldPrice: 15.00,
    category: "indoor",
    tags: ["Indoor", "Hanging", "Air Purifying"],
    badge: null,
    rating: 4.9,
    reviews: 622,
    description: "The nearly impossible-to-kill Pothos is every beginner's best friend. Its heart-shaped leaves in golden-green cascade beautifully from shelves and hooks, growing vigorously in almost any condition.",
    care: { light: "Low to Bright Indirect", water: "Weekly", humidity: "Low", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1616690710400-a16d146927c5?w=600&q=80",
      "https://images.unsplash.com/photo-1587334207407-f5286a97e7d4?w=600&q=80",
      "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&q=80"
    ]
  },
  {
    id: 13,
    name: "Bamboo Palm",
    latin: "Chamaedorea seifrizii",
    price: 44.99,
    oldPrice: 58.00,
    category: "air-purifying",
    tags: ["Air Purifying", "Indoor", "Tropical"],
    badge: "Top Rated",
    rating: 4.8,
    reviews: 145,
    description: "One of NASA's top air-purifying plants, the Bamboo Palm fills corners with lush tropical elegance while filtering formaldehyde, benzene, and carbon monoxide from your home's air.",
    care: { light: "Bright Indirect", water: "Twice weekly", humidity: "Medium-High", difficulty: "Intermediate" },
    images: [
      "https://images.unsplash.com/photo-1520302519878-3a7996b0cfe9?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1537032769693-d2e7da76b8b0?w=600&q=80"
    ]
  },
  {
    id: 14,
    name: "Rosemary Topiary",
    latin: "Salvia rosmarinus",
    price: 22.99,
    oldPrice: null,
    category: "outdoor",
    tags: ["Outdoor", "Culinary", "Fragrant"],
    badge: null,
    rating: 4.5,
    reviews: 112,
    description: "Trained into an elegant topiary shape, this rosemary bush doubles as garden art and a kitchen herb. Its piney fragrance and beautiful blue flowers attract bees and butterflies throughout summer.",
    care: { light: "Full Sun", water: "Every 2 weeks", humidity: "Low", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1466692476655-ab0c26c69cbf?w=600&q=80",
      "https://images.unsplash.com/photo-1444392061186-9fc38f84f726?w=600&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
    ]
  },
  {
    id: 15,
    name: "Rubber Plant",
    latin: "Ficus elastica",
    price: 31.99,
    oldPrice: 42.00,
    category: "air-purifying",
    tags: ["Air Purifying", "Statement", "Low Light"],
    badge: "Sale",
    rating: 4.7,
    reviews: 267,
    description: "The Rubber Plant's bold burgundy-green leaves are dramatic and architectural. One of the most effective air purifiers available, it removes airborne toxins while requiring minimal attention.",
    care: { light: "Medium to Bright Indirect", water: "Every 1-2 weeks", humidity: "Medium", difficulty: "Beginner" },
    images: [
      "https://images.unsplash.com/photo-1572204097183-e1ab140342ed?w=600&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1585400929344-3f5f0e64f3e5?w=600&q=80"
    ]
  }
];

// Export for use in other modules
if (typeof module !== 'undefined') module.exports = { PRODUCTS };
