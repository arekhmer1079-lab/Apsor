import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Categories from "./Categories/Categories.jsx";



export default function Homepage() {
  const sliderRef = useRef(null);

  // Auto Slide on Page Load
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let auto = setInterval(() => {
      slider.scrollBy({ left: 300, behavior: "smooth" });

      // Reset when at the end
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        setTimeout(() => {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        }, 400);
      }
    }, 2500); // auto slide every 2.5s

    return () => clearInterval(auto);
  }, []);

  // Your full category list
  const categories = [
  {
    title: "Accounting",
    img: "https://cdn.corporatefinanceinstitute.com/assets/accounting-1024x683.jpeg"
  },
  {
    title: "Financial Services",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
  },
  {
    title: "Travel & Tourism",
    img: "https://isomaldives.ascentworld.com/wp-content/uploads/2021/08/Travel-and-Tourism-in-Maldives.jpg"
  },
  {
    title: "Automotive",
    img: "https://media.graphassets.com/resize=fit:crop,width:1200,height:630/RKPBUFBRQ4z8LSKSLgKw"
  },
  {
    title: "Advertising & Media",
    img: "https://www.utep.edu/extendeduniversity/utepconnect/blog/december-2018/7-practical-media-advertising-courses.jpg"
  },
  {
    title: "Bridal Services",
    img: "https://sevakam-media.s3-ap-southeast-1.amazonaws.com/products/0802202110000595815663.jpg"
  },
  {
    title: "Cleaning & Maid Services",
    img: "https://www.naqashservices.com/wp-content/uploads/2024/09/maidservice.jpg"
  },
  {
    title: "Construction, Arch. & Interiors",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
  },
  {
    title: "Education & Training",
    img: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66"
  },
  {
    title: "Engineering",
    img: "https://www.sunconengineers.com/wp-content/uploads/2022/10/Construction-Project-Management-Companies-900x400.jpg"
  },
  {
    title: "Insurance",
    img: "https://www.flexi.com/wp-content/uploads/2025/04/compliant-insurance-accounting-software-1.jpg"
  },
  {
    title: "Massage & Spa",
    img: "https://content.jdmagicbox.com/v2/comp/delhi/b7/011pxx11.xx11.240429155057.w8b7/catalogue/6j9ia55vnvp1dq6-vmwrwgj7tl-250.jpg"
  },
  {
    title: "Hospitality, Travel & Tourism",
    img: "https://cdn.prod.website-files.com/6407f39855b65290f8089bbe/65f79439ab77ff98f4fc27f3_travel.jpg"
  },
  {
    title: "Health, Medical & Pharma",
    img: "https://palmsmg.org/wp-content/uploads/pharma-1-1200x800.png"
  },
  {
    title: "IT & Telecom",
    img: "https://enggpost.com/wp-content/uploads/2022/03/Information-Technology-IT-laptop-iphone-tablet-world-dollar-yen-euro-pound-suit-airplane-e1667283744285.jpg"
  },
  {
    title: "Interior Design & Renovation",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
  },
  {
    title: "Legal",
    img: "https://media.gettyimages.com/id/2215588621/photo/concept-of-justice-law-and-legal-system.jpg?b=1&s=2048x2048&w=0&k=20&c=VRwIrvAnzEzsXziBXASABIYC0e1Hc0esfu4yGXw4tJU="
  },
  {
    title: "Movers & Logistics",
    img: "https://cdn.prod.website-files.com/637d6390b70424b49c14ff1e/663eacb9bb687c1a1702920a_logistics-service-HERO.webp"
  },
  {
    title: "Plumbing & Electrical",
    img: "https://budlong.com/wp-content/uploads/2025/04/The-Role-of-a-Plumbing-Engineer-in-MEP-Systems-1.webp"
  },
  {
    title: "Property & Real Estate",
    img: "https://images.unsplash.com/photo-1627141234469-24711efb373c"
  },
  {
    title: "Science",
    img: "https://biologytuitionsg.com/wp-content/uploads/sites/446/2025/08/test-tubes-with-liquid-1024x683.jpg"
  },
  {
    title: "Supply Chain & Logistics",
    img: "https://www.vamenture.com/_next/image?url=https%3A%2F%2Fvamenture.s3.ap-southeast-2.amazonaws.com%2Fother-images%2F1741541193757_SupplyChainManagement.jpg&w=3840&q=75"
  },
  {
    title: "Printing & Publishing",
    img: "https://www.cssla.com/wp-content/uploads/2025/01/printer-installation-services-1000x1000-1.webp"
  },
];

  // Random images for categories

  const getRandomImage = () =>
    images[Math.floor(Math.random() * images.length)] + "?w=800&auto=format";

  return (
    <div className="min-h-screen bg-white pt-6">

      {/* Banner */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full h-56 md:h-64 rounded-3xl overflow-hidden shadow-md">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7wdjXSUOrKiLyx3wgSRZy4kT1GKgknvH-g&s"
            className="w-full h-full object-cover"
            alt="Banner"
          />
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">
            Featured Categories
          </h2>


        </div>

        {/* Slider */}
        <div className="relative">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-12  to-transparent z-10 pointer-events-none"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-12  to-transparent z-10 pointer-events-none"></div>

          <div
                ref={sliderRef}
               className="flex gap-4 overflow-x-auto scroll-auto pb-4 no-scrollbar"
          >

          
          
          
			{categories.map((cat, i) => (
  <div
    key={i}
    className="shrink-0 w-44 md:w-52 lg:w-56 h-32 rounded-xl overflow-hidden relative group cursor-pointer hover:scale-[1.02] transition-transform duration-300 shadow-md"
  >
    <img
      src={cat.img}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
      alt={cat.title}
    />

    <div className="absolute inset-0 bg-linear-to-t from-purple-200/70 via-transparent to-transparent"></div>

    <div className="absolute bottom-0 left-0 right-0 p-3">
      <span className="text-white font-semibold text-lg">{cat.title}</span>
      <p className="text-white/80 text-xs mt-1">Apsor</p>
    </div>
  </div>

  
))}
           
           
           

            
          </div>

        </div>
      </div>
      <div className="min-h-screen bg-white">
        <Categories />
      </div>
      
   
      </div>
      



  );
}