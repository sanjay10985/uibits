"use client";

export function HeroSection() {
  return (
    <section className="py-12 md:py-20 text-center" role="region" aria-labelledby="hero-title">
      <div className="container mx-auto px-4">
        <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-serif">
          Discover the world's
          <br />
          best components
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Explore high-quality UI components from the most talented developers
          ready to use in your next project
        </p>

        {/* Search Bar - Commented out for now */}
        {/* <div className="max-w-2xl mx-auto relative mb-8">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full py-3 px-5 pr-20 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <div className="absolute right-0 top-0 h-full flex items-center">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full mx-1 text-sm flex items-center">
              Shots <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full mr-1">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div> */}

        {/* Trending Categories - Commented out for now */}
        {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
          <span className="text-gray-500 text-sm py-2">
            Trending searches:
          </span>
          {[
            "UI components",
            "design system",
            "dashboard templates",
            "authentication",
            "dark mode",
            "responsive",
            "animations",
          ].map((category) => (
            <Link
              key={category}
              href="#"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {category}
            </Link>
          ))}
        </div> */}
      </div>
    </section>
  );
}