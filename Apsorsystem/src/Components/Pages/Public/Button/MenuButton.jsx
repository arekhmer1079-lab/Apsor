// src/Components/Pages/Public/Categories/Menubar.jsx
export default function MenuButton({
  tabs = ["Location", "Service", "Career"],
  active,
  onChange,
}) {
  return (
    <div
      className="w-full overflow-x-auto no-scrollbar"
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="inline-flex gap-2 bg-gray-100 p-1 rounded-xl min-w-max">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              type="button"
              onClick={() => onChange?.(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-white text-purple-600 shadow"
                  : "text-gray-700 hover:bg-white"
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
