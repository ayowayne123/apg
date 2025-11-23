export const FILTER_FIELDS = {
  listings: [
    {
      key: "type",
      label: "Property Type",
      options: ["Apartment", "Duplex", "Bungalow", "Studio"],
    },
    { key: "bedrooms", label: "Bedrooms", options: ["1", "2", "3", "4+"] },
    {
      key: "price_min",
      label: "Min Price",
      options: ["₦100k", "₦500k", "₦1M+"],
    },
  ],
  rentals: [
    {
      key: "type",
      label: "Property Type",
      options: ["Apartment", "Duplex", "Studio"],
    },
    { key: "bedrooms", label: "Bedrooms", options: ["1", "2", "3", "4+"] },
    {
      key: "price_min",
      label: "Min Price",
      options: ["₦100k", "₦500k", "₦1M+"],
    },
    { key: "price_max", label: "Max Price", options: ["₦500k", "₦1M", "₦5M+"] },
    {
      key: "furnishing",
      label: "Furnishing",
      options: ["Furnished", "Semi-furnished", "Unfurnished"],
    },
  ],
  sales: [
    {
      key: "type",
      label: "Property Type",
      options: ["Duplex", "Bungalow", "Apartment", "Land"],
    },
    { key: "bedrooms", label: "Bedrooms", options: ["1", "2", "3", "4+"] },
    {
      key: "price_min",
      label: "Min Price",
      options: ["₦10M", "₦50M", "₦100M+"],
    },
    {
      key: "price_max",
      label: "Max Price",
      options: ["₦50M", "₦100M", "₦500M+"],
    },
  ],
  shortlets: [
    {
      key: "type",
      label: "Property Type",
      options: ["Studio", "Apartment", "Duplex", "Mini-flat"],
    },
    {
      key: "price_min",
      label: "Min/Night",
      options: ["₦20k", "₦50k", "₦100k+"],
    },
    {
      key: "price_max",
      label: "Max/Night",
      options: ["₦50k", "₦100k", "₦300k+"],
    },
    { key: "bedrooms", label: "Bedrooms", options: ["1", "2", "3", "4+"] },
  ],
};
