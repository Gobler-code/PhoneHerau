// src/data/phones.js

export const phonesData = {
  "50k-70k": {
    topPick: {
      id: "oneplus-nord-ce-3",
      name: "OnePlus Nord CE 3",
      brand: "OnePlus",
      price: 54999,
      image: "/images/oneplus-nord-ce-3.jpg",
      whySmart: [
        "Snapdragon 782G processor - excellent performance for gaming and multitasking",
        "120Hz AMOLED display - super smooth scrolling experience",
        "80W SuperVOOC fast charging - full charge in 30 minutes",
        "Clean OxygenOS - near-stock Android experience with useful features",
        "5000mAh battery - easily lasts a full day"
      ],
      tradeOffs: "Camera is good but not exceptional in low light",
      bestFor: "Power users who want flagship-level performance and fast charging",
      specs: {
        processor: "Snapdragon 782G",
        ram: "8GB / 12GB",
        storage: "128GB / 256GB",
        display: "6.7\" AMOLED, 120Hz",
        camera: "50MP main + 8MP ultra-wide + 2MP macro",
        battery: "5000mAh, 80W charging",
        os: "Android 13, OxygenOS 13"
      },
      benchmarkScore: 520000,
      releaseDate: "2023-04",
      lastUpdated: "2025-01-04"
    },

    featured: [
      {
        id: "samsung-a54",
        name: "Samsung Galaxy A54 5G",
        brand: "Samsung",
        price: 59999,
        image: "/images/samsung-a54.jpg",
        whySmart: [
          "Exynos 1380 - solid performance for daily tasks",
          "4 years of OS updates + 5 years security - longest support",
          "50MP OIS camera - stable photos and videos",
          "Premium design with glass back"
        ],
        bestFor: "Those who want long-term software support and Samsung ecosystem",
        specs: {
          processor: "Exynos 1380",
          ram: "8GB",
          storage: "128GB / 256GB",
          display: "6.4\" AMOLED, 120Hz",
          camera: "50MP OIS + 12MP ultra-wide + 5MP macro",
          battery: "5000mAh, 25W charging",
          os: "Android 13, One UI 5"
        },
        releaseDate: "2023-03",
        lastUpdated: "2025-01-04"
      },
      {
        id: "nothing-phone-2a",
        name: "Nothing Phone (2a)",
        brand: "Nothing",
        price: 52999,
        image: "/images/nothing-2a.jpg",
        whySmart: [
          "Unique Glyph interface - customizable LED notifications",
          "Dimensity 7200 Pro - efficient and powerful",
          "Clean Nothing OS - bloat-free Android experience",
          "Premium design at mid-range price"
        ],
        bestFor: "Those who want something unique and different",
        specs: {
          processor: "Dimensity 7200 Pro",
          ram: "8GB / 12GB",
          storage: "128GB / 256GB",
          display: "6.7\" AMOLED, 120Hz",
          camera: "50MP main + 50MP ultra-wide",
          battery: "5000mAh, 45W charging",
          os: "Android 13, Nothing OS 2.0"
        },
        releaseDate: "2024-03",
        lastUpdated: "2025-01-04"
      },
      {
        id: "realme-gt-neo-3",
        name: "Realme GT Neo 3",
        brand: "Realme",
        price: 54999,
        image: "/images/realme-gt-neo-3.jpg",
        whySmart: [
          "Dimensity 8100 - flagship-level gaming performance",
          "150W fast charging - 0 to 50% in just 5 minutes",
          "120Hz AMOLED display",
          "Best performance-per-rupee in this range"
        ],
        bestFor: "Gamers and heavy users who need extreme fast charging",
        specs: {
          processor: "Dimensity 8100",
          ram: "8GB / 12GB",
          storage: "128GB / 256GB",
          display: "6.7\" AMOLED, 120Hz",
          camera: "50MP main + 8MP ultra-wide + 2MP macro",
          battery: "4500mAh, 150W charging",
          os: "Android 12, Realme UI 3.0"
        },
        releaseDate: "2022-05",
        lastUpdated: "2025-01-04"
      }
    ],

    hiddenGems: [
      {
        id: "oneplus-9r",
        name: "OnePlus 9R 5G",
        brand: "OnePlus",
        price: 54999,
        originalPrice: 69999,
        image: "/images/oneplus-9r.jpg",
        whySmart: [
          "Snapdragon 870 - still faster than most new mid-rangers",
          "65W fast charging - OnePlus's proven Warp Charge",
          "Clean OxygenOS experience",
          "Ex-flagship now at mid-range price",
          "Better build quality than current mid-rangers"
        ],
        tradeOffs: "Released in 2021, so only 1 year of major updates left",
        bestFor: "Those who want flagship experience without paying flagship price",
        specs: {
          processor: "Snapdragon 870",
          ram: "8GB / 12GB",
          storage: "128GB / 256GB",
          display: "6.55\" AMOLED, 120Hz",
          camera: "48MP main + 16MP ultra-wide + 5MP macro",
          battery: "4500mAh, 65W charging",
          os: "Android 11, OxygenOS 11"
        },
        originalPrice: 69999,
        releaseDate: "2021-03",
        lastUpdated: "2025-01-04"
      },
      {
        id: "pixel-6a",
        name: "Google Pixel 6a",
        brand: "Google",
        price: 56999,
        originalPrice: 73999,
        image: "/images/pixel-6a.jpg",
        whySmart: [
          "Google Tensor chip - best AI features and photo processing",
          "Best camera in this price range - Google's computational photography",
          "Pure Android experience - first to get updates",
          "5 years of security updates guaranteed",
          "Stock Android with exclusive Pixel features"
        ],
        tradeOffs: "60Hz display (not 120Hz) and no fast charging",
        bestFor: "Camera enthusiasts and stock Android lovers",
        specs: {
          processor: "Google Tensor",
          ram: "6GB",
          storage: "128GB",
          display: "6.1\" OLED, 60Hz",
          camera: "12.2MP dual pixel (best processing)",
          battery: "4410mAh, 18W charging",
          os: "Android 13, Pixel UI"
        },
        originalPrice: 73999,
        releaseDate: "2022-07",
        lastUpdated: "2025-01-04"
      }
    ]
  }
};