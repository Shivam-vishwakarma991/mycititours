export const tourCategories = [
  {
    id: 'sightseeing',
    category: 'OUR PACKAGES',
    packages: [
      {
        id: 'MysoreOneDayCityTourPrivateVehicleFourPersonMaxbySedan',
        name: 'Mysore One Day City Tour Private Vehicle (Max 4 Persons by Sedan)',
        duration: '1 Day Tour',
        price: '₹625',
        image: 'https://www.mycititours.com/admin/assets/img/holiday/main/brands_live_1664985570038.jpg',
        inclusions: [
          'Full-day Mysore Local Sightseeing Tour',
          'Tour by Private Cab (not shared)',
          'Pickup & Drop: Mysore Hotel / Home',
          'Duration: 9 to 11 hours',
          'Professional Driver'
        ],
        itinerary: [
          {
            title: 'Mysore City Highlights',
            desc: 'Visit Chamundeshwari Temple, Mysore Wax Museum, Mysore Maharaja Palace, St. Philomena Church, Mysore Zoological Park, and Sri Ranganathaswamy Temple.'
          }
        ]
      },
      {
        id: 'MysoreOneDayCityTourGroupTour',
        name: 'Mysore One Day City Tour Group Tour',
        duration: '1 Day Tour',
        price: '₹400',
        image: 'https://www.mycititours.com/admin/assets/img/holiday/main/Mysore_-ooty-_Coonoor_Siteseeing.png',
        inclusions: [
          'Economical Group Sightseeing',
          'Shared AC Bus/Van',
          'Fixed Itinerary',
          'Covers all major Mysore landmarks',
          'Experienced Guide/Driver'
        ],
        itinerary: [
          {
            title: 'Group City Tour',
            desc: 'Join our economical group tour covering all major attractions in Mysore including the Palace, Zoo, and Brindavan Gardens. Perfect for solo travelers and small groups.'
          }
        ]
      },
      {
        id: 'MysoreCoorgTourPackagePrivateCabSedan',
        name: 'Mysore Coorg Tour Package (Private Cab Sedan)',
        duration: '3 Days',
        price: '₹10,000',
        image: 'https://www.mycititours.com/admin/assets/img/holiday/main/2.png',
        inclusions: [
          'Private Sedan for 3 Days',
          'Inter-city Transfers',
          'Sightseeing in Mysore & Coorg',
          'Toll & Parking Charges',
          'Driver Allowance'
        ],
        itinerary: [
          {
            title: 'Day 1: Mysore Sightseeing',
            desc: 'Pick up at Mysore. Visit Chamundi Hills, St. Philomena’s Church, Mysore Palace, Zoo, Tippu’s Palace, and Brindavan Gardens.'
          },
          {
            title: 'Day 2: Coorg Transfer & Local',
            desc: 'Proceed to Coorg. Visit Cauvery Nisarghadhama, Golden Temple (Bylakuppe), Raja’s Seat, Omkareswara Temple, and Abbey Falls.'
          },
          {
            title: 'Day 3: Talacauvery & Return',
            desc: 'Visit Bhagamandala and Talacauvery. Return to Mysore in the afternoon. Evening drop at Bus Station/Railway Station.'
          }
        ]
      },
      {
        id: 'MysoreOotyCoonoorSiteseeing',
        name: 'Mysore Ooty Coonoor Sightseeing',
        duration: '3 Days',
        price: '₹12,000',
        image: 'https://www.mycititours.com/admin/assets/img/holiday/main/Mysore_-ooty-_Coonoor_Siteseeing.png',
        inclusions: [
          'Private Cab for 3 Days',
          'Visit to Bandipur Forest',
          'Ooty & Coonoor Sightseeing',
          'All State Permits & Tolls',
          'Dedicated Driver'
        ],
        itinerary: [
          {
            title: 'Day 1: Mysore Local & Heritage',
            desc: 'Visit Chamundi Hill, Nandi, Mysore Palace, Zoo, St. Philomena’s Church, and Brindavan Gardens.'
          },
          {
            title: 'Day 2: Ooty Forest Drive & Lake',
            desc: 'Drive through Bandipur and Madhumalai forests. Visit Ooty Lake for boating and local botanical gardens.'
          },
          {
            title: 'Day 3: Coonoor Tea Estates',
            desc: 'Proceed to Coonoor. Visit tea estates and viewpoints like Doddabetta. Return journey to Mysore.'
          }
        ]
      }
    ]
  },
  // {
  //   id: "domestic",
  //   category: "DOMESTIC PACKAGES",
  //   packages: [
  //     { id: "d1", name: "Mysore Coorg Tour Package", duration: "Private Cab Sedan", 
  //       image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
  //     },
  //     { id: "d2", name: "Mysore One Day City Tour", duration: "Private Vehicle by Sedan", 
  //       image: "https://images.unsplash.com/photo-1588661704285-d7fb9d6f35ad",
  //     },
  //     { id: "d3", name: "Mysore Ooty Coonoor Siteseeing", duration: "Multi-Day Package", 
  //       image: "https://images.unsplash.com/photo-1544256221-dbb153b81eb7",
  //     }
  //   ]
  // },
  // {
  //   id: "international",
  //   category: "INTERNATIONAL PACKAGES",
  //   packages: [
  //     { id: "i1", name: "Explore International Destinations", duration: "Coming Soon", 
  //       image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  //     }
  //   ]
  // }
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
