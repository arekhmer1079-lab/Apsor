// src/Components/Pages/Public/Categories/Categories.jsx
import { useMemo, useState, useRef } from "react";
import Menubar from "../Button/MenuButton.jsx";          
import { ItemCard } from "../Card/ItemCard.jsx";   

export default function Categories() {
  const [activeTab, setActiveTab] = useState("Location");
  const [selectedCategory, setSelectedCategory] = useState("Electronics");
  const scrollerRef = useRef(null);
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
    "Personal financial planning",
    "Budget coaching",
    "Loan support",
    "Credit consultation",
    "Investment advisory",
    "Insurance brokerage",
    "Money transfer",
    "POS onboarding",
    "Wealth planning",
    "Business finance",
    "Valuation / due diligence"
  ],

  "Travel & Tourism": [
    "Tour packages",
    "Private driver",
    "Airport pickup",
    "Ticket booking",
    "Hotel booking",
    "Itinerary planning",
    "Tour guide",
    "Visa assistance",
    "Travel photography",
    "Adventure booking",
    "Group tours"
  ],

  "Automotive": [
    "Car wash",
    "Car detailing",
    "Oil & filter",
    "Engine diagnostics",
    "Battery replace",
    "Tire service",
    "Brake service",
    "AC service",
    "Suspension repair",
    "Electrical repair",
    "Body repair",
    "Glass repair",
    "Vehicle inspection",
    "Motorbike services",
    "Vehicle rental"
  ],

  
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
      },
      {
        image: "https://www.sunconengineers.com/wp-content/uploads/2022/10/Construction-Project-Management-Companies-900x400.jpg",
        price: "$2,499",
        title: "Engineering",
        location: "Battambang romcheck3 rothanak",
        descripion: "45MP Full‑Frame",
        status: "available",
        category: "Electronics",
      },
      {
        image: "https://www.safes.so/wp-content/uploads/2023/02/how-many-toys-should-a-child-have-1024x512.webp",
        price: "$1.50",
        title: "Toy for children",
        location: "Battambang",
        descripion: "hong kong toy",
        status: "unavailable",
        category: "Toys",
      },
    ],
    []
  );

     const filtered = items.filter((it) => it.category === selectedCategory);

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
        <div className="col-span-12 md:col-span-9">
          
                <Menubar
        tabs={
          subCategories[selectedCategory] && subCategories[selectedCategory].length > 0
            ? subCategories[selectedCategory]
            : ["Bookkeeping", "Account Payable", "Account Receivable", "Payroll Services", "Tax Filing", "Financial Statements", "Budgeting", "Audit Support", "Company Setup", "Inventory Accounting", "Cost Accounting", "CFO Advisory", "Forensic Accounting"]
        }
        active={activeTab}
        onChange={setActiveTab}
      />
          
          
          
          
          

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