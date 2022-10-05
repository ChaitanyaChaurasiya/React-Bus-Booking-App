import bus1 from "../../assets/bus-1.jpg";
import bus2 from "../../assets/bus-2.jpg";
import bus3 from "../../assets/bus-3.jpg";
import safety from "../../assets/safety.png";
import customer from "../../assets/customer.png";
import price from "../../assets/prices.png";
import pay from "../../assets/pay.png";
import benefits from "../../assets/benefits.png";

export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "contact",
    path: "/contact",
  },
];
export const services = [
  {
    cover: safety,
    name: "SAFETY +",
    description:
      "Sanitized buses, mandatory masks etc. to ensure you travel safely.",
  },
  {
    cover: customer,
    name: "SUPERIOR CUSTOMER SERVICE",
    description: "24*7 available to solve your travel issues.",
  },
  {
    cover: price,
    name: "LOWEST PRICE",
    description: "Lowest price with the best partner offers. ",
  },
  {
    cover: pay,
    name: "RICH PAYMENT TYPES",
    description:
      "Pay the amount using net banking, UPIs, Credit/Debit cards etc.",
  },
  {
    cover: benefits,
    name: "UNMATCHED BENEFITS",
    description:
      "Take care of your travel by providing innovative and unique benefits.",
  },
];
export const list = [
  {
    id: 1,
    cover: bus1,
    name: "COMPERETER DELUX BUS",
    location: "MUMBAI TO DELHI",
    category: "Double Delux",
    price: "₹544",
    type: "Sleeper AC",
  },
  {
    id: 2,
    cover: bus2,
    name: "MARCEROS LUXERY BUS",
    location: "BANGLORE TO PUNA",
    category: "Double Luxery",
    price: "₹677",
    type: "Sleeper AC",
  },
  {
    id: 3,
    cover: bus3,
    name: "SPECIAL TRIP TOUR BUS",
    location: "JAMMU TO DEHRADUN",
    category: "Tour Trip",
    price: "₹1500",
    type: "AC",
  },
];

export const busData = [
  {
    busId: "101",
    busName: "Jay Sharee Ambe Travelers",
    busType: "Sleeper (Non-AC / 2T)",
    busTimeD: "6:00 AM",
    busTimeA: "3:00 PM",
    busDiff: "9 hrs",
    busAvail: "35 Available",
    busWind: "15 Windows",
    busPrice: 333,
  },
  {
    busId: "102",
    busName: "Akshay Delux K2T Travelers",
    busType: "Sleeper (Non-AC / 2T)",
    busTimeD: "10:00 AM",
    busTimeA: "7:20 PM",
    busDiff: "9.20 hrs",
    busAvail: "40 Available",
    busWind: "22 Windows",
    busPrice: 346,
  },
  {
    busId: "103",
    busName: "NeelKanth Babaji Travelers",
    busType: "Sleeper (Non-AC / 2T)",
    busTimeD: "11:00 AM",
    busTimeA: "8:30 PM",
    busDiff: "9.30 hrs",
    busAvail: "29 Available",
    busWind: "08 Windows",
    busPrice: 370,
  },
  {
    busId: "104",
    busName: "Jay Meher Asha Travelers",
    busType: "Sleeper (AC / 2T)",
    busTimeD: "4:00 PM",
    busTimeA: "1:00 AM",
    busDiff: "9 hrs",
    busAvail: "30 Available",
    busWind: "10 Windows",
    busPrice: 600,
  },
  {
    busId: "105",
    busName: "Pavan Hans Raj Travelers",
    busType: "Sleeper (AC / 2T)",
    busTimeD: "9:00 PM",
    busTimeA: "5:30 AM",
    busDiff: "8.30 hrs",
    busAvail: "33 Available",
    busWind: "19 Windows",
    busPrice: 746,
  },
];

export const footer = [
  {
    title: "ABOUT BUSBOOKING",
    text: [
      { list: "About Us" },
      { list: "Contact Us" },
      { list: "BusBooking on Mobile" },
      { list: "Offers" },
      { list: "Sitemap" },
      { list: "Counteries" },
    ],
  },
  {
    title: "ALL BUSES",
    text: [
      { list: "Daily Buses" },
      { list: "Delux" },
      { list: "Luxery" },
      { list: "AC/Non-AC" },
      { list: "Hot Deals" },
      { list: "New Routes" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "T & C" },
      { list: "Privacy Policy" },
      { list: "FAQ" },
      { list: "Blog" },
      { list: "Our Parteners" },
      { list: "Agreements" },
    ],
  },
];
