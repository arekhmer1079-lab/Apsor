// src/Components/Pages/Public/Categories/Categories.jsx
import { useMemo, useState, useRef } from "react";
import Menubar from "../Button/MenuButton.jsx";          
import { ItemCard } from "../Card/ItemCard.jsx";   

export default function Categories() {
  const [activeTab, setActiveTab] = useState("Location");
  const [selectedCategory, setSelectedCategory] = useState("Electronics");
  const scrollerRef = useRef(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
const leftCategories = [
  "Electronics", 
  "Furniture", 
  "Vehicles", 
  "Real Estate",
  "Fashion", 
  "Sports", 
  "Books", 
  "Toys",
  "Accounting",
  "Financial Services",
  "Travel & Tourism",
  "Automotive",
  "Advertising & Media",
  "Bridal Services",
  "Cleaning & Maid Services",
  "Construction, Arch. & Interiors",
  "Education & Training",
  "Engineering",
  "Insurance",
  "Massage & Spa",
  "Health, Medical & Pharma",
  "IT & Telecom",
  "Interior Design & Renovation",
  "Legal",
  "Movers & Logistics",
  "Plumbing & Electrical",
  "Science",
  "Supply Chain & Logistics",
  "Printing & Publishing"
];
 const subCategories = {
  "Electronics": [
    "Laptops", "Phones", "Tablets", "PC Parts", "Accessories", "Repair Service"
  ],

  "Furniture": [
    "Tables", "Chairs", "Sofas", "Beds", "Cabinets", "Wardrobes"
  ],

  "Vehicles": [
    "Cars", "Motorcycles", "Bicycles", "Parts", "Repair", "Rental"
  ],

  "Real Estate": [
    "House for Sale", "House for Rent", "Land", "Commercial", "Real Estate Services"
  ],

  "Fashion": [
    "Men Clothing", "Women Clothing", "Shoes", "Bags", "Accessories"
  ],

  "Sports": [
    "Gym Equipment", "Football Gear", "Swimming Gear", "Outdoor Sport"
  ],

  "Books": [
    "Education", "Novels", "Comics", "Children Books"
  ],

  "Toys": [
    "Learning Toys", "Electric Toys", "Dolls", "Outdoor Toys"
  ],

  "Accounting": [
    "Bookkeeping",
    "Accounts payable / receivable",
    "Payroll services",
    "Tax filing & compliance",
    "Financial statements",
    "Budgeting & cashflow",
    "Audit support",
    "Company setup accounting",
    "Inventory accounting",
    "Cost accounting",
    "CFO advisory",
    "Forensic accounting"
  ],

  "Financial Services": [
    "Financial planning", "Budget coaching", "Loan support",
    "Credit consulting", "Investment advisory", "Money transfer",
    "POS onboarding", "Business finance"
  ],

  "Travel & Tourism": [
    "Tour packages", "Private driver", "Airport pickup",
    "Ticket booking", "Hotel booking", "Visa assistance",
    "Photography", "Adventure booking"
  ],

  "Automotive": [
    "Car wash", "Detailing", "Oil change", "Engine diagnostics",
    "Tire service", "Brake service", "AC service", "Electrical repair",
    "Vehicle inspection", "Motorbike services", "Rental"
  ],

  "Advertising & Media": [
    "Branding", "Graphic design", "Photography", "Videography",
    "Video editing", "Copywriting", "SEO", "Ads management"
  ],

  "Bridal Services": [
    "Makeup", "Hair styling", "Dress rental", "Wedding photography",
    "Wedding videography", "Wedding decoration", "Wedding planning"
  ],

  "Cleaning & Maid Services": [
    "Regular cleaning", "Deep cleaning", "Move-in cleaning",
    "Sofa cleaning", "Mattress cleaning", "Curtain cleaning",
    "Laundry", "Pest control"
  ],

  "Construction, Arch. & Interiors": [
    "Renovation", "Architecture design", "Painting",
    "Flooring", "Ceiling", "Carpentry", "Project management"
  ],

  "Education & Training": [
    "Tutoring", "Language courses", "Programming", "Graphic design",
    "Business training", "Soft skills"
  ],

  "Engineering": [
    "Civil Engineering", "MEP", "Electrical Design", "Mechanical Design",
    "Site Inspection", "Project Engineering"
  ],

  "Insurance": [
    "Life insurance", "Motor insurance", "Property insurance",
    "Health insurance", "Claims assistance"
  ],

  "Massage & Spa": [
    "Khmer massage", "Oil massage", "Foot massage",
    "Facial treatment", "Body scrub", "Sauna"
  ],

  "Health, Medical & Pharma": [
    "Clinic consult", "Lab tests", "Dental care", "Eye care",
    "Pharmacy delivery", "Home nursing"
  ],

  "IT & Telecom": [
    "Phone repair", "Laptop repair", "Software install",
    "Data recovery", "Network setup", "CCTV install",
    "Web development", "App development"
  ],

  "Interior Design & Renovation": [
    "Interior design", "3D render", "Furniture selection",
    "Kitchen design", "Curtains", "Lighting"
  ],

  "Legal": [
    "Contract drafting", "Notary support", "Trademark",
    "Visa & work permit", "Legal consulting"
  ],

  "Movers & Logistics": [
    "Home moving", "Office moving", "Packing", "Delivery",
    "Truck rental", "Storage"
  ],

  "Plumbing & Electrical": [
    "Leak repair", "Drain unclog", "Water heater install",
    "Light install", "Socket repair", "Rewiring"
  ],

  "Science": [
    "Water testing", "Soil testing", "Food testing",
    "Environmental testing", "Lab services"
  ],

  "Supply Chain & Logistics": [
    "Warehousing", "Inventory Mgmt", "Order fulfillment",
    "Freight forwarding", "Customs clearance"
  ],

  "Printing & Publishing": [
    "Business cards", "Flyers", "Posters", "Banners",
    "Stickers", "Packaging printing"
  ]
};

  



  const items = useMemo(
    () => [
      {
        image: "https://www.apple.com/newsroom/images/2023/10/apple-unveils-new-macbook-pro-featuring-m3-chips/tile/Apple-MacBook-Pro-2up-231030.jpg.landing-big_2x.jpg",
        price: "$1,299",
        title: 'MacBook Pro 14" - M3 Chip',
        location: "Battambang",
        descripion: "Apple M3 Chip",
        status: "available",
        category: "Electronics",
        subCategories: "Laptops"
       
        
      },
      {
        image: "https://www.advancedtech.com/wp-content/uploads/2024/08/Industrial-Repair-Services_1920x900.jpg",
        price: "$2,499",
        title: "Repair Service for Electronics",
        location: "Battambang romcheck3 rothanak",
        descripion: "45MP Full‑Frame",
        status: "available",
        category: "Electronics",
        subCategories: "Repair Service"
        
      },
      {
        image: "https://static.fibre2fashion.com//articleresources/images/71/7074/SAdobeStock_247321133_Small.jpg",
        price: "$1.50",
        title: "Accessories ",
        location: "Battambang",
        descripion: "hong kong toy",
        status: "unavailable",
        category: "Electronics",
        subCategories: "Accessories"
        
      },
    ],
    []
  );
   const filtered = items.filter((it) => {
  if (it.category !== selectedCategory) return false;

  if (selectedSubCategory) {
    return it.subCategories && it.subCategories.includes(selectedSubCategory);
  }

  return true;
});



  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {/* LEFT: Category list */}
        <aside className="col-span-12 md:col-span-3">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-gray-800 mb-3">CATEGORY</h3>
            <div className="max-h-72 overflow-y-auto pr-1 no-scrollbar">
               <ul className="space-y-1">
               {leftCategories.map((c) => {
                const active = c === selectedCategory;
                  return (
                    <li key={c}>
                     <button
                       type="button"
                       onClick={() => setSelectedCategory(c)}
                       className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${
                         active
                           ? "bg-purple-50 text-purple-700"
                           : "text-gray-700 hover:bg-gray-50"
                       }`}
                     >
                       {c}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
           </div>
        </aside>

        {/* RIGHT: Menubar + Cards */}
        {/* RIGHT: Menubar + Cards */}
          <div className="col-span-12 md:col-span-9">
      
        {/* SCROLL WRAPPER FIX */}
            <div className="w-full overflow-x-auto no-scrollbar">
            
               <Menubar
                 tabs={subCategories[selectedCategory] || []}
                 active={selectedSubCategory}
                 onChange={setSelectedSubCategory}
               />
                 
          </div>
              
          {/* Mobile: touch scroll horizontally */}
              <div
                ref={scrollerRef}
                className="md:hidden mt-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
                style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
              >
                {filtered.map((item, idx) => (
                  <div key={idx} className="snap-start shrink-0 w-72">
                    <ItemCard {...item} />
                  </div>
                ))}
              </div>
     
              {/* Desktop: grid 3 cols */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 mt-6">
                {filtered.map((item, idx) => (
                  <ItemCard key={idx} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>
  );
}