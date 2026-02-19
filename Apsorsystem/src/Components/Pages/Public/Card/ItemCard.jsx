// src/Components/Pages/Public/Card/ItemCard.jsx
import { useState } from "react";
import { MapPin } from "lucide-react";

function Card({ className = "", children, ...props }) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white ${className}`} {...props}>
      {children}
    </div>
  );
}
function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
function Badge({ className = "", children, ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

export function ItemCard({
  image,
  price,
  title,
  location,
  descripion, // spelling ដដែលតាម code អ្នក
  status,     // 'available' | 'unavailable'
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const desc = typeof descripion === "string" ? descripion : "";

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <Badge
          className={`absolute top-3 right-3 ${
            status === "available" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {status === "available" ? "Available" : "Unavailable"}
        </Badge>
      </div>

      <CardContent>
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>

        <div className="flex items-center gap-1 text-gray-600 text-sm mb-3">
          <MapPin className="size-4" />
          <span>{location}</span>
        </div>

        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-700"></p>
          <div className={`text-gray-600 ${isExpanded ? "" : "line-clamp-2"}`}>{desc}</div>

          <div className="flex items-center justify-between mt-1">
            {desc.length > 100 && (
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 text-sm hover:underline"
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            )}
            <button type="button" className="text-blue-600 text-sm font-medium hover:text-blue-800">
              View Details
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}