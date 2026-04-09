import { TbArrowRight } from 'react-icons/tb';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
          🌱 100% Organic Superfoods
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6 font-serif leading-tight">
          Pure Foods,
          <br />
          <span className="text-green-700">Ancient Wisdom</span>
        </h1>
        <p className="text-stone-500 text-lg leading-relaxed mb-8 max-w-md">
          From Himalayan ghee to forest honey, Urbana brings you the cleanest
          superfoods, straight from the source. No middlemen, no compromises.
        </p>
        <div className="flex gap-3 flex-wrap">
          <button className="bg-green-700 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-green-800 transition-colors duration-200 flex items-center gap-2">
            Explore Products <TbArrowRight size={16} />
          </button>
          <button className="border border-stone-300 text-stone-600 px-7 py-3 rounded-full text-sm font-medium hover:border-green-600 hover:text-green-700 transition-colors duration-200">
            Our Story
          </button>
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative flex items-center justify-center">
        {/* Background circles */}
        <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-green-100 flex items-center justify-center">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-green-200/60 flex items-center justify-center">
            <span className="text-7xl md:text-8xl">☕️🍯</span>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute top-5 right-6 bg-white rounded-2xl shadow-md px-4 py-2.5 text-sm font-medium text-stone-700">
          🍯 Wild Forest Honey
        </div>
        <div className="absolute bottom-8 left-0 bg-white rounded-2xl shadow-md px-4 py-2.5 text-sm font-medium text-stone-700">
          ☕ Arabica Coffee
        </div>
      </div>
    </section>
  );
}
