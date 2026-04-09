export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Quote Card */}
      <div className="bg-green-700 rounded-3xl p-10 flex flex-col items-center justify-center text-white text-center gap-4 min-h-72">
        <span className="text-6xl">🌾</span>
        <p className="text-2xl font-semibold leading-snug font-serif">
          "Real food doesn't have ingredients.
          <br />
          Real food is ingredients."
        </p>
        <p className="text-green-200 text-sm">— Urbana Superfoods</p>
      </div>

      {/* Story */}
      <div>
        <span className="text-green-700 text-xs font-semibold tracking-widest uppercase">
          About Us
        </span>
        <h2 className="text-4xl font-bold text-stone-900 mt-2 mb-4 font-serif">
          Food the Way
          <br />
          Nature Intended
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed mb-4">
          Urbana Superfoods was founded with a simple belief — that food should
          nourish, not harm. We work directly with small-scale Indian farmers
          and artisans to bring you products made the traditional way:
          bilona-churned ghee, wood-pressed oils, and raw unfiltered honey.
        </p>
        <p className="text-stone-500 text-sm leading-relaxed mb-8">
          Every product is free of preservatives, artificial colours, and
          additives. Just pure food, as it has been for generations.
        </p>

        {/* Mini Stats */}
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-green-700 font-serif">2019</p>
            <p className="text-stone-400 text-xs">Founded</p>
          </div>
          <div className="w-px h-10 bg-stone-200" />
          <div className="text-center">
            <p className="text-2xl font-bold text-green-700 font-serif">
              India
            </p>
            <p className="text-stone-400 text-xs">Pan-India Delivery</p>
          </div>
          <div className="w-px h-10 bg-stone-200" />
          <div className="text-center">
            <p className="text-2xl font-bold text-green-700 font-serif">20+</p>
            <p className="text-stone-400 text-xs">Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}
