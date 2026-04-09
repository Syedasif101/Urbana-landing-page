const footerColumns = [
  {
    title: 'Shop',
    items: ['Ghee', 'Cold Pressed Oils', 'Honey', 'Spices', 'Coffee'],
  },
  {
    title: 'Company',
    items: ['About Us', 'Our Story', 'Blog', 'Contact'],
  },
  {
    title: 'Help',
    items: ['Shipping Policy', 'Return Policy', 'FAQs', 'Track Order'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-14">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-white text-xl font-bold font-serif mb-3">
            <span className="text-green-400">Urba</span>na
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Pure organic superfoods, sourced directly from Indian farms.
          </p>
          <p className="text-xs text-stone-500">📞 +91 990600001s</p>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h5 className="text-white text-sm font-semibold mb-4">
              {col.title}
            </h5>
            <ul className="flex flex-col gap-2.5">
              {col.items.map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-white cursor-pointer transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 pt-8 mt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-xs text-stone-500">
          © 2025 Urbana Superfoods. All rights reserved.
        </p>
        <p className="text-xs text-stone-500">Made with 🌿 in India</p>
      </div>
    </footer>
  );
}
