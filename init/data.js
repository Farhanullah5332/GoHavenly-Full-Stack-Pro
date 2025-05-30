const sampleData = [
  {
    title: "Sunset Beach House",
    description:
      "Beachfront property with panoramic ocean views and direct beach access. Perfect for romantic getaways.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-826110135482401484/original/c6c03386-dee3-4b48-a5dc-77fa1c4fa7c9.jpeg?im_w=1200&im_format=avif",
      filename: "sunset_beach.jpg",
    },
    category: "Beach",
    price: 299,
    location: "Malibu",
    country: "United States",
    reviews: [],
  },
  {
    title: "Parisian Luxury Loft",
    description:
      "Stylish apartment in heart of Paris with Eiffel Tower views. Walkable to major attractions.",
    image: {
      url: "https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blte49c0e286412a148/614417c7ee502d0e1337c6b3/UK_Paris_FR_Header.jpg?width=960&quality=70&auto=webp",
      filename: "paris_loft.jpg",
    },
    category: "Iconic Cities",
    price: 450,
    location: "Paris",
    country: "France",
    reviews: [],
  },
  {
    title: "Scottish Highland Castle",
    description:
      "15th-century castle with modern amenities. Features original stonework and 500-acre private estate.",
    image: {
      url: "https://cms-b-assets.familysearch.org/dims4/default/d3398ac/2147483647/strip/true/crop/800x500+0+0/resize/1240x775!/quality/90/?url=https%3A%2F%2Ffamilysearch-brightspot.s3.amazonaws.com%2Fa6%2F82%2F44a73aca80ae4349cc34e9dbb82d%2Fscotland-castle.jpg",
      filename: "scottish_castle.jpg",
    },
    category: "Castles",
    price: 899,
    location: "Scottish Highlands",
    country: "UK",
    reviews: [],
  },
  {
    title: "Alaskan Wilderness Cabin",
    description:
      "Remote cabin with northern lights viewing opportunities. Complete with modern survival equipment.",
    image: {
      url: "https://www.travelalaska.com/sites/default/files/inline-images/Cabin.jpg",
      filename: "alaska_cabin.jpg",
    },
    category: "Arctic",
    price: 199,
    location: "Fairbanks",
    country: "United States",
    reviews: [],
  },
  {
    title: "Tuscany Farm Experience",
    description:
      "Working organic farm with vineyard tours and cooking classes. Enjoy fresh produce daily.",
    image: {
      url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/e3/8f.jpg",
      filename: "tuscany_farm.jpg",
    },
    category: "Farms",
    price: 150,
    location: "Tuscany",
    country: "Italy",
    reviews: [],
  },
  {
    title: "Mountain View Treehouse",
    description:
      "Secluded eco-friendly treehouse nestled in redwood forest. Perfect for nature lovers and adventurers.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-46658603/original/4c7b29b6-09ff-4b29-96b0-1863e27b3307.jpeg?im_w=720&im_format=avif&im_origin=fuzzy",
      filename: "mountain_treehouse.jpg",
    },
    category: "Camping",
    price: 179,
    location: "Colorado",
    country: "United States",
    reviews: [],
  },
  {
    title: "Tokyo Studio Apartment",
    description:
      "Compact modern studio in Shibuya district. Perfect base for exploring Tokyo's vibrant city life.",
    image: {
      url: "https://www.interwhao.co.jp/english/wordpress/wp-content/uploads/2015/12/IMG_0899-640x480.jpg",
      filename: "tokyo_studio.jpg",
    },
    category: "Rooms",
    price: 89,
    location: "Tokyo",
    country: "Japan",
    reviews: [],
  },
  {
    title: "Northern Lights Glass Cabin",
    description:
      "Full-glass ceiling cabin offering uninterrupted views of Aurora Borealis. Heated floors and sauna included.",
    image: {
      url: "https://pescart.com/wp-content/uploads/2018/12/DSC07519_B.jpg",
      filename: "northern_lights_cabin.jpg",
    },
    category: "Arctic",
    price: 399,
    location: "Tromsø",
    country: "Norway",
    reviews: [],
  },
  {
    title: "Sahara Desert Camp",
    description:
      "Luxury Bedouin-style tents with camel trekking and stargazing experiences. Complete with private baths.",
    image: {
      url: "https://www.dwohotels.com/assets/themes/www.dwohotels.com/img/media/1733907414_Foto%20GALERIA%20%20%2885%29.tmedium.webp",
      filename: "sahara_camp.jpg",
    },
    category: "Camping",
    price: 249,
    location: "Merzouga",
    country: "Morocco",
    reviews: [],
  },
  {
    title: "Amsterdam Canal House",
    description:
      "Historic 17th-century house with canal views. Features original beams and modern Dutch design.",
    image: {
      url: "https://img.probuilder.com/files/base/ebm/probuilder/image/2024/10/66fdc630dbd68e0b084ab4a6-amsterdamcanalhouse.png?auto=format,compress&fit=fill&fill=blur&q=45&w=640&width=640",
      filename: "amsterdam_house.jpg",
    },
    category: "Iconic Cities",
    price: 350,
    location: "Amsterdam",
    country: "Netherlands",
    reviews: [],
  },
  {
    title: "Swiss Alpine Chalet",
    description:
      "Charming wooden chalet with mountain views. Direct access to hiking trails and ski slopes.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQx9d8JjBPLyXYxZBjDzwWnElm-xyo9qC9w&s",
      filename: "swiss_chalet.jpg",
    },
    category: "Trending",
    price: 425,
    location: "Zermatt",
    country: "Switzerland",
    reviews: [],
  },
  {
    title: "Bali Surf Villa",
    description:
      "Beachfront villa with private pool and surfboard rental. Walking distance to famous surf breaks.",
    image: {
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MzkzNDk0NQ%3D%3D/original/52d91132-9a0a-4319-a57a-b06d4af8eb7d.jpeg?im_w=720&im_format=avif",
      filename: "bali_villa.jpg",
    },
    category: "Beach",
    price: 199,
    location: "Canggu",
    country: "Indonesia",
    reviews: [],
  },
  {
    title: "New York Penthouse",
    description:
      "Luxury penthouse in Manhattan with rooftop terrace and skyline views. Fully staffed service.",
    image: {
      url: "https://assets.savills.com/properties/GBSNYOLAI222056/LAI222056_07_l_lis.jpg",
      filename: "ny_penthouse.jpg",
    },
    category: "Rooms",
    price: 899,
    location: "New York City",
    country: "United States",
    reviews: [],
  },
  {
    title: "Icelandic Geothermal Cabin",
    description:
      "Eco-cabin powered by geothermal energy. Features natural hot spring pool and volcano views.",
    image: {
      url: "https://icelandtrippers.com/wp-content/uploads/2023/03/best-things-to-do-in-reykjanes-peninsula-seltun.jpg",
      filename: "iceland_cabin.jpg",
    },
    category: "Arctic",
    price: 299,
    location: "Reykjanes Peninsula",
    country: "Iceland",
    reviews: [],
  },
  {
    title: "Canadian Lake Cabin",
    description:
      "Rustic log cabin on private lake. Includes canoe and fishing gear. Bear-proof storage included.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMIxQaNq5m7uyYd_KgYlgqFH6BrxD-eJ8n2A&s",
      filename: "canada_cabin.jpg",
    },
    category: "Camping",
    price: 149,
    location: "Algonquin Park",
    country: "Canada",
    reviews: [],
  },
  {
    title: "Medieval Tower in Tuscany",
    description:
      "12th-century stone tower converted into modern living space. Features panoramic countryside views.",
    image: {
      url: "https://whc.unesco.org/uploads/thumbs/site_0550_0001-750-750-20151105110234.jpg",
      filename: "tuscany_tower.jpg",
    },
    category: "Castles",
    price: 650,
    location: "San Gimignano",
    country: "Italy",
    reviews: [],
  },
  {
    title: "Kyoto Traditional Machiya",
    description:
      "Authentic wooden townhouse with Japanese garden and tea ceremony space. Near historic temples.",
    image: {
      url: "https://www.machiya-kyoto.net/wpdata/wp-content/uploads/2020/03/machiya-slide-1.jpg",
      filename: "kyoto_machiya.jpg",
    },
    category: "Iconic Cities",
    price: 220,
    location: "Kyoto",
    country: "Japan",
    reviews: [],
  },

  {
    title: "Safari Glamping Tent",
    description:
      "Luxury tent in Serengeti with wildlife watering hole views. Includes guided safari tours.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sm6nwMsgwFptE_Z13k783GzAgLTsv2LdOA&s",
      filename: "safari_glamping.jpg",
    },
    category: "Camping",
    price: 499,
    location: "Serengeti",
    country: "Tanzania",
    reviews: [],
  },
  {
    title: "Hunza Valley Mountain Retreat",
    description:
      "Traditional stone house with panoramic views of Rakaposhi Peak. Organic apricot orchard included.",
    image: {
      url: "https://epicexpeditions.co/wp-content/uploads/2022/09/discover_the_hunza_valley6.jpg",
      filename: "hunza_retreat.jpg",
    },
    category: "Iconic Cities",
    price: 120,
    location: "Hunza",
    country: "Pakistan",
    reviews: [],
  },
  {
    title: "Skardu Adventure Camp",
    description:
      "Riverside camping site with access to Shangrila Lake and K2 base camp trek routes.",
    image: {
      url: "https://adventurertreks.pk/wp-content/uploads/2024/07/Skardu.webp",
      filename: "skardu_camp.jpg",
    },
    category: "Camping",
    price: 75,
    location: "Skardu",
    country: "Pakistan",
    reviews: [],
  },
  {
    title: "Lahore Heritage Haveli",
    description:
      "Restored Mughal-era mansion in Walled City. Features hand-carved woodwork and courtyard pool.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe60he6uOr7I-mAAqpQJPS83dcMQBRD-MxwA&s",
      filename: "lahore_haveli.jpg",
    },
    category: "Castles",
    price: 200,
    location: "Lahore",
    country: "Pakistan",
    reviews: [],
  },
  {
    title: "Karachi Beachfront Villa",
    description:
      "Modern 3-bedroom villa steps from French Beach. Private access to Arabian Sea.",
    image: {
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/528155698.jpg?k=5cf27c2a88a39c9f63428b2449a28123338a6b6b75e2e918078dc8fc6e165bcf&o=&hp=1",
      filename: "karachi_villa.jpg",
    },
    category: "Beach",
    price: 150,
    location: "Karachi",
    country: "Pakistan",
    reviews: [],
  },
  {
    title: "Thar Desert Luxury Tents",
    description:
      "Climate-controlled Rajasthani-style tents with camel safari experiences. Cultural performances nightly.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgR_okWIxvw-PRa3KW4xu7__CPaviEg_MxQ&s",
      filename: "thar_tents.jpg",
    },
    category: "Camping",
    price: 90,
    location: "Tharparkar",
    country: "Pakistan",
    reviews: [],
  },
  {
    title: "Swat Valley Wooden Cottage",
    description:
      "Hand-built pine cottage in Alpine meadows. Includes guided Buddhist heritage tours.",
    image: {
      url: "https://www.ajktours.com/wp-content/uploads/2023/12/walnut-heights-kalam.jpg",
      filename: "swat_cottage.jpg",
    },
    category: "Farms",
    price: 80,
    location: "Swat",
    country: "Pakistan",
    reviews: [],
  },
  {
    title: "Fairy Meadows Cabin",
    description:
      "Nanga Parbat base camp cabin with stargazing deck. Oxygen tanks provided.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxyYIAWg_cLIi413zFHj34cx7qo0kOvl79g&s",
      filename: "fairy_meadows.jpg",
    },
    category: "Arctic",
    price: 110,
    location: "Diamer",
    country: "Pakistan",
    reviews: [],
  },
  {
    title: "Islamabad Modern Studio",
    description:
      "Minimalist studio in Blue Area with Margalla Hills views. Smart home technology included.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXkML6mizx9YGjYM1vK9Caq5gpSawrIc82g&s",
      filename: "isb_studio.jpg",
    },
    category: "Rooms",
    price: 65,
    location: "Islamabad",
    country: "Pakistan",
    reviews: [],
  },
  {
    title: "Kalash Valley Cultural Stay",
    description:
      "Traditional Kalash home stay with festival access. Includes guided valley treks.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEnYDZ7uT8A8RzOVtMkYM9xwKO5IIZL4DWQ&s",
      filename: "kalash_home.jpg",
    },
    category: "Trending",
    price: 45,
    location: "Chitral",
    country: "Pakistan",
    reviews: [],
  },
  {
    title: "Mohenjo-Daro Archaeo Stay",
    description:
      "Unique accommodation near ancient ruins. Replica Indus Valley Civilization dwellings.",
    image: {
      url: "https://eagleeye.com.pk/pttl/wp-content/uploads/2017/02/Remains-tower-Mohenjo-daro-province-Pakistan-Sindh.jpg",
      filename: "mohenjodaro_stay.jpg",
    },
    category: "Iconic Cities",
    price: 85,
    location: "Larkana",
    country: "Pakistan",
    reviews: [],
  },
];
module.exports = { data: sampleData };
