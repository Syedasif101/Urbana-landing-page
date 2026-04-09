import { TbLeaf, TbDroplet, TbFlame, TbStar } from 'react-icons/tb';

const reasons = [
  {
    icon: <TbLeaf size={22} />,
    title: 'Farm to Doorstep',
    desc: 'Direct sourcing from trusted farms across India.',
  },
  {
    icon: <TbDroplet size={22} />,
    title: 'Cold Pressed & Raw',
    desc: 'Minimal processing to retain every nutrient.',
  },
  {
    icon: <TbFlame size={22} />,
    title: 'Traditional Methods',
    desc: 'Bilona churning, wood-pressed oils, wild honey.',
  },
  {
    icon: <TbStar size={22} />,
    title: 'Lab Tested',
    desc: 'Every batch tested for purity before dispatch.',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-stone-100 py-20 text-center ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <span className="text-green-700 text-xl font-semibold tracking-widest uppercase">
            Why Urbana
          </span>
          <h2 className="text-4xl font-bold text-stone-900 mt-2 mb-4 font-serif text-center">
            The Difference Is
            <br />
            In the Details
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-8 text-center">
            We don't just source organic food — we preserve ancient food
            traditions, support Indian farmers, and deliver purity you can
            taste.
          </p>
          <button className="border border-stone-300 text-stone-700 px-6 py-2.5 rounded-full text-sm hover:border-green-700 hover:text-green-700 transition-colors duration-200">
            Read Our Story
          </button>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-4">
          {reasons.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-5">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="font-semibold text-stone-900 text-sm mb-1">
                {item.title}
              </h4>
              <p className="text-stone-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
