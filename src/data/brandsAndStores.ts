export interface Brand {
  id: string;
  name: string;
  emiText: string;
  logoType: "airindia" | "apple" | "caratlane" | "cghearth" | "croma" | "titan";
  bg: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  distance: string;
  logoType: "suzuki" | "atelier" | "honda" | "charger" | "tripbouquet";
}

export const TOP_BRANDS: Brand[] = [
  {
    id: "brand-1",
    name: "Air India",
    emiText: "No-cost EMIs upto 18 months",
    logoType: "airindia",
    bg: "#E31E24",
  },
  {
    id: "brand-2",
    name: "Apple Premium Reseller",
    emiText: "No-cost EMIs upto 24 months",
    logoType: "apple",
    bg: "#000000",
  },
  {
    id: "brand-3",
    name: "CaratLane",
    emiText: "No-cost EMIs upto 6 months",
    logoType: "caratlane",
    bg: "#8A185B",
  },
  {
    id: "brand-4",
    name: "CGH Earth",
    emiText: "No-cost EMIs upto 12 months",
    logoType: "cghearth",
    bg: "#2E5339",
  },
  {
    id: "brand-5",
    name: "Croma",
    emiText: "No-cost EMIs upto 12 months",
    logoType: "croma",
    bg: "#00838F",
  },
  {
    id: "brand-6",
    name: "Titan",
    emiText: "No-cost EMIs upto 9 months",
    logoType: "titan",
    bg: "#1C2D42",
  },
];

export const NEARBY_STORES: Store[] = [
  {
    id: "store-1",
    name: "Pacholi Suzuki Railway Road",
    distance: "224 KM",
    address: "64/9, New Railway Rd, near DSD college, Subhash Nagar, Sector 8, Gurugram, Haryana, 122001",
    logoType: "suzuki",
  },
  {
    id: "store-2",
    name: "Atelier Forbidden Journeys",
    distance: "225 KM",
    address: "Sector 40, Gurugram, Haryana, 122001",
    logoType: "atelier",
  },
  {
    id: "store-3",
    name: "Pacholi Suzuki Rajiv Chowk",
    distance: "227 KM",
    address: "6/38, Rajiv Chowk, Sector 33, Rajiv Chowk, Gurugram, Haryana, 122001",
    logoType: "suzuki",
  },
  {
    id: "store-4",
    name: "Malwa Honda Khandsa Road",
    distance: "228 KM",
    address: "60, Khandsa Rd, Pace City I, Sector 10A, Gurugram, Haryana, 122001",
    logoType: "honda",
  },
  {
    id: "store-5",
    name: "Ashoka Suzuki",
    distance: "228 KM",
    address: "Khata No 271, 316, Badshahpur Sohna Rd, Gurugram, Haryana, 122001",
    logoType: "suzuki",
  },
  {
    id: "store-6",
    name: "Charger On Wheels",
    distance: "228 KM",
    address: "Orchid Business Park, Near Subhash Chowk, Gurugram, Haryana, 122101",
    logoType: "charger",
  },
  {
    id: "store-7",
    name: "TripBouquet",
    distance: "229 KM",
    address: "C/4, Tower B, Spaze I-Tech Park, Sector 49, Gurugram, Haryana, 122018",
    logoType: "tripbouquet",
  },
];
