export type CategoryGroup = "accessories" | "computers" | "smartphones";

export type FilterFlags = {
  brands?: boolean;
  colors?: boolean;

  condition?: boolean; // New, Used, Refurbished
  storage?: boolean; // Phones, laptops
  ram?: boolean; // Phones, laptops
  size?: boolean; // Screen size, laptop size

  connectivity?: boolean; // Bluetooth, Wired, USB-C, WiFi
  compatibility?: boolean; // Android, iPhone, Universal
  power?: boolean; // Wattage, battery capacity
  material?: boolean; // Leather, Silicone, Plastic

  price?: boolean;
};

export type SubCategoryConfig = {
  slug: string;
  title: string;
  item_subtype: string;
  filters: FilterFlags;
};

export const CATEGORY_CONFIG: Record<CategoryGroup, SubCategoryConfig[]> = {
  accessories: [
    {
      slug: "chargers",
      title: "Chargers",
      item_subtype: "charger",
      filters: {
        brands: true,
        power: true,
        connectivity: true,
        price: true,
      },
    },
    {
      slug: "cables",
      title: "Cables",
      item_subtype: "cable",
      filters: {
        brands: true,
        connectivity: true,
        price: true,
      },
    },
    {
      slug: "headphones",
      title: "Headphones & Earbuds",
      item_subtype: "headphone",
      filters: {
        brands: true,
        colors: true,
        connectivity: true,
        price: true,
      },
    },
    {
      slug: "speakers",
      title: "Speakers",
      item_subtype: "speaker",
      filters: {
        brands: true,
        connectivity: true,
        power: true,
        price: true,
      },
    },
    {
      slug: "phone-cases",
      title: "Phone Cases",
      item_subtype: "phone_case",
      filters: {
        brands: true,
        colors: true,
        material: true,
        compatibility: true,
        price: true,
      },
    },
    {
      slug: "screen-protectors",
      title: "Screen Protectors",
      item_subtype: "screen_protector",
      filters: {
        compatibility: true,
        material: true,
        price: true,
      },
    },
    {
      slug: "pouches",
      title: "Phone Pouches",
      item_subtype: "pouch",
      filters: {
        material: true,
        colors: true,
        price: true,
      },
    },
    {
      slug: "power-banks",
      title: "Power Banks",
      item_subtype: "power_bank",
      filters: {
        brands: true,
        power: true,
        price: true,
      },
    },
  ],

  smartphones: [
    {
      slug: "android",
      title: "Android Phones",
      item_subtype: "android_phone",
      filters: {
        brands: true,
        colors: true,
        storage: true,
        ram: true,
        condition: true,
        price: true,
      },
    },
    {
      slug: "iphone",
      title: "iPhones",
      item_subtype: "iphone",
      filters: {
        colors: true,
        storage: true,
        condition: true,
        price: true,
      },
    },
    {
      slug: "uk-used",
      title: "UK Used Phones",
      item_subtype: "uk_used_phone",
      filters: {
        brands: true,
        storage: true,
        ram: true,
        condition: true,
        price: true,
      },
    },
    {
      slug: "gaming-phones",
      title: "Gaming Phones",
      item_subtype: "gaming_phone",
      filters: {
        brands: true,
        ram: true,
        storage: true,
        price: true,
      },
    },
  ],

  computers: [
    {
      slug: "laptops",
      title: "Laptops",
      item_subtype: "laptop",
      filters: {
        brands: true,
        storage: true,
        ram: true,
        size: true,
        condition: true,
        price: true,
      },
    },
    {
      slug: "desktops",
      title: "Desktops",
      item_subtype: "desktop",
      filters: {
        brands: true,
        storage: true,
        ram: true,
        condition: true,
        price: true,
      },
    },
    {
      slug: "gaming-consoles",
      title: "Gaming Consoles",
      item_subtype: "gaming_console",
      filters: {
        brands: true,
        storage: true,
        condition: true,
        price: true,
      },
    },
    {
      slug: "monitors",
      title: "Monitors",
      item_subtype: "monitor",
      filters: {
        brands: true,
        size: true,
        price: true,
      },
    },
    {
      slug: "computer-accessories",
      title: "Computer Accessories",
      item_subtype: "computer_accessory",
      filters: {
        brands: true,
        price: true,
      },
    },
  ],
};
