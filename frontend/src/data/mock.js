export const tourCategories = [
  {
    id: "sightseeing",
    category: "SIGHTSEEING PACKAGES",
    packages: [
      {
        id: 'MysoreOneDayCityTourPrivateVehicleFourPersonMaxbySedan',
        name: 'Mysore One Day City Tour Private Vehicle (Four Person Max by Sedan)',
        duration: '1 Day Tour',
        price: '₹625',
        image: 'https://images.unsplash.com/photo-1600100397608-f010f41ab3a4?q=80&w=2070',
        inclusions: [
          'Entrance fee for the monuments visits are not included.',
          'Guide services are not included.',
          'Any personal expenses (drinks, tips, etc) are excluded.'
        ],
        itinerary: [
          { title: 'One Day Mysore City Tour', desc: 'Visit the beautiful Mysore Palace, Chamundi Hills, St. Philomenas Church, and the Mysore Zoo. Enjoy a comfortable private journey with your family.' }
        ]
      },
      {
        id: 'MysoreOneDayCityTourGroupTour',
        name: 'Mysore One Day City Tour Group Tour',
        duration: '1 Day Tour',
        price: '₹400',
        image: 'https://images.unsplash.com/photo-1572508588884-6058e5e39669?q=80&w=2070',
        inclusions: [
          'Entrance fee for the monuments visits are not included.',
          'Guide services are not included.',
          'Any personal expenses are excluded.'
        ],
        itinerary: [
          { title: 'Group Sightseeing in Mysore', desc: 'Join our economical group tour covering all major attractions in Mysore including the Palace, Zoo, and Brindavan Gardens.' }
        ]
      },
      {
        id: 'MysoreCoorgTourPackagePrivateCabSedan',
        name: 'Mysore Coorg Tour Package (Private Cab Sedan)',
        duration: 'Multi-Day',
        price: '₹10,000',
        image: 'https://images.unsplash.com/photo-1596522354195-2eb4d5bd1fc7?q=80&w=2070',
        inclusions: [
          'Private Sedan vehicle for the entire itinerary.',
          'Toll and parking charges.',
          'Driver allowance.',
          'Accommodation is excluded, please verify with support.'
        ],
        itinerary: [
          { title: 'Day 1: Mysore Arrival', desc: 'Arrive in Mysore. Transfer to hotel. Afternoon visit to Mysore Palace and Brindavan Gardens.' },
          { title: 'Day 2: Coorg Transfer', desc: 'Morning drive to Coorg. Enroute visit Dubare Elephant Camp. Check-in to Coorg hotel.' },
          { title: 'Day 3: Coorg Sightseeing', desc: 'Visit Abbey Falls, Raja Seat, and Omkareshwara Temple.' }
        ]
      },
      {
        id: 'MysoreOotyCoonoorSiteseeing',
        name: 'Mysore, Ooty & Coonoor Sightseeing',
        duration: 'Multi-Day',
        price: '₹12,000',
        image: 'https://images.unsplash.com/photo-1589136777351-fdc9c6f2a281?q=80&w=2070',
        inclusions: [
          'Private Cab for the entire trip.',
          'Toll and parking charges included.',
          'Sightseeing to all major spots in Ooty and Coonoor.'
        ],
        itinerary: [
          { title: 'Day 1: Mysore to Ooty', desc: 'Drive from Mysore to Ooty. Enroute visit Bandipur National Park (Safari optional). Check-in to Ooty hotel.' },
          { title: 'Day 2: Ooty Local Sightseeing', desc: 'Visit Botanical Garden, Ooty Lake, and Doddabetta Peak.' },
          { title: 'Day 3: Coonoor Excursion', desc: 'Day trip to Coonoor. Visit Sim Park, Dolphin Nose, and Lambs Rock. Return to base.' }
        ]
      }
    ]
  },
  {
    id: "domestic",
    category: "DOMESTIC PACKAGES",
    packages: [
      { id: "d1", name: "Mysore Coorg Tour Package", duration: "Private Cab Sedan", 
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
      },
      { id: "d2", name: "Mysore One Day City Tour", duration: "Private Vehicle by Sedan", 
        image: "https://images.unsplash.com/photo-1588661704285-d7fb9d6f35ad",
      },
      { id: "d3", name: "Mysore Ooty Coonoor Siteseeing", duration: "Multi-Day Package", 
        image: "https://images.unsplash.com/photo-1544256221-dbb153b81eb7",
      }
    ]
  },
  {
    id: "international",
    category: "INTERNATIONAL PACKAGES",
    packages: [
      { id: "i1", name: "Explore International Destinations", duration: "Coming Soon", 
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      }
    ]
  }
];

export const taxiRoutes = [
  { id: "t1", from: "Bangalore Airport", to: "Mysore", vehicle: "Sedan / SUV / Innova", type: "One Way / Round Trip" },
  { id: "t2", from: "Mysore", to: "Bangalore Airport", vehicle: "Sedan / SUV / Innova", type: "One Way / Round Trip" },
  { id: "t3", from: "Mangalore", to: "Mysore / Coorg", vehicle: "Outstation Tour Package", type: "Multiple Days" },
  { id: "t4", from: "Mysore", to: "Ooty / Wayanad", vehicle: "Outstation Tour Package", type: "Multiple Days" },
  { id: "t5", from: "Bangalore City", to: "Mysore", vehicle: "Sedan / SUV / Innova", type: "One Way / Round Trip" },
  { id: "t6", from: "Mysore City", to: "Local Sightseeing", vehicle: "Sedan / SUV / Mini Bus", type: "8Hr / 80Km" },
];

export const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    text: "Absolutely phenomenal experience! The driver was professional, cars were spotless, and the pricing was clear with no hidden charges.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    tripDate: "December 2024"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Mycititours made our group booking from Bangalore Airport to Coorg stress-free. From pickup to drop-off, everything was seamless. Highly recommended!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    tripDate: "November 2024"
  },
  {
    id: 3,
    name: "Arjun & Sneha",
    location: "Delhi",
    rating: 5,
    text: "Perfect outstation package! The driver was knowledgeable about all the local routes which made our journey smooth. Thank you Mycititours!",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6",
    tripDate: "October 2024"
  }
];
