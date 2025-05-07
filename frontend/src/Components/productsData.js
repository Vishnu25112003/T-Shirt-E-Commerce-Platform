const products = [
  {
    id: 1,
    name: "Marvel theme T-shirt",
    image: "/src/assets/marvel/1.avif",
    price: 6000,
    category: "MARVEL",
    color: "Black",
    size: ["S", "M", "L", "XL"]
  },

  {
    id: 2,
    name: "DC logo T-shirt",
    image: "/src/assets/dc/1.avif",
    price: 5000,
    category: "DC",
    color: "Blue",
    size: ["XS", "M", "L"]
  },

  {
    id: 3,
    name: "Jujutsu Kaisen T-shirt",
    image: "/src/assets/anime/1.jpg",
    price: 6000,
    category: "ANIME",
    color: "Gray",
    size: ["S", "M", "XXL"]
  },

  {
    id: 4,
    name: "Call Of Duty MW2 T-shirt",
    image: "/src/assets/gaming/1.jpg",
    price: 429,
    category: "GAMING",
    color: "Gray",
    size: ["M", "L", "XL"]
  },

  {
    id: 5,
    name: "Marvel Venom T-shirt",
    image: "/src/assets/marvel/2.webp",
    price: 9000,
    category: "MARVEL",
    color: "Black",
    size: ["XS", "S", "M", "L"]
  },

  {
    id: 6,
    name: "PUBG T-shirt",
    image: "/src/assets/gaming/2.png",
    price: 8000,
    category: "GAMING",
    color: "Black",
    size: ["M", "L", "XXL"]
  },

  {
    id: 7,
    name: "Avengers T-Shirt",
    image: "/src/assets/marvel/3.webp",
    price: 7000,
    category: "MARVEL",
    color: "Black",
    size: ["S", "M", "L", "XL", "XXL"]
  },

  {
    id: 8,
    name: "PUBG T-Shirt white",
    image: "/src/assets/gaming/3.webp",
    price: 4000,
    category: "GAMING",
    color: "Black",
    size: ["XS", "M", "L"]
  },

  {
    id: 9,
    name: "JUJUTSU T-Shirt",
    image: "/src/assets/anime/2.webp",
    price: 2000,
    category: "ANIME",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },

  {
    id: 10,
    name: "Marvel Comics T-Shirt",
    image: "/src/assets/marvel/4.jpg",
    price: 2000,
    category: "MARVEL",
    color: "Black",
    size: ["XS", "S", "L", "XL"]
  },

  {
    id: 11,
    name: "Naruto T-Shirt",
    image: "/src/assets/anime/3.jpg",
    price: 3000,
    category: "ANIME",
    color: "Black",
    size: ["S", "M", "XL"]
  },

  {
    id: 12,
    name: "DC Logo T-Shirt",
    image: "/src/assets/dc/2.webp",
    price: 3500,
    category: "DC",
    color: "Black",
    size: ["M", "L", "XXL"]
  },

  {
    id: 13,
    name: "Avengers 4-in-1 T-Shirt",
    image: "/src/assets/marvel/5.webp",
    price: 4500,
    category: "MARVEL",
    color: "Red",
    size: ["XS", "S", "M", "L"]
  },

  {
    id: 14,
    name: "The Last Of Us T-Shirt",
    image: "/src/assets/gaming/4.webp",
    price: 5000,
    category: "GAMING",
    color: "Black",
    size: ["M", "L", "XL"]
  },

  {
    id: 15,
    name: "DC Supreme T-Shirt",
    image: "/src/assets/dc/3.jpg",
    price: 5500,
    category: "DC",
    color: "Blue",
    size: ["S", "M", "L"]
  },

  {
    id: 16,
    name: "Marvel delux T-Shirt",
    image: "/src/assets/marvel/6.jpg",
    price: 6000,
    category: "MARVEL",
    color: "Black",
    size: ["S", "M", "XL"]
  },

  {
    id: 17,
    name: "Anime T-Shirt",
    image: "/src/assets/anime/4.jpg",
    price: 6500,
    category: "ANIME",
    color: "Orange",
    size: ["M", "L", "XXL"]
  },

  {
    id: 18,
    name: "Spier-Man T-Shirt",
    image: "/src/assets/marvel/7.webp",
    price: 7000,
    category: "MARVEL",
    color: "Blue",
    size: ["S", "M", "L", "XL"]
  },

  {
    id: 19,
    name: "Call Of Duty MW-2  T-Shirt",
    image: "/src/assets/gaming/5.jpg",
    price: 7500,
    category: "GAMING",
    color: "Black",
    size: ["XS", "S", "M", "L"]
  },

  {
    id: 20,
    name: "Batman Logo T-Shirt",
    image: "/src/assets/dc/4.avif",
    price: 8000,
    category: "DC",
    color: "Red",
    size: ["M", "L", "XL"]
  },

  {
    id: 21,
    name: "Anime T-Shirt",
    image: "/src/assets/anime/5.webp",
    price: 8500,
    category: "ANIME",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },

  {
    id: 22,
    name: "Marvel poster T-Shirt",
    image: "/src/assets/marvel/8.jpg",
    price: 9000,
    category: "MARVEL",
    color: "Black",
    size: ["XS", "S", "L", "XL"]
  },
  {
    id: 23,
    name: "Harley Quinn T-Shirt",
    image: "/src/assets/dc/5.jpg",
    price: 8500,
    category: "DC",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 24,
    name: "Anime T-Shirt",
    image: "/src/assets/anime/8.webp",
    price: 8500,
    category: "ANIME",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 25,
    name: "GTA 5 T-Shirt",
    image: "/src/assets/gaming/6.jpg",
    price: 8500,
    category: "GAMING",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 26,
    name: "JUJUTSU T-Shirt",
    image: "/src/assets/anime/6.webp",
    price: 8500,
    category: "ANIME",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 27,
    name: "Anime T-Shirt (full)",
    image: "/src/assets/anime/7.webp",
    price: 8500,
    category: "ANIME",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 28,
    name: "Flash T-Shirt",
    image: "/src/assets/dc/6.jpg",
    price: 8500,
    category: "DC",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 29,
    name: "Marvel T-Shirt Limited Edition",
    image: "/src/assets/marvel/9.avif",
    price: 8500,
    category: "MARVEL",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 30,
    name: "NFS World T-Shirt",
    image: "/src/assets/gaming/7.png",
    price: 8500,
    category: "GAMING",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 31,
    name: "One Piece T-Shirt",
    image: "/src/assets/anime/9.webp",
    price: 8500,
    category: "ANIME",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 32,
    name: "Flash Logo T-Shirt",
    image: "/src/assets/dc/7.webp",
    price: 8500,
    category: "DC",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 33,
    name: "Spuerman T-Shirt",
    image: "/src/assets/dc/8.webp",
    price: 8500,
    category: "DC",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 34,
    name: "NFS Most Wanted T-Shirt",
    image: "/src/assets/gaming/8.jpg",
    price: 8500,
    category: "GAMING",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 35,
    name: "Demon Slayer T-Shirt",
    image: "/src/assets/anime/10.avif",
    price: 8500,
    category: "ANIME",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 36,
    name: "Spuerman T-Shirt-Blue",
    image: "/src/assets/dc/9.webp",
    price: 8500,
    category: "DC",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 37,
    name: "Microsoft Flight Simulator 2020 T-Shirt",
    image: "/src/assets/gaming/9.jpg",
    price: 8500,
    category: "GAMING",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 38,
    name: "Superman T-Shirt-Black",
    image: "/src/assets/dc/10.webp",
    price: 8500,
    category: "DC",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 39,
    name: "Demon Slayer T-Shirt Limited Edition",
    image: "/src/assets/anime/11.jpg",
    price: 8500,
    category: "ANIME",
    color: "Black",
    size: ["S", "XL", "XXL"]
  },
  {
    id: 40,
    name: "Counter Strike Source T-Shirt",
    image: "/src/assets/gaming/10.jpg",
    price: 8500,
    category: "GAMING",
    color: "Black",
    size: ["S", "XL", "XXL"]
  }
];

export default products;