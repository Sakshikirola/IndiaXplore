export const states = [
  {
    id: 1,
    name: "Rajasthan",
    slug: "rajasthan",
    image: "/images/Rajasthan.jpg",
    places: [
      { id: 1, name: "Jaipur", image: "/images/jaipur.jpg", rating: 4.5, description: "The Pink City, known for palaces, forts, and vibrant markets." },
      { id: 2, name: "Udaipur", image: "/images/udaipur.jpg", rating: 4.6, description: "City of Lakes, famous for lakes, palaces, and romantic ambiance." },
      { id: 3, name: "Jaisalmer", image: "/images/jaisalmer.jpg", rating: 4.4, description: "The Golden City, known for Thar Desert and majestic forts." },
      { id: 4, name: "Jodhpur", image: "/images/jodhpur.jpg", rating: 4.3, description: "The Blue City, famous for Mehrangarh Fort and old city charm." },
      { id: 5, name: "Pushkar", image: "/images/pushkar.jpg", rating: 4.0, description: "Known for Pushkar Lake, Brahma Temple, and annual camel fair." },
      { id: 6, name: "Mount Abu", image: "/images/mount.jpg", rating: 3.8, description: "The only hill station in Rajasthan, known for Dilwara Temples and cool climate." }
    ]
  },
  {
    id: 2,
    name: "Kerala",
    slug: "kerala", 
    image: "/images/kerala.jpg",
    places: [
      { id: 1, name: "Munnar", image: "/images/munnar.jpg", rating: 4.7, description: "Famous hill station known for tea gardens and scenic landscapes." },
      { id: 2, name: "Alleppey", image: "/images/allepy.jpg", rating: 4.6, description: "Known for backwaters, houseboats, and serene canals." },
      { id: 3, name: "Kochi", image: "/images/kochi.jpg", rating: 4.3, description: "Known as the Queen of the Arabian Sea, famous for forts and cultural mix." },
      { id: 4, name: "Wayanad", image: "/images/wayanad.jpg", rating: 4.2, description: "Hills and wildlife sanctuary, perfect for trekking and nature lovers." },
      { id: 5, name: "Kumarakom", image: "/images/kumarakom.jpg", rating: 4.1, description: "Famous for backwater resorts and bird sanctuary." },
      { id: 6, name: "Varkala", image: "/images/varkala.jpg", rating: 4.0, description: "Coastal town known for cliffs, beaches, and temples." }
    ]
  },
  {
    id: 3,
    name: "Goa",
    slug: "goa",
    image: "/images/Goa.jpg",
    places: [
      { id: 1, name: "Baga Beach", image: "/images/baga.jpg", rating: 4.2, description: "Famous for nightlife, water sports, and beach shacks." },
      { id: 2, name: "Palolem Beach", image: "/images/palolem.jpg", rating: 4.5, description: "Scenic beach in South Goa, perfect for relaxing and kayaking." },
      { id: 3, name: "Fort Aguada", image: "/images/fort.jpg", rating: 4.1, description: "Historic 17th-century fort with lighthouse and sea views." },
      { id: 4, name: "Dudhsagar Waterfalls", image: "/images/dudhsagar.jpg", rating: 4.6, description: "Majestic waterfall on the Goa-Karnataka border." },
      { id: 5, name: "Old Goa", image: "/images/oldgoa.jpg", rating: 4.0, description: "Known for Portuguese churches like Basilica of Bom Jesus." },
      { id: 6, name: "Anjuna Beach", image: "/images/snjuns.jpg", rating: 4.3, description: "Famous for flea markets, parties, and rocky cliffs." }
    ]
  },
  {
    id: 4,
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    image: "/images/HP.jpg",
    places: [
      { id: 1, name: "Manali", image: "/images/manali.jpg", rating: 4.6, description: "Popular hill station for adventure sports and scenic beauty." },
      { id: 2, name: "Shimla", image: "/images/shimla.jpg", rating: 4.2, description: "The capital city, known for colonial architecture and hill walks." },
      { id: 3, name: "Dharamshala", image: "/images/dharamshala.jpg", rating: 4.4, description: "Spiritual and scenic town, home of the Dalai Lama." },
      { id: 4, name: "Kullu", image: "/images/kullu.jpg", rating: 4.0, description: "Famous for valleys, rivers, and festivals like Dussehra." },
      { id: 5, name: "Spiti Valley", image: "/images/spiti.jpg", rating: 4.7, description: "Remote cold desert valley with monasteries and high-altitude trekking." },
      { id: 6, name: "McLeod Ganj", image: "/images/mcleod.jpg", rating: 4.3, description: "Known for Tibetan culture, monasteries, and trekking." }
    ]
  },
  {
    id: 5,
    name: "Uttarakhand",
    slug: "uttarakhand",
    image: "/images/uk.jpg",
    places: [
      { id: 1, name: "Rishikesh", image: "/images/Rishikesh.jpg", rating: 4.6, description: "Yoga capital of the world, known for Ganga river rafting and spiritual retreats." },
      { id: 2, name: "Haridwar", image: "/images/Haridwar.jpg", rating: 4.2, description: "Sacred city on the banks of Ganga, famous for ghats and Ganga Aarti." },
      { id: 3, name: "Nainital", image: "/images/nainital.jpg", rating: 4.4, description: "Hill station known for Naini Lake and pleasant weather." },
      { id: 4, name: "Mussoorie", image: "/images/mussorie.jpg", rating: 4.3, description: "Queen of Hills, popular for scenic beauty and waterfalls." },
      { id: 5, name: "Jim Corbett National Park", image: "/images/jim.jpg", rating: 4.5, description: "Famous wildlife reserve for tigers and safaris." },
      { id: 6, name: "Auli", image: "/images/auli.jpg", rating: 4.6, description: "Skiing destination and scenic Himalayan views." }
    ]
  },
  {
    id: 6,
    name: "Maharashtra",
    slug: "maharashtra",
    image: "/images/maha.jpg",
    places: [
      { id: 1, name: "Mumbai", image: "/images/mumbai.jpg", rating: 4.3, description: "Financial capital of India, famous for Marine Drive, Gateway of India, and nightlife." },
      { id: 2, name: "Pune", image: "/images/pune.jpg", rating: 4.1, description: "Known for culture, historic sites, and nearby hill stations." },
      { id: 3, name: "Lonavala", image: "/images/lonavala.jpg", rating: 4.0, description: "Popular hill station known for waterfalls and trekking." },
      { id: 4, name: "Mahabaleshwar", image: "/images/mahabaleshwar.jpg", rating: 4.2, description: "Famous for strawberry farms, viewpoints, and scenic hills." },
      { id: 5, name: "Aurangabad", image: "/images/aurangabad.jpg", rating: 3.9, description: "Known for Ajanta and Ellora caves, historic monuments." },
      { id: 6, name: "Tadoba National Park", image: "/images/tadoba.jpg", rating: 4.4, description: "Wildlife sanctuary famous for tigers and biodiversity." }
    ]
  }
];
