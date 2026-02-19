import { Search } from 'lucide-react'

export default function Searchbar() {
	
  return (
	<div className="flex-1 max-w-sm">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
        <input
          type="search"
          placeholder="Search for products, services..."
          className="pl-10 pr-4 w-full h-9 rounded-lg bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all text-sm"
        />
      </div>
	</div>
  )
}

