export const destinations = [
  {
    id: 1,
    name: "Kerala Backwaters",
    description: "Experience the tranquil backwaters in a traditional houseboat.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    duration: "3-5 Days",
    highlights: ["Houseboat Stay", "Ayurvedic Spa", "Local Cuisine"]
  },
  {
    id: 2,
    name: "Coorg - Scotland of India",
    description: "Explore lush coffee estates and majestic waterfalls.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d", // Changed image to avoid repeating
    duration: "2-4 Days",
    highlights: ["Coffee Tours", "Abbey Falls", "Raja's Seat"]
  },
  {
    id: 3,
    name: "Ooty & Coonoor",
    description: "Discover the heritage toy train and sprawling tea gardens.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d", // Ooty specific
    duration: "3-4 Days",
    highlights: ["Toy Train", "Tea Gardens", "Doddabetta Peak"]
  },
  {
    id: 4,
    name: "Mysore & Wayanad",
    description: "A perfect blend of royal history and wildlife adventure.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d", // Mysore palace
    duration: "4-5 Days",
    highlights: ["Mysore Palace", "Wildlife Safari", "Spice Gardens"]
  },
  {
    id: 5,
    name: "Pondicherry",
    description: "Relax in the serene beaches and colonial French Quarters.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d", // Pondicherry
    duration: "2-3 Days",
    highlights: ["French Quarter", "Auroville", "Beach Walks"]
  },
  {
    id: 6,
    name: "Kodaikanal",
    description: "Misty mountains, serene lakes and beautiful pine forests.",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d", // Kodaikanal
    duration: "2-3 Days",
    highlights: ["Kodai Lake", "Pillar Rocks", "Pine Forests"]
  }
];

export const packagesData = [
  {
    id: 1,
    name: "Kerala Complete",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    duration: "6 Days / 5 Nights",
    price: "₹28,999",
    pricePerPerson: "per person",
    destinations: ["Munnar", "Thekkady", "Alleppey", "Kochi"],
    inclusions: [
      "Private AC Cab",
      "5 Nights Hotel Stay",
      "Daily Breakfast & Dinner",
      "Houseboat Experience",
      "All Sightseeing",
      "Toll & Parking"
    ],
    popular: true
  },
  {
    id: 2,
    name: "Karnataka Heritage",
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    duration: "5 Days / 4 Nights",
    price: "₹24,999",
    pricePerPerson: "per person",
    destinations: ["Bangalore", "Mysore", "Coorg", "Hassan"],
    inclusions: [
      "Private AC Cab",
      "4 Nights Hotel Stay",
      "Daily Breakfast & Dinner",
      "Palace Entry Tickets",
      "Coffee Plantation Tour",
      "All Transfers"
    ],
    popular: false
  },
  {
    id: 3,
    name: "Tamil Nadu Temple Trail",
    image: "https://images.unsplash.com/photo-1544256221-dbb153b81eb7",
    duration: "7 Days / 6 Nights",
    price: "₹32,999",
    pricePerPerson: "per person",
    destinations: ["Chennai", "Mahabalipuram", "Pondicherry", "Thanjavur", "Madurai"],
    inclusions: [
      "Private AC Cab",
      "6 Nights Hotel Stay",
      "All Meals Included",
      "Temple Guide Services",
      "Beach Resort Stay",
      "Cultural Programs"
    ],
    popular: false
  }
];

export const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Absolutely phenomenal experience! The driver was professional, hotels were top-notch, and every detail was perfectly planned. Our Kerala trip became a lifetime memory.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a", // placeholder avatar
    tripDate: "December 2024"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Mycititours made our family vacation stress-free and magical. From pickup to drop-off, everything was seamless. Highly recommended!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2", // placeholder avatar
    tripDate: "November 2024"
  },
  {
    id: 3,
    name: "Arjun & Sneha",
    location: "Delhi",
    rating: 5,
    text: "Perfect honeymoon package! The romantic touches, beautiful locations, and comfortable journey made our trip unforgettable. Thank you Mycititours!",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6", // placeholder avatar
    tripDate: "October 2024"
  }
];
