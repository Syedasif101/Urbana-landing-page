import { TbArrowRight } from 'react-icons/tb';

const products = [
  {
    name: 'A2 Bilona Cow Ghee',
    tag: 'Bestseller',
    price: '₹675',
    weight: '440g',
    desc: 'Hand-churned from grass-fed Himalayan cows. Rich in vitamins A, D, E & K.',
    bg: 'bg-green-50',
    accent: 'bg-amber-500',
    emoji: '🧈',
  },
  {
    name: 'Cold Pressed Coconut Oil',
    tag: 'Pure & Raw',
    price: '₹350',
    weight: '500ml',
    desc: 'Single-origin, cold-pressed to preserve natural enzymes and nutrients.',
    bg: 'bg-green-50',
    accent: 'bg-green-500',
    emoji: '🥥',
  },
  {
    name: 'Wild Forest Honey',
    tag: 'Raw & Unfiltered',
    price: '₹480',
    weight: '400g',
    desc: 'Harvested directly from wild beehives. Unpasteurised, no additives.',
    bg: 'bg-green-50',
    accent: 'bg-yellow-500',
    emoji: '🍯',
  },
  {
    name: 'Pahadi Turmeric Powder',
    tag: 'High Curcumin',
    price: '₹265',
    weight: '160g',
    desc: 'Naturally grown in Himalayan foothills. Deep colour, intense flavour.',
    bg: 'bg-green-50',
    accent: 'bg-orange-500',
    emoji: '🌿',
  },
  {
    name: 'Arabica Coffee Beans',
    tag: 'Medium Roast',
    price: '₹450',
    weight: '250g',
    desc: '100% Arabica, medium roasted for a balanced, smooth cup every morning.',
    bg: 'bg-green-50',
    accent: 'bg-stone-500',
    emoji: '☕',
  },
];

export default function Products() {
  return (
    <section id="shop" className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-green-700 text-2xl font-semibold tracking-widest uppercase">
          Our Range
        </span>
        <h2 className="text-4xl font-bold text-stone-900 mt-2 font-serif">
          Handpicked Superfoods
        </h2>
        <p className="text-stone-500 mt-3 max-w-md mx-auto text-sm leading-relaxed">
          Every product is traceable, tested, and free from preservatives or
          artificial additives.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className={`${product.bg} rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer group`}
          >
            {/* Top row */}
            <div className="flex items-start justify-between">
              <span className="text-8xl">{product.emoji}</span>
              <span
                className={`${product.accent} text-white text-xs font-medium px-3 py-1 rounded-full`}
              >
                {product.tag}
              </span>
            </div>

            {/* Info */}
            <div>
              <h3 className="text-lg font-semibold text-stone-900 leading-snug font-serif">
                {product.name}
              </h3>
              <p className="text-stone-500 text-sm mt-1 leading-relaxed">
                {product.desc}
              </p>
            </div>

            {/* Product Price */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/5">
              <div>
                <span className="text-xl font-bold text-stone-900 font-serif">
                  {product.price}
                </span>
                <span className="text-stone-400 text-xs ml-1">
                  / {product.weight}
                </span>
              </div>
              <button className="bg-stone-900 text-white text-xs px-4 py-2 rounded-full group-hover:bg-green-700 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}

        {/* View All Card */}
        <div className="bg-green-600 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-green-800 transition-colors duration-200 text-white text-center">
          <span className="text-4xl">🌿</span>
          <p className="text-xl font-semibold font-serif">View All Products</p>
          <p className="text-green-200 text-sm">
            20+ organic superfoods available
          </p>
          <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
            <TbArrowRight size={18} />
          </div>
        </div>
      </div>
    </section>
  );
}
