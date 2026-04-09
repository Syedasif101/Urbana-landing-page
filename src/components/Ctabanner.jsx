export default function CTABanner() {
  return (
    <section className="bg-[#faf8f3] border-y border-stone-200 py-16">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-stone-900 mb-3 font-serif">
          Start Eating Better Today
        </h2>
        <p className="text-stone-500 text-sm mb-6">
          Use code <strong className="text-green-700">SUPERNEW</strong> for 10%
          off your first order. Free shipping included.
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-green-800 transition-colors duration-200">
          Shop All Products
        </button>
      </div>
    </section>
  );
}
