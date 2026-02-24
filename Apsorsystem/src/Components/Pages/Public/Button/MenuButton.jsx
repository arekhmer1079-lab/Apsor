import { useRef } from "react";

export default function MenuButton({ tabs = [], active, onChange }) {
  const containerRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing py-2"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseLeave={stopDrag}
      onMouseUp={stopDrag}
    >
      <div className="flex gap-2 min-w-max whitespace-nowrap select-none">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              onClick={() => {
                if (!isDragging) onChange(t);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-purple-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}